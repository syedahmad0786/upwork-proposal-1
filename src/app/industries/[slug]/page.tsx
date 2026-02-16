import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries, getIndustryBySlug } from '@/data/industries';
import IndustryDetailClient from './IndustryDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Industry Not Found' };
  return {
    title: `${industry.title} Automation`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return <IndustryDetailClient industry={industry} />;
}
