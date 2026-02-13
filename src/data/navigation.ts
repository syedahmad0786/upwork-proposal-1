export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const navigationLinks: NavLink[] = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      {
        label: "AI Agents",
        href: "/solutions/ai-agents",
        description: "Autonomous multi-agent orchestration systems",
      },
      {
        label: "Voice AI",
        href: "/solutions/voice-ai",
        description: "Conversational AI with sub-500ms latency",
      },
      {
        label: "Content Operations",
        href: "/solutions/content-operations",
        description: "AI-powered scalable content engines",
      },
      {
        label: "Process Automation",
        href: "/solutions/process-automation",
        description: "End-to-end intelligent workflow automation",
      },
      {
        label: "AI Strategy",
        href: "/solutions/ai-strategy",
        description: "Fractional CAIO and transformation advisory",
      },
      {
        label: "Custom Development",
        href: "/solutions/custom-development",
        description: "Bespoke AI tools and product engineering",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      {
        label: "Financial Services",
        href: "/industries/financial-services",
        description: "AI for banking, insurance, and fintech",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
        description: "HIPAA-compliant AI for patient care and operations",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
        description: "Supply chain and production optimization",
      },
      {
        label: "E-Commerce & Retail",
        href: "/industries/ecommerce",
        description: "Personalization, fulfillment, and CX automation",
      },
      {
        label: "Technology & SaaS",
        href: "/industries/technology",
        description: "Scaling support, onboarding, and operations",
      },
      {
        label: "Professional Services",
        href: "/industries/professional-services",
        description: "Knowledge work automation and client delivery",
      },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const ctaLink: NavLink = {
  label: "Book a Discovery Call",
  href: "/contact#discovery",
};
