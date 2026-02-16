'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import type { BlogPost } from '@/data/blog';

export default function BlogPostClient({ post, relatedPosts }: { post: BlogPost; relatedPosts: BlogPost[] }) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-electric transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="badge text-xs">{post.category}</span>
            <span className="text-xs text-muted flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span className="text-xs text-muted flex items-center gap-1">
              <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            {post.title}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric to-cyan flex items-center justify-center text-sm font-bold text-white">
              AB
            </div>
            <div>
              <div className="text-sm text-white font-medium">{post.author}</div>
              <div className="text-xs text-muted">Founder, AiXCEL Solutions</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="container-custom max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-cloud leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mt-12 pt-8 border-t border-white/5">
              <Tag size={14} className="text-muted" />
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/5 text-muted px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-deep/50 border-t border-white/5">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-white mb-8">Related articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block group">
                  <GlassCard padding="lg" className="h-full">
                    <span className="text-xs font-mono text-electric bg-electric/10 px-2 py-0.5 rounded">{rp.category}</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-electric transition-colors leading-snug">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{rp.excerpt}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to automate?</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">Let&apos;s discuss how these strategies apply to your specific business.</p>
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
