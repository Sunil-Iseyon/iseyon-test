import { BlogList } from '@/components/blog-list'
import { BlogHero } from '@/components/blog-hero'
import {
  AuthoritativeCitations,
  ExpertQuotations,
  ProprietaryResearch,
  IndustryStatistics,
} from '@/components/blog-seo-enhancers'
import { generateAdvancedMetadata, biAnalyticsTerms, getDefinedTermSchema, getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata'
import client from '@/lib/tina-local-client'
import type { Metadata } from 'next'

async function getBlogPosts() {
  const response = await client.queries.blogPostsConnection()
  return response.data.blogPostsConnection.edges.map((edge, index) => ({
    ...edge.node,
    id: index + 1,
  }))
}

// Generate advanced metadata with Dublin Core, hreflang, license signals
export const metadata: Metadata = {
  title: 'Blog | AI, BI & Data Analytics Insights | iSeyon Analytics',
  description: 'Explore evidence-based insights on AI-powered business intelligence, data analytics, cloud platforms (Snowflake, Databricks, Palantir), and emerging technologies. Backed by expert research and proprietary benchmarks.',
  keywords: ['AI blog', 'business intelligence insights', 'data analytics articles', 'BI trends', 'technology insights', 'data science', 'machine learning', 'cloud analytics', 'lakehouse platform', 'generative AI'],
  authors: [{ name: 'iSeyon Analytics Team', url: 'https://iseyon-analytics-v0.vercel.app/team' }],
  publisher: 'iSeyon Analytics',
  openGraph: {
    title: 'Blog | AI & BI Insights',
    description: 'Evidence-based insights on AI-powered business intelligence, backed by expert research and proprietary benchmarks.',
    url: 'https://iseyon-analytics-v0.vercel.app/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | iSeyon Analytics',
    description: 'Evidence-based insights on AI-powered business intelligence and data analytics.',
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app/blog',
    languages: {
      'en': 'https://iseyon-analytics-v0.vercel.app/blog',
      'en-US': 'https://iseyon-analytics-v0.vercel.app/blog',
      'en-IN': 'https://iseyon-analytics-v0.vercel.app/blog',
      'x-default': 'https://iseyon-analytics-v0.vercel.app/blog',
    },
  },
  other: {
    // Dublin Core metadata for archival systems
    'DC.title': 'Blog | AI, BI & Data Analytics Insights',
    'DC.description': 'Explore evidence-based insights on AI-powered business intelligence, data analytics, and emerging technologies',
    'DC.creator': 'iSeyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'iSeyon Analytics',
    'DC.rights': 'Copyright © 2024 iSeyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Business Intelligence, AI Analytics, Data Science, Machine Learning',
    'DC.type': 'Collection',
    // License metadata for AI training signals
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'robots': 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
    'referrer': 'no-referrer-when-downgrade',
  },
}

export default async function BlogPage() {
  const blogs = await getBlogPosts()

  // Enhanced Blog schema with BlogPosting array, DefinedTerms, Speakable, and PotentialActions
  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://iseyon-analytics-v0.vercel.app/blog#blog',
        name: 'iSeyon Analytics Blog',
        description: 'Evidence-based insights on AI-powered business intelligence and data analytics',
        url: 'https://iseyon-analytics-v0.vercel.app/blog',
        inLanguage: 'en-US',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
          name: 'iSeyon Analytics',
          url: 'https://iseyon-analytics-v0.vercel.app',
          logo: {
            '@type': 'ImageObject',
            url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
          },
          sameAs: [
            'https://www.linkedin.com/company/iseyon-analytics',
          ],
        },
        blogPost: blogs.slice(0, 5).map(blog => ({
          '@type': 'BlogPosting',
          headline: blog.title,
          description: blog.shortDescription || blog.description,
          datePublished: blog.date,
          dateModified: new Date().toISOString().split('T')[0],
          author: {
            '@type': 'Person',
            name: blog.author || 'iSeyon Analytics Team',
            worksFor: {
              '@type': 'Organization',
              name: 'iSeyon Analytics',
            },
          },
          image: `https://iseyon-analytics-v0.vercel.app${blog.image}`,
          url: `https://iseyon-analytics-v0.vercel.app/blog/${blog.id}`,
        })),
        // Speakable schema for voice optimization
        speakable: getSpeakableSchema(['h1', 'h2', '.summary']),
        // Potential actions for agentic handoff
        potentialAction: getPotentialActionSchema(standardActions),
      },
      // DefinedTerm schema for technical terminology
      getDefinedTermSchema(biAnalyticsTerms),
      // WebPage schema
      {
        '@type': 'WebPage',
        '@id': 'https://iseyon-analytics-v0.vercel.app/blog#webpage',
        url: 'https://iseyon-analytics-v0.vercel.app/blog',
        name: 'Blog | AI, BI & Data Analytics Insights',
        description: 'Explore evidence-based insights on AI-powered business intelligence and data analytics',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://iseyon-analytics-v0.vercel.app/#website',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://iseyon-analytics-v0.vercel.app',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://iseyon-analytics-v0.vercel.app/blog',
            },
          ],
        },
        about: {
          '@type': 'Thing',
          name: 'Business Intelligence and AI Analytics',
        },
        license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article itemScope itemType="https://schema.org/Blog" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 pt-20 sm:pt-22 md:pt-24">
          <BlogHero />
          <BlogList blogs={blogs} />
        </div>
        
        {/* Evidence-based content sections for E-E-A-T */}
        <IndustryStatistics />
        <AuthoritativeCitations />
        <ExpertQuotations />
        <ProprietaryResearch />
      </article>
    </>
  )
}
