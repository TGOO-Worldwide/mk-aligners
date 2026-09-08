"use client";

import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";
import { Eyebrow, Panel } from "@/components/landing/ui";
import { quoteEmail, implantQuoteEmail } from "@/data/content";

function fullText(subject: string, body: string) {
  return `Assunto / Subject: ${subject}\n\n${body}`;
}

function mailtoHref(subject: string, body: string) {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function EmailCard({
  lang,
  subject,
  body,
}: {
  lang: string;
  subject: string;
  body: string;
}) {
  const [copied, setCopied] = useState(false);
  const text = fullText(subject, body);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Panel className="flex h-full flex-col p-8 md:p-10">
      <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">{lang}</p>
      <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">Assunto / Subject</p>
      <p className="mt-2 text-sm leading-relaxed">{subject}</p>
      <pre className="mt-6 max-h-[420px] flex-1 overflow-auto border border-line bg-warm p-4 font-sans text-[13px] leading-relaxed whitespace-pre-wrap text-ink">
        {body}
      </pre>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 font-mono text-[11px] font-medium tracking-[0.22em] text-ink uppercase transition-colors hover:bg-gold-light"
        >
          {copied ? <Check className="h-4 w-4" strokeWidth={1.25} /> : <Copy className="h-4 w-4" strokeWidth={1.25} />}
          {copied ? "Copiado" : "Copiar e-mail"}
        </button>
        <a
          href={mailtoHref(subject, body)}
          className="inline-flex items-center justify-center gap-2 border border-line px-6 py-3.5 font-mono text-[11px] font-medium tracking-[0.22em] uppercase transition-colors hover:bg-warm"
        >
          <Mail className="h-4 w-4" strokeWidth={1.25} />
          Abrir no e-mail
        </a>
      </div>
    </Panel>
  );
}

export function QuoteEmail() {
  return (
    <section id="email-cotacao" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Eyebrow>Pedido de cotação</Eyebrow>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
          E-mail para solicitar proposta OEM / Private Label
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Texto objectivo para enviar a cada fabricante. Cobre preços por tratamento, marca
          própria MK, transporte DDP para Lisboa e documentação legal para Portugal e União
          Europeia. Copiar e colar, ou abrir no cliente de e-mail.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <EmailCard lang={quoteEmail.pt.lang} subject={quoteEmail.pt.subject} body={quoteEmail.pt.body} />
          <EmailCard lang={quoteEmail.en.lang} subject={quoteEmail.en.subject} body={quoteEmail.en.body} />
        </div>
      </div>
    </section>
  );
}

export function ImplantQuoteEmail() {
  return (
    <section id="email-cotacao-implantes" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <Eyebrow>Pedido de cotação — Implantes</Eyebrow>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
          E-mail para solicitar proposta OEM / Private Label de implantes
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Texto objectivo para enviar à DentalMaster. Cobre preços por sistema, volumes,
          marca própria Maria Kerber Implants, transporte DDP para Lisboa e documentação
          regulamentar para Portugal e União Europeia. Copiar e colar, ou abrir no cliente
          de e-mail.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <EmailCard
            lang={implantQuoteEmail.pt.lang}
            subject={implantQuoteEmail.pt.subject}
            body={implantQuoteEmail.pt.body}
          />
          <EmailCard
            lang={implantQuoteEmail.en.lang}
            subject={implantQuoteEmail.en.subject}
            body={implantQuoteEmail.en.body}
          />
        </div>
      </div>
    </section>
  );
}
