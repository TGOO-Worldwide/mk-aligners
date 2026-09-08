import { Mail, MessageCircle, Globe, Phone } from "lucide-react";
import { ButtonLink, CheckList, Eyebrow, Panel } from "@/components/landing/ui";
import { Reveal } from "@/components/landing/Reveal";
import {
  contacts,
  smarteeFacts,
  yongleFacts,
  yongleServices,
} from "@/data/content";

export function Smartee() {
  const c = contacts.smartee;

  return (
    <section id="smartee" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] uppercase">
            Líder chinesa encontrada
          </span>
          <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
            Smartee
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            Shanghai Smartee Denti-Technology Co., Ltd.
          </h2>
          <p className="mt-8 max-w-3xl font-display text-2xl leading-snug">
            Um dos fabricantes chineses de alinhadores invisíveis com maior escala e validação
            internacional.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-10 border border-line bg-white">
            <CheckList items={smarteeFacts} />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-12 border border-ink bg-ink px-6 py-10 text-paper md:px-10">
            <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
              Parceiro industrial da Straumann / ClearCorrect
            </p>
            <p className="mt-4 font-display text-3xl leading-snug">
              Em 2025, a Straumann Group anunciou uma parceria estratégica com a Smartee e a
              transferência da produção dos alinhadores ClearCorrect destinados aos mercados EMEA
              e APAC para a Smartee.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
          <div className="bg-ink px-8 py-12 text-paper">
            <p className="font-display text-7xl leading-none tracking-[-0.04em] text-gold">
              100.000 m²
            </p>
            <p className="mt-4 font-mono text-[12px] tracking-[0.22em] uppercase">
              Base industrial automatizada
            </p>
          </div>
          <div className="bg-white px-8 py-12">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase">Preço OEM / Private Label</p>
            <p className="mt-4 font-display text-4xl">Sob cotação</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Não apresentar valores estimados como proposta comercial.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
          É actualmente a empresa chinesa encontrada com maior combinação de dimensão, histórico,
          tecnologia e validação internacional.
        </p>

        <Reveal delay={80}>
          <Panel className="mt-12 p-8 md:p-12">
            <Eyebrow>Contacto — Smartee</Eyebrow>
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
                    Internacional
                  </span>
                  <br />
                  {c.internationalPhone}
                  <br />
                  {c.internationalEmail}
                </p>
                <p>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                    Website / Marketplace
                  </span>
                  <br />
                  {c.website}
                </p>
              </div>
              <address className="not-italic text-sm leading-relaxed text-muted">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Localização</span>
                {c.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={c.phoneUrl} variant="primary">
                <Phone className="h-4 w-4" strokeWidth={1.25} />
                Telefone PT
              </ButtonLink>
              <ButtonLink href={`mailto:${c.email}`} variant="ghost">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Enviar e-mail
              </ButtonLink>
              <ButtonLink href={c.websiteUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                Site
              </ButtonLink>
              <ButtonLink href={`mailto:${c.internationalEmail}`} variant="ghost">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Contacto internacional
              </ButtonLink>
            </div>
            <div className="mt-4">
              <ButtonLink href={`mailto:${c.email}`} variant="primary">
                Solicitar proposta à Smartee
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}

export function Yongle() {
  const c = contacts.yongle;

  return (
    <section id="yongle" className="bg-warm text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-ink bg-ink px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] text-paper uppercase">
            OEM / Marca própria
          </span>
          <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
            Yongle Dental / SmileCorrect
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            Yongle Dental (Shenzhen) Co., Ltd.
          </h2>
          <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
            Marca própria: SmileCorrect
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            Fabricante localizado em Shenzhen especializado em clear aligners e serviços
            associados.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <h3 className="mt-14 font-mono text-[11px] tracking-[0.24em] uppercase">
            Serviços declarados
          </h3>
          <div className="mt-5 border border-line bg-white">
            <CheckList items={yongleServices} />
          </div>
        </Reveal>

        <Reveal delay={50}>
          <h3 className="mt-14 font-mono text-[11px] tracking-[0.24em] uppercase">
            Dados publicados no Made-in-China
          </h3>
          <div className="mt-5 border border-line bg-white">
            <CheckList items={yongleFacts} />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white px-6 py-8">
            <p className="font-display text-5xl text-gold">10+</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase">Linhas de produção</p>
          </div>
          <div className="bg-white px-6 py-8">
            <p className="font-display text-5xl text-gold">&gt;90%</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase">Exportação</p>
          </div>
          <div className="bg-white px-6 py-8">
            <p className="font-display text-4xl text-gold">1.000.000</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase">
              Sets de clear aligners / ano
            </p>
          </div>
          <div className="bg-white px-6 py-8">
            <p className="font-display text-3xl text-gold">US$2,5M – US$5M</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase">
              Valor anual de produção declarado
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          Capacidade e valores são informações declaradas no perfil comercial do fabricante e
          necessitam de validação numa due diligence.
        </p>
        <p className="mt-4 font-mono text-[12px] tracking-[0.16em] uppercase">
          Preço: sob cotação
        </p>

        <Reveal delay={80}>
          <Panel className="mt-12 p-8 md:p-12">
            <Eyebrow>Contacto — Yongle Dental</Eyebrow>
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
                    Website / Marketplace
                  </span>
                  <br />
                  {c.website}
                  <br />
                  dentallab-china.en.made-in-china.com
                </p>
              </div>
              <address className="not-italic text-sm leading-relaxed text-muted">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Localização</span>
                {c.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              <ButtonLink href={c.madeInChinaUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                Marketplace
              </ButtonLink>
            </div>
            <div className="mt-4">
              <ButtonLink href={`mailto:${c.email}`} variant="primary">
                Pedir cotação à Yongle
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}

export function Meiming() {
  const c = contacts.meiming;

  return (
    <section id="meiming" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] uppercase">
            FDA 510(k) confirmado
          </span>
          <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
            Shenzhen Meiming Dentistry Technology
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            Shenzhen Meiming Dentistry Technology Co., Ltd.
          </h2>
          <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
            Produto: Clear Aligner
          </p>
        </Reveal>

        <div className="mt-12 border border-ink bg-ink px-8 py-12 text-paper md:px-12">
          <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">FDA 510(k)</p>
          <p className="mt-4 font-display text-6xl leading-none tracking-[-0.04em] text-gold sm:text-8xl">
            K213026
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/75">
            Em Agosto de 2022, a FDA determinou o Clear Aligner da Shenzhen Meiming Dentistry
            Technology como Substantially Equivalent, através do processo K213026.
          </p>
          <p className="mt-6 font-mono text-[12px] tracking-[0.16em] uppercase">
            Sequential Aligner · Class II Medical Device
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-paper/70">
            A documentação FDA confirma que o produto consiste em alinhadores plásticos
            termoformados utilizados sequencialmente para movimentação ortodôntica.
          </p>
        </div>

        <div className="mt-10 border border-ink bg-white px-6 py-8">
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase">OEM / Private Label a confirmar</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            Não afirmar que a empresa oferece marca própria Maria Kerber sem confirmação comercial
            directa. Esta empresa entra na pesquisa devido à forte evidência regulatória de
            fabricação de clear aligners.
          </p>
        </div>

        <Reveal delay={80}>
          <Panel className="mt-12 p-8 md:p-12">
            <Eyebrow>Contacto — Meiming</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">{c.company}</h3>
            <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
              {c.contactType}
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
                    Website / Marketplace
                  </span>
                  <br />
                  FDA 510(k) {c.fda}
                </p>
              </div>
              <address className="not-italic text-sm leading-relaxed text-muted">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Localização</span>
                {c.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={`mailto:${c.email}`} variant="primary">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Contactar fabricante
              </ButtonLink>
              <ButtonLink href={c.phoneUrl} variant="ghost">
                <Phone className="h-4 w-4" strokeWidth={1.25} />
                Telefone
              </ButtonLink>
              <ButtonLink href={c.fdaUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                FDA 510(k)
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}

export function Beame() {
  const c = contacts.beame;

  return (
    <section id="beame" className="bg-warm text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Reveal>
          <span className="inline-block border border-gold bg-gold px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] uppercase">
            FDA 510(k) — 2026
          </span>
          <p className="mt-6 font-mono text-[11px] tracking-[0.24em] text-muted uppercase">
            Beame Medical Technology
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            Beame Medical Technology (Shenzhen) Limited
          </h2>
          <p className="mt-3 font-mono text-[12px] tracking-[0.16em] text-muted uppercase">
            Produto: Clear Aligner SCF-3348 · Shenzhen, China
          </p>
        </Reveal>

        <div className="mt-12 border border-ink bg-ink px-8 py-12 text-paper md:px-12">
          <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">FDA 510(k)</p>
          <p className="mt-4 font-display text-6xl leading-none tracking-[-0.04em] text-gold sm:text-8xl">
            K251454
          </p>
          <p className="mt-6 font-mono text-[12px] tracking-[0.16em] uppercase">
            Data da decisão: 7 Janeiro 2026 · Sequential Aligner · Class II
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/75">
            A FDA confirmou em Janeiro de 2026 a equivalência substancial do Clear Aligner
            SCF-3348 fabricado pela Beame Medical Technology.
          </p>
        </div>

        <div className="mt-10 border border-ink bg-white px-6 py-8">
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase">
            Private Label / OEM completo a confirmar
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
            A existência de um produto autorizado pela FDA NÃO significa automaticamente que
            estejam confirmados: portal White Label; packaging Maria Kerber; tratamento completo
            OEM; refinamentos; suporte clínico; condições comerciais europeias.
          </p>
        </div>

        <Reveal delay={80}>
          <Panel className="mt-12 p-8 md:p-12">
            <Eyebrow>Contacto — Beame</Eyebrow>
            <h3 className="mt-4 font-display text-3xl">{c.company}</h3>
            <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-gold uppercase">
              {c.contactType}
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
                    Website / Marketplace
                  </span>
                  <br />
                  FDA 510(k) {c.fda}
                </p>
              </div>
              <address className="not-italic text-sm leading-relaxed text-muted">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase">Localização</span>
                {c.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={`mailto:${c.email}`} variant="primary">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                Contactar Beame
              </ButtonLink>
              <ButtonLink href={c.phoneUrl} variant="ghost">
                <Phone className="h-4 w-4" strokeWidth={1.25} />
                Telefone
              </ButtonLink>
              <ButtonLink href={c.fdaUrl} variant="ghost" external>
                <Globe className="h-4 w-4" strokeWidth={1.25} />
                FDA 510(k)
              </ButtonLink>
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  );
}
