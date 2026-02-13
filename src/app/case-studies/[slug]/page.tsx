import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

// ---------------------------------------------------------------------------
// Static params -- generates pages for all case study slugs at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Aixcel Solutions`,
    description: `Case study: ${cs.client} -- ${cs.title}`,
  };
}

// ---------------------------------------------------------------------------
// Server page -- delegates rendering to client component
// ---------------------------------------------------------------------------

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();

  return <CaseStudyDetailClient caseStudy={cs} />;
}
