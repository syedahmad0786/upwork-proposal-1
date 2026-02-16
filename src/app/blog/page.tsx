import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Practical insights on AI automation, workflow optimization, and building intelligent business systems. From real deployments by AiXCEL Solutions.',
};

export default function BlogPage() {
  return <BlogClient />;
}
