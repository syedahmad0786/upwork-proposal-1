'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Star,
} from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { SplitText, ShimmerText, BlurFade } from '@/components/ui/TextReveal';
import TiltCard from '@/components/ui/TiltCard';
import CountUp from '@/components/ui/CountUp';
import { Parallax, FloatingShape, ScaleOnScroll } from '@/components/ui/ParallaxSection';
import { getIcon } from '@/components/ui/IconMap';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';
import { stats, processSteps } from '@/data/stats';
import { techTools, TechLogoItem } from '@/components/ui/TechLogos';

/* ─── Dynamic import for Three.js scene (no SSR) ─── */
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0A0A0A]" />,
});

const glowColors: Array<'electric' | 'pink' | 'amber' | 'violet' | 'cyan' | 'blue'> = [
  'electric', 'cyan', 'blue', 'violet', 'pink', 'amber',
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 100]);

  return (
    <>
      {/* ==========================================
          HERO — Dark section with 3D scene + parallax
          ========================================== */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]"
      >
        {/* 3D Background Scene */}
        <HeroScene />

        {/* Floating decoration shapes */}
        <FloatingShape speed={0.3} size={500} color="rgba(59, 130, 246, 0.08)" blur={80} top="5rem" right="-10rem" />
        <FloatingShape speed={-0.2} size={400} color="rgba(8, 145, 178, 0.06)" blur={80} bottom="-5rem" left="-10rem" />

        {/* Overlay gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/60 z-[1]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent z-[1]" />

        <motion.div style={{ y: heroY }} className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="badge-dark mb-8 inline-flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                100+ AUTOMATIONS DEPLOYED
              </span>
            </motion.div>

            {/* Headline with SplitText animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-8 uppercase tracking-tight">
                <SplitText delay={0.4}>
                  We automate
                </SplitText>
                <br className="hidden sm:block" />
                <SplitText delay={0.6}>
                  the work that
                </SplitText>{' '}
                <span className="gradient-text">
                  <SplitText delay={0.8}>
                    slows you down
                  </SplitText>
                </span>
              </h1>
            </motion.div>

            {/* Subhead with BlurFade */}
            <BlurFade delay={1} direction="up">
              <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
                AI agents, voice AI, and enterprise automation for marketing, operations,
                and finance teams. Save hours. Cut costs. Scale without extra hires.
              </p>
            </BlurFade>

            {/* CTAs with MagneticButton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <MagneticButton strength={0.3} as="div">
                <Link href="/book" className="btn-primary-dark text-base px-8 py-4">
                  <span>Book Free Strategy Call</span>
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2} as="div">
                <Link href="/case-studies" className="btn-secondary-dark text-base px-8 py-4">
                  <span>See Our Results</span>
                  <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { icon: Zap, text: '3-6 WEEK DEPLOYMENT' },
                { icon: Shield, text: 'ENTERPRISE-GRADE SECURITY' },
                { icon: Clock, text: '<4 MONTH ROI PAYBACK' },
                { icon: TrendingUp, text: '85% CLIENTS EXPAND SCOPE' },
              ].map((pill, i) => (
                <motion.div
                  key={pill.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-bold text-white/50 uppercase tracking-wide backdrop-blur-sm"
                >
                  <pill.icon size={14} className="text-electric-light" />
                  {pill.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2.5 rounded-full bg-electric animate-pulse" />
          </motion.div>
        </div>
      </motion.section>

      {/* ==========================================
          TRUST BAR — Clean white with scrolling logos
          ========================================== */}
      <section className="py-16 border-b border-card-border overflow-hidden bg-surface-warm relative texture-grain">
        <div className="container-custom mb-8 relative z-10">
          <BlurFade delay={0.1} direction="up">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-caption">
              Powered by the tools you trust
            </p>
          </BlurFade>
        </div>
        <div className="relative z-10">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-warm to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-warm to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...techTools, ...techTools].map((tool, i) => (
              <div key={`${tool.name}-${i}`} className="flex-shrink-0 mx-3">
                <TechLogoItem tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SERVICES — White section with TiltCards
          ========================================== */}
      <section className="section-padding relative bg-surface texture-grain">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-electric/[0.04] to-transparent rounded-full blur-3xl" />
        <FloatingShape speed={0.15} size={300} color="rgba(8, 145, 178, 0.05)" blur={80} top="10rem" right="-5rem" />

        <div className="container-custom relative z-10">
          <SectionHeading
            badge="What We Do"
            title="Solutions that drive"
            titleHighlight="real outcomes"
            description="From AI agents that think autonomously to voice systems that never sleep — we build the automation infrastructure that lets your team focus on what actually matters."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => {
              const Icon = getIcon(service.icon);
              const color = glowColors[i % glowColors.length];
              return (
                <motion.div key={service.slug} variants={fadeInUp}>
                  <Link href={`/services/${service.slug}`}>
                    <TiltCard maxTilt={6} glare>
                      <GlassCard className="h-full group cursor-pointer" padding="lg" glow={color} variant="light" hover={false}>
                        <div className="w-12 h-12 rounded-xl bg-electric/8 flex items-center justify-center mb-5 group-hover:bg-electric/15 transition-colors border border-electric/15">
                          <Icon className="text-electric" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-electric transition-colors uppercase">
                          {service.shortTitle}
                        </h3>
                        <p className="text-sm text-caption leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {service.metrics.map((m) => (
                            <span
                              key={m.label}
                              className="text-xs font-mono bg-surface-alt px-2.5 py-1 rounded-md text-body border border-card-border"
                            >
                              <span className="text-electric font-bold">{m.value}</span>{' '}
                              {m.label}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-electric opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wide">
                          Learn more <ChevronRight size={14} />
                        </span>
                      </GlassCard>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          STATS — Animated CountUp metric cards
          ========================================== */}
      <section className="py-24 bg-surface-warm border-y border-card-border relative">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <FloatingShape speed={-0.1} size={400} color="rgba(59, 130, 246, 0.03)" blur={80} top="2.5rem" left="2.5rem" />

        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="metric-card"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text mb-2 font-mono">
                  {stat.numericValue >= 100 ? (
                    <CountUp value={stat.numericValue} suffix={stat.suffix} />
                  ) : stat.suffix === 'mo' ? (
                    <>{'<'}<CountUp value={stat.numericValue} suffix={stat.suffix} /></>
                  ) : (
                    <CountUp value={stat.numericValue} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm font-bold text-heading mb-1 uppercase tracking-wide">{stat.label}</div>
                <div className="text-xs text-caption">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          CASE STUDIES — White section with results
          ========================================== */}
      <section className="section-padding relative bg-surface">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-electric/[0.03] to-transparent rounded-full blur-3xl" />
        <FloatingShape speed={0.2} size={250} color="rgba(8, 145, 178, 0.04)" blur={80} bottom="5rem" left="2.5rem" />

        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Proven Results"
            badgeColor="cyan"
            title="Real outcomes for"
            titleHighlight="real businesses"
            description="Every engagement starts with a clear problem and ends with measurable results. Here's how we've helped teams like yours."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-10"
          >
            {caseStudies.slice(0, 4).map((cs, i) => {
              const color = glowColors[i % glowColors.length];
              return (
                <motion.div key={cs.slug} variants={fadeInUp}>
                  <Link href={`/case-studies/${cs.slug}`}>
                    <TiltCard maxTilt={4} glare>
                      <GlassCard className="h-full group cursor-pointer" padding="lg" glow={color} variant="light" hover={false}>
                        <div className="flex items-start justify-between mb-4">
                          <span className="badge">{cs.industry}</span>
                          <div className="text-right">
                            <div className="text-2xl font-extrabold font-mono gradient-text">
                              {cs.metric}
                            </div>
                            <div className="text-xs text-caption uppercase tracking-wide">{cs.metricLabel}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-electric transition-colors">
                          {cs.title}
                        </h3>
                        <p className="text-sm text-caption leading-relaxed mb-4">
                          {cs.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cs.services.map((s) => (
                            <span
                              key={s}
                              className="text-xs bg-surface-alt px-2 py-0.5 rounded border border-card-border text-body"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        {cs.testimonial && (
                          <blockquote className="text-sm text-caption italic border-l-2 border-electric/30 pl-4">
                            &ldquo;{cs.testimonial.quote.substring(0, 100)}...&rdquo;
                            <br />
                            <span className="text-xs text-caption/80 not-italic">
                              — {cs.testimonial.author}, {cs.testimonial.role}
                            </span>
                          </blockquote>
                        )}
                      </GlassCard>
                    </TiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center">
            <MagneticButton strength={0.25} as="div" className="inline-block">
              <Link href="/case-studies" className="btn-secondary">
                <span>View All Case Studies</span>
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ==========================================
          PROCESS — Light alt background with animations
          ========================================== */}
      <section className="section-padding bg-surface-alt border-y border-card-border relative">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <FloatingShape speed={0.12} size={350} color="rgba(59, 130, 246, 0.04)" blur={80} top="5rem" right="2.5rem" />

        <div className="container-custom relative z-10">
          <SectionHeading
            badge="How It Works"
            badgeColor="cyan"
            title="From discovery to"
            titleHighlight="deployed in weeks"
            description="Our proven 4-step process ensures you see real results fast — not months of planning without action."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <TiltCard maxTilt={5} glare={false}>
                  <div className="rounded-2xl border border-card-border bg-surface-card p-6 h-full hover:border-electric/40 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition-all duration-400 group">
                    <div className="text-6xl font-extrabold font-mono text-electric/10 mb-4 group-hover:text-electric/20 transition-colors">
                      {step.number}
                    </div>
                    <span className="text-xs font-mono text-electric font-bold mb-2 block uppercase tracking-wider">
                      {step.duration}
                    </span>
                    <h3 className="text-xl font-bold text-heading mb-3 uppercase">
                      {step.title}
                    </h3>
                    <p className="text-sm text-caption leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TESTIMONIALS — White section, premium feel
          ========================================== */}
      <section className="section-padding relative bg-surface">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-electric/[0.03] to-transparent rounded-full blur-3xl" />
        <FloatingShape speed={-0.15} size={300} color="rgba(8, 145, 178, 0.04)" blur={80} top="10rem" left="-5rem" />

        <div className="container-custom relative z-10">
          <SectionHeading
            badge="Client Love"
            title="Trusted by teams that"
            titleHighlight="demand results"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((t, i) => {
              const color = glowColors[i % glowColors.length];
              return (
                <motion.div key={i} variants={fadeInUp}>
                  <TiltCard maxTilt={4} glare>
                    <GlassCard padding="lg" className="h-full flex flex-col" glow={color} variant="light" hover={false}>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={16}
                            className="text-amber fill-amber"
                          />
                        ))}
                      </div>
                      <blockquote className="text-sm text-body leading-relaxed mb-6 flex-1">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3 pt-4 border-t border-card-border">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-cyan flex items-center justify-center text-white font-extrabold text-sm">
                          {t.author[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-heading">
                            {t.author}
                          </div>
                          <div className="text-xs text-caption">
                            {t.role}, {t.company}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          WHY AIXCEL — Alt background differentiators
          ========================================== */}
      <section className="section-padding bg-surface-alt border-y border-card-border relative">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <FloatingShape speed={0.1} size={400} color="rgba(59, 130, 246, 0.03)" blur={80} bottom="5rem" right="5rem" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="badge mb-4 inline-block">Why AiXCEL</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6 uppercase">
                Not another dev shop.{' '}
                <ShimmerText className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                  Your automation partner.
                </ShimmerText>
              </h2>
              <p className="text-lg text-caption leading-relaxed mb-8">
                We don&apos;t just build automations and walk away. We embed into your
                operations, measure real impact, and continuously optimize for better
                results.
              </p>
              <div className="space-y-4">
                {[
                  'Results-first: Every project starts with clear ROI targets',
                  'Speed: See working automations in 2-3 weeks, not months',
                  'Full ownership: You own everything we build — zero lock-in',
                  'Continuous optimization: We monitor and improve post-launch',
                  '85% of clients expand to additional automation projects',
                ].map((item, i) => (
                  <BlurFade key={item} delay={0.1 * i} direction="left">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-electric mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-body">{item}</span>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '48hr', label: 'Strategy Delivery', icon: Clock, color: 'from-electric/10 to-electric/5' },
                  { value: '2-3wk', label: 'First Results', icon: Zap, color: 'from-cyan/10 to-cyan/5' },
                  { value: '<4mo', label: 'ROI Payback', icon: TrendingUp, color: 'from-amber/10 to-amber/5' },
                  { value: '85%', label: 'Client Retention', icon: Shield, color: 'from-violet/10 to-violet/5' },
                ].map((item) => (
                  <TiltCard key={item.label} maxTilt={6} glare>
                    <div
                      className="rounded-2xl border border-card-border bg-surface-card p-6 text-center hover:border-electric/30 hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] transition-all duration-400 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3`}>
                        <item.icon size={22} className="text-electric" />
                      </div>
                      <div className="text-2xl font-extrabold font-mono gradient-text mb-1">
                        {item.value}
                      </div>
                      <div className="text-xs text-caption uppercase tracking-wide font-bold">{item.label}</div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          FINAL CTA — Dark section with shimmer + parallax
          ========================================== */}
      <section className="section-padding relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 dot-pattern-dark opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-electric/5 to-transparent rounded-full blur-3xl" />
        <FloatingShape speed={0.15} size={500} color="rgba(8, 145, 178, 0.05)" blur={80} bottom="-10rem" right="-10rem" />

        <div className="container-custom relative z-10 text-center">
          <ScaleOnScroll>
            <Sparkles className="mx-auto text-electric mb-6" size={32} />
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto uppercase">
              Stop doing work a machine{' '}
              <ShimmerText className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">
                should handle
              </ShimmerText>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              Book a free strategy session. We&apos;ll identify your highest-ROI
              automation opportunities and deliver a roadmap in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton strength={0.3} as="div">
                <Link href="/book" className="btn-primary-dark text-base px-8 py-4">
                  <span>Book Free Strategy Call</span>
                  <ArrowRight size={18} />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2} as="div">
                <Link href="/pricing" className="btn-secondary-dark text-base px-8 py-4">
                  <span>View Pricing</span>
                  <ArrowUpRight size={18} />
                </Link>
              </MagneticButton>
            </div>
          </ScaleOnScroll>
        </div>
      </section>
    </>
  );
}
