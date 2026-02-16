import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const N8N_WEBHOOK_URL = process.env.N8N_PAYMENT_WEBHOOK_URL!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email || session.customer_email;
    if (!email) {
      console.error('No email in checkout session');
      return NextResponse.json({ error: 'No email' }, { status: 400 });
    }

    // Store in Supabase
    const { data, error } = await supabase
      .from('customers')
      .insert({
        email,
        stripe_customer_id: session.customer as string,
        stripe_payment_intent_id: session.payment_intent as string,
        amount_paid: session.amount_total,
        payment_date: new Date().toISOString(),
        status: 'paid',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Trigger n8n workflow for onboarding email
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'payment_success',
          customer_id: data.id,
          email,
          amount: session.amount_total,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('n8n webhook trigger failed:', err);
      // Don't fail the Stripe webhook — n8n trigger is best-effort
    }

    console.log(`Payment recorded for ${email}, customer ID: ${data.id}`);
  }

  return NextResponse.json({ received: true });
}
