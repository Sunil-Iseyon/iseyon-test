'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

interface BlogPost {
  title: string
  shortDescription?: string
  description: string
  image: string
  category: string
  date: string
  readTime: string
  author?: string
  id: number
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
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-gray-500">{blog.date}</span>
            <span className="text-xs text-gray-500">·</span>
            <span className="text-xs text-gray-500">{blog.readTime}</span>
            {blog.author && (
              <>
                <span className="text-xs text-gray-500">·</span>
                <span className="text-xs text-gray-500">By {blog.author}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="relative h-96 md:h-125 mb-12 rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="prose prose-lg max-w-none mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-bold mb-5 mt-7">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold mb-4 mt-6">{children}</h3>,
              h4: ({ children }) => <h4 className="text-xl font-semibold mb-3 mt-5">{children}</h4>,
              p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed text-gray-700">{children}</li>,
              strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600">{children}</code>,
              blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">{children}</blockquote>,
            }}
          >
            {blog.description}
          </ReactMarkdown>
        </motion.div>

        {/* Previous/Next Navigation */}
        <motion.div
          className="border-t border-b py-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Previous Blog */}
            {prevBlog ? (
              <Link href={`/blog/${prevBlog.id}`} className="group">
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
              <Link href={`/blog/${nextBlog.id}`} className="group text-right">
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
        </motion.div>

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
