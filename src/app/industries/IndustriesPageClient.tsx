"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Icons (inline SVG components for each industry)
// ---------------------------------------------------------------------------

function LandmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20V8l4-2v4l4-2v4l4-2v10H2zM18 20V4l4-2v18h-4zM14 10v10" />
    </svg>
  );
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Industry data
// ---------------------------------------------------------------------------

interface Industry {
  slug: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  description: string;
  useCases: string[];
  gradient: string;
  iconGlow: string;
  image: string;
}

const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: LandmarkIcon,
    description:
      "Accelerate risk assessment, strengthen compliance workflows, and eliminate manual document processing with AI systems built for regulatory rigour.",
    useCases: [
      "Automated risk scoring and fraud detection",
      "Regulatory compliance monitoring",
      "Intelligent document processing and KYC",
      "Algorithmic portfolio analysis",
    ],
    gradient: "from-electric to-cyan-pulse",
    iconGlow: "shadow-electric/30",
    image: "/images/industries/financial.png",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartIcon,
    description:
      "Enhance patient engagement, streamline clinical workflows, and deploy HIPAA-compliant AI solutions that improve outcomes without adding administrative burden.",
    useCases: [
      "AI-powered patient engagement and triage",
      "Clinical workflow optimisation",
      "HIPAA-compliant document automation",
      "Predictive patient readmission models",
    ],
    gradient: "from-cyan-pulse to-emerald",
    iconGlow: "shadow-cyan-pulse/30",
    image: "/images/industries/healthcare.png",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: FactoryIcon,
    description:
      "Optimise supply chain operations, deploy predictive maintenance, and enforce quality control standards with AI agents that run 24/7 on the factory floor.",
    useCases: [
      "Supply chain demand forecasting",
      "Predictive equipment maintenance",
      "Automated visual quality inspection",
      "Production scheduling optimisation",
    ],
    gradient: "from-emerald to-electric",
    iconGlow: "shadow-emerald/30",
    image: "/images/industries/manufacturing.png",
  },
  {
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    icon: ShoppingCartIcon,
    description:
      "Drive personalised customer experiences, automate inventory management, and scale customer service with AI that understands shopper intent in real time.",
    useCases: [
      "Hyper-personalised product recommendations",
      "Dynamic inventory and pricing optimisation",
      "AI-powered customer service agents",
      "Churn prediction and retention workflows",
    ],
    gradient: "from-electric to-emerald",
    iconGlow: "shadow-electric/30",
    image: "/images/industries/ecommerce.png",
  },
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    icon: CodeIcon,
    description:
      "Boost developer productivity, automate support ticket resolution, and build intelligent data pipelines that turn raw information into actionable product insights.",
    useCases: [
      "AI-assisted code review and generation",
      "Intelligent support ticket routing",
      "Automated data pipeline orchestration",
      "Usage-based churn prediction models",
    ],
    gradient: "from-cyan-pulse to-electric",
    iconGlow: "shadow-cyan-pulse/30",
    image: "/images/industries/technology.png",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: BriefcaseIcon,
    description:
      "Transform knowledge management, automate proposal generation, and streamline billing and time tracking with AI tailored for consulting, legal, and advisory firms.",
    useCases: [
      "Intelligent knowledge management and search",
      "Automated proposal and RFP generation",
      "Smart billing and time-entry analysis",
      "Client engagement scoring",
    ],
    gradient: "from-emerald to-cyan-pulse",
    iconGlow: "shadow-emerald/30",
    image: "/images/industries/professional-services.png",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function IndustryCard({
  industry,
  index,
}: {
  industry: Industry;
  index: number;
}) {
  const Icon = industry.icon;

  return (
    <ScrollReveal delay={index * 0.08}>
      <Card padding="p-0" className="flex flex-col h-full overflow-hidden group">
        {/* Industry image */}
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={industry.image}
            alt={industry.name}
            width={800}
            height={500}
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-44 object-cover rounded-t-xl"
          />
        </div>

        {/* Icon and header area */}
        <div className="p-6 sm:p-8 pb-0">
          {/* Icon with glow */}
          <div
            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} mb-5`}
            style={{ boxShadow: `0 0 30px rgba(59,130,246,0.15)` }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-bold text-pure-white mb-3 group-hover:text-electric transition-colors duration-300">
            {industry.name}
          </h3>
          <p className="text-sm text-cloud leading-relaxed mb-5">
            {industry.description}
          </p>
        </div>

        {/* Use cases */}
        <div className="flex-1 px-6 sm:px-8">
          <ul className="space-y-2.5">
            {industry.useCases.map((useCase) => (
              <li
                key={useCase}
                className="flex items-start gap-2.5 text-sm text-cloud"
              >
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-emerald"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA link */}
        <div className="p-6 sm:p-8 pt-6 mt-auto">
          <Link
            href={`/industries/${industry.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-cyan-pulse transition-colors duration-300 group/link"
          >
            Explore Solutions for {industry.name}
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </Card>
    </ScrollReveal>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function IndustriesPageClient() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero heading */}
        <SectionHeading
          eyebrow="Industries We Serve"
          heading="AI Solutions Tailored to Your Industry"
          description="Every industry has unique data, workflows, and regulatory demands. We design and deploy AI systems that speak the language of your domain and deliver measurable impact from day one."
        />

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-cyan-pulse/10 to-emerald/10" />
            <div className="absolute inset-0 bg-midnight/80" />

            {/* Decorative blurs */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />

            {/* Border accent */}
            <div className="absolute inset-0 rounded-2xl border border-electric/20" />

            <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-pure-white mb-3">
                  Don&apos;t see your industry?
                </h3>
                <p className="text-cloud max-w-2xl mx-auto mb-8">
                  Our AI solutions are built on flexible, adaptable architectures. Whether
                  you operate in logistics, education, energy, or government, we can design
                  an automation strategy that fits your unique requirements.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button href="/book-consultation" size="lg">
                    Book a Discovery Call
                  </Button>
                  <Button href="/solutions" variant="secondary" size="lg">
                    View All Solutions
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
