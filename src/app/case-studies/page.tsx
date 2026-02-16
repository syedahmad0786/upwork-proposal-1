import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results for real businesses. See how AiXCEL has helped teams automate operations, deploy AI agents, and achieve measurable ROI.',
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
