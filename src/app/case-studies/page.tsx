import type { Metadata } from "next";
import CaseStudiesPageClient from "./CaseStudiesPageClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real clients. See how Aixcel Solutions has delivered measurable ROI through AI automation across industries.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
