import type { Metadata } from "next";
import ProcessPageClient from "./ProcessPageClient";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Discover Aixcel Solutions' proven 4-phase AI implementation process — from discovery and strategy to deployment and continuous optimization.",
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
