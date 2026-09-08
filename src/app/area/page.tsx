import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/features/auth/auth";
import { getPrisma, isDatabaseConfigured } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AreaPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/iniciar-sessao");
  }

  const quotes = isDatabaseConfigured()
    ? await getPrisma().quoteRequest.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
      })
    : [];

  return (
    <main className="min-h-screen bg-paper px-5 py-16 text-ink">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">Área interna</p>
        <h1 className="mt-4 font-display text-4xl">Pedidos de cotação</h1>
        <p className="mt-3 text-sm text-muted">{session.user.email}</p>
        <div className="mt-10 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-ink text-paper">
              <tr>
                <th className="px-4 py-3 font-mono text-[11px] tracking-[0.16em] uppercase">Data</th>
                <th className="px-4 py-3 font-mono text-[11px] tracking-[0.16em] uppercase">Nome</th>
                <th className="px-4 py-3 font-mono text-[11px] tracking-[0.16em] uppercase">Email</th>
                <th className="px-4 py-3 font-mono text-[11px] tracking-[0.16em] uppercase">Estado</th>
              </tr>
            </thead>
            <tbody>
              {quotes.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-muted" colSpan={4}>
                    Ainda não existem pedidos.
                  </td>
                </tr>
              ) : (
                quotes.map((quote) => (
                  <tr key={quote.id} className="border-t border-line">
                    <td className="px-4 py-3">{quote.createdAt.toISOString().slice(0, 10)}</td>
                    <td className="px-4 py-3">{quote.name}</td>
                    <td className="px-4 py-3">{quote.email}</td>
                    <td className="px-4 py-3 uppercase">{quote.status}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
