/**
 * Advanced SEO Metadata Components
 * Implements xwisdom report suggestions for:
 * - Dublin Core metadata
 * - Hreflang tags
 * - License signals
 * - Speakable schema
 * - DefinedTerm schemas
 */

import { Metadata } from 'next'

// Dublin Core Metadata for archival systems and AI crawlers
export function getDublinCoreMetadata(page: {
  title: string
  description: string
  creator?: string
  date?: string
  subject?: string
  type?: string
}): Record<string, string> {
  return {
    'DC.title': page.title,
    'DC.description': page.description,
    'DC.creator': page.creator || 'Iseyon Analytics',
    'DC.date': page.date || new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.identifier': page.title,
    'DC.publisher': 'Iseyon Analytics',
    'DC.rights': 'Copyright © 2024 Iseyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': page.subject || 'Business Intelligence, AI Analytics, Data Science',
    'DC.type': page.type || 'InteractiveResource',
  }
}

// Hreflang Links for international SEO
export function getHrefLangLinks(baseUrl: string): { rel: string; href: string; hreflang: string }[] {
  return [
    {
      rel: 'alternate',
      href: baseUrl,
      hreflang: 'en',
    },
    {
      rel: 'alternate',
      href: baseUrl,
      hreflang: 'en-US',
    },
    {
      rel: 'alternate',
      href: baseUrl,
      hreflang: 'en-IN',
    },
    {
      rel: 'alternate',
      href: baseUrl,
      hreflang: 'x-default',
    },
  ]
}

// License Metadata for AI training signals
export function getLicenseMetadata() {
  return {
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'robots': 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
    'referrer': 'no-referrer-when-downgrade',
  }
}

// Speakable Schema for voice optimization
export function getSpeakableSchema(selectors: string[]) {
  return {
    '@type': 'SpeakableSpecification',
    'cssSelector': selectors,
    'xpath': [
      '/html/body//h1',
      '/html/body//h2',
      '/html/body//p[@class~="summary"]',
    ],
  }
}

// DefinedTerm Schema for technical terminology
export function getDefinedTermSchema(terms: { name: string; description: string; alternateName?: string[] }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    'name': 'Iseyon Analytics Glossary',
    'description': 'Key terminology and concepts in AI-powered business intelligence',
    'hasDefinedTerm': terms.map(term => ({
      '@type': 'DefinedTerm',
      'name': term.name,
      'description': term.description,
      'alternateName': term.alternateName,
      'inDefinedTermSet': 'https://www.iseyon.com/glossary',
    })),
  }
}

// Common technical terms for BI/AI industry
export const biAnalyticsTerms = [
  {
    name: 'Business Intelligence (BI)',
    description: 'Technology-driven process for analyzing data and delivering actionable information that helps executives, managers, and workers make informed business decisions',
    alternateName: ['BI', 'Business Analytics'],
  },
  {
    name: 'Artificial Intelligence (AI)',
    description: 'Simulation of human intelligence processes by machines, especially computer systems, including learning, reasoning, and self-correction',
    alternateName: ['AI', 'Machine Intelligence'],
  },
  {
    name: 'Lakehouse Platform',
    description: 'Data management architecture that combines the best elements of data lakes and data warehouses, enabling BI and AI on all data',
    alternateName: ['Data Lakehouse', 'Lakehouse Architecture'],
  },
  {
    name: 'Generative Engine Optimization (GEO)',
    description: 'Practice of optimizing content for AI-powered search and answer engines, improving visibility in AI-generated responses',
    alternateName: ['GEO', 'AI Search Optimization'],
  },
  {
    name: 'Extract Transform Load (ETL)',
    description: 'Process that extracts data from source systems, transforms it to fit operational needs, and loads it into end target database',
    alternateName: ['ETL', 'Data Integration'],
  },
  {
    name: 'Key Performance Indicator (KPI)',
    description: 'Measurable value that demonstrates how effectively a company is achieving key business objectives',
    alternateName: ['KPI', 'Performance Metric'],
  },
]

