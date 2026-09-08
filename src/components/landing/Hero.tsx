import Image from "next/image";
import { ButtonLink, Eyebrow } from "@/components/landing/ui";
import { AlignerWire } from "@/components/landing/illustrations";
import { Reveal } from "@/components/landing/Reveal";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute inset-y-0 right-[-12%] hidden w-[62%] lg:block">
          <AlignerWire />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" />

      <div className="relative mx-auto flex min-h-screen max-w-[1240px] flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:px-10 lg:pb-28">
        <Reveal>
          <div className="flex flex-col gap-10 lg:max-w-[720px]">
            <div className="space-y-5">
              <p className="font-mono text-[11px] tracking-[0.34em] text-gold uppercase">
                Máquina de Vendas
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Image
                  src="/brand/tgoo-wordmark.svg"
                  alt="TGOO"
                  width={220}
                  height={18}
                  className="h-4 w-auto"
                  priority
                />
                <span className="h-4 w-px bg-paper/25" />
                <div className="flex items-center gap-3">
                  <Image
                    src="/brand/mk-white-logo.svg"
                    alt=""
                    width={45}
                    height={26}
                    className="h-5 w-auto"
                    priority
                  />
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase">
                    Maria Kerber Clinic
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block border border-gold/50 px-3 py-1.5 font-mono text-[10px] tracking-[0.26em] text-gold uppercase">
                Pesquisa internacional de fornecedores
              </span>
            </div>

            <h1 className="font-display text-[42px] leading-[0.95] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[76px]">
              Alinhadores Invisíveis com Marca Própria Maria Kerber
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-paper/72">
              Análise estratégica de fabricantes OEM e Private Label para desenvolver uma
              linha própria de alinhadores invisíveis, reduzir custos e aumentar a margem
              por tratamento.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#china" variant="primary">
                Ver fabricantes
              </ButtonLink>
              <ButtonLink href="#simulacao" variant="secondary">
                Ver comparação de custos
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px border border-paper/10 bg-paper/10 sm:grid-cols-4">
          {[
            ["OEM", "Marca própria"],
            ["K Line", "Modelo actual"],
            ["6", "fábricas CN"],
            ["UE", "Critério regulatório"],
          ].map(([value, label]) => (
            <div key={label} className="bg-ink px-5 py-6">
              <div className="font-display text-3xl text-gold sm:text-4xl">{value}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.2em] text-paper/55 uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Opportunity() {
  return (
    <section id="visao-geral" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[1240px] gap-16 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-32">
        <Reveal>
          <Eyebrow>A oportunidade</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            A oportunidade
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            A Maria Kerber Clinic pode comercializar alinhadores invisíveis com identidade
            própria sem necessariamente construir uma fábrica ou desenvolver toda a
            tecnologia internamente.
          </p>
          <p className="mt-6 text-sm tracking-[0.04em] text-ink/80 uppercase">
            Fabricantes OEM e Private Label podem assumir componentes como:
          </p>
          <div className="mt-6 border border-line">
            <ul className="divide-y divide-line">
              {[
                "planeamento ortodôntico digital",
                "produção dos alinhadores",
                "simulação 3D",
                "portal para gestão de casos",
                "embalagens personalizadas",
                "caixas e estojos com a marca Maria Kerber",
                "retentores",
                "suporte técnico e clínico",
                "logística internacional",
              ].map((item) => (
                <li key={item} className="flex gap-3 px-4 py-3 text-[15px]">
                  <span className="text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border border-line bg-warm p-6 md:p-8">
            <Eyebrow>Cadeia de valor</Eyebrow>
            <ol className="mt-8 space-y-0">
              {[
                "PACIENTE",
                "MARIA KERBER CLINIC",
                "PORTAL DIGITAL",
                "PLANEAMENTO ORTODÔNTICO",
                "FABRICAÇÃO",
                "MARIA KERBER ALIGNERS",
              ].map((step, index, list) => (
                <li key={step} className="flex flex-col items-center">
                  <div className="w-full border border-ink bg-white px-4 py-4 text-center font-mono text-[12px] tracking-[0.2em]">
                    {step}
                  </div>
                  {index < list.length - 1 ? (
                    <div className="flex h-8 items-center font-mono text-gold" aria-hidden>
                      ↓
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-line pt-6 font-display text-2xl leading-snug">
              A marca é Maria Kerber. A produção pode ser realizada por um parceiro
              especializado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
