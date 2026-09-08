import { Eyebrow } from "@/components/landing/ui";
import { Reveal } from "@/components/landing/Reveal";
import { regulationItems, rfqItems, strategySteps } from "@/data/content";

export function Regulation() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <div className="border border-ink px-6 py-10 md:px-12 md:py-14">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Ponto de atenção — Europa</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
              Preço não é o único critério.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              Antes de importar e utilizar alinhadores produzidos fora da União Europeia, deverá
              ser feita uma verificação regulatória completa para Portugal e União Europeia.
            </p>
            <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2">
              {regulationItems.map((item) => (
                <li key={item} className="flex gap-3 bg-paper px-4 py-3 text-sm">
                  <span className="font-mono text-muted">□</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
              Nenhuma decisão de compra deverá ser baseada exclusivamente numa certificação
              mencionada no website do fornecedor. Solicitar documentação original para
              validação.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function RfqChecklist() {
  return (
    <section className="bg-warm text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>O que devemos pedir aos fabricantes</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Pedido de cotação recomendado
          </h2>
        </Reveal>
        <Reveal delay={40}>
          <ol className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {rfqItems.map((item, index) => (
              <li key={item} className="flex gap-4 bg-warm px-4 py-4">
                <span className="font-mono text-[12px] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug">{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Strategy() {
  return (
    <section id="proximos-passos" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Estratégia recomendada</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Três etapas antes do fornecedor principal
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-line lg:grid-cols-3">
          {strategySteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 70}>
              <div className="h-full bg-white px-6 py-10 md:px-8">
                <p className="font-display text-6xl text-gold">{step.n}</p>
                <h3 className="mt-6 font-mono text-[13px] tracking-[0.22em]">{step.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Conclusion() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Conclusão</Eyebrow>
          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl">
            Existe potencial para criar Maria Kerber Aligners.
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-paper/75">
            <p>
              A pesquisa demonstra que existem alternativas internacionais capazes de oferecer
              produção OEM e Private Label.
            </p>
            <p>
              A Best Smile Tech é actualmente a alternativa encontrada com maior semelhança
              estrutural ao modelo apresentado pela K Line.
            </p>
            <p>
              A Shenzhen Chuhongxin apresenta um preço público de produção por peça
              particularmente competitivo, mas necessita de maior validação comercial, clínica e
              regulatória.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-paper/15 md:grid-cols-2">
            <div className="bg-ink px-6 py-8">
              <p className="font-mono text-[11px] tracking-[0.2em] text-paper/45 uppercase">
                A próxima decisão não deve ser simplesmente
              </p>
              <p className="mt-4 font-display text-2xl leading-snug">
                “Quem vende o alinhador mais barato?”
              </p>
            </div>
            <div className="bg-gold px-6 py-8 text-ink">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase">Deve ser</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                “Quem consegue entregar um sistema completo, seguro, escalável e rentável para a
                Maria Kerber Clinic?”
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-gold text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase">Máquina de Vendas</p>
          <p className="mt-3 font-mono text-[12px] tracking-[0.18em] uppercase">
            TGOO × Maria Kerber Clinic
          </p>
          <h2 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl">
            Próximo passo: colocar os fabricantes frente a frente.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#email-cotacao"
              className="inline-flex items-center justify-center bg-ink px-6 py-4 font-mono text-[11px] tracking-[0.22em] text-paper uppercase"
            >
              Solicitar cotações
            </a>
            <a
              href="#comparacao"
              className="inline-flex items-center justify-center border border-ink px-6 py-4 font-mono text-[11px] tracking-[0.22em] uppercase"
            >
              Comparar custo por tratamento
            </a>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/75">
            A decisão final deverá ser tomada depois de receber uma proposta comercial equivalente
            da Smartee, Yongle, Best Smile, Chuhongxin e K Line.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
