import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI agents, voice AI, process automation, content operations, custom development, and AI strategy consulting. Explore how AiXCEL automates the work that slows your business down.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
