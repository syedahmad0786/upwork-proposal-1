export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  challenges: string[];
  solutions: string[];
  metrics: { value: string; label: string }[];
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare & Medical',
    description: 'Automate patient intake, appointment scheduling, billing workflows, and compliance reporting — while maintaining HIPAA standards.',
    icon: 'Heart',
    color: 'neon-pink',
    challenges: [
      'Manual patient intake consuming staff hours',
      'Missed appointments and no-show rates',
      'Billing errors and delayed reimbursements',
      'Compliance reporting burden',
    ],
    solutions: [
      'AI-powered patient intake and pre-screening',
      'Voice AI for 24/7 appointment scheduling',
      'Automated billing verification and submission',
      'Real-time compliance monitoring dashboards',
    ],
    metrics: [
      { value: '3x', label: 'Appointment bookings' },
      { value: '60%', label: 'Reduced no-shows' },
      { value: '15hrs', label: 'Saved per week/staff' },
    ],
    services: ['voice-ai', 'process-automation', 'ai-agents'],
  },
  {
    slug: 'ecommerce',
    title: 'E-Commerce & Retail',
    description: 'Scale your e-commerce operations with AI-driven inventory management, customer support, content generation, and order processing.',
    icon: 'ShoppingCart',
    color: 'electric',
    challenges: [
      'Inventory sync across multiple platforms',
      'High volume customer support tickets',
      'Product description creation at scale',
      'Order processing and fulfillment delays',
    ],
    solutions: [
      'Real-time inventory orchestration across channels',
      'AI customer support agents with product knowledge',
      'Automated product description and SEO optimization',
      'End-to-end order processing automation',
    ],
    metrics: [
      { value: '10x', label: 'Content output' },
      { value: '80%', label: 'Support automation' },
      { value: '99.5%', label: 'Inventory accuracy' },
    ],
    services: ['ai-agents', 'content-operations', 'process-automation'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services & Consulting',
    description: 'Streamline client onboarding, proposal generation, project management, and billing for consulting and professional service firms.',
    icon: 'Briefcase',
    color: 'cyan',
    challenges: [
      'Slow client onboarding processes',
      'Time-consuming proposal and SOW creation',
      'Manual time tracking and billing',
      'Inconsistent project delivery workflows',
    ],
    solutions: [
      'Automated client onboarding with document collection',
      'AI-generated proposals from templates and context',
      'Integrated time tracking and automated invoicing',
      'Standardized project management workflows',
    ],
    metrics: [
      { value: '6hrs', label: 'Saved per onboarding' },
      { value: '75%', label: 'Faster proposals' },
      { value: '<4mo', label: 'ROI payback' },
    ],
    services: ['process-automation', 'ai-agents', 'custom-development'],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate & Property',
    description: 'Automate lead qualification, property matching, follow-up sequences, and transaction management for real estate operations.',
    icon: 'Building2',
    color: 'violet',
    challenges: [
      'Lead follow-up delays losing prospects',
      'Manual property matching for clients',
      'Complex transaction document management',
      'Inconsistent agent communication',
    ],
    solutions: [
      'Voice AI for instant lead qualification and booking',
      'AI-powered property matching and recommendation',
      'Automated transaction workflow and document handling',
      'Multi-channel follow-up sequences',
    ],
    metrics: [
      { value: '3x', label: 'Lead conversion' },
      { value: '24/7', label: 'Lead response' },
      { value: '40%', label: 'Faster closings' },
    ],
    services: ['voice-ai', 'ai-agents', 'process-automation'],
  },
  {
    slug: 'saas',
    title: 'SaaS & Technology',
    description: 'Accelerate SaaS growth with automated onboarding, churn prediction, support automation, and data-driven product insights.',
    icon: 'Cloud',
    color: 'neon-green',
    challenges: [
      'User onboarding drop-off rates',
      'Reactive rather than proactive churn management',
      'Support ticket volume scaling with growth',
      'Manual reporting and analytics',
    ],
    solutions: [
      'Automated onboarding sequences with milestone tracking',
      'AI-powered churn prediction and intervention',
      'Intelligent support routing and auto-resolution',
      'Real-time analytics dashboards and automated reporting',
    ],
    metrics: [
      { value: '45%', label: 'Better activation' },
      { value: '30%', label: 'Reduced churn' },
      { value: '70%', label: 'Support automation' },
    ],
    services: ['ai-agents', 'custom-development', 'process-automation'],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Logistics',
    description: 'Optimize supply chain operations, quality control, inventory management, and production scheduling with intelligent automation.',
    icon: 'Factory',
    color: 'amber',
    challenges: [
      'Supply chain visibility and coordination',
      'Manual quality control processes',
      'Inventory overstock and stockout issues',
      'Production scheduling complexity',
    ],
    solutions: [
      'End-to-end supply chain monitoring and alerting',
      'AI-assisted quality control with anomaly detection',
      'Demand-driven inventory optimization',
      'Automated production scheduling and resource allocation',
    ],
    metrics: [
      { value: '25%', label: 'Reduced waste' },
      { value: '99%', label: 'On-time delivery' },
      { value: '35%', label: 'Lower inventory costs' },
    ],
    services: ['process-automation', 'ai-agents', 'custom-development'],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
