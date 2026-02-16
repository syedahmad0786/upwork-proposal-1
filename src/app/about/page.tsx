import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Ahmad Bukhari — Agentic AI & Enterprise Automation Architect and founder of AiXCEL Solutions.',
};

export default function AboutPage() {
  return <AboutClient />;
}
