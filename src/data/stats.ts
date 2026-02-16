export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: '100+',
    numericValue: 100,
    suffix: '+',
    label: 'Automations Deployed',
    description: 'Production-grade workflows powering real businesses',
  },
  {
    value: '50+',
    numericValue: 50,
    suffix: '+',
    label: 'Clients Served',
    description: 'From startups to enterprise across 12 industries',
  },
  {
    value: '10K+',
    numericValue: 10,
    suffix: 'K+',
    label: 'Hours Saved Monthly',
    description: 'Cumulative time reclaimed by our automation systems',
  },
  {
    value: '<4mo',
    numericValue: 4,
    suffix: 'mo',
    label: 'Average ROI Payback',
    description: 'Most clients see positive ROI within the first quarter',
  },
];

export const trustLogos = [
  'OpenAI',
  'Claude AI',
  'n8n',
  'Make.com',
  'Zapier',
  'HubSpot',
  'Salesforce',
  'Slack',
  'GoHighLevel',
  'Airtable',
  'Vapi',
  'ElevenLabs',
  'Twilio',
  'Vercel',
  'Supabase',
  'Stripe',
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We dive deep into your operations, identify bottlenecks, and map automation opportunities with clear ROI projections.',
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'You receive a prioritized automation roadmap with milestones, timelines, and expected outcomes — within 48 hours.',
    duration: 'Day 2-3',
  },
  {
    number: '03',
    title: 'Build & Deploy',
    description:
      'Our team builds, tests, and deploys your automations in rapid sprints. You see real savings within the first 2 weeks.',
    duration: 'Week 1-3',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description:
      'We monitor performance, optimize workflows, and identify new opportunities to expand your automation ecosystem.',
    duration: 'Ongoing',
  },
];
