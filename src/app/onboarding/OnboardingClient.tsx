'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function OnboardingClient() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      services: (form.elements.namedItem('services') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      competitors: (form.elements.namedItem('competitors') as HTMLInputElement).value || '',
    };

    try {
      const res = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || 'Something went wrong');
      }

      setFormState('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-custom relative z-10 text-center max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl p-12"
          >
            <CheckCircle2 size={64} className="text-emerald-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">You&apos;re all set!</h1>
            <p className="text-muted leading-relaxed">
              Your onboarding is complete. We&apos;ll start optimizing your AI visibility within 24 hours. You&apos;ll receive updates via email.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-4 inline-block"
          >
            Step 2 of 2
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
          >
            Complete your{' '}<span className="gradient-text">onboarding</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted leading-relaxed"
          >
            Takes about 2 minutes. We need a few details to start your optimization.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding pt-8">
        <div className="container-custom max-w-xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 space-y-6"
          >
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address <span className="text-electric">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors text-sm"
              />
              <p className="text-xs text-muted mt-1">Use the same email you purchased with</p>
            </div>

            {/* Website */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
                Website URL <span className="text-electric">*</span>
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                placeholder="https://yourbusiness.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors text-sm"
              />
            </div>

            {/* Services */}
            <div>
              <label htmlFor="services" className="block text-sm font-medium text-white mb-2">
                Your main services / products <span className="text-electric">*</span>
              </label>
              <input
                type="text"
                id="services"
                name="services"
                required
                placeholder="e.g. Web design, Marketing consulting, Plumbing"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors text-sm"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-white mb-2">
                City / Service area <span className="text-electric">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="e.g. Austin, TX"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors text-sm"
              />
            </div>

            {/* Competitors (optional) */}
            <div>
              <label htmlFor="competitors" className="block text-sm font-medium text-white mb-2">
                Competitors <span className="text-white/30">(optional)</span>
              </label>
              <input
                type="text"
                id="competitors"
                name="competitors"
                placeholder="e.g. competitor1.com, competitor2.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors text-sm"
              />
            </div>

            {/* Error */}
            {formState === 'error' && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Complete Onboarding</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
