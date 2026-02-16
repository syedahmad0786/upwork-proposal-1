import type { Metadata } from 'next';
import ProcessClient from './ProcessClient';

export const metadata: Metadata = {
  title: 'Process',
  description: 'Our proven 4-step process: Discovery, Strategy, Build & Deploy, Optimize & Scale. See results in weeks, not months.',
};

export default function ProcessPage() {
  return <ProcessClient />;
}
