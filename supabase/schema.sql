-- AiXCEL Solutions - Lean Revenue Core
-- Supabase Schema for Stripe Payment → Onboarding Pipeline

-- Customers table: tracks payment + onboarding status
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Payment data (from Stripe webhook)
  email TEXT NOT NULL,
  stripe_customer_id TEXT,
  stripe_payment_intent_id TEXT,
  amount_paid INTEGER, -- in cents
  payment_date TIMESTAMPTZ,

  -- Onboarding data (from form submission)
  website TEXT,
  services TEXT,
  city TEXT,
  competitors TEXT,
  onboarding_completed_at TIMESTAMPTZ,

  -- Status tracking (minimal)
  status TEXT NOT NULL DEFAULT 'paid'
    CHECK (status IN ('paid', 'onboarding_sent', 'onboarding_completed', 'ready_for_optimization')),

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for quick lookups
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_status ON customers(status);
CREATE INDEX idx_customers_stripe_payment ON customers(stripe_payment_intent_id);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER customers_updated_at
  BEFORE UPDATE ON customers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Row Level Security
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (for n8n + API routes)
CREATE POLICY "Service role full access" ON customers
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
