import bcrypt from "bcryptjs";
import { getPrisma } from "@/lib/prisma";
import { getResendClient, getResendFrom, isResendConfigured } from "@/lib/resend";
import { getOtpEmailTemplate } from "@/features/auth/email-templates";

const OTP_EXP_MINUTES = 10;
const OTP_MAX_ATTEMPTS = 3;
const OTP_MAX_REQUESTS_PER_HOUR = process.env.NODE_ENV === "production" ? 5 : 50;

export class OtpRateLimitError extends Error {
  constructor() {
    super("Atingiu o limite de pedidos de código por hora.");
    this.name = "OtpRateLimitError";
  }
}

export function generateOTP(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function hashOTP(code: string): Promise<string> {
  return bcrypt.hash(code, 10);
}

export async function verifyOTP(code: string, hash: string): Promise<boolean> {
  return bcrypt.compare(code, hash);
}

export async function sendOTPEmail(email: string, code: string): Promise<void> {
  if (!isResendConfigured()) {
    throw new Error("Resend não configurado.");
  }

  const resend = getResendClient();
  const { error } = await resend.emails.send({
    from: getResendFrom(),
    to: email,
    subject: "Código de acesso — Máquina de Vendas",
    html: getOtpEmailTemplate(code),
  });

  if (error) {
    throw new Error(error.message || "Falha ao enviar o email OTP.");
  }
}

export async function createOTPRecord(email: string, codeHash: string): Promise<void> {
  const prisma = getPrisma();
  const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const requestsLastHour = await prisma.otpCode.count({
    where: { email, createdAt: { gte: hourAgo } },
  });

  if (requestsLastHour >= OTP_MAX_REQUESTS_PER_HOUR) {
    throw new OtpRateLimitError();
  }

  await prisma.otpCode.create({
    data: {
      email,
      codeHash,
      expiresAt: new Date(Date.now() + OTP_EXP_MINUTES * 60 * 1000),
      attempts: 0,
    },
  });
}

export async function validateOTPRecord(email: string, code: string): Promise<boolean> {
  const prisma = getPrisma();
  const record = await prisma.otpCode.findFirst({
    where: {
      email,
      usedAt: null,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  });

  if (!record || record.attempts >= OTP_MAX_ATTEMPTS) {
    return false;
  }

  const isValid = await verifyOTP(code, record.codeHash);

  if (isValid) {
    await prisma.otpCode.update({
      where: { id: record.id },
      data: { usedAt: new Date() },
    });
    return true;
  }

  await prisma.otpCode.update({
    where: { id: record.id },
    data: { attempts: { increment: 1 } },
  });

  return false;
}
