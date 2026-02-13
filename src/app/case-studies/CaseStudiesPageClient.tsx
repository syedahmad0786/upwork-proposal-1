"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { caseStudies } from "@/data/caseStudies";

// ---------------------------------------------------------------------------
// Unique industries for filter badges
// ---------------------------------------------------------------------------

const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badgeFade = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Case study image mapping (PNG versions)
// ---------------------------------------------------------------------------

const caseStudyImages: Record<string, string> = {
  "meridian-financial-ai-agents": "/images/case-studies/meridian-financial.png",
  "novatech-voice-ai": "/images/case-studies/novatech-voice.png",
  "vertex-process-automation": "/images/case-studies/vertex-manufacturing.png",
};

// ---------------------------------------------------------------------------
// Helper -- get primary result metric from a case study
// ---------------------------------------------------------------------------

function getPrimaryMetric(cs: (typeof caseStudies)[number]) {
  return cs.results[0];
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CaseStudiesPageClient() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-emerald/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:px-8 lg:px-12">
        {/* ---- Heading ---- */}
        <SectionHeading
          eyebrow="Case Studies"
          heading="Proven Results Across Industries"
          description="Real outcomes from real deployments. See how leading organizations have transformed their operations with Aixcel Solutions."
        />

        {/* ---- Industry Filter Badges (visual only) ---- */}
        <motion.div
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={badgeFade}
            className="rounded-full bg-electric/10 px-4 py-1.5 text-sm font-medium text-electric ring-1 ring-electric/30"
          >
            All Industries
          </motion.span>
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={badgeFade}
              className="rounded-full bg-steel/40 px-4 py-1.5 text-sm font-medium text-cloud ring-1 ring-steel/50 transition-colors hover:bg-electric/10 hover:text-electric hover:ring-electric/30 cursor-pointer"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>

        {/* ---- Case Study Cards ---- */}
        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((cs) => {
            const primary = getPrimaryMetric(cs);
            return (
              <motion.div key={cs.slug} variants={gridItem}>
                <Card className="flex h-full flex-col" padding="p-0">
                  {/* Case study image */}
                  {caseStudyImages[cs.slug] && (
                    <Image
                      src={caseStudyImages[cs.slug]}
                      alt={cs.client}
                      width={800}
                      height={500}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                  )}

                  {/* Card content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Industry badge */}
                    <div className="mb-5 flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {cs.industry}
                      </span>
                    </div>

                    {/* Client name */}
                    <h3 className="mb-1 text-lg font-bold text-pure-white">
                      {cs.client}
                    </h3>

                    {/* Title */}
                    <p className="mb-4 text-sm font-medium text-electric/80 leading-snug">
                      {cs.title}
                    </p>

                    {/* Challenge summary */}
                    <p className="mb-6 flex-1 text-sm text-cloud leading-relaxed line-clamp-3">
                      {cs.challenge}
                    </p>

                    {/* Key result metric */}
                    <div className="mb-6 flex items-center gap-3 rounded-xl bg-electric/5 p-4 ring-1 ring-electric/10">
                      <TrendingUp className="h-5 w-5 shrink-0 text-emerald" />
                      <div>
                        <span className="block text-2xl font-bold gradient-text">
                          {primary.value}
                        </span>
                        <span className="text-xs text-muted">
                          {primary.metric}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-cyan-pulse"
                    >
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---- Bottom CTA ---- */}
        <ScrollReveal delay={0.3} className="mt-20">
          <div className="gradient-border rounded-2xl p-10 text-center sm:p-14">
            <h3 className="mb-4 text-2xl font-bold text-pure-white sm:text-3xl">
              Ready to achieve similar results?
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-cloud leading-relaxed">
              Every case study started with a single conversation. Book your
              discovery call and find out what AI can do for your business.
            </p>
            <Button href="/book-consultation" size="lg">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
