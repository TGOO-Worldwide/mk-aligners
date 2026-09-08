import { ButtonLink, CheckList, Eyebrow, Panel } from "@/components/landing/ui";
import { Reveal } from "@/components/landing/Reveal";
import { PackBox } from "@/components/landing/illustrations";
import {
  kLinePlans,
  kLineServices,
  starterKitItems,
  contacts,
} from "@/data/content";
import { Mail, Globe, Phone } from "lucide-react";

export function KLine() {
  return (
    <section id="k-line" className="bg-warm text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Referência actual</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            O modelo actualmente apresentado à Maria Kerber Clinic
          </h2>
          <div className="mt-8 flex flex-col gap-2 border border-line bg-white px-6 py-5">
            <p className="font-display text-3xl">K Line Europe GmbH</p>
            <p className="font-mono text-[12px] tracking-[0.18em] text-muted uppercase">
              Düsseldorf — Alemanha
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            A K Line oferece um modelo OEM/White Label no qual a Maria Kerber Clinic pode
            comercializar os alinhadores utilizando a sua própria identidade.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <h3 className="mt-14 font-mono text-[11px] tracking-[0.24em] uppercase">
            Serviços apresentados
          </h3>
          <div className="mt-5 border border-line bg-paper">
            <CheckList items={kLineServices} />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-16 grid gap-px bg-ink lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-ink px-6 py-10 text-paper md:px-10 md:py-14">
              <Eyebrow>Starter kit</Eyebrow>
              <p className="mt-6 font-display text-7xl leading-none tracking-[-0.04em] text-gold sm:text-8xl">
                €2.500
              </p>
              <p className="mt-4 font-mono text-[12px] tracking-[0.2em] uppercase">
                Taxa única de activação OEM
              </p>
              <div className="mt-10 border border-paper/15">
                <ul className="divide-y divide-paper/15">
                  {starterKitItems.map((item) => (
                    <li key={item} className="flex gap-3 px-4 py-3 text-sm text-paper/88">
                      <span className="text-gold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-between bg-gold px-6 py-10 text-ink md:px-10 md:py-14">
              <div>
                <div className="h-28 w-28 text-ink/80">
                  <PackBox />
                </div>
                <p className="mt-10 font-display text-3xl leading-snug">
                  A proposta também indica desconto de 10% nos preços durante os primeiros 12
                  meses.
                </p>
              </div>
              <p className="mt-10 font-mono text-[11px] tracking-[0.18em] uppercase">
                Activação · onboarding · 2 casos · branding
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function KLinePricing() {
  return (
    <section id="precos-kline" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>Preços K Line</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Quanto a Maria Kerber Clinic paga actualmente
          </h2>
        </Reveal>

        <Reveal delay={50}>
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-ink text-paper">
                <tr>
                  {["Plano", "Etapas", "1 arcada", "2 arcadas"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-4 font-mono text-[11px] font-medium tracking-[0.2em] uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {kLinePlans.map((row) => (
                  <tr
                    key={row.plan}
                    className={row.highlight ? "bg-gold/18" : "bg-white even:bg-warm/60"}
                  >
                    <td className="px-5 py-5 font-mono text-[13px] tracking-[0.16em]">{row.plan}</td>
                    <td className="px-5 py-5 text-muted">{row.steps}</td>
                    <td className="px-5 py-5 font-display text-3xl">{row.one}</td>
                    <td className="px-5 py-5 font-display text-3xl">{row.two}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            O preço refere-se ao tratamento/caso, e não simplesmente a uma única peça de
            alinhador.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Panel className="mt-12 grid gap-8 p-8 md:grid-cols-[0.7fr_1.3fr] md:p-12">
            <div>
              <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">Exemplo</p>
              <p className="mt-4 font-display text-6xl leading-none text-gold">€765</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-display text-3xl leading-snug">
                Tratamento de até 24 etapas
                <br />
                Duas arcadas
                <br />
                Custo K Line: €765
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Não apresentar este número como custo total final da clínica caso existam IVA,
                transporte ou serviços adicionais.
              </p>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}

export function KLineContact() {
  const k = contacts.kline;

  return (
    <section id="contactos" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 pb-20 md:px-8 lg:px-10">
        <Reveal>
          <Panel className="p-8 md:p-12">
            <Eyebrow>Contacto — K Line Europe</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">{k.company}</h3>
            <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
              Contacto comercial
            </p>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div className="space-y-4 text-sm">
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Contacto
                  </span>
                  <br />
                  {k.person}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Telefone / WhatsApp
                  </span>
                  <br />
                  {k.phone}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    E-mail
                  </span>
                  <br />
                  {k.email}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Website / Marketplace
                  </span>
                  <br />
                  {k.website}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    WhatsApp público
                  </span>
                  <br />
                  Não identificado na informação institucional consultada.
                </p>
              </div>
              <address className="not-italic leading-relaxed text-muted">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Localização</span>
                {k.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${k.email}`} variant="primary">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Enviar email
              </ButtonLink>
              <ButtonLink href={k.websiteUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                Visitar K Line
              </ButtonLink>
              <ButtonLink href={`tel:${k.phone.replace(/\s/g, "")}`} variant="ghost">
                <Phone className="h-4 w-4" strokeWidth={1.25} />
                {k.phone}
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}
