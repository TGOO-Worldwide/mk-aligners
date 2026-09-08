"use server";

import { z } from "zod";
import { getPrisma, isDatabaseConfigured } from "@/lib/prisma";
import { generateGeminiText, isVertexConfigured } from "@/lib/gemini";
import { getQuoteToEmail, getResendClient, getResendFrom, isResendConfigured } from "@/lib/resend";
import { getQuoteEmailTemplate } from "@/features/auth/email-templates";

const manufacturerSchema = z.enum(["k-line", "best-smile", "chuhongxin"]);

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email(),
  phone: z.string().trim().max(40).optional(),
  organization: z.string().trim().max(160).optional(),
  manufacturers: z.array(manufacturerSchema).min(1),
  message: z.string().trim().max(4000).optional(),
  includePilot: z.boolean(),
});

const manufacturerLabels: Record<z.infer<typeof manufacturerSchema>, string> = {
  "k-line": "K Line Europe GmbH",
  "best-smile": "Shenzhen Best Smile Tech Co., Ltd.",
  "chuhongxin": "Shenzhen Chuhongxin Technology Co., Ltd.",
};

export type QuoteActionResult =
  | { ok: true; id?: number }
  | { ok: false; error: string };

export async function submitQuoteAction(input: unknown): Promise<QuoteActionResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Preencha os campos obrigatórios com dados válidos." };
  }

  const data = parsed.data;
  const manufacturerNames = data.manufacturers.map((key) => manufacturerLabels[key]);

  let aiDraft: string | undefined;
  let quoteId: number | undefined;

  if (isVertexConfigured()) {
    try {
      const generated = await generateGeminiText({
        systemInstruction:
          "Redige um pedido de cotação B2B em português europeu, formal e factual. Não inventes preços, certificações, prazos ou contactos. Usa apenas os dados fornecidos.",
        prompt: [
          "Pedido de cotação OEM/Private Label para alinhadores invisíveis da Maria Kerber Clinic.",
          `Contacto: ${data.name} <${data.email}>`,
          data.organization ? `Organização: ${data.organization}` : "",
          `Fabricantes a contactar: ${manufacturerNames.join("; ")}`,
          data.includePilot ? "Incluir pedido de amostras e caso piloto." : "",
          data.message ? `Notas: ${data.message}` : "",
          "Pedir preços para até 6, 12, 24 e 25+ etapas, uma e duas arcadas, planeamento, revisões, refinamentos, retentores, packaging, portal, transporte para Lisboa, Incoterm, IVA/importação, MDR/CE, ISO 13485, EU Authorized Representative, documentação técnica, amostras e caso piloto.",
        ]
          .filter(Boolean)
          .join("\n"),
      });
      aiDraft = generated.text;

      if (isDatabaseConfigured()) {
        await getPrisma().aiGeneration.create({
          data: {
            type: "rfq_draft",
            status: "completed",
            prompt: generated.text.slice(0, 200),
            response: generated.text,
            model: generated.model,
            tokensInput: generated.inputTokens,
            tokensOutput: generated.outputTokens,
          },
        });
      }
    } catch {
      aiDraft = undefined;
    }
  }

  if (isDatabaseConfigured()) {
    try {
      const created = await getPrisma().quoteRequest.create({
        data: {
          name: data.name,
          email: data.email.toLowerCase(),
          phone: data.phone || null,
          organization: data.organization || null,
          manufacturers: data.manufacturers,
          message: data.message || null,
          includePilot: data.includePilot,
          aiDraft,
          status: "pending",
        },
      });
      quoteId = created.id;
    } catch {
      quoteId = undefined;
    }
  }

  if (isResendConfigured()) {
    const to = getQuoteToEmail() || data.email;
    const { error } = await getResendClient().emails.send({
      from: getResendFrom(),
      to,
      replyTo: data.email,
      subject: "Pedido de cotação — Maria Kerber Aligners",
      html: getQuoteEmailTemplate({
        name: data.name,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        manufacturers: manufacturerNames,
        message: data.message,
        includePilot: data.includePilot,
        aiDraft,
      }),
    });

    if (error) {
      return {
        ok: false,
        error: "O pedido foi preparado, mas o email não pôde ser enviado.",
      };
    }

    if (quoteId && isDatabaseConfigured()) {
      await getPrisma().quoteRequest.update({
        where: { id: quoteId },
        data: { status: "sent" },
      });
    }
  } else if (!quoteId) {
    return {
      ok: false,
      error: "O envio de cotações ainda não está configurado neste ambiente.",
    };
  }

  return { ok: true, id: quoteId };
}
