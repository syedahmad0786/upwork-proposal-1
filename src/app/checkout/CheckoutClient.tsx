'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import ScrollReveal from '@/components/ui/ScrollReveal';

const STRIPE_PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || '#';

const features = [
  'Full AI visibility audit of your website',
  'Competitor gap analysis',
  'Optimized structured data implementation',
  'AI search engine submission',
  'Performance monitoring setup',
  'Detailed optimization report',
];

const guarantees = [
  { icon: Shield, text: 'Secure payment via Stripe' },
  { icon: Zap, text: 'Onboarding starts within 24 hours' },
  { icon: Clock, text: 'Results in 2–3 weeks' },
];

export default function CheckoutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="badge mb-4 inline-block"
          >
            AI Visibility Package
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Get found by{' '}<span className="gradient-text">AI search engines</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted leading-relaxed"
          >
            One-time investment. Full optimization. Measurable results.
          </motion.p>
        </div>
      </section>

      {/* Checkout Card */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left: What you get */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">What&apos;s included</h2>
                <div className="space-y-4 mb-8">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-electric mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-cloud">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-6 border-t border-white/10">
                  {guarantees.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <Icon size={16} className="text-cyan flex-shrink-0" />
                      <span className="text-xs text-muted">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Price + CTA */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-2xl border border-cyan/40 shadow-lg shadow-cyan/10 bg-gradient-to-b from-cyan/20 to-cyan/0 p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-2">
                    <span className="bg-gradient-to-r from-electric to-cyan text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-4 mb-1">
                    AI Visibility Optimization
                  </h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold font-mono text-cyan">$197</span>
                  </div>
                  <p className="text-xs text-muted mb-6">One-time payment. No recurring fees.</p>
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    Get your business visible in ChatGPT, Perplexity, Google AI Overviews, and every AI search engine that matters. We handle everything.
                  </p>
                </div>

                <a
                  href={STRIPE_PAYMENT_LINK}
                  className="btn-primary w-full justify-center text-center"
                >
                  <span>Purchase Now — $197</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-deep/50 border-y border-white/5">
        <div className="container-custom text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What happens after purchase?
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              {[
                { step: '1', text: 'You receive a confirmation email instantly' },
                { step: '2', text: 'Fill out a quick onboarding form (2 minutes)' },
                { step: '3', text: 'We start optimizing your AI visibility within 24 hours' },
                { step: '4', text: 'Get your optimization report in 2–3 weeks' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-electric/20 text-electric text-sm font-bold flex items-center justify-center">
                    {step}
                  </span>
                  <p className="text-sm text-cloud pt-1">{text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
