"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Handshake,
  TrendingUp,
  Eye,
  Rocket,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const coreValues = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We push the boundaries of what AI can achieve, continuously exploring emerging technologies and novel approaches to deliver solutions that set new industry standards.",
    color: "text-electric",
    bg: "bg-electric/10",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Every solution is architected with meticulous attention to detail. From data pipelines to deployment strategies, we engineer systems that perform flawlessly at scale.",
    color: "text-cyan-pulse",
    bg: "bg-cyan-pulse/10",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We embed ourselves within your organization, aligning with your goals, culture, and vision. Your success is our success -- and we measure ourselves by your outcomes.",
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description:
      "We are obsessively focused on measurable impact. Every engagement is defined by clear KPIs, and every solution is optimized to drive tangible business value from day one.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const technologyPartners = [
  "OpenAI",
  "Anthropic",
  "Google AI",
  "n8n",
  "Make",
  "Salesforce",
  "HubSpot",
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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
// Page
// ---------------------------------------------------------------------------

export default function AboutPageClient() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-[350px] w-[350px] rounded-full bg-emerald/5 blur-[100px]" />
      </div>

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8 lg:px-12">
        {/* Hero background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero/about-hero.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <SectionHeading
          eyebrow="About Aixcel Solutions"
          heading="The Agency Behind Enterprise AI Transformation"
          description="We are a team of AI engineers, strategists, and automation architects dedicated to turning artificial intelligence from a buzzword into a business advantage."
        />
      </div>

      {/* ================================================================== */}
      {/* COMPANY STORY                                                      */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="gradient-border rounded-2xl p-8 sm:p-12">
              <h3 className="mb-6 text-2xl font-bold text-pure-white sm:text-3xl">
                Our Story
              </h3>
              <div className="space-y-6 text-lg leading-relaxed text-cloud">
                <p>
                  Aixcel Solutions was founded with a singular conviction: the
                  vast potential of artificial intelligence should not remain
                  confined to research labs and tech giants. We saw enterprises
                  across every industry struggling to translate AI breakthroughs
                  into operational reality -- held back by fragmented tooling,
                  unclear strategy, and a shortage of specialized talent. That
                  gap between cutting-edge AI research and real-world business
                  impact became our founding mission to close. From day one, we
                  set out to build an agency that combines deep technical
                  expertise with genuine business acumen, delivering solutions
                  that are not just technically impressive but genuinely
                  transformative.
                </p>
                <p>
                  Today, Aixcel Solutions partners with organizations ranging
                  from ambitious startups to established enterprises, deploying
                  autonomous AI agents, intelligent process automation, and
                  voice-powered systems that drive measurable ROI. Our approach
                  is rooted in partnership: we do not simply hand off a
                  deliverable and walk away. We embed ourselves within our
                  clients&apos; operations, architect solutions tailored to their
                  unique workflows, and stay engaged through optimization and
                  scale. Every engagement is guided by rigorous methodology, a
                  commitment to transparency, and an unwavering focus on
                  results that speak for themselves.
                </p>
              </div>
              {/* Team collaboration image */}
              <div className="mt-8">
                <Image
                  src="/images/about/team-collaboration.png"
                  alt="Team collaboration at Aixcel Solutions"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ================================================================== */}
      {/* MISSION & VISION                                                   */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Our Purpose"
          heading="Mission & Vision"
        />
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Mission Card */}
          <motion.div variants={fadeUp}>
            <Card className="flex h-full flex-col">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10">
                <Rocket className="h-7 w-7 text-electric" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-pure-white sm:text-2xl">
                Our Mission
              </h3>
              <p className="text-cloud leading-relaxed">
                To empower organizations of every size with intelligent
                automation that eliminates inefficiency, amplifies human
                potential, and unlocks new revenue streams. We make enterprise-
                grade AI accessible, practical, and profitable.
              </p>
            </Card>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeUp}>
            <Card className="flex h-full flex-col">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-pulse/10">
                <Eye className="h-7 w-7 text-cyan-pulse" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-pure-white sm:text-2xl">
                Our Vision
              </h3>
              <p className="text-cloud leading-relaxed">
                A world where every business operates at the speed of
                intelligence -- where AI-driven systems handle the repetitive so
                humans can focus on the creative, the strategic, and the
                meaningful. We envision a future where automation is the
                standard, not the exception.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================================================== */}
      {/* CORE VALUES                                                        */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="What Drives Us"
          heading="Core Values"
          description="These principles guide every decision we make, every solution we build, and every partnership we form."
        />
        {/* Values image */}
        <div className="mb-12">
          <Image
            src="/images/about/values.png"
            alt="Aixcel Solutions core values"
            width={1200}
            height={600}
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.title} variants={fadeUp}>
                <Card className="flex h-full flex-col items-center text-center">
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${value.bg}`}
                  >
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-pure-white">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-cloud">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ================================================================== */}
      {/* LEADERSHIP TEAM                                                    */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Leadership"
          heading="The Minds Behind Aixcel"
          description="Our leadership combines deep AI expertise with proven business strategy to guide every client engagement."
        />
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Founder Card */}
          <motion.div variants={scaleIn}>
            <Card className="flex h-full flex-col items-center text-center">
              {/* Avatar placeholder */}
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan-pulse">
                <span className="text-3xl font-bold text-white">AB</span>
              </div>
              <h4 className="text-lg font-bold text-pure-white">
                Ahmad Bukhari
              </h4>
              <p className="mb-3 text-sm font-medium gradient-text">
                Founder &amp; Chief AI Officer
              </p>
              <p className="mb-4 text-sm leading-relaxed text-cloud">
                A veteran in the AI automation space with extensive experience
                architecting intelligent systems for enterprises. Ahmad founded
                Aixcel Solutions to bridge the gap between breakthrough AI
                research and scalable business solutions.
              </p>
              <div className="mt-auto flex gap-3">
                <a
                  href="#"
                  className="text-muted transition-colors hover:text-electric"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted transition-colors hover:text-electric"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Growing Team Placeholders */}
          {["AI Engineering Lead", "Head of Strategy", "VP of Operations"].map(
            (role, i) => (
              <motion.div key={role} variants={scaleIn}>
                <Card className="flex h-full flex-col items-center justify-center text-center min-h-[320px]">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-steel">
                    <span className="text-2xl text-muted">?</span>
                  </div>
                  <h4 className="text-lg font-bold text-muted">{role}</h4>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;re growing our team
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    href="/contact"
                    className="mt-4"
                  >
                    Join Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </Card>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>

      {/* ================================================================== */}
      {/* TECHNOLOGY PARTNERSHIPS                                            */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Our Ecosystem"
          heading="Technology Partnerships"
          description="We leverage industry-leading platforms to architect solutions that integrate seamlessly into your existing tech stack."
        />
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {technologyPartners.map((partner) => (
              <div
                key={partner}
                className="flex h-16 items-center justify-center rounded-xl border border-steel/50 bg-midnight/50 px-8 text-sm font-semibold text-cloud transition-all duration-300 hover:border-electric/50 hover:text-pure-white hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
              >
                {partner}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* ================================================================== */}
      {/* CTA                                                                */}
      {/* ================================================================== */}
      <div className="relative mx-auto max-w-7xl px-6 pb-32 sm:px-8 lg:px-12">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-midnight to-steel p-12 text-center sm:p-16">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-electric/10 blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-pure-white sm:text-4xl">
                Join Our Mission to Automate the Future
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-cloud">
                Whether you are looking to partner with us or join our team, we
                would love to hear from you.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/book-consultation" size="lg">
                  Book a Consultation <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
