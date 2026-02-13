"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Compass,
  Hammer,
  BarChart3,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Phase {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  deliverables: string[];
  color: string;
  bg: string;
  glowColor: string;
}

const phases: Phase[] = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & AI Audit",
    description:
      "We begin every engagement with a comprehensive assessment of your current operations, technology landscape, and strategic objectives. Our team conducts stakeholder interviews, workflow analysis, and data readiness evaluations to identify the highest-impact automation opportunities. This phase ensures we build on a foundation of deep understanding rather than assumptions.",
    deliverables: [
      "Comprehensive operational assessment report",
      "AI opportunity matrix with ROI projections",
      "Data readiness and infrastructure evaluation",
      "KPI framework and success metrics definition",
      "Priority roadmap of automation candidates",
    ],
    color: "text-electric",
    bg: "bg-electric/10",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategy & Architecture",
    description:
      "With insights from the discovery phase, we design a tailored AI strategy and technical architecture that aligns with your business goals. We evaluate and select the optimal technology stack, map integration points with existing systems, and create a detailed implementation roadmap. Every design decision is made with scalability, security, and maintainability in mind.",
    deliverables: [
      "Custom AI strategy and transformation blueprint",
      "Technical architecture and system design documentation",
      "Technology selection and vendor evaluation",
      "Integration mapping with existing tech stack",
      "Phased implementation roadmap with milestones",
    ],
    color: "text-cyan-pulse",
    bg: "bg-cyan-pulse/10",
    glowColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build & Deploy",
    description:
      "Our engineering team brings the strategy to life through agile development sprints, rigorous testing, and seamless deployment. We build AI agents, automation workflows, and integrations iteratively -- delivering working functionality in short cycles so you see progress and can provide feedback continuously. Every component is tested against real-world scenarios before going live.",
    deliverables: [
      "Production-ready AI agents and automation workflows",
      "Comprehensive testing and quality assurance reports",
      "System integration and API connectivity",
      "Deployment to staging and production environments",
      "Team training and knowledge transfer sessions",
    ],
    color: "text-emerald",
    bg: "bg-emerald/10",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize & Scale",
    description:
      "Launch is just the beginning. We continuously monitor system performance against the KPIs established in Phase 1, identify optimization opportunities, and implement improvements. As your organization gains confidence in AI, we help you scale successful automations across departments and use cases -- turning initial wins into enterprise-wide transformation.",
    deliverables: [
      "Real-time performance dashboards and analytics",
      "Monthly optimization and tuning reports",
      "Continuous improvement recommendations",
      "Scale-up strategy for new departments and workflows",
      "Ongoing support and maintenance SLA",
    ],
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Speed to Value",
    description:
      "Our agile methodology delivers working automation within weeks, not months. You start seeing ROI from Sprint 1, with each iteration building on proven results.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Every solution is built with security-first architecture, data encryption at rest and in transit, role-based access controls, and compliance with industry standards.",
  },
  {
    icon: Users,
    title: "Embedded Partnership",
    description:
      "We do not hand off a product and walk away. Our team integrates with yours, providing dedicated support, training, and strategic guidance throughout the entire lifecycle.",
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------------------------------------------------------------------------
// Timeline Phase Component
// ---------------------------------------------------------------------------

function TimelinePhase({ phase, index }: { phase: Phase; index: number }) {
  const Icon = phase.icon;
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal direction={isEven ? "left" : "right"} delay={index * 0.1}>
      <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
        {/* Phase Number - visible on large screens, positioned left or right */}
        <div
          className={`hidden lg:flex lg:w-1/2 ${
            isEven ? "lg:justify-end" : "lg:order-2 lg:justify-start"
          }`}
        >
          <div className="text-right">
            <span className={`font-mono text-7xl font-black ${phase.color} opacity-20`}>
              {phase.number}
            </span>
          </div>
        </div>

        {/* Center dot on timeline */}
        <div className="relative z-10 hidden lg:block">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full ${phase.bg} ring-4 ring-deep-space`}
            style={{ boxShadow: `0 0 30px ${phase.glowColor}` }}
          >
            <Icon className={`h-7 w-7 ${phase.color}`} />
          </div>
        </div>

        {/* Content card */}
        <div
          className={`lg:w-1/2 ${
            isEven ? "lg:order-3" : "lg:order-1 lg:text-right"
          }`}
        >
          <Card className="relative overflow-hidden">
            {/* Mobile phase number */}
            <div className="mb-4 flex items-center gap-4 lg:hidden">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${phase.bg}`}
              >
                <Icon className={`h-6 w-6 ${phase.color}`} />
              </div>
              <span className={`font-mono text-sm font-bold ${phase.color}`}>
                Phase {phase.number}
              </span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-pure-white sm:text-2xl">
              {phase.title}
            </h3>
            <p className="mb-6 text-cloud leading-relaxed">
              {phase.description}
            </p>

            <div className={isEven ? "" : "lg:flex lg:flex-col lg:items-end"}>
              <h4 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${phase.color}`}>
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {phase.deliverables.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-sm text-cloud ${
                      isEven ? "" : "lg:flex-row-reverse lg:text-right"
                    }`}
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${phase.color}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ---------------------------------------------------------------------------
// Animated Timeline Line Component
// ---------------------------------------------------------------------------

function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
      {/* Background line */}
      <div className="h-full w-px bg-steel/30" />
      {/* Animated fill line */}
      <motion.div
        className="absolute top-0 left-0 w-px origin-top bg-gradient-to-b from-electric via-cyan-pulse to-emerald"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProcessPageClient() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-[350px] w-[350px] rounded-full bg-emerald/5 blur-[100px]" />
      </div>

      {/* Dot grid background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <Image
          src="/images/backgrounds/dot-grid.png"
          alt=""
          fill
          className="object-repeat object-center"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Our Process"
          heading="A Proven Framework for AI Transformation"
          description="Our battle-tested methodology ensures every AI initiative moves from concept to production with clarity, speed, and measurable impact."
        />
      </div>

      {/* ================================================================== */}
      {/* TIMELINE PHASES                                                    */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="relative">
          <AnimatedTimeline />
          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, index) => (
              <TimelinePhase key={phase.number} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* WHAT MAKES US DIFFERENT                                            */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Aixcel Advantage"
          heading="What Makes Us Different"
          description="Beyond methodology -- it is our relentless focus on outcomes, security, and partnership that sets us apart."
        />
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="flex h-full flex-col">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10">
                    <Icon className="h-7 w-7 text-electric" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-pure-white">
                    {item.title}
                  </h3>
                  <p className="text-cloud leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ================================================================== */}
      {/* CTA                                                                */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-32 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight to-steel p-12 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-electric/10 blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-pure-white sm:text-4xl">
                Start Your AI Transformation Journey
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-cloud">
                Book a complimentary strategy session and discover how our
                proven framework can deliver measurable AI impact for your
                organization.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/book-consultation" size="lg">
                  Book a Consultation <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href="/solutions" variant="secondary" size="lg">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
