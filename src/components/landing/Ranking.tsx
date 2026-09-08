import { Eyebrow } from "@/components/landing/ui";
import { Reveal } from "@/components/landing/Reveal";
import {
  credibilityRanking,
  rankingHighlights,
  scaleRanking,
} from "@/data/content";

export function Ranking() {
  return (
    <section id="ranking" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Ranking dos fabricantes</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
            Ranking dos fabricantes analisados
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Uma análise baseada na informação pública disponível sobre histórico, escala
            industrial, validação regulatória, presença internacional e experiência em
            alinhadores invisíveis.
          </p>
          <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-gold uppercase">
            Ranking estratégico TGOO baseado em evidências públicas encontradas.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <h3 className="mt-16 font-mono text-[11px] tracking-[0.24em] uppercase">
            Credibilidade / Solidez
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Independente da dimensão empresarial.
          </p>
          <div className="mt-8 grid gap-px bg-line">
            {credibilityRanking.map((item) => (
              <div key={item.rank} className="grid gap-6 bg-white px-6 py-8 md:grid-cols-[90px_1fr] md:px-8">
                <p className="font-display text-5xl text-gold">{item.rank}</p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h4 className="font-display text-3xl">{item.name}</h4>
                    <span className="font-mono text-[12px] tracking-[0.12em] text-gold">{item.stars}</span>
                    <span className="font-display text-2xl">{item.score}</span>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {item.reasons.map((reason) => (
                      <li key={reason} className="flex gap-3 text-sm">
                        <span className="text-gold">✓</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                  {item.tag ? (
                    <p className="mt-5 inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
                      {item.tag}
                    </p>
                  ) : null}
                  {item.note ? (
                    <p className="mt-4 text-sm text-muted">Ponto de atenção: {item.note}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h3 className="mt-20 font-mono text-[11px] tracking-[0.24em] uppercase">
            Dimensão / Escala empresarial
          </h3>
          <p className="mt-3 font-display text-3xl">Quem parece ser maior?</p>
          <div className="mt-8 grid gap-px bg-line">
            {scaleRanking.map((item) => (
              <div key={item.rank} className="grid gap-6 bg-white px-6 py-8 md:grid-cols-[90px_1fr] md:px-8">
                <p className="font-display text-5xl text-gold">{item.rank}</p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    <h4 className="font-display text-3xl">{item.name}</h4>
                    <span className="font-mono text-[12px] tracking-[0.12em] text-gold">{item.stars}</span>
                  </div>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">{item.highlight}</p>
                  <p className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase">{item.classification}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-px border border-line bg-warm px-6 py-8 md:px-8">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Meiming e Beame</p>
            <p className="mt-3 font-display text-3xl">Dimensão não determinada</p>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
              Existem evidências regulatórias fortes sobre os seus alinhadores, mas não foram
              encontrados dados públicos suficientemente sólidos sobre faturação, colaboradores,
              capacidade industrial ou produção anual para fazer uma comparação justa de
              dimensão.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-16 grid gap-px bg-line">
            {rankingHighlights.map((item) => (
              <div key={item.label} className="grid gap-2 bg-ink px-6 py-6 text-paper md:grid-cols-[1fr_auto] md:items-center md:px-8">
                <p className="font-mono text-[11px] tracking-[0.18em] text-gold uppercase">{item.label}</p>
                <p className="font-display text-2xl md:text-right">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
            Para a Maria Kerber Clinic, tamanho não deve ser o único factor de decisão. O
            fornecedor ideal deverá combinar qualidade clínica, conformidade europeia, Private
            Label, portal, embalagem personalizada, previsibilidade de produção e preço.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
