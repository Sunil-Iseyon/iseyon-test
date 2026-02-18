'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ExternalLink, Quote, Calendar, User } from 'lucide-react'

/**
 * Statistics Callout Component
 * Displays impactful statistics with visual emphasis
 */
interface StatCalloutProps {
  value: string
  label: string
  source?: string
  sourceUrl?: string
  variant?: 'primary' | 'secondary' | 'accent'
}

export function StatCallout({ 
  value, 
  label, 
  source, 
  sourceUrl,
  variant = 'primary' 
}: StatCalloutProps) {
  const variantStyles = {
    primary: 'from-blue-500 to-indigo-600',
    secondary: 'from-purple-500 to-pink-600',
    accent: 'from-emerald-500 to-teal-600'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-xl bg-linear-to-br shadow-lg border border-white/20"
      style={{ 
        backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` 
      }}
    >
      <div className={`absolute inset-0 bg-linear-to-br ${variantStyles[variant]} opacity-90 rounded-xl`} />
      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-2">
          <TrendingUp className="w-6 h-6 text-white mt-1" />
          <div className="flex-1">
            <div className="text-4xl font-bold text-white mb-2">{value}</div>
            <div className="text-white/90 font-medium">{label}</div>
          </div>
        </div>
        {source && (
          <div className="mt-4 pt-4 border-t border-white/20">
            {sourceUrl ? (
              <a 
                href={sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm text-white/80 hover:text-white flex items-center gap-1 transition-colors"
              >
                Source: {source}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-sm text-white/80">Source: {source}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

/**
 * Statistics Grid Component
 * Displays multiple statistics in a responsive grid
 */
interface StatisticsGridProps {
  stats: Array<{
    value: string
    label: string
    source?: string
    sourceUrl?: string
  }>
}

export function StatisticsGrid({ stats }: StatisticsGridProps) {
  const variants = ['primary', 'secondary', 'accent'] as const

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {stats.map((stat, index) => (
        <StatCallout
          key={index}
          {...stat}
          variant={variants[index % variants.length]}
        />
      ))}
    </div>
  )
}

/**
 * Expert Quote Component
 * Displays attributed quotes with proper semantic markup
 */
interface ExpertQuoteProps {
  quote: string
  author: string
  title?: string
  organization?: string
  sourceUrl?: string
}

export function ExpertQuote({ 
  quote, 
  author, 
  title, 
  organization,
  sourceUrl 
}: ExpertQuoteProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="my-8 pl-6 border-l-4 border-blue-500 bg-slate-50 p-6 rounded-r-lg"
      cite={sourceUrl}
    >
      <div className="flex gap-3">
        <Quote className="w-8 h-8 text-blue-500 shrink-0" />
        <div className="flex-1">
          <p className="text-lg text-gray-700 italic mb-4">
            "{quote}"
          </p>
          <footer className="text-sm">
            <div className="font-semibold text-gray-900">— {author}</div>
            {(title || organization) && (
              <div className="text-gray-600 mt-1">
                {title && <span>{title}</span>}
                {title && organization && <span> at </span>}
                {organization && <span>{organization}</span>}
              </div>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1 mt-2"
              >
                View source
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </footer>
        </div>
      </div>
    </motion.blockquote>
  )
}

/**
 * Citation Component
 * Inline citation with optional tooltip
 */
interface CitationProps {
  source: string
  url: string
  inline?: boolean
}

export function Citation({ source, url, inline = true }: CitationProps) {
  if (inline) {
    return (
      <sup className="ml-0.5">
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 no-underline"
          title={source}
        >
          [↗]
        </a>
      </sup>
    )
  }

  return (
    <div className="text-sm text-gray-600 mt-2">
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="hover:underline inline-flex items-center gap-1"
      >
        Source: {source}
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  )
}

/**
 * Author & Publication Date Component (E-E-A-T Signal)
 */
interface AuthorMetadataProps {
  author: string
  authorTitle?: string
  publicationDate: string
  lastUpdated?: string
  authorUrl?: string
}

export function AuthorMetadata({ 
  author, 
  authorTitle, 
  publicationDate, 
  lastUpdated,
  authorUrl 
}: AuthorMetadataProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 py-4 border-y border-gray-200 my-6">
      <div className="flex items-center gap-2">
        <User className="w-4 h-4" />
        <span>
          By{' '}
          {authorUrl ? (
            <a 
              href={authorUrl} 
              className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {author}
            </a>
          ) : (
            <span className="font-semibold text-gray-900">{author}</span>
          )}
          {authorTitle && <span className="text-gray-500"> • {authorTitle}</span>}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        <time dateTime={publicationDate}>
          Published {formatDate(publicationDate)}
        </time>
      </div>
      {lastUpdated && (
        <div className="text-gray-500">
          Updated {formatDate(lastUpdated)}
        </div>
      )}
    </div>
  )
}

/**
 * References Section Component
 * Lists all citations at the end of content
 */
interface Reference {
  title: string
  url: string
  publisher?: string
  date?: string
}

interface ReferencesSectionProps {
  references: Reference[]
}

export function ReferencesSection({ references }: ReferencesSectionProps) {
  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">References & Citations</h2>
      <ol className="space-y-3 ml-6 list-decimal">
        {references.map((ref, index) => (
          <li key={index} className="text-sm text-gray-700">
            <a
              href={ref.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              {ref.title}
              <ExternalLink className="w-3 h-3" />
            </a>
            {ref.publisher && <span className="text-gray-600"> - {ref.publisher}</span>}
            {ref.date && <span className="text-gray-500"> ({ref.date})</span>}
          </li>
        ))}
      </ol>
    </section>
  )
}

/**
 * Data Table Component for Research/Comparisons
 */
interface DataTableProps {
  title?: string
  headers: string[]
  rows: string[][]
  caption?: string
}

export function DataTable({ title, headers, rows, caption }: DataTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-slate-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="text-sm text-gray-600 mt-2 italic">{caption}</p>
      )}
    </div>
  )
}
