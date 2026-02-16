'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Calendar, Zap, ArrowRight, Shield, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const benefits = [
  'Deep dive into your current workflows and bottlenecks',
  'Identify your highest-ROI automation opportunities',
  'Get a prioritized roadmap delivered within 48 hours',
  'Clear ROI projections for each opportunity',
  'Technology recommendations for your specific needs',
  'No commitment, no sales pressure — just clarity',
];

const expectations = [
  {
    icon: Clock,
    title: '60 Minutes',
    description: 'A focused, productive conversation — no fluff, no generic pitches.',
  },
  {
    icon: Calendar,
    title: '48-Hour Roadmap',
    description: 'After our call, you receive a detailed automation roadmap within 2 business days.',
  },
  {
    icon: Zap,
    title: 'Actionable Insights',
    description: 'Walk away with clear next steps whether you work with us or not.',
  },
  {
    icon: Shield,
    title: 'Zero Risk',
    description: 'Completely free. We only proceed if the projected ROI justifies the investment.',
  },
];

export default function BookClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge-green mb-4 inline-block">Free Strategy Session</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            60 minutes that could save your team{' '}<span className="gradient-text">hundreds of hours</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            Book a discovery call and receive a custom automation roadmap within 48 hours — completely free.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* Left: Benefits */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-white mb-6">What you&apos;ll get</h2>
                <div className="space-y-4 mb-8">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-electric mt-0.5 flex-shrink-0" />
                      <span className="text-cloud">{b}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {expectations.map((item) => (
                    <motion.div key={item.title} variants={fadeInUp}>
                      <GlassCard padding="md">
                        <item.icon size={20} className="text-electric mb-2" />
                        <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Right: Booking Embed Placeholder */}
            <ScrollReveal delay={0.1}>
              <GlassCard padding="lg" glow="blue">
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-2xl bg-electric/10 flex items-center justify-center mx-auto mb-6">
                    <Calendar size={32} className="text-electric" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Schedule Your Call</h3>
                  <p className="text-muted mb-8 max-w-sm mx-auto">
                    Pick a time that works for you. The call takes 60 minutes and covers your full automation opportunity assessment.
                  </p>

                  {/* Placeholder for Cal.com / Calendly embed */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-12 mb-6">
                    <MessageSquare size={40} className="text-muted mx-auto mb-4" />
                    <p className="text-sm text-muted mb-4">
                      Calendar booking widget will be embedded here.<br />
                      Connect Cal.com or Calendly to enable live scheduling.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="mailto:ahmadbukhari4245@gmail.com?subject=Free%20Strategy%20Session%20Request&body=Hi%20Ahmad%2C%0A%0AI'd%20like%20to%20book%20a%20free%20strategy%20session.%0A%0ACompany%3A%20%0ACurrent%20challenges%3A%20%0APreferred%20time%3A%20"
                        className="btn-primary text-sm"
                      >
                        <span>Email to Book</span>
                        <ArrowRight size={16} />
                      </a>
                      <a
                        href="https://wa.me/923005174444?text=Hi%20Ahmad%2C%20I'd%20like%20to%20book%20a%20free%20strategy%20session."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm"
                      >
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-muted">
                    Can&apos;t find a good time? Email ahmadbukhari4245@gmail.com and we&apos;ll work something out.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-deep/50 border-t border-white/5">
        <div className="container-custom text-center">
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold font-mono text-electric">100+</div>
                <div className="text-sm text-muted">Automations Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-electric">85%</div>
                <div className="text-sm text-muted">Clients Expand Scope</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-mono text-cyan">{'<4mo'}</div>
                <div className="text-sm text-muted">Average ROI Payback</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
