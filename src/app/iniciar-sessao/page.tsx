import { requestOtpAction } from "@/features/auth/actions";

const errors: Record<string, string> = {
  "email-invalido": "Indique um email válido.",
  "limite-otp": "Atingiu o limite de pedidos de código por hora.",
  envio: "Não foi possível enviar o código. Verifique a configuração de email.",
  config: "A autenticação ainda não está configurada neste ambiente.",
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string; email?: string }>;
}) {
  const params = await searchParams;
  const error = params.erro ? errors[params.erro] : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-5 py-16 text-paper">
      <div className="w-full max-w-md border border-paper/15 bg-ink p-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
          Máquina de Vendas
        </p>
        <h1 className="mt-4 font-display text-4xl">Iniciar sessão</h1>
        <p className="mt-3 text-sm text-paper/65">
          Acesso por código OTP enviado para o email.
        </p>
        <form action={requestOtpAction} className="mt-8 space-y-6">
          <label className="block">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase">Email</span>
            <input
              required
              type="email"
              name="email"
              defaultValue={params.email}
              className="mt-3 w-full border-0 border-b border-paper/25 bg-transparent py-2 text-paper outline-none"
            />
          </label>
          {error ? <p className="text-sm text-gold">{error}</p> : null}
          <button
            type="submit"
            className="w-full bg-gold px-4 py-3 font-mono text-[11px] tracking-[0.2em] text-ink uppercase"
          >
            Enviar código
          </button>
        </form>
      </div>
    </main>
  );
}
