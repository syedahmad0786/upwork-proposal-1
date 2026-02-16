import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('customers')
    .select('id, email, status, created_at')
    .eq('email', email)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error || !data) {
    return NextResponse.json({ status: 'not_found' });
  }

  return NextResponse.json({
    status: data.status,
    customer_id: data.id,
  });
}
