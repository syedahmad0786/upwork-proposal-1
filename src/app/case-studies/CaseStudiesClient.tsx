'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge-green mb-4 inline-block">
            Proven Results
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Real outcomes for{' '}
            <span className="gradient-text">real businesses</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted">
            Every engagement starts with a clear problem and ends with measurable results.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.slug} variants={fadeInUp}>
                <Link href={`/case-studies/${cs.slug}`}>
                  <GlassCard padding="lg" className="group cursor-pointer">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="badge">{cs.industry}</span>
                          <span className="text-xs text-dim">•</span>
                          <span className="text-xs text-dim">{cs.client}</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-electric transition-colors">
                          {cs.title}
                        </h2>
                        <p className="text-muted leading-relaxed mb-6">{cs.subtitle}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cs.services.map((s) => (
                            <span key={s} className="text-xs bg-white/5 px-3 py-1 rounded-full text-dim">{s}</span>
                          ))}
                        </div>
                        {cs.testimonial && (
                          <blockquote className="text-sm text-dim italic border-l-2 border-electric/30 pl-4 max-w-lg">
                            &ldquo;{cs.testimonial.quote.substring(0, 120)}...&rdquo;
                            <br />
                            <span className="text-xs not-italic text-ghost">— {cs.testimonial.author}, {cs.testimonial.role}</span>
                          </blockquote>
                        )}
                      </div>
                      <div className="flex flex-col justify-center gap-4">
                        <div className="text-center p-6 rounded-2xl bg-white/3 border border-white/5">
                          <div className="text-4xl font-bold font-mono gradient-text mb-1">{cs.metric}</div>
                          <div className="text-sm text-dim">{cs.metricLabel}</div>
                        </div>
                        {cs.secondaryMetric && (
                          <div className="text-center p-6 rounded-2xl bg-white/3 border border-white/5">
                            <div className="text-4xl font-bold font-mono gradient-text-electric mb-1">{cs.secondaryMetric}</div>
                            <div className="text-sm text-dim">{cs.secondaryMetricLabel}</div>
                          </div>
                        )}
                        <span className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-electric mt-2">
                          Read Full Case Study <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Want results like these?</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">Book a free strategy call and get a personalized automation roadmap.</p>
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
