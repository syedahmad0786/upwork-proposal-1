'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function SuccessClient() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/8 to-transparent rounded-full blur-3xl" />
      <div className="container-custom relative z-10 text-center max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-emerald-500/30 bg-white/[0.06] backdrop-blur-xl p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CheckCircle2 size={72} className="text-emerald-400 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Payment successful!
          </h1>
          <p className="text-muted leading-relaxed mb-8">
            Thank you for your purchase. You&apos;ll receive a confirmation email shortly. Next step: complete your quick onboarding form so we can start optimizing.
          </p>

          <Link href="/onboarding" className="btn-primary justify-center">
            <span>Complete Onboarding</span>
            <ArrowRight size={18} />
          </Link>

          <p className="text-xs text-muted mt-6">
            You&apos;ll also receive the onboarding link via email.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