// Potenti alAction schema for agentic handoff
export function getPotentialActionSchema(actions: { type: string; name: string; target: string }[]) {
  return actions.map(action => ({
    '@type': action.type,
    'name': action.name,
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': action.target,
      'actionPlatform': [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  }))
}

// Standard potential actions for BI consulting site
export const standardActions = [
  {
    type: 'SearchAction',
    name: 'Search Iseyon Analytics Services',
    target: 'https://www.iseyon.com/search?q={search_term_string}',
  },
  {
    type: 'ViewAction',
    name: 'View Service Details',
    target: 'https://www.iseyon.com/services/{category}/{service}',
  },
  {
    type: 'ContactAction',
    name: 'Contact Iseyon Analytics',
    target: 'https://www.iseyon.com/contact',
  },
  {
    type: 'SubscribeAction',
    name: 'Subscribe to Newsletter',
    target: 'https://www.iseyon.com/#newsletter',
  },
]

// Comprehensive metadata generator
export function generateAdvancedMetadata(config: {
  page: string
  title: string
  description: string
  url: string
  date?: string
  author?: string
  includeDefinedTerms?: boolean
  includeSpeakable?: boolean
  speakableSelectors?: string[]
}): any {
  const dublinCore = getDublinCoreMetadata({
    title: config.title,
    description: config.description,
    date: config.date,
    creator: config.author,
  })

  const license = getLicenseMetadata()

  const result: any = {
    other: {
      ...dublinCore,
      ...license,
    },
  }

  // Add hreflang in alternates
  result.alternates = {
    canonical: config.url,
    languages: {
      'en': config.url,
      'en-US': config.url,
      'en-IN': config.url,
      'x-default': config.url,
    },
  }

  return result
}

/**
 * Article Schema for E-E-A-T Signals
 * Implements authorship, publication dates, and expertise signals
 */
export function getArticleSchema(config: {
  headline: string
  description: string
  url: string
  imageUrl?: string
  author: {
    name: string
    url?: string
    jobTitle?: string
    worksFor?: string
  }
  publishDate: string
  modifiedDate?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': config.headline,
    'description': config.description,
    'url': config.url,
    'image': config.imageUrl || 'https://www.iseyon.com/og-image.jpg',
    'datePublished': config.publishDate,
    'dateModified': config.modifiedDate || config.publishDate,
    'author': {
      '@type': 'Person',
      'name': config.author.name,
      'url': config.author.url || 'https://www.iseyon.com/team',
      'jobTitle': config.author.jobTitle || 'AI & BI Expert',
      'worksFor': {
        '@type': 'Organization',
        'name': config.author.worksFor || 'Iseyon Analytics',
        'url': 'https://www.iseyon.com',
      },
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Iseyon Analytics',
      'url': 'https://www.iseyon.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.iseyon.com/logo.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': config.url,
    },
    'keywords': config.keywords?.join(', ') || 'business intelligence, AI analytics, data science',
    'inLanguage': 'en-US',
  }
}

/**
 * Comprehensive Service/Insight Schema with E-E-A-T
 * Combines multiple schemas for maximum visibility
 */
export function getEnhancedContentSchema(config: {
  type: 'Service' | 'Article'
  headline: string
  description: string
  url: string
  imageUrl?: string
  publishDate?: string
  keywords?: string[]
}) {
  const baseSchema = getArticleSchema({
    headline: config.headline,
    description: config.description,
    url: config.url,
    imageUrl: config.imageUrl,
    author: {
      name: 'Iseyon Analytics Team',
      jobTitle: 'AI & Business Intelligence Experts',
      worksFor: 'Iseyon Analytics',
    },
    publishDate: config.publishDate || new Date().toISOString(),
    keywords: config.keywords,
  })

  return baseSchema
}
