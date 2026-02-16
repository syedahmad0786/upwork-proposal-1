import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: NextRequest) {
  const supabase = getSupabase();
  const N8N_ONBOARDING_WEBHOOK_URL = process.env.N8N_ONBOARDING_WEBHOOK_URL!;
  try {
    const body = await request.json();
    const { email, website, services, city, competitors } = body;

    if (!email || !website || !services || !city) {
      return NextResponse.json(
        { error: 'Missing required fields: email, website, services, city' },
        { status: 400 }
      );
    }

    // Find customer by email and update with onboarding data
    const { data: existing } = await supabase
      .from('customers')
      .select('id, status')
      .eq('email', email)
      .in('status', ['paid', 'onboarding_sent'])
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (!existing) {
      return NextResponse.json(
        { error: 'No paid customer found with this email' },
        { status: 404 }
      );
    }

    // Update customer with onboarding data
    const { error: updateError } = await supabase
      .from('customers')
      .update({
        website,
        services,
        city,
        competitors: competitors || null,
        status: 'onboarding_completed',
        onboarding_completed_at: new Date().toISOString(),
      })
      .eq('id', existing.id);

    if (updateError) {
      console.error('Supabase update error:', updateError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Notify n8n that onboarding is complete
    try {
      await fetch(N8N_ONBOARDING_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'onboarding_completed',
          customer_id: existing.id,
          email,
          website,
          services,
          city,
          competitors: competitors || null,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('n8n onboarding webhook failed:', err);
    }

    return NextResponse.json({ success: true, message: 'Onboarding completed' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
