export interface NavDropdownItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const navLinks: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      {
        title: 'AI Agents',
        description: 'Autonomous agents that plan, execute, and self-correct',
        href: '/services/ai-agents',
        icon: 'Bot',
      },
      {
        title: 'Voice AI',
        description: 'Sub-500ms voice agents for 24/7 customer engagement',
        href: '/services/voice-ai',
        icon: 'Mic',
      },
      {
        title: 'Process Automation',
        description: 'End-to-end workflow automation with n8n, Make & Zapier',
        href: '/services/process-automation',
        icon: 'Workflow',
      },
      {
        title: 'Content Operations',
        description: 'AI-powered content pipelines across all channels',
        href: '/services/content-operations',
        icon: 'Layers',
      },
      {
        title: 'Custom Development',
        description: 'Bespoke apps, dashboards & integration platforms',
        href: '/services/custom-development',
        icon: 'Code2',
      },
      {
        title: 'AI Strategy',
        description: 'Strategic consulting & AI implementation roadmaps',
        href: '/services/ai-strategy',
        icon: 'Lightbulb',
      },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Process',
    href: '/process',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];
