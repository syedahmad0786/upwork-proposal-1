export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'AiXCEL didn\'t just automate our processes — they transformed how we think about operations. The ROI was visible within the first month.',
    author: 'Sarah Chen',
    role: 'VP of Sales Operations',
    company: 'Enterprise SaaS',
  },
  {
    quote:
      'I was most impressed with their ability to help us choose the proper solution. They asked great questions and took the time to understand what we really needed.',
    author: 'Dr. Michael Torres',
    role: 'Chief Operating Officer',
    company: 'Healthcare Network',
  },
  {
    quote:
      'Working with Ahmad felt like having a senior CTO on speed dial. The technical depth combined with business acumen is rare.',
    author: 'Jessica Park',
    role: 'Head of Marketing',
    company: 'D2C Brand',
  },
  {
    quote:
      'They delivered in 2 weeks what our internal team quoted 3 months for. And it was better than what we spec\'d.',
    author: 'David Kim',
    role: 'Managing Partner',
    company: 'Consulting Firm',
  },
  {
    quote:
      'The AI agents they built for us are genuinely autonomous. We review exceptions, not routine tasks. Our team can finally focus on strategy.',
    author: 'Rachel Foster',
    role: 'Director of Operations',
    company: 'Manufacturing Co.',
  },
];
