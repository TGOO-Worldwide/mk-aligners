"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyOtpAction } from "@/features/auth/actions";

export default function VerifyCodeClient() {
  const params = useSearchParams();
  const router = useRouter();
  const email = params.get("email") ?? "";
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const result = await verifyOtpAction(email, code);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    router.push("/area");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-16 text-paper">
      <form onSubmit={onSubmit} className="w-full max-w-md border border-paper/15 p-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">OTP</p>
        <h1 className="mt-4 font-display text-4xl">Código de acesso</h1>
        <p className="mt-3 text-sm text-paper/65">{email}</p>
        <input
          required
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="mt-8 w-full border-0 border-b border-paper/25 bg-transparent py-3 font-display text-4xl tracking-[0.3em] outline-none"
        />
        {error ? <p className="mt-4 text-sm text-gold">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full bg-gold px-4 py-3 font-mono text-[11px] tracking-[0.2em] text-ink uppercase disabled:opacity-50"
        >
          {loading ? "A verificar…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}
