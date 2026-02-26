'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { TinaRichText } from '@/components/tina-rich-text'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface BlogPost {
  title: string
  shortDescription?: string
  description: string | TinaMarkdownContent
  image: string
  category: string
  date: string
  readTime: string
  author?: string
  id: number
  slug: string
}

interface BlogDetailClientProps {
  blog: BlogPost
  prevBlog: BlogPost | null
  nextBlog: BlogPost | null
}

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  )
}

export function BlogDetailClient({ blog, prevBlog, nextBlog }: BlogDetailClientProps) {
  // Parse date for <time> element dateTime attribute
  const parsedDate = (() => {
    try {
      const cleaned = blog.date.replace(/\s+,/, ',')
      const d = new Date(cleaned)
      return isNaN(d.getTime()) ? null : d.toISOString().split('T')[0]
    } catch {
      return null
    }
  })()

  return (
    <>
      <ScrollToTop />
      
      <article className="max-w-4xl mx-auto px-6 py-16 pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="flex items-center gap-2 text-blue-600 hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            {parsedDate ? (
              <time dateTime={parsedDate} className="text-xs text-gray-500">{blog.date}</time>
            ) : (
              <span className="text-xs text-gray-500">{blog.date}</span>
            )}
            {blog.author && (
              <>
                <span className="text-xs text-gray-500">·</span>
                <Link href="/our-team" className="text-xs text-blue-600 hover:underline">
                  By {blog.author}
                </Link>
              </>
            )}
            {!blog.author && (
              <>
                <span className="text-xs text-gray-500">·</span>
                <Link href="/our-team" className="text-xs text-blue-600 hover:underline">
                  Iseyon Analytics Team
                </Link>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          className="relative w-full aspect-video mb-12 rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.section
          className="prose prose-lg max-w-none mb-12"
          aria-label="Article content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TinaRichText content={blog.description}/>
        </motion.section>

        {/* Previous/Next Navigation */}
        <motion.nav
          aria-label="Blog post navigation"
          className="border-t border-b py-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Previous Blog */}
            {prevBlog ? (
              <Link href={`/blog/${prevBlog.slug}`} className="group">
                <div className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronLeft className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1 text-gray-500">Previous</p>
                    <p className="font-semibold line-clamp-2 group-hover:underline">{prevBlog.title}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next Blog */}
            {nextBlog ? (
              <Link href={`/blog/${nextBlog.slug}`} className="group text-right">
                <div className="flex items-start justify-end gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1 text-gray-500">Next</p>
                    <p className="font-semibold line-clamp-2 group-hover:underline">{nextBlog.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 mt-1 shrink-0" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.nav>

        {/* Footer */}
        <motion.div
          className="pt-8"
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </motion.div>
      </article>
    </>
  )
}
