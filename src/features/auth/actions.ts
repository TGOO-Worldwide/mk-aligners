"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { encode } from "next-auth/jwt";
import {
  generateOTP,
  hashOTP,
  createOTPRecord,
  sendOTPEmail,
  validateOTPRecord,
  OtpRateLimitError,
} from "@/features/auth/otp";
import { sessionCookieName, useSecureAuthCookies } from "@/features/auth/cookies";
import { getPrisma, isDatabaseConfigured } from "@/lib/prisma";

const emailSchema = z.email();
const otpSchema = z.string().regex(/^\d{6}$/);
const SESSION_MAX_AGE = 30 * 24 * 60 * 60;

export async function requestOtpAction(formData: FormData) {
  const emailInput = String(formData.get("email") ?? "").trim().toLowerCase();
  const parsed = emailSchema.safeParse(emailInput);

  if (!parsed.success) {
    redirect("/iniciar-sessao?erro=email-invalido");
  }

  if (!isDatabaseConfigured()) {
    redirect("/iniciar-sessao?erro=config");
  }

  try {
    const code = generateOTP();
    const hash = await hashOTP(code);
    await createOTPRecord(parsed.data, hash);
    await sendOTPEmail(parsed.data, code);
  } catch (error) {
    if (error instanceof OtpRateLimitError) {
      redirect(`/iniciar-sessao?erro=limite-otp&email=${encodeURIComponent(parsed.data)}`);
    }
    redirect(`/iniciar-sessao?erro=envio&email=${encodeURIComponent(parsed.data)}`);
  }

  redirect(`/verificar-codigo?email=${encodeURIComponent(parsed.data)}`);
}

export async function verifyOtpAction(email: string, code: string) {
  const parsedEmail = emailSchema.safeParse(email.trim().toLowerCase());
  const parsedCode = otpSchema.safeParse(code.trim());

  if (!parsedEmail.success || !parsedCode.success) {
    return { ok: false as const, error: "Código inválido ou expirado." };
  }

  const secret = process.env.NEXTAUTH_SECRET;
  if (!secret) {
    return { ok: false as const, error: "Sessão não configurada no servidor." };
  }

  if (!isDatabaseConfigured()) {
    return { ok: false as const, error: "Base de dados não configurada." };
  }

  const isValid = await validateOTPRecord(parsedEmail.data, parsedCode.data);
  if (!isValid) {
    return { ok: false as const, error: "Código inválido ou expirado." };
  }

  const prisma = getPrisma();
  let user = await prisma.user.findUnique({ where: { email: parsedEmail.data } });
  if (!user) {
    user = await prisma.user.create({
      data: { email: parsedEmail.data, role: "clinic" },
    });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  const sessionToken = await encode({
    token: {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    secret,
    maxAge: SESSION_MAX_AGE,
  });

  const store = await cookies();
  store.set(sessionCookieName(), sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: useSecureAuthCookies(),
    maxAge: SESSION_MAX_AGE,
  });

  return { ok: true as const };
}
