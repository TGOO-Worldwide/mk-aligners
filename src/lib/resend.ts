import { Resend } from "resend";

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim() && process.env.RESEND_FROM_EMAIL?.trim());
}

export function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) {
    throw new Error("RESEND_API_KEY não definida.");
  }
  return new Resend(key);
}

export function getResendFrom(): string {
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!from) {
    throw new Error("RESEND_FROM_EMAIL não definida.");
  }
  return from;
}

export function getQuoteToEmail(): string | null {
  return process.env.QUOTE_TO_EMAIL?.trim() || null;
}
