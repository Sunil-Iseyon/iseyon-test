'use client'

import { motion } from 'framer-motion'
import { TinaRichText } from './tina-rich-text'

interface PrivacyPolicyClientProps {
  content: any
}

export function PrivacyPolicyClient({ content }: PrivacyPolicyClientProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 pt-24">
      <div className="mb-8">
        <h1 id="privacy-heading" className="text-4xl font-bold text-slate-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Iseyon Analytics &mdash; Last updated:{' '}
          <time dateTime="2026-02-18">February 18, 2026</time>
        </p>
      </div>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TinaRichText
          content={content}
          className="text-base text-gray-700 leading-relaxed space-y-4"
        />
      </motion.article>
    </main>
  )
}
