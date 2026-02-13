"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "AI Trends" | "Technical Guide" | "Industry Analysis" | "Case Study";
  readTime: string;
  date: string;
  featured?: boolean;
  image?: string;
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const categoryColors: Record<Article["category"], string> = {
  "AI Trends": "from-electric to-cyan-pulse",
  "Technical Guide": "from-cyan-pulse to-emerald",
  "Industry Analysis": "from-emerald to-electric",
  "Case Study": "from-electric to-emerald",
};

const featuredArticle: Article = {
  slug: "rise-of-agentic-ai-enterprise-2026",
  title: "The Rise of Agentic AI: What Enterprise Leaders Need to Know in 2026",
  excerpt:
    "Autonomous AI agents are reshaping the enterprise landscape. From self-healing infrastructure to proactive customer engagement, agentic systems are no longer a research curiosity. This deep dive explores where the technology stands today, where it is headed, and how forward-thinking organisations are already capturing value.",
  category: "AI Trends",
  readTime: "12 min read",
  date: "Feb 10, 2026",
  featured: true,
  image: "/images/blog/ai-trends-2026.png",
};

const articles: Article[] = [
  {
    slug: "voice-ai-vs-chatbots-latency",
    title: "Voice AI vs Chatbots: Why Sub-500ms Latency Changes Everything",
    excerpt:
      "Latency is the invisible barrier between an acceptable bot and a delightful voice experience. We break down the architecture choices that make real-time voice AI possible.",
    category: "Technical Guide",
    readTime: "8 min read",
    date: "Feb 5, 2026",
    image: "/images/blog/voice-ai-future.png",
  },
  {
    slug: "intelligent-process-automation-manufacturing",
    title: "How Intelligent Process Automation Saved a Manufacturing Giant $1.2M",
    excerpt:
      "A tier-one automotive supplier deployed AI-driven quality inspection and predictive scheduling. Here is the full story behind a seven-figure annual saving.",
    category: "Case Study",
    readTime: "6 min read",
    date: "Jan 28, 2026",
    image: "/images/blog/roi-of-ai.png",
  },
  {
    slug: "fractional-chief-ai-officer",
    title: "The Fractional Chief AI Officer: A New Model for AI Adoption",
    excerpt:
      "Not every company needs a full-time CAIO. The fractional model is democratising strategic AI leadership for mid-market firms without the executive price tag.",
    category: "Industry Analysis",
    readTime: "7 min read",
    date: "Jan 20, 2026",
    image: "/images/blog/automation-guide.png",
  },
  {
    slug: "multi-agent-systems-architecture",
    title: "Building Multi-Agent Systems: Architecture Patterns for Scale",
    excerpt:
      "From orchestrator-worker topologies to decentralised swarm patterns, we compare the dominant architectures for production multi-agent systems.",
    category: "Technical Guide",
    readTime: "10 min read",
    date: "Jan 12, 2026",
    image: "/images/blog/ai-ethics.png",
  },
  {
    slug: "ai-content-operations-multi-platform",
    title: "AI Content Operations: From Single Input to Multi-Platform Output",
    excerpt:
      "One brief, six platforms, zero manual reformatting. Learn how AI content pipelines are collapsing the creation cycle from days to minutes.",
    category: "AI Trends",
    readTime: "5 min read",
    date: "Jan 5, 2026",
    image: "/images/blog/enterprise-ai.png",
  },
  {
    slug: "enterprise-ai-governance-frameworks",
    title: "Enterprise AI Governance: Building Trust Through Transparent Frameworks",
    excerpt:
      "Governance is the unlock that turns AI pilots into enterprise-wide rollouts. We outline a practical five-layer framework used by Fortune 500 adopters.",
    category: "Industry Analysis",
    readTime: "9 min read",
    date: "Dec 22, 2025",
    image: "/images/blog/roi-of-ai.png",
  },
];

// ---------------------------------------------------------------------------
// Gradient overlays for image placeholders
// ---------------------------------------------------------------------------

