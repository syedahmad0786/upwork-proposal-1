import type { Metadata } from "next";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Expert articles, guides, and thought leadership on AI automation, enterprise AI strategy, and intelligent process optimization.",
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
