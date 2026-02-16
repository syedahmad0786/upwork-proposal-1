import type { Metadata } from 'next';
import SuccessClient from './SuccessClient';

export const metadata: Metadata = {
  title: 'Payment Successful — AiXCEL Solutions',
  description: 'Your payment was successful. Complete your onboarding to get started.',
};

export default function SuccessPage() {
  return <SuccessClient />;
}
