import { NextResponse } from "next/server";
import { getPrisma, isDatabaseConfigured } from "@/lib/prisma";
import { getStripeClient, isStripeConfigured } from "@/lib/stripe";

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "Stripe não configurado." }, { status: 501 });
  }

  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim();

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Assinatura em falta." }, { status: 400 });
  }

  const rawBody = await request.text();
  const stripe = getStripeClient();

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Webhook inválido." }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ received: true, persisted: false });
  }

  const prisma = getPrisma();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const sessionId = session.id;
    const paymentIntent = typeof session.payment_intent === "string" ? session.payment_intent : null;

    await prisma.payment.updateMany({
      where: { stripeCheckoutSessionId: sessionId },
      data: {
        status: "paid",
        stripePaymentIntentId: paymentIntent,
      },
    });
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object;
    await prisma.payment.updateMany({
      where: { stripeCheckoutSessionId: session.id, status: "pending" },
      data: { status: "failed" },
    });
  }

  return NextResponse.json({ received: true });
}
