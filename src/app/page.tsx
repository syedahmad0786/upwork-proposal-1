"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Mic,
  FileText,
  Workflow,
  Lightbulb,
  Code,
  Search,
  Layout,
  Rocket,
  TrendingUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

import { solutions } from "@/data/solutions";
import { caseStudies } from "@/data/caseStudies";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";

// ---------------------------------------------------------------------------
// Dynamically import the 3D scene so it only loads on the client and doesn't
// block SSR. The fallback spinner keeps the hero area visually occupied.
// ---------------------------------------------------------------------------
const HeroScene = dynamic(
  () => import("@/components/three/NeuralNetwork"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-2 border-electric/30 border-t-electric animate-spin" />
      </div>
    ),
  },
);

// ---------------------------------------------------------------------------
// Icon map -- lets us render the icon string stored in the solution data.
// ---------------------------------------------------------------------------
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Mic,
  FileText,
  Workflow,
  Lightbulb,
  Code,
};

// ---------------------------------------------------------------------------
// Trust-bar companies
// ---------------------------------------------------------------------------
const companies = [
  "TechCorp",
  "Meridian Financial",
  "NovaTech",
  "Pacific Health",
  "Catalyst Commerce",
  "Vertex Mfg",
  "Ascent Logistics",
  "DataFlow Systems",
];

// ---------------------------------------------------------------------------
// Case study image mapping
// ---------------------------------------------------------------------------
const caseStudyImages: Record<string, string> = {
  "meridian-financial-ai-agents": "/images/case-studies/meridian-financial.png",
  "novatech-voice-ai": "/images/case-studies/novatech-voice.png",
  "vertex-process-automation": "/images/case-studies/vertex-manufacturing.png",
};

// ---------------------------------------------------------------------------
// Process steps
// ---------------------------------------------------------------------------
const processSteps = [
  {
    icon: Search,
    title: "Discovery & AI Audit",
    description:
      "We map your operations, identify high-impact automation opportunities, and quantify the ROI of each initiative.",
  },
  {
    icon: Layout,
    title: "Strategy & Architecture",
    description:
      "A custom blueprint aligning AI capabilities with your business goals, technology stack, and compliance requirements.",
  },
  {
    icon: Rocket,
    title: "Build & Deploy",
    description:
      "Agile sprints deliver production-ready AI systems integrated with your existing infrastructure in weeks, not months.",
  },
  {
    icon: TrendingUp,
    title: "Optimize & Scale",
    description:
      "Continuous monitoring, model retraining, and expansion to new use cases ensure compounding returns over time.",
  },
];

