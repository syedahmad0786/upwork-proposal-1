import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for AI automation services. From free strategy sessions to enterprise solutions. Every engagement starts with clear ROI projections.',
};

export default function PricingPage() {
  return <PricingClient />;
}
