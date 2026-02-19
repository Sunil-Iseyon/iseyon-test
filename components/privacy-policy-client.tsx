'use client'

import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface PrivacyPolicyClientProps {
  content: any
}

// TinaCMS stores the content with escaped markdown characters.
// Unescape them so ReactMarkdown renders lists, links, etc. correctly.
function unescapeTinaMarkdown(raw: string): string {
  return raw
    .replace(/\\\*/g, '*')   // \* → *  (list bullets)
    .replace(/\\\./g, '.')   // \. → .  (numbered lists, domains)
    .replace(/\\@/g, '@')    // \@ → @  (email addresses)
    .replace(/\\\\/g, '\\')  // \\ → \  (literal backslash)
}

export function PrivacyPolicyClient({ content }: PrivacyPolicyClientProps) {
  const isString = typeof content === 'string'

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
          prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
          prose-li:text-gray-700 prose-li:my-1
          prose-a:text-primary prose-a:underline
          prose-strong:text-slate-900"
      >
        {isString ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {unescapeTinaMarkdown(content)}
          </ReactMarkdown>
        ) : (
          <TinaMarkdown content={content} />
        )}
      </motion.article>
    </main>
  )
}