// ---------------------------------------------------------------------------
// Animation variants (used by testimonial carousel)
// ---------------------------------------------------------------------------

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function HomePage() {
  // --- Testimonial carousel state ---
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  // =========================================================================
  return (
    <>
      {/* ================================================================= */}
      {/* 1. HERO SECTION                                                    */}
      {/* ================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/videos/Abstract_Neural_Network_Video_Generation.mp4" type="video/mp4" />
        </video>

        {/* 3D background */}
        <HeroScene />

        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/80 via-deep-space/60 to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent pointer-events-none z-[1]" />

        {/* Content — pure CSS animations, no Framer Motion */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center hero-animate">
            {/* Main headline */}
            <h1
              className="hero-animate-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-pure-white"
            >
              <span className="gradient-text">Intelligent</span> Automation
              <br />
              for <span className="gradient-text">Enterprise</span> Growth
            </h1>

            {/* Subheadline */}
            <p
              className="hero-animate-delay-2 mt-6 max-w-2xl text-lg sm:text-xl text-cloud leading-relaxed"
            >
              Aixcel Solutions architects AI systems that think, act, and scale
              — reducing operational costs by 40% while unlocking new revenue
              streams.
            </p>

            {/* CTA buttons */}
            <div
              className="hero-animate-delay-3 mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/book-consultation" size="lg">
                Book a Discovery Call
              </Button>
              <Button href="/solutions" variant="secondary" size="lg">
                View Our Solutions
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator — pure CSS animation */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{ animation: "hero-bounce 1.5s ease-in-out infinite" }}
        >
          <ChevronDown className="h-6 w-6 text-muted" />
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. TRUST BAR / LOGO PARADE                                        */}
      {/* ================================================================= */}
      <section className="relative border-t border-b border-white/5 py-10 overflow-hidden bg-deep-space/50">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted mb-8">
          Trusted by forward-thinking enterprises
        </p>

        {/* Infinite marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="mx-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06] px-8 py-4"
              >
                <span className="text-sm font-semibold text-muted tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Inline marquee keyframes */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* ================================================================= */}
      {/* 3. SOLUTIONS OVERVIEW                                              */}
      {/* ================================================================= */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Solutions"
            heading="AI-Powered Solutions Engineered for Scale"
            description="From autonomous agents to full-stack process automation, every solution is architected for measurable impact and enterprise-grade reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon] || Bot;
              return (
                <ScrollReveal key={solution.slug} delay={index * 0.1}>
                  <Card className="h-full flex flex-col">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10">
                      <IconComponent className="h-6 w-6 text-electric" />
                    </div>
                    <h3 className="text-xl font-semibold text-pure-white mb-3">
                      {solution.shortTitle}
                    </h3>
                    <p className="text-cloud text-sm leading-relaxed flex-1">
                      {solution.description}
                    </p>
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-cyan-pulse transition-colors"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. STATS SECTION                                                   */}
      {/* ================================================================= */}
      <section className="py-24 lg:py-32 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.metric} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pure-white">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pure-white"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-electric">
                  {stat.metric}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. CASE STUDY SPOTLIGHT                                            */}
      {/* ================================================================= */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Case Studies"
            heading="Measurable Results, Every Engagement"
            description="See how Aixcel Solutions delivers transformational outcomes for enterprises across industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={index * 0.12}>
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <Card className="h-full flex flex-col overflow-hidden">
                    {/* Case study image */}
                    {caseStudyImages[study.slug] && (
                      <div className="relative w-full h-48 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6" style={{ width: "calc(100% + 3rem)" }}>
                        <Image
                          src={caseStudyImages[study.slug]}
                          alt={study.title}
                          width={600}
                          height={400}
                          quality={90}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" />
                      </div>
                    )}

                    {/* Industry badge */}
                    <span className="inline-block self-start mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric/10 text-electric border border-electric/20">
                      {study.industry}
                    </span>

                    {/* Headline metric */}
                    <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                      {study.results[0].value}
                    </p>
                    <p className="text-xs text-cloud mb-3">
                      {study.results[0].description}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-pure-white leading-snug mb-2 line-clamp-2 flex-1">
                      {study.title}
                    </h3>

                    {/* Client name */}
                    <p className="text-sm text-muted mb-4">{study.client}</p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric group-hover:text-cyan-pulse transition-colors">
                      Read Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 6. PROCESS PREVIEW                                                 */}
      {/* ================================================================= */}
      <section className="py-24 lg:py-32 px-6 bg-midnight/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Process"
            heading="From Discovery to Deployment in Weeks"
            description="A proven four-phase methodology that minimizes risk and maximizes speed-to-value."
          />

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-electric/50 via-cyan-pulse/50 to-emerald/50" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <ScrollReveal key={step.title} delay={index * 0.12}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* Number badge */}
                      <div className="relative z-10 mb-4">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-electric to-cyan-pulse flex items-center justify-center shadow-lg shadow-electric/20">
                          <StepIcon className="h-6 w-6 text-white" />
                        </div>
                        <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-deep-space border-2 border-electric flex items-center justify-center text-xs font-bold text-pure-white">
                          {index + 1}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-pure-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-cloud leading-relaxed max-w-xs">
                        {step.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-14 text-center">
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-cyan-pulse transition-colors"
              >
                Learn more about our process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 7. TESTIMONIALS SECTION                                            */}
      {/* ================================================================= */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Client Testimonials"
            heading="What Our Partners Say"
            description="Hear directly from the enterprises we've helped transform with intelligent automation."
          />

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ),
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl text-cloud leading-relaxed italic">
                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="mt-8">
                  <p className="text-base font-semibold text-pure-white">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonials[currentTestimonial].role},{" "}
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 h-10 w-10 rounded-full border border-white/10 bg-steel/50 backdrop-blur flex items-center justify-center text-cloud hover:text-pure-white hover:border-electric/50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 h-10 w-10 rounded-full border border-white/10 bg-steel/50 backdrop-blur flex items-center justify-center text-cloud hover:text-pure-white hover:border-electric/50 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentTestimonial
                      ? "w-8 bg-electric"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 8. FINAL CTA SECTION                                               */}
      {/* ================================================================= */}
      <section className="relative py-24 lg:py-32 px-6 bg-gradient-to-br from-electric/10 via-deep-space to-cyan-pulse/5 overflow-hidden">
        {/* CTA background image */}
        <Image
          src="/images/backgrounds/cta-bg.png"
          alt=""
          fill
          quality={85}
          className="absolute inset-0 object-cover opacity-30 pointer-events-none"
        />

        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pure-white leading-tight">
              Ready to Transform Your Operations with AI?
            </h2>
            <p className="mt-6 text-lg text-cloud leading-relaxed">
              Schedule a complimentary 30-minute AI strategy session with our
              team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/book-consultation" size="lg">
                Book Your Free Consultation
              </Button>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 mt-6 text-sm text-muted hover:text-cloud transition-colors"
            >
              Or explore our solutions first
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
