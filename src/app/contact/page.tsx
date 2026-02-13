import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aixcel Solutions. Schedule a consultation or send us a message about your AI automation needs.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
