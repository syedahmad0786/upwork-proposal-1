import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import CaseStudyDetailClient from './CaseStudyDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.subtitle };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();
  return <CaseStudyDetailClient caseStudy={cs} />;
}
