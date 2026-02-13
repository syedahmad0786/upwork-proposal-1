import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aixcel Solutions — our mission, values, and the expert team building intelligent AI automation systems for enterprises worldwide.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
