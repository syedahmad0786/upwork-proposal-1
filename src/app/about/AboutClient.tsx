'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Zap, Users, Globe, Target, Rocket, BrainCircuit } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  { icon: Target, title: 'Results-First', description: 'Every engagement starts with clear ROI targets. If we can\'t project positive returns, we\'ll tell you.' },
  { icon: Zap, title: 'Speed to Value', description: 'Working automations in weeks, not months. We believe in iterative deployment over lengthy planning cycles.' },
  { icon: Users, title: 'Partnership, Not Vendor', description: 'We embed into your operations and treat your goals as our own. 85% of our clients expand their engagement.' },
  { icon: BrainCircuit, title: 'AI-Native Thinking', description: 'We don\'t just use AI tools — we architect intelligent systems that learn, adapt, and improve autonomously.' },
  { icon: Globe, title: 'Global, Remote-First', description: 'Working across time zones with teams worldwide. Async communication and transparent project management.' },
  { icon: Rocket, title: 'Continuous Innovation', description: 'We stay ahead of the curve, testing new models and tools weekly so our clients always get cutting-edge solutions.' },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-4 inline-block">About Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Building the future of{' '}<span className="gradient-text">intelligent automation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            AiXCEL Solutions helps ambitious teams replace manual work with autonomous systems — so they can focus on what actually moves the needle.
          </motion.p>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding border-t border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="w-full aspect-square max-w-md rounded-3xl bg-gradient-to-br from-electric/10 via-cyan/5 to-violet/10 border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-electric to-cyan mx-auto mb-6 flex items-center justify-center text-5xl font-bold text-white">
                      AB
                    </div>
                    <div className="text-2xl font-bold text-white">Ahmad Bukhari</div>
                    <div className="text-sm text-electric mt-1">Founder & AI Architect</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <span className="badge-green mb-4 inline-block">Meet the Founder</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                From enterprise systems to{' '}<span className="gradient-text">AI-first automation</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I&apos;m Ahmad Bukhari — an Agentic AI &amp; Enterprise Automation Architect with a deep passion for building systems that think, decide, and act autonomously.
                </p>
                <p>
                  After years of watching businesses drown in manual processes, I founded AiXCEL Solutions with a simple mission: automate the work that slows teams down, so they can focus on the work that matters.
                </p>
                <p>
                  With 100+ automations deployed across industries — from healthcare to e-commerce, consulting to manufacturing — I&apos;ve seen firsthand how the right automation can transform operations overnight.
                </p>
                <p>
                  Today, I work with a network of specialist engineers, designers, and strategists to deliver enterprise-grade automation solutions at startup speed.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/book" className="btn-primary text-sm">
                  <span>Work With Me</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="https://linkedin.com/in/bukhariahmad" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                  <span>LinkedIn</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-deep/50 border-y border-white/5">
        <div className="container-custom">
          <SectionHeading badge="Our Values" title="What drives" titleHighlight="everything we build" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp}>
                <GlassCard padding="lg" className="h-full">
                  <v.icon className="text-electric mb-4" size={28} />
                  <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to work together?</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">Let&apos;s talk about how automation can transform your operations.</p>
            <Link href="/book" className="btn-primary"><span>Book Free Strategy Call</span><ArrowRight size={18} /></Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
