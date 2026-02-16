'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getIcon } from '@/components/ui/IconMap';
import { industries } from '@/data/industries';

const colorTextMap: Record<string, string> = {
  'neon-pink': 'text-neon-pink',
  electric: 'text-electric',
  cyan: 'text-cyan',
  violet: 'text-violet',
  amber: 'text-amber',
};

export default function IndustriesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-4 inline-block">Industries We Serve</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Automation solutions for{' '}<span className="gradient-text">every industry</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            From healthcare to SaaS, we&apos;ve deployed 100+ automations across diverse industries. Here&apos;s how we help each one.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((industry) => {
              const Icon = getIcon(industry.icon);
              return (
                <motion.div key={industry.slug} variants={fadeInUp}>
                  <Link href={`/industries/${industry.slug}`} className="block group h-full">
                    <GlassCard padding="lg" className="h-full flex flex-col">
                      {Icon && <Icon size={28} className={`${colorTextMap[industry.color] || 'text-electric'} mb-4`} />}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric transition-colors">{industry.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{industry.description}</p>
                      <div className="flex items-center gap-4 mb-4">
                        {industry.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <div className={`text-lg font-bold font-mono ${colorTextMap[industry.color] || 'text-electric'}`}>{m.value}</div>
                            <div className="text-xs text-muted">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-electric text-sm font-medium group-hover:gap-3 transition-all">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </GlassCard>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-deep/50 border-t border-white/5">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Don&apos;t see your industry?</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Our automation solutions are adaptable to any industry. Let&apos;s discuss your specific needs.
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
