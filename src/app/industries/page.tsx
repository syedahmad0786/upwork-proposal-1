import type { Metadata } from 'next';
import IndustriesClient from './IndustriesClient';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'AI automation solutions for Healthcare, E-Commerce, Professional Services, Real Estate, SaaS, and Manufacturing. 100+ deployments across industries.',
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
