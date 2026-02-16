'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getIcon } from '@/components/ui/IconMap';
import { services } from '@/data/services';

export default function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge mb-4 inline-block"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Automation solutions for{' '}
              <span className="gradient-text">every challenge</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted leading-relaxed text-pretty"
            >
              From autonomous AI agents to custom platforms — we build the infrastructure
              that lets your team focus on growth, not grunt work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {services.map((service, i) => {
              const Icon = getIcon(service.icon);
              const isEven = i % 2 === 0;
              return (
                <motion.div key={service.slug} variants={fadeInUp}>
                  <Link href={`/services/${service.slug}`}>
                    <GlassCard padding="lg" className="group cursor-pointer">
                      <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                        <div className={!isEven ? 'lg:col-start-2' : ''}>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                              <Icon className="text-electric" size={24} />
                            </div>
                            <span className="text-xs font-mono text-dim uppercase tracking-wider">
                              {service.shortTitle}
                            </span>
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-electric transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-muted leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-3 mb-6">
                            {service.metrics.map((m) => (
                              <div
                                key={m.label}
                                className="text-center px-4 py-2 rounded-lg bg-white/5"
                              >
                                <div className="text-lg font-bold font-mono text-electric">
                                  {m.value}
                                </div>
                                <div className="text-xs text-dim">{m.label}</div>
                              </div>
                            ))}
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric">
                            Explore {service.shortTitle} <ChevronRight size={14} />
                          </span>
                        </div>

                        <div className={!isEven ? 'lg:col-start-1' : ''}>
                          <div className="space-y-3">
                            {service.features.slice(0, 4).map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/3"
                              >
                                <ChevronRight size={16} className="text-electric mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-cloud">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
              Not sure which service fits?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Book a free strategy call. We&apos;ll analyze your needs and recommend the
              highest-ROI starting point.
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
