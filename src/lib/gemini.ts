import { GoogleGenAI } from "@google/genai";

const DEFAULT_LOCATION = "europe-west1";
const DEFAULT_MODEL = "gemini-2.5-flash";

export type GeminiTextResult = {
  text: string;
  inputTokens: number | null;
  outputTokens: number | null;
  model: string;
};

export function isVertexConfigured(): boolean {
  return Boolean(process.env.GOOGLE_CLOUD_PROJECT?.trim());
}

function getGenAI(): GoogleGenAI {
  const project = process.env.GOOGLE_CLOUD_PROJECT?.trim();
  if (!project) {
    throw new Error("GOOGLE_CLOUD_PROJECT não configurado para Vertex AI.");
  }

  return new GoogleGenAI({
    vertexai: true,
    project,
    location: process.env.GOOGLE_CLOUD_LOCATION?.trim() || DEFAULT_LOCATION,
  });
}

export async function generateGeminiText(input: {
  prompt: string;
  systemInstruction?: string;
}): Promise<GeminiTextResult> {
  const model = process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL;
  const ai = getGenAI();
  const supportsThinkingConfig = /gemini-2\.5|gemini-3/i.test(model);

  const response = await ai.models.generateContent({
    model,
    contents: input.prompt,
    config: {
      ...(supportsThinkingConfig ? { thinkingConfig: { thinkingBudget: 0 } } : {}),
      ...(input.systemInstruction ? { systemInstruction: input.systemInstruction } : {}),
    },
  });

  const text = response.text?.trim();
  if (!text) {
    throw new Error("Resposta vazia do modelo Vertex AI.");
  }

  const usage = response.usageMetadata;

  return {
    text,
    model,
    inputTokens: typeof usage?.promptTokenCount === "number" ? usage.promptTokenCount : null,
    outputTokens: typeof usage?.candidatesTokenCount === "number" ? usage.candidatesTokenCount : null,
  };
}
