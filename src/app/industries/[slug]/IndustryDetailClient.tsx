'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getIcon } from '@/components/ui/IconMap';
import { services } from '@/data/services';
import type { Industry } from '@/data/industries';

const colorTextMap: Record<string, string> = {
  'neon-pink': 'text-neon-pink',
  electric: 'text-electric',
  cyan: 'text-cyan',
  violet: 'text-violet',
  'neon-green': 'text-neon-green',
  amber: 'text-amber',
};

const colorBgMap: Record<string, string> = {
  'neon-pink': 'bg-neon-pink/10',
  electric: 'bg-electric/10',
  cyan: 'bg-cyan/10',
  violet: 'bg-violet/10',
  'neon-green': 'bg-neon-green/10',
  amber: 'bg-amber/10',
};

export default function IndustryDetailClient({ industry }: { industry: Industry }) {
  const Icon = getIcon(industry.icon);
  const relatedServices = services.filter((s) => industry.services.includes(s.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-muted hover:text-electric transition-colors mb-6">
              <ArrowLeft size={14} /> All Industries
            </Link>
          </motion.div>
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-4 mb-4">
              {Icon && (
                <div className={`w-14 h-14 rounded-2xl ${colorBgMap[industry.color] || 'bg-electric/10'} flex items-center justify-center`}>
                  <Icon size={28} className={colorTextMap[industry.color] || 'text-electric'} />
                </div>
              )}
              <span className="badge">{industry.title}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              AI Automation for{' '}<span className={colorTextMap[industry.color] || 'text-electric'}>{industry.title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-lg text-muted leading-relaxed">
              {industry.description}
            </motion.p>
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8 mt-8"
          >
            {industry.metrics.map((m) => (
              <div key={m.label}>
                <div className={`text-3xl font-bold font-mono ${colorTextMap[industry.color] || 'text-electric'}`}>{m.value}</div>
                <div className="text-sm text-muted">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <GlassCard padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle size={20} className="text-amber" />
                  <h2 className="text-xl font-bold text-white">Industry Challenges</h2>
                </div>
                <div className="space-y-4">
                  {industry.challenges.map((c) => (
                    <div key={c} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                      <span className="text-cloud">{c}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <GlassCard padding="lg" glow="green">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb size={20} className="text-neon-green" />
                  <h2 className="text-xl font-bold text-white">Our Solutions</h2>
                </div>
                <div className="space-y-4">
                  {industry.solutions.map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                      <span className="text-cloud">{s}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-deep/50 border-y border-white/5">
        <div className="container-custom">
          <SectionHeading badge="Recommended Services" title="Solutions that" titleHighlight="fit your industry" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {relatedServices.map((service) => {
              const SIcon = getIcon(service.icon);
              return (
                <motion.div key={service.slug} variants={fadeInUp}>
                  <Link href={`/services/${service.slug}`} className="block group">
                    <GlassCard padding="lg" className="h-full">
                      {SIcon && <SIcon size={24} className="text-electric mb-3" />}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric transition-colors">{service.shortTitle}</h3>
                      <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to transform your {industry.title.toLowerCase()} operations?
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Book a free strategy session and get a custom automation roadmap for your industry.
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