const placeholderGradients = [
  "from-electric/30 via-cyan-pulse/20 to-emerald/10",
  "from-cyan-pulse/30 via-emerald/20 to-electric/10",
  "from-emerald/30 via-electric/20 to-cyan-pulse/10",
  "from-electric/20 via-emerald/30 to-cyan-pulse/10",
  "from-cyan-pulse/20 via-electric/30 to-emerald/10",
  "from-emerald/20 via-cyan-pulse/30 to-electric/10",
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function CategoryBadge({ category }: { category: Article["category"] }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r ${categoryColors[category]} text-white`}
    >
      {category}
    </span>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  return (
    <ScrollReveal>
      <Link href={`/insights/${article.slug}`} className="group block">
        <Card padding="p-0" className="overflow-hidden">
          {/* Gradient placeholder image */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full bg-gradient-to-br from-electric/20 via-cyan-pulse/15 to-emerald/10">
            {/* Article image */}
            {article.image && (
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={500}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>
            {/* Floating circles decoration */}
            <div className="absolute top-12 right-16 h-32 w-32 rounded-full bg-electric/20 blur-3xl" />
            <div className="absolute bottom-16 left-20 h-24 w-24 rounded-full bg-cyan-pulse/20 blur-2xl" />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <CategoryBadge category={article.category} />
                <span className="text-xs text-muted font-medium uppercase tracking-wide">
                  Featured
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pure-white leading-tight group-hover:text-electric transition-colors duration-300 mb-3">
                {article.title}
              </h3>
              <p className="text-cloud text-sm sm:text-base leading-relaxed max-w-3xl line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-muted" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <Link href={`/insights/${article.slug}`} className="group block h-full">
        <Card padding="p-0" className="overflow-hidden flex flex-col h-full">
          {/* Image area */}
          <div
            className={`relative h-48 w-full bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]}`}
          >
            {/* Article image */}
            {article.image && (
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={500}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            )}
            {/* Corner accent */}
            <div className="absolute top-4 left-4">
              <CategoryBadge category={article.category} />
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col flex-1 p-5 sm:p-6">
            <h3 className="text-lg font-bold text-pure-white leading-snug group-hover:text-electric transition-colors duration-300 mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-cloud leading-relaxed line-clamp-2 mb-4 flex-1">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-steel/50">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-muted" />
                <span>{article.readTime}</span>
              </div>
              <span className="text-sm font-semibold text-electric group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                Read Article
                <svg
                  className="w-4 h-4"
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
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </ScrollReveal>
  );
}

// ---------------------------------------------------------------------------
// Newsletter section
// ---------------------------------------------------------------------------

function NewsletterSection() {
  return (
    <ScrollReveal>
      <div className="relative rounded-2xl overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-electric/10 via-cyan-pulse/10 to-emerald/10" />
        <div className="absolute inset-0 bg-midnight/80" />

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-pulse/10 blur-3xl" />

        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl border border-electric/20" />

        <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-pure-white mb-3">
              Stay ahead of the AI curve
            </h3>
            <p className="text-cloud max-w-lg mx-auto mb-8">
              Get expert analysis, practical guides, and the latest in AI automation
              delivered to your inbox every week. No spam, unsubscribe anytime.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full sm:flex-1 px-5 py-3 rounded-xl bg-steel/60 border border-steel text-pure-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric/50 transition-all duration-300"
              />
              <Button size="md" className="w-full sm:w-auto whitespace-nowrap">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted mt-4">
              Join 2,400+ AI leaders already subscribed
            </p>
          </motion.div>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function InsightsPageClient() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-electric/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-pulse/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <SectionHeading
          eyebrow="Insights & Resources"
          heading="Expert Perspectives on AI Automation"
          description="Deep dives into AI strategy, technical architecture, and real-world results. Written by practitioners, for decision-makers."
        />

        {/* Featured article */}
        <div className="mb-12">
          <FeaturedCard article={featuredArticle} />
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>

        {/* Newsletter signup */}
        <NewsletterSection />
      </div>
    </section>
  );
}
