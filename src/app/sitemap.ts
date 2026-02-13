import type { MetadataRoute } from "next";
import { solutions } from "@/data/solutions";
import { caseStudies } from "@/data/caseStudies";

const BASE = "https://aixcelsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/book-consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `${BASE}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...solutionPages, ...caseStudyPages];
}
