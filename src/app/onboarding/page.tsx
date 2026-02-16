import type { Metadata } from 'next';
import OnboardingClient from './OnboardingClient';

export const metadata: Metadata = {
  title: 'Onboarding — AI Visibility Optimization',
  description: 'Complete your onboarding to start your AI visibility optimization.',
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}
