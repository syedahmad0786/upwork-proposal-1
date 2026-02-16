import type { Metadata } from 'next';
import BookClient from './BookClient';

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call',
  description: 'Book a free 60-minute strategy session with AiXCEL Solutions. Get a custom automation roadmap delivered within 48 hours.',
};

export default function BookPage() {
  return <BookClient />;
}
