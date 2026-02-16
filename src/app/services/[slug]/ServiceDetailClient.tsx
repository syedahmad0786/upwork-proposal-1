'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getIcon } from '@/components/ui/IconMap';
import type { Service } from '@/data/services';
import { services } from '@/data/services';

interface Props {
  service: Service;
}

export default function ServiceDetailClient({ service }: Props) {
  const Icon = getIcon(service.icon);
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Link href="/services" className="text-sm text-dim hover:text-electric transition-colors">
                Services
              </Link>
              <ChevronRight size={14} className="text-dim" />
              <span className="text-sm text-electric">{service.shortTitle}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-6"
            >
              <Icon className="text-electric" size={28} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-cyan mb-6"
            >
              {service.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted leading-relaxed mb-8"
            >
              {service.longDescription}
            </motion.p>

            {/* Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {service.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-3xl font-bold font-mono gradient-text">{m.value}</div>
                  <div className="text-sm text-dim">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding border-t border-white/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <SectionHeading
                badge="Capabilities"
                title="What's included"
                align="left"
              />
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-electric mt-0.5 flex-shrink-0" />
                    <span className="text-cloud">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <SectionHeading badge="Tools" title="Tech stack" align="left" />
              <div className="flex flex-wrap gap-3">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-cloud font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-deep/50 border-y border-white/5">
        <div className="container-custom">
          <SectionHeading
            badge="Benefits"
            badgeColor="green"
            title="Why this matters for"
            titleHighlight="your business"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {service.benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp}>
                <GlassCard padding="lg" className="h-full">
                  <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{b.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Use Cases" title="Common applications" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.useCases.map((uc) => (
              <div
                key={uc}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/5"
              >
                <ChevronRight size={16} className="text-electric flex-shrink-0" />
                <span className="text-sm text-cloud">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-deep/50 border-t border-white/5">
        <div className="container-custom">
          <SectionHeading title="Explore other" titleHighlight="services" />
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const SIcon = getIcon(s.icon);
              return (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  <GlassCard padding="lg" className="h-full group cursor-pointer">
                    <SIcon className="text-electric mb-4" size={24} />
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric transition-colors">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">{s.description}</p>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to get started with {service.shortTitle}?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
              Book a free strategy call. We&apos;ll scope your project and deliver a
              roadmap with clear ROI projections.
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
