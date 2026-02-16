'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { processSteps } from '@/data/stats';

const detailedSteps = [
  {
    ...processSteps[0],
    details: [
      'Deep dive into your current workflows and pain points',
      'Map all manual processes and their time cost',
      'Identify highest-ROI automation opportunities',
      'Understand your tech stack and integration needs',
      'Align on goals, timeline, and success metrics',
    ],
  },
  {
    ...processSteps[1],
    details: [
      'Prioritized automation roadmap with clear milestones',
      'ROI projections for each automation opportunity',
      'Technology recommendations and architecture plan',
      'Timeline and resource requirements',
      'Delivered within 48 hours of discovery call',
    ],
  },
  {
    ...processSteps[2],
    details: [
      'Rapid sprint-based development in 1-3 week cycles',
      'Daily progress updates and demo sessions',
      'Thorough testing with real data before go-live',
      'Documentation and training materials included',
      'Visible savings within the first 2 weeks of deployment',
    ],
  },
  {
    ...processSteps[3],
    details: [
      'Performance monitoring and real-time dashboards',
      'Weekly optimization based on actual usage data',
      'Proactive identification of new automation opportunities',
      'Ongoing support and maintenance included',
      '85% of clients expand to additional projects',
    ],
  },
];

export default function ProcessClient() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-4 inline-block">Our Process</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            From discovery to{' '}<span className="gradient-text">deployed in weeks</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            Our proven 4-step process ensures you see real results fast — not months of planning without action.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {detailedSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <GlassCard padding="lg">
                  <div className="grid md:grid-cols-[120px_1fr] gap-6">
                    <div>
                      <div className="text-6xl font-bold font-mono text-electric/20">{step.number}</div>
                      <span className="text-xs font-mono text-electric">{step.duration}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-muted leading-relaxed mb-6">{step.description}</p>
                      <div className="space-y-3">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-neon-green mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-cloud">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep/50 border-t border-white/5">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Step 1 starts with a call</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">60 minutes that could save your team hundreds of hours. No commitment, no pressure.</p>
            <Link href="/book" className="btn-primary"><span>Book Free Discovery Call</span><ArrowRight size={18} /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
