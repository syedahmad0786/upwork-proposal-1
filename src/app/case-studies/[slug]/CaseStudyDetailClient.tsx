'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import type { CaseStudy } from '@/data/caseStudies';

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetailClient({ caseStudy: cs }: Props) {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <Link href="/case-studies" className="text-sm text-dim hover:text-electric transition-colors">Case Studies</Link>
              <ChevronRight size={14} className="text-dim" />
              <span className="text-sm text-electric">{cs.title}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 mb-4">
              <span className="badge">{cs.industry}</span>
              <span className="text-sm text-dim">{cs.client}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }} className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              {cs.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-muted mb-8">
              {cs.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-6">
              <div>
                <div className="text-4xl font-bold font-mono gradient-text">{cs.metric}</div>
                <div className="text-sm text-dim">{cs.metricLabel}</div>
              </div>
              {cs.secondaryMetric && (
                <div>
                  <div className="text-4xl font-bold font-mono gradient-text-electric">{cs.secondaryMetric}</div>
                  <div className="text-sm text-dim">{cs.secondaryMetricLabel}</div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-muted leading-relaxed">{cs.challenge}</p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
                <p className="text-muted leading-relaxed">{cs.solution}</p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
                <div className="space-y-3">
                  {cs.results.map((r) => (
                    <div key={r} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-electric mt-0.5 flex-shrink-0" />
                      <span className="text-cloud">{r}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {cs.testimonial && (
                <ScrollReveal>
                  <GlassCard padding="lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-amber fill-amber" />)}
                    </div>
                    <blockquote className="text-lg text-cloud leading-relaxed italic mb-6">
                      &ldquo;{cs.testimonial.quote}&rdquo;
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">{cs.testimonial.author}</div>
                      <div className="text-sm text-dim">{cs.testimonial.role}</div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              )}
            </div>

            <div className="space-y-6">
              <GlassCard padding="md">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services Used</h3>
                <div className="flex flex-wrap gap-2">
                  {cs.services.map((s) => <span key={s} className="badge text-xs">{s}</span>)}
                </div>
              </GlassCard>
              <GlassCard padding="md">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {cs.tools.map((t) => (
                    <span key={t} className="text-xs bg-white/5 px-3 py-1.5 rounded-lg text-dim">{t}</span>
                  ))}
                </div>
              </GlassCard>
              <GlassCard padding="md" glow="green">
                <h3 className="text-sm font-semibold text-white mb-3">Want similar results?</h3>
                <p className="text-sm text-dim mb-4">Book a free call and get a custom roadmap.</p>
                <Link href="/book" className="btn-primary w-full justify-center text-sm py-2.5">
                  <span>Book Strategy Call</span>
                  <ArrowRight size={14} />
                </Link>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
