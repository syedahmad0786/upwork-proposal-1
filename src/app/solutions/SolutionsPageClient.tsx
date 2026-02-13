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
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { solutions } from "@/data/solutions";

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
// Animation variants
// ---------------------------------------------------------------------------

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SolutionsPageClient() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/hero/solutions-hero.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-abyss/80 to-abyss" />
      </div>

      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:px-8 lg:px-12">
        {/* ---- Heading ---- */}
        <SectionHeading
          eyebrow="Our Solutions"
          heading="AI-Powered Solutions Engineered for Scale"
          description="From autonomous agents to strategic advisory, every solution is architected for measurable impact, enterprise reliability, and rapid time-to-value."
        />

        {/* ---- Solution Grid ---- */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon] ?? Bot;

            return (
              <motion.div key={solution.slug} variants={gridItem}>
                <Card className="flex h-full flex-col overflow-hidden">
                  {/* Solution Image */}
                  <Image
                    src={solutionImages[solution.slug]}
                    alt={solution.title}
                    width={600}
                    height={400}
                    className="w-full h-44 object-cover rounded-t-xl mb-4"
                  />

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10">
                    <Icon className="h-7 w-7 text-electric" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-pure-white sm:text-2xl">
                    {solution.shortTitle}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-cloud leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Key Features */}
                  <ul className="mb-8 space-y-2 flex-1">
                    {solution.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-electric to-cyan-pulse" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-cyan-pulse"
                  >
                    Explore Solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---- Bottom CTA ---- */}
        <ScrollReveal delay={0.3} className="mt-20">
          <div className="gradient-border rounded-2xl p-10 text-center sm:p-14">
            <h3 className="mb-4 text-2xl font-bold text-pure-white sm:text-3xl">
              Not sure which solution fits?
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-cloud leading-relaxed">
              Book a complimentary discovery call and our team will map the
              right AI strategy to your specific business challenges.
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
