import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative pt-32 pb-20 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-custom relative z-10 text-center max-w-xl mx-auto">
        <div className="text-8xl font-bold font-mono text-electric/20 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <span>Back to Home</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
