export interface SolutionBenefit {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: SolutionBenefit[];
  useCases: string[];
}

export const solutions: Solution[] = [
  {
    slug: "ai-agents",
    title: "Autonomous AI Agent Deployment",
    shortTitle: "AI Agents",
    description:
      "Multi-agent orchestration systems that execute complex business workflows autonomously, reducing manual intervention by up to 85% while maintaining enterprise-grade reliability.",
    longDescription:
      "Aixcel Solutions architects and deploys multi-agent systems that operate as a coordinated digital workforce. These autonomous agents handle everything from lead qualification and customer onboarding to data reconciliation and compliance monitoring -- learning, adapting, and improving with every interaction. Built on robust orchestration frameworks, each agent ecosystem is designed for fault tolerance, horizontal scaling, and seamless integration with existing enterprise infrastructure.",
    icon: "Bot",
    features: [
      "Multi-agent orchestration with dynamic task delegation",
      "Self-healing workflows with automated error recovery",
      "Real-time agent performance monitoring and analytics",
      "Natural language interface for agent configuration",
      "Enterprise SSO and role-based access control",
      "Custom knowledge base integration and RAG pipelines",
    ],
    benefits: [
      {
        title: "Operational Efficiency",
        description:
          "Eliminate up to 85% of repetitive manual tasks, freeing teams to focus on strategic initiatives that drive revenue growth.",
      },
      {
        title: "24/7 Autonomous Operations",
        description:
          "AI agents operate around the clock without fatigue, ensuring consistent output quality and zero downtime across global operations.",
      },
      {
        title: "Scalable Without Headcount",
        description:
          "Scale operations exponentially without proportional increases in workforce, achieving 10x throughput with existing team sizes.",
      },
    ],
    useCases: [
      "Automated lead scoring and qualification pipelines",
      "Intelligent document processing and data extraction",
      "Multi-channel customer support orchestration",
      "Supply chain monitoring and anomaly detection",
      "Regulatory compliance auditing and reporting",
    ],
  },
  {
    slug: "voice-ai",
    title: "Conversational AI & Voice Intelligence",
    shortTitle: "Voice AI",
    description:
      "Enterprise voice agents engineered for sub-500ms response latency, delivering human-like conversations that handle complex queries across sales, support, and operations.",
    longDescription:
      "Aixcel Solutions builds enterprise-grade conversational AI systems that redefine what voice automation can achieve. With sub-500ms latency and advanced natural language understanding, these voice agents conduct nuanced, context-aware conversations indistinguishable from human interaction. From inbound support to outbound sales campaigns, every deployment is calibrated for the specific domain vocabulary, compliance requirements, and customer expectations of the target industry.",
    icon: "Mic",
    features: [
      "Sub-500ms end-to-end voice response latency",
      "Multi-language support with real-time translation",
      "Sentiment analysis and emotional intelligence",
      "Seamless live agent handoff with full context transfer",
      "Custom voice cloning and brand voice design",
      "Call analytics dashboard with conversation intelligence",
    ],
    benefits: [
      {
        title: "Dramatic Cost Reduction",
        description:
          "Reduce contact center operating costs by up to 60% while simultaneously improving customer satisfaction scores and first-call resolution rates.",
      },
      {
        title: "Infinite Scalability",
        description:
          "Handle thousands of concurrent conversations without queue times, ensuring every customer receives immediate attention regardless of call volume.",
      },
      {
        title: "Actionable Conversation Intelligence",
        description:
          "Extract deep insights from every interaction -- surface trends, identify churn signals, and uncover upsell opportunities hidden in voice data.",
      },
    ],
    useCases: [
      "24/7 inbound customer support and troubleshooting",
      "Outbound sales prospecting and appointment setting",
      "Patient intake and medical appointment scheduling",
      "Insurance claims processing and status inquiries",
      "Real estate lead qualification and property inquiries",
    ],
  },
  {
    slug: "content-operations",
    title: "AI-Powered Content Operations",
    shortTitle: "Content Ops",
    description:
      "Scalable content engines that produce, optimize, and distribute brand-aligned media at 10x the speed of traditional workflows, without sacrificing quality or compliance.",
    longDescription:
      "Aixcel Solutions transforms content operations from a bottleneck into a competitive advantage. The AI-powered content engine handles ideation, creation, optimization, and distribution across every channel -- blog posts, social media, video scripts, email campaigns, and product descriptions. Every piece of content is generated within brand guidelines, optimized for target audiences, and calibrated for maximum engagement. Built-in compliance checks ensure regulatory adherence across regulated industries.",
    icon: "FileText",
    features: [
      "Multi-format content generation (text, image, video, audio)",
      "Brand voice calibration and style guide enforcement",
      "SEO optimization with real-time keyword analysis",
      "Automated A/B testing and performance optimization",
      "Multi-channel distribution and scheduling",
      "Compliance and brand safety screening",
    ],
    benefits: [
      {
        title: "10x Content Velocity",
        description:
          "Produce high-quality, brand-consistent content at ten times the speed of traditional workflows, enabling rapid market response and campaign agility.",
      },
      {
        title: "Consistent Brand Voice at Scale",
        description:
          "Maintain perfect brand consistency across thousands of content pieces, channels, and markets -- eliminating the quality variance of distributed teams.",
      },
      {
        title: "Data-Driven Content Strategy",
        description:
          "Leverage AI-powered analytics to identify high-performing content patterns and automatically optimize future output for maximum audience engagement.",
      },
    ],
    useCases: [
      "Enterprise blog and thought leadership automation",
      "Social media content calendars and post generation",
      "E-commerce product description generation at scale",
      "Email marketing campaign creation and optimization",
      "Video script and podcast outline generation",
    ],
  },
  {
    slug: "process-automation",
    title: "Intelligent Process Automation",
    shortTitle: "Process Automation",
    description:
      "End-to-end system integration that connects disparate platforms, eliminates data silos, and automates complex multi-step workflows across the entire technology stack.",
    longDescription:
      "Aixcel Solutions engineers intelligent process automation that goes far beyond simple task automation. By combining robotic process automation with AI decision-making, these systems handle the full complexity of enterprise operations -- from invoice processing and vendor management to HR onboarding and financial reconciliation. Every workflow is built with comprehensive error handling, audit trails, and real-time monitoring to ensure mission-critical reliability.",
    icon: "Workflow",
    features: [
      "Cross-platform API integration and data synchronization",
      "Intelligent document processing with OCR and NLP",
      "Decision-engine automation with configurable business rules",
      "Real-time workflow monitoring and alerting",
      "Comprehensive audit trails and compliance logging",
      "Low-code workflow builder for rapid iteration",
    ],
    benefits: [
      {
        title: "Eliminate Data Silos",
        description:
          "Connect every system in the technology stack into a unified, real-time data ecosystem -- ensuring every team operates from a single source of truth.",
      },
      {
        title: "Error-Free Operations",
        description:
          "Achieve near-zero error rates in data entry, transfer, and processing by replacing manual handoffs with AI-validated automated workflows.",
      },
      {
        title: "Accelerated Time-to-Value",
        description:
          "Deploy production-ready automations in weeks, not months, with pre-built connectors for 500+ enterprise platforms and rapid configuration tooling.",
      },
    ],
    useCases: [
      "Accounts payable and invoice processing automation",
      "Employee onboarding and offboarding workflows",
      "CRM-to-ERP data synchronization and enrichment",
      "Order fulfillment and inventory management",
      "Regulatory reporting and compliance automation",
    ],
  },
  {
    slug: "ai-strategy",
    title: "AI Strategy & Transformation Advisory",
    shortTitle: "AI Strategy",
    description:
      "Fractional CAIO services that provide executive-level AI leadership, helping organizations build roadmaps, evaluate opportunities, and execute transformation initiatives with confidence.",
    longDescription:
      "Aixcel Solutions provides fractional Chief AI Officer (CAIO) services that bring enterprise-grade AI leadership to organizations at any stage of their transformation journey. The advisory practice combines deep technical expertise with business acumen to identify high-impact AI opportunities, build executable roadmaps, and guide implementation from proof-of-concept through production deployment. Every engagement is structured around measurable business outcomes and designed to build lasting internal AI capability.",
    icon: "Lightbulb",
    features: [
      "Comprehensive AI readiness and maturity assessment",
      "Custom AI roadmap and investment prioritization",
      "Vendor evaluation and technology stack selection",
      "AI governance framework and ethics policy design",
      "Team training and AI literacy programs",
      "Ongoing fractional CAIO leadership and guidance",
    ],
    benefits: [
      {
        title: "Strategic Clarity",
        description:
          "Cut through the AI hype with evidence-based assessments that identify the highest-ROI opportunities specific to the organization, industry, and competitive landscape.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Avoid costly missteps with expert guidance on technology selection, vendor evaluation, and implementation sequencing -- informed by hundreds of enterprise deployments.",
      },
      {
        title: "Internal Capability Building",
        description:
          "Build lasting AI competence within the organization through structured training programs, knowledge transfer, and governance frameworks that outlast any single engagement.",
      },
    ],
    useCases: [
      "Enterprise AI transformation roadmap development",
      "AI vendor and platform evaluation and selection",
      "Board-level AI strategy presentations and education",
      "AI governance and responsible AI policy creation",
      "Post-merger AI integration and rationalization",
    ],
  },
  {
    slug: "custom-development",
    title: "Custom AI Product Development",
    shortTitle: "Custom Development",
    description:
      "Bespoke AI tools, dashboards, and applications engineered from the ground up to solve unique business challenges that off-the-shelf solutions cannot address.",
    longDescription:
      "Aixcel Solutions designs and builds custom AI-powered products tailored to the specific operational realities of each client. From intelligent dashboards and predictive analytics platforms to proprietary machine learning models and internal tooling, every product is architected for performance, maintainability, and seamless integration with existing systems. The development process follows enterprise software engineering best practices with rigorous testing, documentation, and deployment pipelines.",
    icon: "Code",
    features: [
      "Custom machine learning model development and fine-tuning",
      "AI-powered dashboard and analytics platform design",
      "Proprietary algorithm development and optimization",
      "Full-stack application development with AI integration",
      "API design and microservices architecture",
      "Continuous model monitoring and retraining pipelines",
    ],
    benefits: [
      {
        title: "Competitive Differentiation",
        description:
          "Own proprietary AI capabilities that competitors cannot replicate, transforming unique domain expertise into a sustainable technological moat.",
      },
      {
        title: "Perfect Fit Solutions",
        description:
          "Eliminate the compromises of off-the-shelf software with tools built precisely around existing workflows, data structures, and business logic.",
      },
      {
        title: "Full Ownership and Control",
        description:
          "Retain complete ownership of all code, models, and intellectual property -- with no vendor lock-in, recurring licensing fees, or dependency on third-party platforms.",
      },
    ],
    useCases: [
      "Predictive analytics and forecasting platforms",
      "AI-powered internal knowledge management systems",
      "Custom recommendation engines and personalization",
      "Automated quality assurance and defect detection",
      "Proprietary NLP models for domain-specific language",
    ],
  },
];
