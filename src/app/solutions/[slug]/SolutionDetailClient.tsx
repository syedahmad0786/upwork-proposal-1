"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Mic,
  FileText,
  Workflow,
  Lightbulb,
  Code,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { type Solution } from "@/data/solutions";

// ---------------------------------------------------------------------------
// Icon map
// ---------------------------------------------------------------------------

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Mic,
  FileText,
  Workflow,
  Lightbulb,
  Code,
};

// ---------------------------------------------------------------------------
// Solution image map
// ---------------------------------------------------------------------------

const solutionImages: Record<string, string> = {
  "ai-agents": "/images/solutions/ai-agents.png",
  "voice-ai": "/images/solutions/voice-ai.png",
  "content-operations": "/images/solutions/content-ops.png",
  "process-automation": "/images/solutions/process-automation.png",
  "ai-strategy": "/images/solutions/ai-strategy.png",
  "custom-development": "/images/solutions/custom-development.png",
};

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface SolutionDetailClientProps {
  solution: Solution;
  related: Solution[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function SolutionDetailClient({
  solution,
  related,
}: SolutionDetailClientProps) {
  const Icon = iconMap[solution.icon] ?? Bot;

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-electric/5 blur-[140px]" />
        <div className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald/5 blur-[100px]" />
      </div>

      {/* ================================================================ */}
      {/*  HERO                                                           */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        {/* Hero background image */}
        {solutionImages[solution.slug] && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-b-3xl">
            <Image
              src={solutionImages[solution.slug]}
              alt=""
              fill
              className="object-cover opacity-10"
              quality={85}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-abyss/40 via-abyss/70 to-abyss" />
          </div>
        )}

        {/* Breadcrumb */}
        <ScrollReveal>
          <Link
            href="/solutions"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-pure-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Solutions
          </Link>
        </ScrollReveal>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Icon */}
          <ScrollReveal direction="left">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-electric/10 ring-1 ring-electric/20"
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Icon className="h-10 w-10 text-electric" />
            </motion.div>
          </ScrollReveal>

          {/* Title block */}
          <ScrollReveal direction="up" className="flex-1">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              <span className="gradient-text">{solution.title}</span>
            </h1>
            <p className="max-w-2xl text-lg text-cloud leading-relaxed">
              {solution.longDescription}
            </p>
          </ScrollReveal>

          {/* Feature image */}
          {solutionImages[solution.slug] && (
            <ScrollReveal direction="right" className="hidden lg:block">
              <div className="relative h-48 w-72 overflow-hidden rounded-2xl ring-1 ring-steel/30">
                <Image
                  src={solutionImages[solution.slug]}
                  alt={solution.title}
                  fill
                  quality={90}
                  sizes="288px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/50 to-transparent" />
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ================================================================ */}
      {/*  KEY CAPABILITIES                                               */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Capabilities"
          heading="Key Capabilities"
          description="Every capability is production-tested and engineered for enterprise-grade reliability."
          align="left"
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {solution.features.map((feature) => (
            <motion.div
              key={feature}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-xl border border-steel/50 bg-midnight/60 p-5 backdrop-blur-sm transition-colors hover:border-electric/30"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
              <span className="text-sm text-cloud leading-relaxed">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/*  BUSINESS BENEFITS                                              */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Benefits"
          heading="Business Benefits"
          description="Measurable outcomes that directly impact the bottom line."
        />

        <motion.div
          className="grid gap-8 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {solution.benefits.map((benefit, i) => (
            <motion.div key={benefit.title} variants={scaleIn}>
              <Card className="h-full text-center">
                {/* Decorative number */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan-pulse text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-lg font-bold text-pure-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-cloud leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/*  USE CASES                                                      */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Use Cases"
          heading="Real-World Applications"
          description="Proven deployments across industries and operational contexts."
          align="left"
        />

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solution.useCases.map((useCase, i) => (
            <motion.div
              key={useCase}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-xl border border-steel/40 bg-midnight/40 p-5 backdrop-blur-sm transition-colors hover:border-electric/20"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-electric/10 text-xs font-bold text-electric">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-cloud leading-relaxed">{useCase}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/*  CTA                                                            */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="gradient-border rounded-2xl p-10 text-center sm:p-16">
            <h3 className="mb-4 text-2xl font-bold text-pure-white sm:text-3xl">
              Start Your {solution.shortTitle} Journey
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-cloud leading-relaxed">
              Schedule a consultation with our engineering team and discover how{" "}
              {solution.shortTitle.toLowerCase()} can transform your operations.
            </p>
            <Button href="/book-consultation" size="lg">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================ */}
      {/*  RELATED SOLUTIONS                                              */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 pt-8 pb-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Explore More"
          heading="Related Solutions"
          align="left"
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {related.map((rel, i) => {
            const RelIcon = iconMap[rel.icon] ?? Bot;
            return (
              <ScrollReveal key={rel.slug} delay={i * 0.1}>
                <Card className="flex h-full flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10">
                    <RelIcon className="h-6 w-6 text-electric" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-pure-white">
                    {rel.shortTitle}
                  </h4>
                  <p className="mb-6 flex-1 text-sm text-cloud leading-relaxed">
                    {rel.description}
                  </p>
                  <Link
                    href={`/solutions/${rel.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-cyan-pulse"
                  >
                    Explore Solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
