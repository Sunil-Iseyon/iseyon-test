'use client'

import { motion } from 'framer-motion'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface PrivacyPolicyClientProps {
  content: any
}

export function PrivacyPolicyClient({ content }: PrivacyPolicyClientProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 pt-24">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="prose prose-lg prose-slate max-w-none
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:my-4 prose-li:text-gray-700
          prose-strong:text-slate-900"
      >
        <TinaMarkdown content={content} />
      </motion.article>
    </main>
  )
}
