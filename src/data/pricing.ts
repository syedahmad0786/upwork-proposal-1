export interface PricingTier {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
  badge?: string;
  color: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'AI Strategy Session',
    price: 'Free',
    priceNote: 'No commitment',
    description: 'A personalized automation roadmap delivered within 48 hours. Identify your highest-ROI opportunities.',
    features: [
      '60-min discovery call',
      'Process audit & opportunity mapping',
      'Prioritized automation roadmap',
      'ROI projections per opportunity',
      'Technology recommendations',
    ],
    cta: 'Book Free Strategy Call',
    ctaLink: '/book',
    color: 'emerald',
  },
  {
    name: 'Workflow Automation',
    price: '$800',
    priceNote: 'Starting price per workflow',
    description: 'Automate 1-3 key workflows that save your team hours every week. See results in days, not months.',
    features: [
      '1-3 automated workflows',
      'Multi-app integration',
      'Error handling & monitoring',
      'Documentation & training',
      '30-day support included',
    ],
    cta: 'Start Automating',
    ctaLink: '/book',
    color: 'electric',
  },
  {
    name: 'AI Agents',
    price: '$2,500',
    priceNote: 'Starting price per agent',
    description: 'Deploy autonomous AI agents that handle complex tasks, make decisions, and learn from outcomes.',
    features: [
      'Custom AI agent development',
      'Knowledge base integration',
      'Human-in-the-loop workflows',
      'Performance dashboards',
      'Ongoing optimization',
    ],
    cta: 'Build My AI Agent',
    ctaLink: '/book',
    highlighted: true,
    badge: 'Most Popular',
    color: 'cyan',
  },
  {
    name: 'Voice AI System',
    price: '$3,500',
    priceNote: 'Starting price',
    description: '24/7 voice agents that qualify leads, book appointments, and provide support — sounding fully human.',
    features: [
      'Custom voice agent persona',
      'Calendar & CRM integration',
      'Multi-language support',
      'Call analytics dashboard',
      'Warm handoff to humans',
    ],
    cta: 'Deploy Voice AI',
    ctaLink: '/book',
    color: 'violet',
  },
  {
    name: 'Content Operations',
    price: '$1,500',
    priceNote: 'Per month',
    description: 'AI-powered content pipeline that turns one idea into content across all your platforms automatically.',
    features: [
      'AI content generation pipeline',
      'Multi-platform publishing',
      'Brand voice training',
      'Performance analytics',
      'Monthly optimization',
    ],
    cta: 'Scale My Content',
    ctaLink: '/book',
    color: 'neon-green',
  },
  {
    name: 'Enterprise / Custom',
    price: 'Custom',
    priceNote: 'Scoped to your needs',
    description: 'Full-scale digital transformation with custom development, dedicated support, and enterprise SLAs.',
    features: [
      'Custom app & platform development',
      'Dedicated project manager',
      'Enterprise SLA & support',
      'Team training & enablement',
      'Ongoing advisory & scaling',
    ],
    cta: 'Discuss My Project',
    ctaLink: '/book',
    color: 'amber',
  },
];
