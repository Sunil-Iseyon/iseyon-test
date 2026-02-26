'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Award, TrendingUp } from 'lucide-react'

// Citation type and all data live in the server-safe lib file.
// Re-export them here so existing imports from '@/components/page-citations' keep working.
export type { Citation } from '@/lib/citation-data'
export {
  homeCitations,
  serviceCitations,
  blogCitations,
  teamCitations,
  visionCitations,
  contactCitations,
  insightCitations,
} from '@/lib/citation-data'

import type { Citation } from '@/lib/citation-data'

interface PageCitationsProps {
  citations: Citation[]
  title?: string
}

export function PageCitations({ citations, title = "Authoritative Research & Citations" }: PageCitationsProps) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Evidence-Based Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our insights are backed by leading research institutions and industry experts
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {citations.map((citation, index) => (
            <li key={index}>
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-2 leading-tight">
                    {citation.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {citation.source} • {citation.year}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {citation.excerpt}
              </p>

              <a
                href={citation.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                <span>Read full study</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
