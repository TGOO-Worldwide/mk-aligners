import { Eyebrow } from "@/components/landing/ui";
import { Reveal } from "@/components/landing/Reveal";
import { comparisonColumns, comparisonRows } from "@/data/content";
import { cn } from "@/lib/cn";

function Cell({ value }: { value: string }) {
  const confirm = value.toLowerCase().includes("confirmar") || value.includes("verificar");
  const no = value === "NÃO" || value.startsWith("—");
  const yes = value === "✓" || value.startsWith("✓");

  return (
    <td
      className={cn(
        "px-4 py-4 font-mono text-[12px] tracking-[0.08em]",
        yes && "text-ink",
        confirm && "text-muted",
        no && "text-muted",
      )}
    >
      {value}
    </td>
  );
}

export function Comparison() {
  return (
    <section id="comparacao" className="bg-warm text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Comparação estratégica</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            K Line, Smartee, Yongle, Best Smile, Chuhongxin, Meiming e Beame
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Sempre utilizar &quot;Confirmar&quot; quando a informação não estiver comprovada. Nunca
            converter &quot;não encontrado&quot; em &quot;não possui&quot;.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-10 overflow-x-auto border border-line">
            <table className="w-full min-w-[1180px] border-collapse text-left">
              <thead className="bg-ink text-paper">
                <tr>
                  <th className="px-4 py-4 font-mono text-[11px] tracking-[0.18em] uppercase"> </th>
                  {comparisonColumns.map((column) => (
                    <th
                      key={column}
                      className="px-4 py-4 font-mono text-[11px] tracking-[0.18em] uppercase"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-line bg-white">
                    <th className="px-4 py-4 text-left text-sm font-medium">{row.label}</th>
                    {row.values.map((value, index) => (
                      <Cell key={`${row.label}-${index}`} value={value} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 max-w-3xl space-y-2 text-sm text-muted">
            <p>✓ = informação encontrada</p>
            <p>Confirmar = necessita validação comercial</p>
            <p>* = informação declarada pelo fornecedor e/ou a validar documentalmente</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
