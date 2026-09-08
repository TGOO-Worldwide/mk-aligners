import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getPrisma, isDatabaseConfigured } from "@/lib/prisma";
import { validateOTPRecord } from "@/features/auth/otp";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/iniciar-sessao",
  },
  providers: [
    CredentialsProvider({
      id: "otp",
      name: "OTP",
      credentials: {
        email: { label: "Email", type: "email" },
        code: { label: "Código", type: "text" },
      },
      async authorize(credentials) {
        if (!isDatabaseConfigured()) return null;

        const email = credentials?.email?.trim().toLowerCase();
        const code = credentials?.code?.trim();
        if (!email || !code) return null;

        const isValid = await validateOTPRecord(email, code);
        if (!isValid) return null;

        const prisma = getPrisma();
        let user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          user = await prisma.user.create({
            data: { email, role: "clinic" },
          });
        }

        if (!user.isActive) return null;

        await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        });

        return {
          id: String(user.id),
          email: user.email,
          name: user.name ?? undefined,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.userId = Number(user.id);
      }

      if (token.userId && isDatabaseConfigured()) {
        const dbUser = await getPrisma().user.findUnique({
          where: { id: Number(token.userId) },
          select: { role: true, name: true, email: true },
        });
        token.role = dbUser?.role;
        token.name = dbUser?.name;
        token.email = dbUser?.email;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = String(token.userId ?? "");
      session.user.role = typeof token.role === "string" ? token.role : undefined;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
