import type { Metadata } from "next";
import BookConsultationClient from "./BookConsultationClient";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a complimentary 30-minute AI strategy session with our experts. Discuss your challenges and discover automation opportunities.",
};

export default function BookConsultationPage() {
  return <BookConsultationClient />;
}
