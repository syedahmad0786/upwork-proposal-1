'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { blogPosts } from '@/data/blog';

const categories = ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogClient() {
  const featured = blogPosts.find((p) => p.featured);
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet/8 to-transparent rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge mb-4 inline-block">Insights & Resources</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Ideas that{' '}<span className="gradient-text">move business forward</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted leading-relaxed">
            Practical insights on AI automation, workflow optimization, and building intelligent systems — from real deployments.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section-padding pt-0">
          <div className="container-custom">
            <ScrollReveal>
              <Link href={`/blog/${featured.slug}`} className="block group">
                <div className="relative rounded-3xl border border-white/5 bg-gradient-to-br from-electric/5 via-transparent to-cyan/5 p-8 md:p-12 overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="bg-electric/20 text-electric text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                  </div>
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="badge text-xs">{featured.category}</span>
                      <span className="text-xs text-muted flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                      <span className="text-xs text-muted">{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-electric transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-electric text-sm font-medium group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {others.map((post) => (
              <motion.div key={post.slug} variants={fadeInUp}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <GlassCard padding="lg" className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-electric bg-electric/10 px-2 py-0.5 rounded">{post.category}</span>
                      <span className="text-xs text-muted flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-electric transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="text-electric text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-deep/50 border-t border-white/5">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want personalized advice?</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Get a free automation roadmap tailored to your specific business and challenges.
            </p>
            <Link href="/book" className="btn-primary">
              <span>Book Free Strategy Call</span>
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
