'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { pricingTiers } from '@/data/pricing';

const colorMap: Record<string, string> = {
  emerald: 'from-emerald-500/20 to-emerald-500/0 border-emerald-500/30',
  electric: 'from-electric/20 to-electric/0 border-electric/30',
  cyan: 'from-cyan/20 to-cyan/0 border-cyan/30',
  violet: 'from-violet/20 to-violet/0 border-violet/30',
  amber: 'from-amber/20 to-amber/0 border-amber/30',
};

const textColorMap: Record<string, string> = {
  emerald: 'text-emerald-400',
  electric: 'text-electric',
  cyan: 'text-cyan',
  violet: 'text-violet',
  amber: 'text-amber',
};

export default function PricingClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-4 inline-block">Transparent Pricing</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Invest in results,{' '}<span className="gradient-text">not guesswork</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            Every engagement starts with a free strategy session. We only proceed when the projected ROI justifies the investment.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={fadeInUp} className="relative">
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-electric to-cyan text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div
                  className={`h-full rounded-2xl border bg-gradient-to-b p-px ${
                    tier.highlighted
                      ? 'border-cyan/40 shadow-lg shadow-cyan/10'
                      : 'border-white/5'
                  }`}
                >
                  <div className={`h-full rounded-2xl bg-gradient-to-b ${colorMap[tier.color] || ''} bg-abyss p-8 flex flex-col`}>
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className={`text-4xl font-bold font-mono ${textColorMap[tier.color] || 'text-white'}`}>
                          {tier.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted">{tier.priceNote}</p>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-6">{tier.description}</p>
                    <div className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-electric mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-cloud">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={tier.ctaLink}
                      className={tier.highlighted ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                    >
                      <span>{tier.cta}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ-like Section */}
      <section className="section-padding bg-deep/50 border-y border-white/5">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="Common Questions" title="How our" titleHighlight="pricing works" />
          <div className="space-y-6">
            {[
              {
                q: 'How does the free strategy session work?',
                a: 'Book a 60-minute call where we audit your current processes, identify the highest-ROI automation opportunities, and deliver a prioritized roadmap within 48 hours — all at no cost.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No. Every project is scoped upfront with clear deliverables and pricing. If the scope changes, we discuss it before any additional work begins.',
              },
              {
                q: 'What if I need multiple services?',
                a: 'Most clients combine services for the best results. We offer package discounts for multi-service engagements — just ask during your strategy call.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes. Every project includes a support period (30 days minimum). For ongoing optimization and scaling, we offer monthly retainer packages tailored to your needs.',
              },
              {
                q: 'What if I\'m not sure which service I need?',
                a: 'That\'s exactly what the free strategy session is for. We\'ll assess your operations and recommend the highest-impact starting point.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <GlassCard padding="lg">
                  <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.a}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <MessageSquare className="text-electric mx-auto mb-4" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Not sure where to start?</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Book a free strategy session. We&apos;ll identify your best automation opportunity and show you the expected ROI.
            </p>
            <Link href="/book" className="btn-primary">
              <span>Book Free Strategy Call</span>
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
