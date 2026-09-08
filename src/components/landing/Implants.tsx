import { Mail, MessageCircle, Globe, MapPin } from "lucide-react";
import { ButtonLink, CheckList, Eyebrow, Panel } from "@/components/landing/ui";
import { ImplantQuoteEmail } from "@/components/landing/QuoteEmail";
import { Reveal } from "@/components/landing/Reveal";
import {
  dentalMasterChain,
  dentalMasterContact,
  dentalMasterDocs,
  dentalMasterExtraCosts,
  dentalMasterLegalChain,
  dentalMasterProducts,
  dentalMasterRegItems,
  dentalMasterSystemItems,
  dentalMasterTechItems,
  implantDurabilityFactors,
} from "@/data/content";

function ValueChain({
  steps,
}: {
  steps: readonly (string | { title: string; note: string })[];
}) {
  return (
    <ol className="mt-8 space-y-0">
      {steps.map((step, index, list) => {
        const title = typeof step === "string" ? step : step.title;
        const note = typeof step === "string" ? "" : step.note;
        return (
          <li key={title} className="flex flex-col items-center">
            <div className="w-full border border-ink bg-white px-4 py-4 text-center text-ink">
              <p className="font-mono text-[12px] tracking-[0.2em]">{title}</p>
              {note ? <p className="mt-1 text-sm text-muted">{note}</p> : null}
            </div>
            {index < list.length - 1 ? (
              <div className="flex h-8 items-center font-mono text-gold" aria-hidden>
                ↓
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export function ImplantsBonus() {
  const c = dentalMasterContact;

  return (
    <>
      <section id="bonus" className="relative overflow-hidden bg-ink text-paper">
        <div className="bg-gold text-ink">
          <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
            <p className="font-mono text-[12px] tracking-[0.32em] uppercase">
              Conteúdo adicional · Outro assunto
            </p>
            <p className="mt-5 font-display text-6xl leading-[0.9] tracking-[-0.04em] sm:text-8xl lg:text-[140px]">
              Bónus
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              Esta secção não faz parte da análise dos alinhadores. Trata-se de uma oportunidade
              adicional: implantes dentários.
            </p>
          </div>
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32 lg:px-10 lg:py-40">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
              Nova oportunidade identificada pela Máquina de Vendas
            </p>
            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Maria Kerber Implants
            </h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/72">
              Além dos alinhadores invisíveis, existe a possibilidade de desenvolver uma linha
              própria de implantes dentários para a Maria Kerber Clinic.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-paper/72">
              Durante a pesquisa internacional de fabricantes, foi identificada uma oportunidade
              adicional: adquirir sistemas de implantes directamente de um fabricante asiático
              especializado, com potencial para Private Label/OEM e utilização no mercado europeu,
              desde que toda a documentação regulamentar do modelo exacto seja previamente
              validada.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-14 border border-paper/20 bg-paper p-6 text-ink md:p-8">
              <Eyebrow>Cadeia de valor</Eyebrow>
              <ValueChain steps={dentalMasterChain} />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="dentalmaster" className="bg-paper text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <span className="inline-block border border-ink bg-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] text-paper uppercase">
              Implantes dentários
            </span>
            <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
              Fabricante seleccionado
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
              DentalMaster (Xiamen) Medical Technology Co., Ltd.
            </h2>
            <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
              Double Medical Group · Stock Code: 002901 · Xiamen, Fujian, China
            </p>
            <p className="mt-8 max-w-3xl font-display text-2xl leading-snug">
              Fabricante especializado em sistemas de implantes dentários
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              A DentalMaster desenvolve e fabrica soluções para implantologia, incluindo:
            </p>
          </Reveal>
          <Reveal delay={40}>
            <div className="mt-6 border border-line bg-white">
              <CheckList items={dentalMasterProducts} />
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
              O fabricante apresenta também soluções OEM e de personalização para parceiros
              comerciais.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <Eyebrow>Potencial de marca própria</Eyebrow>
            <div className="mt-8 border border-ink bg-ink px-6 py-10 text-paper md:px-12 md:py-14">
              <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">Maria Kerber</p>
              <p className="mt-3 font-display text-5xl leading-none sm:text-7xl">Implants</p>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/75">
                O objectivo comercial seria desenvolver uma apresentação Private Label/OEM
                utilizando a identidade Maria Kerber, mantendo a estrutura regulamentar necessária
                para comercialização e utilização clínica na União Europeia.
              </p>
            </div>
          </Reveal>
          <Reveal delay={40}>
            <div className="mt-10 border border-ink bg-white p-8 md:p-12">
              <p className="font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
                Exemplo visual da embalagem
              </p>
              <p className="mt-8 font-display text-4xl">Maria Kerber Implants</p>
              <p className="mt-3 font-mono text-[12px] tracking-[0.18em] uppercase">
                Dental Implant System
              </p>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                Manufactured by:
                <br />
                DentalMaster (Xiamen) Medical Technology Co., Ltd.
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
              Private Label/OEM sujeito à confirmação contratual e regulamentar do fabricante.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <Eyebrow>Comparação de custo</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
              Quanto pode representar esta oportunidade?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-line lg:grid-cols-2">
            <div className="bg-white px-6 py-10 md:px-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Referência China</p>
              <p className="mt-3 font-display text-3xl">DentalMaster</p>
              <p className="mt-6 font-display text-6xl leading-none text-gold">≈ €94</p>
              <p className="mt-3 font-mono text-[12px] tracking-[0.16em] uppercase">por sistema</p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Benchmark público de aquisição institucional na China.
              </p>
              <p className="mt-4 text-sm">O sistema considerado no benchmark inclui:</p>
              <p className="mt-3 font-mono text-[12px] tracking-[0.14em] uppercase">
                Implante + Pilar + Componentes/acessórios
              </p>
              <p className="mt-8 inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
                Valor de referência · não é cotação OEM
              </p>
            </div>
            <div className="bg-white px-6 py-10 md:px-10">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase">
                Referência de mercado europeu
              </p>
              <p className="mt-6 font-display text-5xl leading-none text-gold">€150–€200+</p>
              <p className="mt-3 text-sm text-muted">
                dependendo da marca e dos componentes utilizados.
              </p>
              <p className="mt-8 font-mono text-[11px] tracking-[0.18em] uppercase">
                Exemplos encontrados no mercado profissional europeu
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Implante Osstem: ≈ €99 apenas o fixture</li>
                <li>Multi Abutment: ≈ €59</li>
                <li>Healing Abutment: ≈ €30</li>
              </ul>
              <p className="mt-8 font-display text-3xl">€99 + €59 + €30 = ≈ €188</p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Valores apenas indicativos para demonstrar a diferença potencial. O custo real
                deverá ser comparado utilizando exactamente os mesmos componentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
              Potencial de poupança
            </p>
            <p className="mt-6 font-display text-7xl leading-none tracking-[-0.04em] text-gold sm:text-[120px]">
              ≈ 50%
            </p>
            <p className="mt-6 font-mono text-[12px] tracking-[0.2em] uppercase">
              Potencial de redução do custo do sistema
            </p>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-paper/75">
              Numa comparação indicativa entre aproximadamente €94 por sistema DentalMaster e
              aproximadamente €188 em componentes adquiridos separadamente no mercado europeu.
            </p>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-paper/60">
              Esta percentagem é uma simulação e não representa uma proposta comercial da
              DentalMaster.
            </p>
            <p className="mt-8 text-sm text-paper/60">Custos adicionais podem incluir:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {dentalMasterExtraCosts.map((item) => (
                <li key={item} className="border border-paper/15 px-3 py-2 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <Eyebrow>Impacto num tratamento All-on-4</Eyebrow>
            <p className="mt-5 font-display text-4xl">4 implantes</p>
            <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
              <div className="bg-white px-6 py-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase">Cenário Europa</p>
                <p className="mt-3 text-sm text-muted">4 × €188</p>
                <p className="mt-4 font-display text-5xl text-gold">≈ €752</p>
              </div>
              <div className="bg-white px-6 py-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase">
                  Cenário de referência DentalMaster
                </p>
                <p className="mt-3 text-sm text-muted">4 × €94</p>
                <p className="mt-4 font-display text-5xl text-gold">≈ €376</p>
              </div>
              <div className="bg-ink px-6 py-8 text-paper">
                <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
                  Diferença indicativa
                </p>
                <p className="mt-4 font-display text-5xl text-gold">≈ €376</p>
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
              Simulação apenas de componentes equivalentes. Não inclui prótese, cirurgia,
              laboratório, consultas ou mão-de-obra clínica.
            </p>
          </Reveal>

          <Reveal delay={40}>
            <Eyebrow className="mt-20">Impacto num tratamento All-on-6</Eyebrow>
            <p className="mt-5 font-display text-4xl">6 implantes</p>
            <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
              <div className="bg-white px-6 py-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase">Cenário Europa</p>
                <p className="mt-3 text-sm text-muted">6 × €188</p>
                <p className="mt-4 font-display text-5xl text-gold">≈ €1.128</p>
              </div>
              <div className="bg-white px-6 py-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase">
                  Cenário de referência DentalMaster
                </p>
                <p className="mt-3 text-sm text-muted">6 × €94</p>
                <p className="mt-4 font-display text-5xl text-gold">≈ €564</p>
              </div>
              <div className="bg-gold px-6 py-8 text-ink">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase">Diferença indicativa</p>
                <p className="mt-4 font-display text-5xl">≈ €564</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <div className="border border-ink px-6 py-10 md:px-12 md:py-14">
              <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Utilização em Portugal</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
                O preço só interessa se o produto estiver legalmente habilitado para utilização
                clínica.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
                Antes da utilização de qualquer implante DentalMaster num paciente da Maria Kerber
                Clinic deverão ser documentalmente confirmados:
              </p>
              <div className="mt-8 border border-line bg-white">
                <CheckList items={dentalMasterRegItems} />
              </div>
              <p className="mt-8 inline-block border border-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
                Validação documental obrigatória antes de qualquer utilização clínica
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <Eyebrow>Modelo recomendado</Eyebrow>
            <div className="mt-8 border border-line bg-warm p-6 md:p-8">
              <ValueChain steps={dentalMasterLegalChain} />
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
              O objectivo é manter o fabricante original juridicamente identificado, evitando que
              a Maria Kerber Clinic assuma desnecessariamente todas as obrigações de fabricante de
              um dispositivo médico implantável.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="dentalmaster-contacto" className="bg-warm text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <Panel className="p-8 md:p-12">
              <Eyebrow>Contacto — DentalMaster</Eyebrow>
              <h3 className="mt-4 font-display text-3xl">{c.company}</h3>
              <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
                Double Medical Group · Stock Code: 002901
              </p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="space-y-4 text-sm">
                  <p>
                    <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                      Contacto directo
                    </span>
                    <br />
                    WhatsApp
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
                      Website / Marketplace
                    </span>
                    <br />
                    {c.website}
                  </p>
                </div>
                <address className="flex gap-3 not-italic text-sm leading-relaxed text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.25} />
                  <span>
                    <span className="block font-mono text-[11px] tracking-[0.16em] uppercase">
                      Localização
                    </span>
                    {c.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={c.whatsappUrl} variant="primary" external>
                  <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                  WhatsApp
                </ButtonLink>
                <ButtonLink href={c.websiteUrl} variant="ghost" external>
                  <Globe className="h-4 w-4" strokeWidth={1.25} />
                  Visitar website
                </ButtonLink>
                <ButtonLink href="#email-cotacao-implantes" variant="ghost">
                  <Mail className="h-4 w-4" strokeWidth={1.25} />
                  Pedir cotação
                </ButtonLink>
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      <section id="dentalmaster-rfq" className="bg-paper text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <Eyebrow>O que pedir à DentalMaster</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
              Pedido de cotação recomendado
            </h2>
            <p className="mt-6 text-lg text-muted">Solicitar preços para:</p>
            <div className="mt-6 grid gap-px bg-line sm:grid-cols-3">
              {["100 sistemas", "500 sistemas", "1.000 sistemas"].map((volume) => (
                <div key={volume} className="bg-white px-6 py-8 font-display text-3xl">
                  {volume}
                </div>
              ))}
            </div>
            <p className="mt-10 font-mono text-[11px] tracking-[0.24em] uppercase">
              Cada sistema deverá ser cotado especificando
            </p>
            <div className="mt-5 border border-line bg-white">
              <CheckList items={dentalMasterSystemItems} />
            </div>
            <h3 className="mt-14 font-mono text-[11px] tracking-[0.24em] uppercase">
              Documentação europeia
            </h3>
            <ol className="mt-6 grid gap-px bg-line sm:grid-cols-2">
              {dentalMasterDocs.map((item, index) => (
                <li key={item} className="flex gap-4 bg-paper px-4 py-4">
                  <span className="font-mono text-[12px] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 border border-ink bg-ink px-6 py-8 text-paper md:px-10">
              <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
                Pergunta essencial a enviar ao fabricante
              </p>
              <p className="mt-4 font-display text-2xl leading-snug">{c.quoteQuestion}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="implantes-tecnologia" className="bg-paper text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <div className="border border-ink bg-white">
              <div className="bg-ink px-6 py-10 text-paper md:px-12 md:py-16">
                <span className="inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] text-ink uppercase">
                  Porque pagar apenas pela marca?
                </span>
                <p className="mt-8 font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
                  Tecnologia de alto nível com custo industrial muito menor
                </p>
                <h2 className="mt-5 max-w-4xl font-display text-3xl leading-[1.08] sm:text-5xl">
                  Titânio médico, tecnologia SLA e uma diferença de custo que pode mudar a margem
                  da clínica.
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/72">
                  Os implantes DentalMaster utilizam tecnologias e materiais reconhecidos
                  internacionalmente na implantologia, mas com um custo industrial
                  significativamente inferior ao de sistemas premium europeus.
                </p>
              </div>

              <div id="implantes-vs-premium" className="grid gap-px bg-line lg:grid-cols-2">
                <div className="bg-white px-6 py-10 md:px-10 md:py-12">
                  <p className="font-mono text-[11px] tracking-[0.24em] uppercase">
                    DentalMaster — China
                  </p>
                  <p className="mt-6 font-display text-6xl leading-none text-gold">≈ €94</p>
                  <p className="mt-3 font-mono text-[12px] tracking-[0.16em] uppercase">
                    por sistema*
                  </p>
                  <ul className="mt-8 space-y-0 border border-line">
                    {dentalMasterTechItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-line px-4 py-3 text-[15px] last:border-b-0"
                      >
                        <span className="mt-0.5 font-mono text-gold" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border border-ink bg-ink px-4 py-4 text-sm leading-relaxed text-paper">
                    O fabricante declara resistência à tracção superior a 800–900 MPa em diferentes
                    linhas de implantes.
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    A DentalMaster utiliza titânio Grau 4, um material amplamente utilizado em
                    implantologia devido à sua resistência, biocompatibilidade e desempenho a
                    longo prazo.
                  </p>
                </div>

                <div className="bg-warm px-6 py-10 md:px-10 md:py-12">
                  <p className="font-mono text-[11px] tracking-[0.24em] uppercase">
                    Sistemas premium — Europa
                  </p>
                  <p className="mt-6 font-display text-4xl">Straumann</p>
                  <p className="mt-6 font-display text-5xl leading-none text-gold">€250–€500+</p>
                  <p className="mt-3 text-sm text-muted">
                    por conjunto, dependendo da linha e dos componentes.
                  </p>
                  <p className="mt-10 text-lg leading-relaxed">
                    Marcas premium como Straumann possuem décadas de evidência clínica, investigação
                    própria, forte suporte científico e uma rede global consolidada.
                  </p>
                </div>
              </div>

              <div className="border-t border-ink bg-ink px-6 py-12 text-paper md:px-12 md:py-16">
                <p className="font-display text-3xl leading-[1.08] sm:text-5xl">
                  O material não explica sozinho uma diferença de centenas de euros.
                </p>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/72">
                  Grande parte da diferença de preço entre sistemas de implantes pode estar
                  associada à marca, investigação clínica acumulada, tecnologia proprietária,
                  estrutura comercial, suporte, distribuição e posicionamento premium.
                </p>
              </div>

              <div className="px-6 py-10 md:px-12 md:py-14">
                <h3 className="font-display text-3xl sm:text-4xl">E quanto à durabilidade?</h3>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
                  Um implante dentário não deve ser avaliado apenas pelo país onde é fabricado.
                </p>
                <p className="mt-6 font-mono text-[11px] tracking-[0.2em] uppercase">
                  A longevidade depende de vários factores
                </p>
                <div className="mt-5 border border-line">
                  <CheckList items={implantDurabilityFactors} />
                </div>
                <div className="mt-8 border border-gold bg-gold px-6 py-6">
                  <p className="text-[15px] leading-relaxed">
                    A DentalMaster utiliza titânio Grau 4 trabalhado a frio e tratamento SLA,
                    tecnologias associadas a resistência mecânica, biocompatibilidade e
                    estabilidade a longo prazo.
                  </p>
                </div>
                <p className="mt-8 max-w-3xl text-lg leading-relaxed">
                  Em termos de material e princípios tecnológicos utilizados, existem
                  características comparáveis às encontradas em sistemas internacionais de
                  implantologia.
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                  A diferença real de longevidade clínica só pode ser determinada através de
                  evidência clínica de longo prazo específica de cada sistema.
                </p>
              </div>

              <div className="grid gap-px border-t border-line bg-line md:grid-cols-3">
                <div className="bg-white px-6 py-8 md:px-8">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase">Titânio Grau 4</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Material médico utilizado em sistemas de implantes devido à elevada
                    biocompatibilidade, resistência à corrosão e resistência mecânica.
                  </p>
                </div>
                <div className="bg-white px-6 py-8 md:px-8">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase">Superfície SLA</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Tratamento por jacto de partículas e ataque ácido destinado a aumentar a
                    rugosidade superficial e favorecer a integração óssea.
                  </p>
                </div>
                <div className="bg-white px-6 py-8 md:px-8">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase">
                    Precisão implante / pilar
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    A DentalMaster declara uma folga inferior a 0,2 μm entre implante e pilar nos
                    seus testes internos.
                  </p>
                  <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                    Dado declarado pelo fabricante.
                  </p>
                </div>
              </div>

              <div className="border-t border-ink bg-warm px-6 py-12 md:px-12 md:py-16">
                <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
                  <div className="text-center">
                    <p className="font-mono text-[11px] tracking-[0.24em] uppercase">DentalMaster</p>
                    <p className="mt-4 font-display text-6xl leading-none text-gold">≈ €94</p>
                  </div>
                  <p className="text-center font-mono text-[12px] tracking-[0.28em] uppercase">Vs</p>
                  <div className="text-center">
                    <p className="font-mono text-[11px] tracking-[0.24em] uppercase">
                      Sistema premium
                    </p>
                    <p className="mt-4 font-display text-6xl leading-none text-gold">até €500+</p>
                  </div>
                </div>
                <p className="mt-12 text-center font-display text-3xl leading-snug sm:text-4xl">
                  Potencial de diferença superior a €400 por sistema
                </p>
                <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted">
                  Comparação meramente indicativa. Os valores dependem dos componentes incluídos,
                  linha do implante, volume de compra, transporte e condições comerciais.
                </p>
              </div>

              <div className="border-t border-ink px-6 py-12 md:px-12 md:py-16">
                <h3 className="max-w-4xl font-display text-3xl leading-[1.08] sm:text-5xl">
                  Alta tecnologia não precisa significar automaticamente alto custo.
                </h3>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
                  A oportunidade para a Maria Kerber Clinic é avaliar se um sistema MDR, produzido
                  com titânio Grau 4 e tecnologia SLA, pode oferecer uma relação custo/desempenho
                  significativamente mais eficiente.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="#email-cotacao-implantes" variant="primary">
                    Pedir amostras e documentação técnica
                  </ButtonLink>
                  <ButtonLink href="#implantes-vs-premium" variant="ghost">
                    Comparar com Straumann
                  </ButtonLink>
                </div>
                <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
                  A Straumann possui uma base de evidência clínica e histórico internacional
                  significativamente superiores. Esta comparação refere-se a materiais, tecnologias
                  e custo, não pretende afirmar equivalência clínica entre os sistemas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gold text-ink">
        <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase">Bónus</p>
            <p className="mt-3 font-mono text-[12px] tracking-[0.18em] uppercase">Nova oportunidade</p>
            <h2 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl">
              Dos alinhadores aos implantes: uma marca dentária própria Maria Kerber.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75">
              A Máquina de Vendas identificou a possibilidade de estudar uma segunda linha de
              produto com potencial para reduzir custos, aumentar margem e reforçar a marca da
              clínica.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#email-cotacao-implantes"
                className="inline-flex items-center justify-center bg-ink px-6 py-4 font-mono text-[11px] tracking-[0.22em] text-paper uppercase"
              >
                Solicitar cotação de implantes
              </a>
              <a
                href={c.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-ink px-6 py-4 font-mono text-[11px] tracking-[0.22em] uppercase"
              >
                Contactar DentalMaster
              </a>
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/75">
              Qualquer decisão de aquisição será condicionada à validação regulamentar e clínica
              completa dos produtos destinados ao mercado português.
            </p>
          </Reveal>
        </div>
      </section>

      <ImplantQuoteEmail />
    </>
  );
}
