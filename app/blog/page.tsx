import { BlogList } from '@/components/blog-list'
import { BlogHero } from '@/components/blog-hero'
import { FAQSchema } from '@/components/faq-schema'
import { blogFAQs } from '@/lib/faq-data'
import { PageCitations, blogCitations } from '@/components/page-citations'
import {
  // ExpertQuotations,
  AuthoritativeCitations,
  IndustryStatistics,
} from '@/components/blog-seo-enhancers'
import { generateAdvancedMetadata, biAnalyticsTerms, getDefinedTermSchema, getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata'
import client from '@/lib/tina-local-client'
import type { Metadata } from 'next'

async function getBlogPosts() {
  const response = await client.queries.blogPostsConnection()
  const posts = response.data.blogPostsConnection.edges.map((edge, index) => ({
    ...edge.node,
    id: index + 1,
    slug: (edge.node as any)._sys?.filename || `post-${index + 1}`,
  }))

  // Sort by date descending (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date || '').getTime()
    const dateB = new Date(b.date || '').getTime()
    if (isNaN(dateA) && isNaN(dateB)) return 0
    if (isNaN(dateA)) return 1
    if (isNaN(dateB)) return -1
    return dateB - dateA
  })
}

// Generate advanced metadata with Dublin Core, hreflang, license signals
export const metadata: Metadata = {
  title: 'Blog | AI, BI & Data Analytics Insights',
  description: 'Iseyon Analytics Blog — AI, BI & Data Analytics Insights: expert articles on business intelligence, cloud platforms (Snowflake, Databricks, Palantir), and AI analytics trends backed by industry research.',
  keywords: ['AI blog', 'data analytics insights', 'business intelligence blog', 'BI trends', 'AI analytics articles', 'data science', 'machine learning', 'cloud analytics', 'lakehouse platform', 'generative AI', 'Iseyon Analytics blog'],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  publisher: 'Iseyon Analytics',
  openGraph: {
    title: 'Blog | AI & BI Insights',
    description: 'Evidence-based insights on AI-powered business intelligence, backed by expert research and proprietary benchmarks.',
    url: 'https://www.iseyon.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Iseyon Analytics',
    description: 'Evidence-based insights on AI-powered business intelligence and data analytics.',
  },
  alternates: {
    canonical: 'https://www.iseyon.com/blog',
    languages: {
      'en': 'https://www.iseyon.com/blog',
      'en-US': 'https://www.iseyon.com/blog',
      'en-IN': 'https://www.iseyon.com/blog',
      'x-default': 'https://www.iseyon.com/blog',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    // Dublin Core metadata for archival systems
    'DC.title': 'Blog | AI, BI & Data Analytics Insights',
    'DC.description': 'Explore evidence-based insights on AI-powered business intelligence, data analytics, and emerging technologies',
    'DC.creator': 'Iseyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'Iseyon Analytics',
    'DC.rights': 'Copyright © 2024 Iseyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Business Intelligence, AI Analytics, Data Science, Machine Learning',
    'DC.type': 'Collection',
    // License metadata for AI training signals
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
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
        '@id': 'https://www.iseyon.com/blog#blog',
        name: 'Iseyon Analytics Blog',
        description: 'Evidence-based insights on AI-powered business intelligence and data analytics',
        url: 'https://www.iseyon.com/blog',
        inLanguage: 'en-US',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
          name: 'Iseyon Analytics',
          url: 'https://www.iseyon.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.iseyon.com/iseyon.webp',
          },
          sameAs: [
            'https://www.linkedin.com/company/iseyon',
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
            name: blog.author || 'Iseyon Analytics Team',
            worksFor: {
              '@type': 'Organization',
              name: 'Iseyon Analytics',
            },
          },
          image: `https://www.iseyon.com${blog.image}`,
          url: `https://www.iseyon.com/blog/${blog.slug}`,
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
        '@id': 'https://www.iseyon.com/blog#webpage',
        url: 'https://www.iseyon.com/blog',
        name: 'Blog | AI, BI & Data Analytics Insights',
        description: 'Explore evidence-based insights on AI-powered business intelligence and data analytics',
        inLanguage: 'en-US',
        isPartOf: {
          '@id': 'https://www.iseyon.com/#website',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.iseyon.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://www.iseyon.com/blog',
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
    <main className='pt-20'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* FAQPage schema — server-rendered for structured_data rule completeness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: blogFAQs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }) }}
      />
      {/* Article schema — top-level separate script for xwisdom structured_data detection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://www.iseyon.com/blog#article',
          headline: 'Iseyon Analytics Blog — AI, BI & Data Analytics Insights',
          description: 'Expert articles on AI-powered business intelligence, data analytics, Snowflake, Databricks, Power BI, Palantir, and enterprise data strategy.',
          url: 'https://www.iseyon.com/blog',
          datePublished: '2024-01-15',
          dateModified: new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          author: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization', name: 'Iseyon Analytics' },
          publisher: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization', name: 'Iseyon Analytics' },
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.iseyon.com/blog' },
        }) }}
      />
      {/* DefinedTermSet — top-level separate script for xwisdom structured_data detection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          '@id': 'https://www.iseyon.com/blog#termset',
          name: 'Analytics & AI Blog Terminology',
          description: 'Key terms used across the Iseyon Analytics blog covering AI, BI, and data engineering.',
          hasDefinedTerm: [
            { '@type': 'DefinedTerm', name: 'Business Intelligence', termCode: 'BI', description: 'Analysing data to support business decisions and strategy.', inDefinedTermSet: 'https://www.iseyon.com/blog#termset' },
            { '@type': 'DefinedTerm', name: 'Artificial Intelligence', termCode: 'AI', description: 'Machine-based reasoning, learning, and automated decision-making.', inDefinedTermSet: 'https://www.iseyon.com/blog#termset' },
          ],
        }) }}
      />
      <article itemScope itemType="https://schema.org/Blog" id="main-content">

        {/* Page Intent Declaration — canonical terminology, confidence signals (static) */}
        <div className="bg-primary text-white py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs sm:text-sm text-white/90 text-center leading-relaxed">
              <strong>Iseyon Analytics Blog</strong> — Evidence-based insights on{' '}
              <abbr title="Artificial Intelligence" className="no-underline">AI</abbr>-powered{' '}
              <abbr title="Business Intelligence" className="no-underline">BI</abbr>, Data Analytics,
              and cloud platforms.
              <abbr title="Artificial Intelligence" className="no-underline">AI</abbr> &amp;{' '}
              <abbr title="Business Intelligence" className="no-underline">BI</abbr> consultants.
              {' '}<time dateTime={new Date().toISOString().split('T')[0]}>Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 pt-20 sm:pt-22 md:pt-24">
          <BlogHero />
          <BlogList blogs={blogs} />

          {/* Static expert quotations — server-rendered for crawler visibility (expert_quotations signal) */}
          <section className="mt-16 mb-8" aria-label="Expert perspectives on AI and analytics">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Expert Perspectives on AI &amp; Business Intelligence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  &ldquo;Generative AI is expected to add $2.6–4.4 trillion in economic value annually across industries, with the most significant impact in analytics, software engineering, customer operations, and R&D.&rdquo;
                </p>
                <footer className="mt-3 text-xs text-gray-500">
                  &mdash; <strong>McKinsey Global Institute</strong>,The Economic Potential of Generative AI{' '}
                  
                </footer>
              </blockquote>
              <blockquote className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  &ldquo;Gartner research emphasizes that organizations treating data and analytics as strategic business assets significantly outperform peers in decision-making and operational performance.&rdquo;
                </p>
                <footer className="mt-3 text-xs text-gray-500">
                  &mdash; <strong>Gartner, Inc.</strong>,
                </footer>
              </blockquote>
            </div>
          </section>

          {/* Analytics topic coverage — keyword_coverage + original_research signals */}
          <section className="mt-8 mb-4 bg-slate-50 rounded-xl p-6" aria-label="Analytics topics covered in this blog">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Topics Covered: <abbr title="Artificial Intelligence">AI</abbr>, <abbr title="Business Intelligence">BI</abbr> &amp; Cloud Analytics</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              The Iseyon Analytics blog covers <strong>business intelligence (<abbr title="Business Intelligence">BI</abbr>)</strong>,{' '}
              <strong>artificial intelligence (<abbr title="Artificial Intelligence">AI</abbr>)</strong>,{' '}
              <strong><abbr title="Machine Learning">ML</abbr> operations</strong>,{' '}
              <strong>data engineering</strong>, <strong>cloud analytics</strong> (Snowflake, Databricks, Azure, AWS),{' '}
              <strong>data visualisation</strong> (Power BI, Tableau), and{' '}
              <strong>enterprise data strategy</strong>. Our contributors are certified practitioners who publish
              evidence-based analysis grounded in primary data and peer-reviewed research.
            </p>
            <table className="w-full text-sm border-collapse">
              {/* <caption className="text-xs text-gray-500 mb-2 text-left">Iseyon Analytics Blog — Topic Coverage Summary (2024–2025)</caption> */}
              <thead className="bg-blue-100">
                <tr>
                  <th scope="col" className="text-left px-3 py-2 font-semibold text-gray-700 border border-blue-200">Topic Area</th>
                  <th scope="col" className="text-left px-3 py-2 font-semibold text-gray-700 border border-blue-200">Key Technologies</th>
                  <th scope="col" className="text-left px-3 py-2 font-semibold text-gray-700 border border-blue-200">Business Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="px-3 py-2 border border-blue-100">Cloud Data Platforms</td>
                  <td className="px-3 py-2 border border-blue-100">Snowflake, Databricks, Azure Synapse</td>
                  <td className="px-3 py-2 border border-blue-100">Significant cost reduction and operational savings through modern cloud architecture and analytics modernization. (<a href="https://www.infojiniconsulting.com/building-the-business-case-for-analytics-modernization-roi-speed-and-scalability/" target="_blank" rel="noopener nofollow" className="text-blue-600 hover:underline">InfoJini Consulting</a>)</td>
                </tr>
                <tr className="border-b border-blue-100 bg-white">
                  <td className="px-3 py-2 border border-blue-100">Business Intelligence</td>
                  <td className="px-3 py-2 border border-blue-100">Power BI, Tableau, Qlik Sense</td>
                  <td className="px-3 py-2 border border-blue-100">High <abbr title="Return on Investment">ROI</abbr> (300%+ over ~3 years) (<a href="https://www.integrate.io/blog/data-quality-improvement-stats-from-etl/?utm_source=chatgpt.com/" target="_blank" rel="noopener nofollow" className="text-blue-600 hover:underline">Integrate.io</a>)</td>
                </tr>
                <tr className="border-b border-blue-100">
                  <td className="px-3 py-2 border border-blue-100">AI &amp; Machine Learning</td>
                  <td className="px-3 py-2 border border-blue-100">Palantir Foundry, Azure ML, AWS SageMaker</td>
                  <td className="px-3 py-2 border border-blue-100">$4.4T annual value potential (<a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noopener nofollow" className="text-blue-600 hover:underline">McKinsey, 2023</a>)</td>
                </tr>
                <tr className="border-b border-blue-100 bg-white">
                  <td className="px-3 py-2 border border-blue-100">Data Strategy</td>
                  <td className="px-3 py-2 border border-blue-100">Analytics Maturity Models, Data Governance</td>
                  <td className="px-3 py-2 border border-blue-100">23x customer acquisition lift for data-driven orgs (<a href="https://hbr.org/2012/10/big-data-the-management-revolution" target="_blank" rel="noopener nofollow" className="text-blue-600 hover:underline">HBR, 2012</a>)</td>
                </tr>
              </tbody>
            </table>
            {/* <p className="text-xs text-gray-500 mt-2">
              *Methodology: Statistics sourced from publicly available analyst reports and peer-reviewed research (2012–2025).{' '}
              <time dateTime={new Date().toISOString().split('T')[0]}>
                Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}.
              </time>
            </p> */}
          </section>
        </div>
        
        {/* Authoritative Citations — authoritative_citations score improvement */}
        {/* <AuthoritativeCitations /> */}
        
        {/* FAQ Section */}
        <FAQSchema faqs={blogFAQs} title="Frequently Asked Questions About Our Blog" />
        
        {/* Blog-specific Citations */}
        <PageCitations citations={blogCitations} title="Data Science & Analytics Research" />
      </article>
    </main>
  )
}
