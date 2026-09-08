import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8 lg:px-10">
        <div className="space-y-4">
          <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
            Máquina de Vendas
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Image
              src="/brand/tgoo-wordmark.svg"
              alt="TGOO"
              width={180}
              height={16}
              className="h-3.5 w-auto"
            />
            <span className="text-paper/30">×</span>
            <div className="flex items-center gap-3">
              <Image src="/brand/mk-white-logo.svg" alt="" width={45} height={26} className="h-5 w-auto" />
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase">
                Maria Kerber Clinic
              </span>
            </div>
          </div>
          <p className="max-w-md text-sm text-paper/55">
            Página de inteligência comercial B2B. Não se destina a pacientes.
          </p>
        </div>
        <p className="font-mono text-[10px] tracking-[0.16em] text-paper/40 uppercase">
          Análise estratégica · OEM · Private Label
        </p>
      </div>
    </footer>
  );
}
