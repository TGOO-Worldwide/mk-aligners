import { Mail, MessageCircle, Globe, MapPin } from "lucide-react";
import { ButtonLink, CheckList, Eyebrow, Panel } from "@/components/landing/ui";
import { Reveal } from "@/components/landing/Reveal";
import { LabGrid } from "@/components/landing/illustrations";
import {
  bestSmileFacts,
  chinaPriceExtras,
  chuhongxinMarkets,
  chuhongxinServices,
  contacts,
  simulationRows,
} from "@/data/content";

export function ChinaIntro() {
  return (
    <section id="china" className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-30 lg:block">
        <LabGrid />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40">
        <Reveal>
          <Eyebrow>Pesquisa internacional</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Podemos produzir o mesmo conceito directamente na China?
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/72">
            A Máquina de Vendas da TGOO pesquisou fabricantes chineses que trabalham com OEM,
            ODM e Private Label de alinhadores invisíveis.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/72">
            Não procurámos simplesmente fabricantes de plástico ou embalagens.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/72">
            O objectivo foi encontrar empresas capazes de assumir uma parte significativa do
            ecossistema actualmente oferecido pela K Line.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function BestSmile() {
  const c = contacts.bestSmile;

  return (
    <section id="best-smile" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] uppercase">
            Maior compatibilidade encontrada
          </span>
          <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
            Fabricante #1
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            Shenzhen Best Smile Tech Co., Ltd.
          </h2>
          <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
            Shenzhen, Guangdong, China
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            Fabricante especializado em alinhadores transparentes OEM e Private Label, com
            serviços de planeamento, produção e tecnologia para clínicas, laboratórios e
            marcas próprias.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <h3 className="mt-14 font-mono text-[11px] tracking-[0.24em] uppercase">
            Dados divulgados pela empresa
          </h3>
          <div className="mt-5 border border-line bg-white">
            <CheckList items={bestSmileFacts} />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
          <SpecCard label="Material" value="Copolyester + TPU" note="Polímero médico multicamada" />
          <SpecCard label="Espessura" value="0,76 mm" note="Segundo a empresa" />
          <SpecCard label="Planeamento" value="~48 h" note="Aproximadamente 48 horas" />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          Produção: aproximadamente 3–5 dias úteis depois da aprovação do plano, segundo
          informação publicada pela empresa.
        </p>

        <Reveal delay={70}>
          <div className="mt-12 border border-ink bg-ink px-6 py-10 text-paper md:px-10">
            <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">White Label</p>
            <p className="mt-4 font-display text-3xl leading-snug">
              Existe opção de plataforma cloud totalmente personalizada com a identidade da
              marca.
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-paper/70">
              A empresa indica que existe uma taxa inicial de configuração da plataforma White
              Label e custos de utilização/API, que deverão ser cotados directamente.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <Panel className="mt-12 p-8 md:p-12">
            <Eyebrow>Contacto — Best Smile Tech</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">{c.company}</h3>
            <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
              Contacto comercial
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-sm">
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Contacto
                  </span>
                  <br />
                  {c.person}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Email
                  </span>
                  <br />
                  {c.email}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Telefone / WhatsApp
                  </span>
                  <br />
                  {c.phone}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Website
                  </span>
                  <br />
                  {c.website}
                </p>
              </div>
              <address className="flex gap-3 not-italic text-sm leading-relaxed text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.25} />
                <span>
                  {c.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={c.whatsappUrl} variant="primary" external>
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                WhatsApp
              </ButtonLink>
              <ButtonLink href={`mailto:${c.email}`} variant="ghost">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Enviar e-mail
              </ButtonLink>
              <ButtonLink href={c.websiteUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                Website
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}

function SpecCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="bg-white px-6 py-8">
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">{label}</p>
      <p className="mt-3 font-display text-3xl">{value}</p>
      <p className="mt-2 text-sm text-muted">{note}</p>
    </div>
  );
}

export function Chuhongxin() {
  const c = contacts.chuhongxin;

  return (
    <section id="chuhongxin" className="bg-warm text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-ink bg-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] text-paper uppercase">
            Opção com preço de produção muito agressivo
          </span>
          <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
            Fabricante #2
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            Shenzhen Chuhongxin Technology Co., Ltd.
          </h2>
          <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
            Shenzhen, Guangdong, China
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            Fornecedor listado como fabricante profissional OEM/ODM de alinhadores invisíveis.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <h3 className="mt-14 font-mono text-[11px] tracking-[0.24em] uppercase">
            Serviços declarados
          </h3>
          <div className="mt-5 border border-line bg-white">
            <CheckList items={chuhongxinServices} />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-ink px-8 py-12 text-paper">
            <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
              A empresa indica mais de
            </p>
            <p className="mt-4 font-display text-7xl leading-none tracking-[-0.04em] text-gold">
              30.000
            </p>
            <p className="mt-4 font-mono text-[12px] tracking-[0.22em] uppercase">
              Casos ortodônticos
            </p>
          </div>
          <div className="bg-white px-8 py-12">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Mercados declarados</p>
            <ul className="mt-6 space-y-3">
              {chuhongxinMarkets.map((market) => (
                <li key={market} className="flex gap-3 border-b border-line pb-3">
                  <span className="text-gold">✓</span>
                  {market}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={60}>
          <div id="preco-chuhongxin" className="mt-16 border border-ink bg-white p-8 md:p-14">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Preço publicado</p>
            <p className="mt-4 font-display text-[72px] leading-none tracking-[-0.05em] text-gold sm:text-[112px]">
              US$7–8
            </p>
            <p className="mt-4 text-xl">por peça/alinhador</p>
            <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
              MOQ publicado: 100 peças.
            </p>
            <div className="mt-10 border border-ink bg-ink px-6 py-6 text-paper">
              <p className="font-display text-2xl leading-snug">
                Este é um preço publicado por peça num marketplace B2B. NÃO deve ser
                interpretado como preço final de um tratamento completo.
              </p>
            </div>
            <p className="mt-8 text-sm text-muted">O preço final precisa de incluir ou confirmar:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {chinaPriceExtras.map((item) => (
                <li key={item} className="border border-line px-3 py-2 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Panel className="mt-12 p-8 md:p-12">
            <Eyebrow>Contacto — Chuhongxin</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">{c.company}</h3>
            <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
              Contacto comercial
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="space-y-4 text-sm">
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Contacto
                  </span>
                  <br />
                  {c.person}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Telefone / WhatsApp
                  </span>
                  <br />
                  {c.phone}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    E-mail
                  </span>
                  <br />
                  {c.email}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Made-in-China
                  </span>
                  <br />
                  clearaligner.en.made-in-china.com
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Alibaba
                  </span>
                  <br />
                  clearaligner.en.alibaba.com
                </p>
              </div>
              <address className="not-italic text-sm leading-relaxed text-muted">
                {c.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={c.whatsappUrl} variant="primary" external>
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                Telefone / WhatsApp
              </ButtonLink>
              <ButtonLink href={`mailto:${c.email}`} variant="ghost">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Enviar e-mail
              </ButtonLink>
              <ButtonLink href={c.madeInChinaUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                Made-in-China
              </ButtonLink>
              <ButtonLink href={c.alibabaUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                Alibaba
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}

export function CostSimulation() {
  return (
    <section id="simulacao" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            Simulação — não é uma comparação directa de preços
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
            Comparação teórica de produção
          </h2>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-ink text-paper">
                <tr>
                  <th className="px-5 py-4 font-mono text-[11px] tracking-[0.18em] uppercase">
                    Cenário
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] tracking-[0.18em] uppercase">
                    Peças
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] tracking-[0.18em] uppercase">
                    China a US$7–8
                  </th>
                  <th className="px-5 py-4 font-mono text-[11px] tracking-[0.18em] uppercase">
                    K Line
                  </th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row) => (
                  <tr key={row.label} className="border-t border-line bg-white">
                    <td className="px-5 py-5">{row.label}</td>
                    <td className="px-5 py-5 text-muted">{row.pieces}</td>
                    <td className="px-5 py-5 font-display text-3xl">{row.china}</td>
                    <td className="px-5 py-5 font-display text-3xl">{row.kline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              Os valores chineses acima correspondem apenas à multiplicação do preço anunciado
              por peça e não demonstram que todos os serviços incluídos pela K Line estejam
              incluídos.
            </p>
            <p>
              O objectivo da comparação é identificar potencial de negociação e justificar um
              pedido formal de cotação.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
