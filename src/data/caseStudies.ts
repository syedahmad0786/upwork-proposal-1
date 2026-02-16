export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  secondaryMetric?: string;
  secondaryMetricLabel?: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  tools: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'self-healing-crm',
    title: 'The Self-Healing CRM',
    subtitle: 'How AI agents eliminated 94% of data errors and saved 120+ hours monthly',
    client: 'Enterprise SaaS Company',
    industry: 'Technology',
    metric: '94%',
    metricLabel: 'Error reduction',
    secondaryMetric: '120hrs',
    secondaryMetricLabel: 'Saved monthly',
    challenge:
      'A fast-growing SaaS company was losing deals due to dirty CRM data — duplicate contacts, missing fields, and outdated information. Their sales team spent 30% of their time on data hygiene instead of selling.',
    solution:
      'We deployed a multi-agent system that continuously monitors, cleanses, and enriches CRM data. AI agents detect duplicates, fill missing fields from external sources, and flag anomalies for human review.',
    results: [
      '94% reduction in CRM data errors',
      '120+ hours saved per month on data cleanup',
      '23% increase in sales team productivity',
      'Real-time data quality scoring dashboard',
      'ROI achieved within 6 weeks of deployment',
    ],
    services: ['AI Agents', 'Process Automation'],
    tools: ['n8n', 'OpenAI', 'HubSpot', 'Clearbit'],
    testimonial: {
      quote:
        'Our sales team went from dreading CRM updates to trusting the data completely. The AI agents catch issues we never even knew existed.',
      author: 'Sarah Chen',
      role: 'VP of Sales Operations',
    },
    image: '/images/case-studies/crm-dashboard.png',
    color: 'electric',
  },
  {
    slug: '247-concierge',
    title: 'The 24/7 AI Concierge',
    subtitle: 'Voice AI tripled qualified appointments while cutting call center costs by 60%',
    client: 'Healthcare Network',
    industry: 'Healthcare',
    metric: '3x',
    metricLabel: 'Qualified appointments',
    secondaryMetric: '60%',
    secondaryMetricLabel: 'Cost reduction',
    challenge:
      'A multi-location healthcare provider was losing patients to competitors because they couldn\'t handle after-hours calls. 40% of potential patients called outside business hours and got voicemail.',
    solution:
      'We built a Voice AI system that handles inbound calls 24/7 — qualifying patients, checking insurance compatibility, booking appointments, and sending confirmations — all with natural, empathetic conversation.',
    results: [
      '3x increase in qualified appointment bookings',
      '60% reduction in call center operational costs',
      '40% of appointments now booked after-hours',
      'Patient satisfaction score improved by 35%',
      'Average call handling time reduced by 45%',
    ],
    services: ['Voice AI', 'Process Automation'],
    tools: ['Vapi', 'ElevenLabs', 'GoHighLevel', 'Twilio'],
    testimonial: {
      quote:
        'Patients tell us they had no idea they were speaking to an AI. It books appointments, answers insurance questions, and even sends follow-up texts. Game-changing.',
      author: 'Dr. Michael Torres',
      role: 'Chief Operating Officer',
    },
    image: '/images/case-studies/voice-ai.png',
    color: 'cyan',
  },
  {
    slug: 'omni-channel-engine',
    title: 'The Omni-Channel Engine',
    subtitle: '10x content output with zero additional headcount',
    client: 'D2C Brand',
    industry: 'E-Commerce',
    metric: '10x',
    metricLabel: 'Content output',
    secondaryMetric: '80%',
    secondaryMetricLabel: 'Time saved',
    challenge:
      'A rapidly scaling direct-to-consumer brand needed content across 6 platforms but only had a 2-person marketing team. They were publishing inconsistently and missing trends.',
    solution:
      'We built an AI content pipeline that transforms a single brief into platform-optimized content across all channels — blog posts, social media, email newsletters, and video scripts — maintaining perfect brand voice.',
    results: [
      '10x increase in monthly content output',
      '80% reduction in content creation time',
      '45% improvement in social engagement rates',
      'Consistent publishing schedule across 6 platforms',
      'Brand voice consistency score of 95%+',
    ],
    services: ['Content Operations', 'AI Agents'],
    tools: ['OpenAI', 'Claude AI', 'n8n', 'Buffer', 'Canva'],
    testimonial: {
      quote:
        'We went from struggling to post twice a week to having a content calendar that runs itself. The AI maintains our brand voice better than some humans did.',
      author: 'Jessica Park',
      role: 'Head of Marketing',
    },
    image: '/images/case-studies/content-pipeline.png',
    color: 'violet',
  },
  {
    slug: 'zero-touch-onboarding',
    title: 'Zero-Touch Onboarding',
    subtitle: 'Automated client onboarding saves 6 hours per process',
    client: 'Professional Services Firm',
    industry: 'Consulting',
    metric: '6hrs',
    metricLabel: 'Saved per onboarding',
    secondaryMetric: '15x',
    secondaryMetricLabel: 'Faster invoicing',
    challenge:
      'A consulting firm\'s onboarding process involved 14 manual steps across 6 different tools — from contract signing to project setup. Each onboarding took 8+ hours and was error-prone.',
    solution:
      'We automated the entire onboarding journey: contract generation, e-signatures, payment processing, project workspace creation, team notifications, and welcome sequences — all triggered by a single form submission.',
    results: [
      '6+ hours saved per client onboarding',
      '15x faster invoice generation',
      'Zero manual data entry across 6 platforms',
      '100% consistent onboarding experience',
      'Client satisfaction up 40% in first 90 days',
    ],
    services: ['Process Automation', 'Custom Development'],
    tools: ['n8n', 'Airtable', 'Stripe', 'Slack', 'Notion'],
    testimonial: {
      quote:
        'What used to take a full day now happens in minutes. Our team focuses on delivering value to clients instead of chasing paperwork.',
      author: 'David Kim',
      role: 'Managing Partner',
    },
    image: '/images/case-studies/onboarding-flow.png',
    color: 'electric',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
