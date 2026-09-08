export function getOtpEmailTemplate(code: string) {
  return `
  <div style="margin:0;padding:0;background:#F3EFE8;font-family:Georgia,serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #d8d0c4;">
            <tr>
              <td style="background:#12100E;padding:28px;color:#F3EFE8;">
                <div style="font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#C89A62;">Máquina de Vendas</div>
                <div style="margin-top:8px;font-size:22px;">TGOO × Maria Kerber Clinic</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0;color:#6B645C;font-size:14px;font-family:Arial,sans-serif;">Use este código para iniciar sessão:</p>
                <p style="margin:20px 0 12px;font-size:42px;line-height:1;letter-spacing:10px;color:#12100E;">${code}</p>
                <p style="margin:0;color:#6B645C;font-size:14px;font-family:Arial,sans-serif;">Este código expira em 10 minutos.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}

export function getQuoteEmailTemplate(input: {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  manufacturers: string[];
  message?: string;
  includePilot: boolean;
  aiDraft?: string;
}) {
  const manufacturers = input.manufacturers.join(", ");
  return `
  <div style="margin:0;padding:0;background:#F3EFE8;font-family:Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #d8d0c4;">
            <tr>
              <td style="background:#12100E;padding:28px;color:#F3EFE8;">
                <div style="font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#C89A62;">Pedido de cotação</div>
                <div style="margin-top:8px;font-size:22px;font-family:Georgia,serif;">Maria Kerber Aligners</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;color:#12100E;font-size:14px;line-height:1.6;">
                <p><strong>Nome:</strong> ${escapeHtml(input.name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
                <p><strong>Telefone:</strong> ${escapeHtml(input.phone || "—")}</p>
                <p><strong>Organização:</strong> ${escapeHtml(input.organization || "—")}</p>
                <p><strong>Fabricantes:</strong> ${escapeHtml(manufacturers)}</p>
                <p><strong>Caso piloto:</strong> ${input.includePilot ? "Sim" : "Não"}</p>
                <p><strong>Mensagem:</strong><br/>${escapeHtml(input.message || "—")}</p>
                ${
                  input.aiDraft
                    ? `<hr style="border:none;border-top:1px solid #d8d0c4;margin:24px 0;" /><p><strong>Rascunho RFQ (IA):</strong></p><pre style="white-space:pre-wrap;font-family:Georgia,serif;font-size:13px;line-height:1.55;">${escapeHtml(input.aiDraft)}</pre>`
                    : ""
                }
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
