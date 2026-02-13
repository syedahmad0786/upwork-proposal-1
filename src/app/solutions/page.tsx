import type { Metadata } from "next";
import SolutionsPageClient from "./SolutionsPageClient";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Explore Aixcel Solutions' suite of enterprise AI services — autonomous agents, voice AI, content operations, process automation, and more.",
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
