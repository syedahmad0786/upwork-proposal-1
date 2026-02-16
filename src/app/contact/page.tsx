import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AiXCEL Solutions. Email, WhatsApp, or book a free strategy call. We respond within 4 hours.',
};

export default function ContactPage() {
  return <ContactClient />;
}
