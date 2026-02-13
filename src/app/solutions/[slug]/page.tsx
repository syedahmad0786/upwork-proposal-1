import { notFound } from "next/navigation";
import { solutions } from "@/data/solutions";
import SolutionDetailClient from "./SolutionDetailClient";

// ---------------------------------------------------------------------------
// Static params -- generates pages for all 6 solution slugs at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
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
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | Aixcel Solutions`,
    description: solution.description,
  };
}

// ---------------------------------------------------------------------------
// Server page -- delegates rendering to client component
// ---------------------------------------------------------------------------

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return notFound();

  const related = solutions.filter((s) => s.slug !== slug).slice(0, 2);

  return <SolutionDetailClient solution={solution} related={related} />;
}
