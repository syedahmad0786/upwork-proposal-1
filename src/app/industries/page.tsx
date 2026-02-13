import type { Metadata } from "next";
import IndustriesPageClient from "./IndustriesPageClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "AI automation solutions tailored for financial services, healthcare, manufacturing, e-commerce, technology, and professional services.",
};

export default function IndustriesPage() {
  return <IndustriesPageClient />;
}
