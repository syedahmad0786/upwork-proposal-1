"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  AlertTriangle,
  Cpu,
  BarChart3,
  Quote,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { type CaseStudy } from "@/data/caseStudies";

// ---------------------------------------------------------------------------
// Animation helpers
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
// Metric parser -- extracts numeric values for AnimatedCounter
// ---------------------------------------------------------------------------

function parseMetricValue(raw: string): {
  numericValue: number;
  prefix: string;
  suffix: string;
  decimals: number;
} {
  // Handle special cases like "4.7/5", "$2.8M", "99.2%", "0 sec", "3x", "18 hrs"
  const cleaned = raw.trim();

  // $2.8M pattern
  const dollarMatch = cleaned.match(/^\$([0-9.]+)([A-Za-z]*)$/);
  if (dollarMatch) {
    const num = parseFloat(dollarMatch[1]);
    return {
      numericValue: num,
      prefix: "$",
      suffix: dollarMatch[2],
      decimals: dollarMatch[1].includes(".") ? 1 : 0,
    };
  }

  // Percentage pattern
  const pctMatch = cleaned.match(/^([0-9.]+)%$/);
  if (pctMatch) {
    const num = parseFloat(pctMatch[1]);
    return {
      numericValue: num,
      prefix: "",
      suffix: "%",
      decimals: pctMatch[1].includes(".") ? 1 : 0,
    };
  }

  // Fraction pattern (e.g., 4.7/5)
  const fracMatch = cleaned.match(/^([0-9.]+)\/([0-9]+)$/);
  if (fracMatch) {
    return {
      numericValue: parseFloat(fracMatch[1]),
      prefix: "",
      suffix: `/${fracMatch[2]}`,
      decimals: 1,
    };
  }

  // Multiplier pattern (e.g., 3x)
  const multMatch = cleaned.match(/^([0-9.]+)x$/i);
  if (multMatch) {
    return {
      numericValue: parseFloat(multMatch[1]),
      prefix: "",
      suffix: "x",
      decimals: 0,
    };
  }

  // Number + unit (e.g., "18 hrs", "0 sec")
  const unitMatch = cleaned.match(/^([0-9.]+)\s*(.*)$/);
  if (unitMatch) {
    const num = parseFloat(unitMatch[1]);
    return {
      numericValue: num,
      prefix: "",
      suffix: unitMatch[2] ? ` ${unitMatch[2]}` : "",
      decimals: unitMatch[1].includes(".") ? 1 : 0,
    };
  }

  // Fallback: try plain number
  const num = parseFloat(cleaned);
  return {
    numericValue: isNaN(num) ? 0 : num,
    prefix: "",
    suffix: "",
    decimals: 0,
  };
}

// ---------------------------------------------------------------------------
// Case study hero image mapping (PNG versions)
// ---------------------------------------------------------------------------

const caseStudyHeroImages: Record<string, string> = {
  "meridian-financial-ai-agents": "/images/case-studies/meridian-financial.png",
  "novatech-voice-ai": "/images/case-studies/novatech-voice.png",
  "vertex-process-automation": "/images/case-studies/vertex-manufacturing.png",
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface CaseStudyDetailClientProps {
  caseStudy: CaseStudy;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function CaseStudyDetailClient({
  caseStudy,
}: CaseStudyDetailClientProps) {
  const cs = caseStudy;

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-electric/5 blur-[140px]" />
        <div className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-[300px] w-[300px] rounded-full bg-emerald/5 blur-[100px]" />
      </div>

      {/* ================================================================ */}
      {/*  HERO                                                           */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <ScrollReveal>
          <Link
            href="/case-studies"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-pure-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Case Studies
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          {/* Industry badge */}
          <div className="mb-6 flex items-center gap-2">
            <Building2 className="h-4 w-4 text-electric" />
            <span className="rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric ring-1 ring-electric/30">
              {cs.industry}
            </span>
          </div>

          {/* Client name */}
          <p className="mb-2 text-lg font-semibold text-muted">
            {cs.client}
          </p>

          {/* Title */}
          <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span className="gradient-text">{cs.title}</span>
          </h1>
        </ScrollReveal>

        {/* Hero image */}
        {caseStudyHeroImages[cs.slug] && (
          <ScrollReveal>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <Image
                src={caseStudyHeroImages[cs.slug]}
                alt={cs.client}
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </ScrollReveal>
        )}
      </section>

      {/* ================================================================ */}
      {/*  THE CHALLENGE                                                  */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr]">
          <ScrollReveal direction="left">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 ring-1 ring-red-500/20">
              <AlertTriangle className="h-7 w-7 text-red-400" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold text-pure-white sm:text-3xl">
              The Challenge
            </h2>
            <p className="max-w-3xl text-lg text-cloud leading-relaxed">
              {cs.challenge}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  OUR SOLUTION                                                   */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr]">
          <ScrollReveal direction="left">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 ring-1 ring-electric/20">
              <Cpu className="h-7 w-7 text-electric" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold text-pure-white sm:text-3xl">
              Our Solution
            </h2>
            <p className="max-w-3xl text-lg text-cloud leading-relaxed">
              {cs.solution}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  THE RESULTS                                                    */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Results"
          heading="The Results"
          description="Measurable impact delivered within the first year of deployment."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {cs.results.map((result) => {
            const parsed = parseMetricValue(result.value);
            return (
              <motion.div key={result.metric} variants={scaleIn}>
                <Card className="text-center">
                  {/* Animated metric */}
                  <div className="mb-2">
                    <AnimatedCounter
                      value={parsed.numericValue}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      decimals={parsed.decimals}
                      duration={2.5}
                      className="text-4xl font-bold gradient-text"
                    />
                  </div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-pure-white">
                    {result.metric}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {result.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/*  TESTIMONIAL                                                    */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="gradient-border rounded-2xl p-8 sm:p-12">
            <Quote className="mb-6 h-10 w-10 text-electric/40" />
            <blockquote className="mb-6 max-w-3xl text-lg font-medium italic text-pure-white leading-relaxed sm:text-xl">
              {cs.testimonial.split(" -- ")[0]}
            </blockquote>
            {cs.testimonial.includes(" -- ") && (
              <p className="text-sm font-semibold text-muted">
                -- {cs.testimonial.split(" -- ")[1]}
              </p>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================ */}
      {/*  CTA                                                            */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="rounded-2xl bg-gradient-to-r from-electric/10 via-cyan-pulse/10 to-emerald/10 p-10 text-center ring-1 ring-electric/10 sm:p-16">
            <BarChart3 className="mx-auto mb-6 h-10 w-10 text-electric" />
            <h3 className="mb-4 text-2xl font-bold text-pure-white sm:text-3xl">
              Achieve Similar Results
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-cloud leading-relaxed">
              Every transformation starts with a conversation. Discover how
              Aixcel Solutions can engineer measurable impact for your
              organization.
            </p>
            <Button href="/book-consultation" size="lg">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================ */}
      {/*  MORE CASE STUDIES LINK                                         */}
      {/* ================================================================ */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-cyan-pulse"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              View All Case Studies
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
