import type { Metadata } from 'next';
import CheckoutClient from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout — AI Visibility Optimization',
  description: 'Purchase your AI Visibility Optimization package. One-time $197 investment for full website optimization.',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
