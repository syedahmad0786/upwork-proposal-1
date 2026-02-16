export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  metrics: { value: string; label: string }[];
  features: string[];
  benefits: { title: string; description: string }[];
  tools: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    slug: 'ai-agents',
    title: 'Agentic AI & Autonomous Workflows',
    shortTitle: 'AI Agents',
    tagline: 'Deploy AI agents that think, plan, and execute across your business',
    description:
      'Multi-agent systems that autonomously plan, execute, and self-correct across your business processes — replacing manual decision-making with scalable intelligence.',
    longDescription:
      'Our AI agents go beyond simple chatbots. They understand context, make decisions, handle exceptions, and learn from outcomes. Built on enterprise-grade frameworks with human-in-the-loop safeguards, these agents integrate with your existing stack and start delivering value within weeks.',
    icon: 'Bot',
    color: 'electric',
    metrics: [
      { value: '94%', label: 'Error reduction' },
      { value: '10x', label: 'Faster processing' },
      { value: '<3wk', label: 'Time to deploy' },
    ],
    features: [
      'Multi-agent orchestration with task delegation',
      'Self-healing error recovery & retry logic',
      'Natural language understanding & generation',
      'Human-in-the-loop approval workflows',
      'Real-time monitoring dashboards',
      'Custom knowledge base integration',
    ],
    benefits: [
      {
        title: 'Eliminate Manual Decision-Making',
        description:
          'AI agents handle 80%+ of routine decisions autonomously, escalating only edge cases to your team.',
      },
      {
        title: 'Scale Without Hiring',
        description:
          'Handle 10x the workload without proportionally increasing headcount or operational costs.',
      },
      {
        title: 'Self-Improving Systems',
        description:
          'Agents learn from every interaction, continuously optimizing performance and accuracy over time.',
      },
    ],
    tools: ['OpenAI', 'Claude AI', 'n8n', 'LangChain', 'Pinecone', 'Supabase'],
    useCases: [
      'CRM data enrichment & lead scoring',
      'Document processing & extraction',
      'Customer support triage & resolution',
      'Inventory management & reordering',
      'Compliance monitoring & reporting',
    ],
  },
  {
    slug: 'voice-ai',
    title: 'Voice AI & Conversational Intelligence',
    shortTitle: 'Voice AI',
    tagline: 'Voice agents that sound human, respond instantly, and never sleep',
    description:
      'Deploy 24/7 voice agents with sub-500ms latency that handle inbound calls, qualify leads, book appointments, and provide support — all sounding natural and professional.',
    longDescription:
      'Our Voice AI solutions leverage cutting-edge speech synthesis and understanding to create agents that are indistinguishable from human operators. They handle complex conversations, remember context, and seamlessly hand off to humans when needed.',
    icon: 'Mic',
    color: 'cyan',
    metrics: [
      { value: '3x', label: 'Qualified appointments' },
      { value: '<500ms', label: 'Response latency' },
      { value: '24/7', label: 'Availability' },
    ],
    features: [
      'Sub-500ms voice response latency',
      'Multi-language support with accent matching',
      'Sentiment analysis & emotion detection',
      'Calendar integration & appointment booking',
      'CRM sync & call logging',
      'Warm handoff to human agents',
    ],
    benefits: [
      {
        title: 'Never Miss a Lead',
        description: 'Voice agents answer every call instantly, 24/7/365 — converting after-hours callers into qualified leads.',
      },
      {
        title: 'Reduce Call Center Costs',
        description: 'Handle 70% of inbound calls autonomously, freeing your team for high-value conversations.',
      },
      {
        title: 'Consistent Quality',
        description: 'Every caller gets the same professional, patient, and knowledgeable experience — no bad days.',
      },
    ],
    tools: ['Vapi', 'ElevenLabs', 'Twilio', 'OpenAI', 'GoHighLevel', 'Cal.com'],
    useCases: [
      'Inbound lead qualification & routing',
      'Appointment scheduling & reminders',
      'Customer support & FAQ handling',
      'Survey & feedback collection',
      'Outbound follow-up campaigns',
    ],
  },
  {
    slug: 'process-automation',
    title: 'Enterprise Automation & Integration',
    shortTitle: 'Process Automation',
    tagline: 'Connect your tools, automate your workflows, reclaim your time',
    description:
      'End-to-end workflow automation that connects your siloed systems, eliminates manual data entry, and creates seamless processes across your entire tech stack.',
    longDescription:
      'We design and implement automation architectures using n8n, Make, and Zapier that connect hundreds of apps into unified workflows. From simple task automation to complex multi-step processes with conditional logic and error handling.',
    icon: 'Workflow',
    color: 'electric',
    metrics: [
      { value: '6hrs', label: 'Saved per process daily' },
      { value: '100+', label: 'Automations deployed' },
      { value: '<4mo', label: 'Average ROI payback' },
    ],
    features: [
      'Multi-platform workflow orchestration',
      'Conditional logic & branching paths',
      'Error handling & automatic retry',
      'Real-time monitoring & alerting',
      'Data transformation & mapping',
      'Webhook & API integrations',
    ],
    benefits: [
      {
        title: 'Eliminate Data Entry',
        description: 'Automate data flow between systems so your team never copies information manually again.',
      },
      {
        title: 'Reduce Human Error',
        description: 'Automated processes execute consistently every time, eliminating costly mistakes.',
      },
      {
        title: 'Rapid ROI',
        description: 'Most automation projects pay for themselves within 2-4 months through time and cost savings.',
      },
    ],
    tools: ['n8n', 'Make.com', 'Zapier', 'Airtable', 'Slack', 'HubSpot'],
    useCases: [
      'Client onboarding workflows',
      'Invoice processing & reconciliation',
      'Lead nurture sequences',
      'Inventory sync across platforms',
      'Report generation & distribution',
    ],
  },
  {
    slug: 'content-operations',
    title: 'Content Generation & Automation Pipelines',
    shortTitle: 'Content Ops',
    tagline: 'Turn one idea into a content empire across every platform',
    description:
      'AI-powered content pipelines that transform single inputs into multi-platform, multi-format media assets — blogs, social posts, videos, newsletters — all on autopilot.',
    longDescription:
      'Our content operations systems use AI to create, optimize, and distribute content at scale. From a single brief, we generate platform-specific content across all your channels, maintaining brand voice and maximizing engagement.',
    icon: 'Layers',
    color: 'violet',
    metrics: [
      { value: '10x', label: 'Content output' },
      { value: '80%', label: 'Time saved on creation' },
      { value: '5+', label: 'Platforms automated' },
    ],
    features: [
      'AI content generation with brand voice training',
      'Multi-platform content adaptation',
      'Automated publishing & scheduling',
      'SEO optimization & keyword targeting',
      'Visual asset generation with AI',
      'Performance tracking & iteration',
    ],
    benefits: [
      {
        title: 'Produce More, Spend Less',
        description: '10x your content output while reducing production time by 80% through AI-powered pipelines.',
      },
      {
        title: 'Consistent Brand Voice',
        description: 'AI trained on your brand guidelines ensures every piece of content sounds authentically you.',
      },
      {
        title: 'Always-On Content Machine',
        description: 'Automated workflows ensure you never miss a publishing date or trending opportunity.',
      },
    ],
    tools: ['OpenAI', 'Claude AI', 'HeyGen', 'Synthesia', 'Canva', 'Buffer'],
    useCases: [
      'Blog-to-social content repurposing',
      'Video script & production pipelines',
      'Email newsletter automation',
      'Product description generation',
      'Social media management at scale',
    ],
  },
  {
    slug: 'custom-development',
    title: 'Custom Apps, Dashboards & Platforms',
    shortTitle: 'Custom Dev',
    tagline: 'Bespoke digital solutions built for your exact needs',
    description:
      'Custom-built applications, real-time dashboards, and integration platforms tailored to your specific business requirements — from MVPs to enterprise-grade systems.',
    longDescription:
      'When off-the-shelf solutions fall short, we build exactly what you need. Our development team creates custom web applications, real-time analytics dashboards, and integration platforms using modern tech stacks designed for scale.',
    icon: 'Code2',
    color: 'amber',
    metrics: [
      { value: '2-4wk', label: 'MVP delivery' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '50+', label: 'Apps delivered' },
    ],
    features: [
      'Full-stack web application development',
      'Real-time analytics dashboards',
      'API design & integration layers',
      'Database architecture & optimization',
      'Cloud infrastructure & DevOps',
      'Ongoing maintenance & support',
    ],
    benefits: [
      {
        title: 'Built for Your Workflow',
        description: 'Custom solutions that fit your process perfectly — no workarounds or compromises.',
      },
      {
        title: 'Scale with Confidence',
        description: 'Architecture designed for growth, handling 10x traffic without breaking a sweat.',
      },
      {
        title: 'Full Ownership',
        description: 'You own every line of code. No vendor lock-in, no recurring platform fees.',
      },
    ],
    tools: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'],
    useCases: [
      'Internal operations dashboards',
      'Client-facing portals',
      'Data visualization platforms',
      'Marketplace & booking systems',
      'SaaS MVPs & prototypes',
    ],
  },
  {
    slug: 'ai-strategy',
    title: 'AI Consulting & Strategic Implementation',
    shortTitle: 'AI Strategy',
    tagline: 'A clear roadmap from where you are to where AI can take you',
    description:
      'Strategic AI consulting that identifies your highest-ROI automation opportunities, builds implementation roadmaps, and enables your team to lead the AI transformation.',
    longDescription:
      'Not sure where to start with AI? We audit your operations, identify the highest-impact automation opportunities, and create a prioritized roadmap. Then we guide implementation, train your team, and ensure lasting adoption.',
    icon: 'Lightbulb',
    color: 'emerald',
    metrics: [
      { value: '48hr', label: 'Strategy delivery' },
      { value: '85%', label: 'Clients expand scope' },
      { value: '3-5x', label: 'Typical ROI' },
    ],
    features: [
      'Operations audit & opportunity mapping',
      'ROI-prioritized automation roadmap',
      'Technology stack recommendations',
      'Team training & enablement',
      'Change management guidance',
      'Ongoing advisory & optimization',
    ],
    benefits: [
      {
        title: 'Start with Clarity',
        description: 'Know exactly which processes to automate first and the expected ROI before investing a dollar.',
      },
      {
        title: 'Avoid Costly Mistakes',
        description: 'Our experience across 100+ implementations helps you dodge common pitfalls and wasted spend.',
      },
      {
        title: 'Build Internal Capability',
        description: 'We train your team to manage and extend automations independently, reducing long-term dependency.',
      },
    ],
    tools: ['Workshops', 'Audit Frameworks', 'ROI Models', 'Miro', 'Notion', 'Loom'],
    useCases: [
      'AI readiness assessments',
      'Automation opportunity mapping',
      'Technology vendor selection',
      'Team upskilling programs',
      'Digital transformation planning',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
