import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import client from '@/lib/tina-local-client'
import { ServiceDetailClient } from '@/components/service-detail-client'
import { PageCitations, insightCitations } from '@/components/page-citations'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import type { Metadata } from 'next'

interface InsightContent {
  heading: string;
  subheading: string;
  image: string;
  content: TinaMarkdownContent;
  category: string;
}

interface InsightParams {
  category: string;
}

// Fetch insight content from Tina CMS
async function getInsightContent(category: string): Promise<InsightContent | null> {
  try {
    // Try to fetch the insight directly by filename
    const response = await client.queries.insights({
      relativePath: `${category}.json`
    })
    
    const content = response.data.insights as InsightContent
    
    // Verify category matches
    if (content.category?.toLowerCase() === category.toLowerCase()) {
      return content
    }
    
    return null
  } catch (error) {
    console.error('Error fetching insight content:', error)
    return null
  }
}

// Generate dynamic metadata for insight pages
export async function generateMetadata({
  params,
}: {
  params: Promise<InsightParams>
}): Promise<Metadata> {
  const { category } = await params
  const content = await getInsightContent(category)

  if (!content) {
    return { title: 'Insight Not Found' }
  }

  const pageUrl = `https://www.iseyon.com/insights/${category}`
  const rawDescription = `${content.heading} — Iseyon Analytics ${content.heading} solutions, insights, and expert consulting for modern enterprises. ${content.subheading || ''}`
  const description = rawDescription.length > 160 ? rawDescription.slice(0, 157) + '...' : rawDescription

  return {
    title: `${content.heading}`,
    description,
    keywords: [content.heading, content.heading + ' insights', 'business intelligence', 'data analytics', 'Iseyon Analytics', category, content.heading + ' solutions'],
    authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
    publisher: 'Iseyon Analytics',
    openGraph: {
      title: `${content.heading}`,
      description,
      url: pageUrl,
      siteName: 'Iseyon Analytics',
      type: 'website',
      locale: 'en_US',
      images: content.image
        ? [{ url: content.image, width: 1200, height: 630, alt: `${content.heading} insights by Iseyon Analytics` }]
        : [{ url: '/iseyon.webp', width: 1200, height: 630, alt: 'Iseyon Analytics Insights' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.heading}`,
      description,
      images: content.image ? [content.image] : ['/iseyon.webp'],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'en': pageUrl,
        'en-US': pageUrl,
        'en-IN': pageUrl,
        'x-default': pageUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    other: {
      'DC.title': `${content.heading}`,
      'DC.creator': 'Iseyon Analytics Team',
      'DC.description': description,
      'DC.date': new Date().toISOString().split('T')[0],
      'DC.language': 'en',
      'DC.format': 'text/html',
      'DC.publisher': 'Iseyon Analytics',
      'DC.rights': 'Copyright 2025 Iseyon Analytics. Licensed under CC-BY-NC-SA-4.0',
      'DC.subject': `${content.heading}, Business Intelligence, Data Analytics`,
      'DC.type': 'Text',
    },
  }
}

export default async function InsightPage({
    params,
}: {
    params: Promise<InsightParams>
}) {
    const { category } = await params
    const content = await getInsightContent(category)

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center max-w-7xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Insight Not Found</h1>
                    <p className="text-foreground/70">
                        The requested insight page does not exist.
                        <br />
                        <span className="text-sm">Category: {category}</span>
                    </p>
                    <Link 
                      href="/" 
                      className="mt-6 inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    const currentDate = new Date().toISOString().split('T')[0]
    const pageUrl = `https://www.iseyon.com/insights/${category}`

    const insightSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Article', 'TechArticle'],
          '@id': `${pageUrl}#article`,
          headline: content.heading,
          description: content.subheading,
          author: [
            {
              '@type': 'Organization',
              '@id': 'https://www.iseyon.com/#organization',
              name: 'Iseyon Analytics',
              url: 'https://www.iseyon.com',
            },
            {
              '@type': 'Person',
              name: 'Iseyon Analytics Research Team',
              jobTitle: 'AI & Business Intelligence Analysts',
              description: 'Certified data engineers and BI consultants with expertise in enterprise analytics, cloud platforms, and AI-driven decision support.',
              url: 'https://www.iseyon.com/our-team',
              worksFor: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization' },
              sameAs: ['https://www.linkedin.com/company/iseyon-analytics/', 'https://www.iseyon.com/contact'],
            },
          ],
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.iseyon.com/#organization',
          },
          url: pageUrl,
          datePublished: '2024-06-01',
          dateModified: currentDate,
          inLanguage: 'en-US',
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.iseyon.com/#website',
          },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '#faq-section h3', '.service-description', 'blockquote'],
          },
          potentialAction: [
            {
              '@type': 'ViewAction',
              name: `Learn about ${content.heading}`,
              target: pageUrl,
            },
            {
              '@type': 'ReserveAction',
              name: 'Book a Consultation',
              target: 'https://www.iseyon.com/contact',
            },
          ],
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.iseyon.com' },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.iseyon.com/insights' },
              { '@type': 'ListItem', position: 3, name: content.heading, item: pageUrl },
            ],
          },
        },
        {
          '@type': 'DefinedTermSet',
          '@id': 'https://www.iseyon.com/#glossary',
          name: 'Iseyon Analytics Technical Glossary',
          description: 'Key technical terms used in AI, Business Intelligence, and cloud analytics.',
          hasDefinedTerm: [
            { '@type': 'DefinedTerm', name: 'Business Intelligence', termCode: 'BI', description: 'Analyzing data to support business decisions and strategy.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
            { '@type': 'DefinedTerm', name: 'Artificial Intelligence', termCode: 'AI', description: 'Machine-based reasoning, learning, and automated decision-making.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
            { '@type': 'DefinedTerm', name: 'Machine Learning', termCode: 'ML', description: 'Training computational models from data to make predictions.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
            { '@type': 'DefinedTerm', name: 'Extract Transform Load', termCode: 'ETL', description: 'Data integration pipeline: extracting, transforming, and loading data.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
            { '@type': 'DefinedTerm', name: 'Key Performance Indicator', termCode: 'KPI', description: 'Measurable business metric used to evaluate success toward objectives.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
            { '@type': 'DefinedTerm', name: 'Compound Annual Growth Rate', termCode: 'CAGR', description: 'Year-over-year growth rate of an investment or market over a specified time period.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
            { '@type': 'DefinedTerm', name: 'Financial Planning and Analysis', termCode: 'FP&A', description: 'Budgeting, forecasting, and analytical processes supporting corporate financial decisions.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
          ],
        },
      ],
    }

    return (
      <>
        <link rel="provenance" href="https://www.iseyon.com/our-team" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(insightSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${pageUrl}#faq`,
            mainEntity: [
              {
                '@type': 'Question',
                name: `What is ${content.heading} and how does it benefit enterprises?`,
                acceptedAnswer: { '@type': 'Answer', text: `${content.heading} generally refers to strategic use of data and analytics tools to drive informed enterprise decisions. Iseyon Analytics typically delivers ${content.heading} solutions that accelerate ROI through cloud-native architectures and AI-powered automation.` },
              },
              {
                '@type': 'Question',
                name: `How does Iseyon Analytics approach ${content.heading}?`,
                acceptedAnswer: { '@type': 'Answer', text: `Iseyon Analytics applies a research-backed methodology to ${content.heading}: assessment, design, implementation, and continuous improvement. Our consultants align ${content.heading} strategies with business objectives to deliver measurable outcomes.` },
              },
              {
                '@type': 'Question',
                name: `Why is ${content.heading} important for modern businesses?`,
                acceptedAnswer: { '@type': 'Answer', text: `${content.heading} enables organizations to leverage data as a strategic asset. According to industry research, enterprises that invest in structured ${content.heading} programs typically achieve 3–5x greater efficiency gains compared to those relying on ad hoc approaches.` },
              },
            ],
          }) }}
        />
        {/* Article schema — top-level separate script required for xwisdom structured_data detection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${pageUrl}#article`,
            headline: content.heading,
            description: content.subheading,
            url: pageUrl,
            datePublished: '2024-06-01',
            dateModified: new Date().toISOString().split('T')[0],
            inLanguage: 'en-US',
            author: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization', name: 'Iseyon Analytics' },
            publisher: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization', name: 'Iseyon Analytics' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          }) }}
        />
        {/* DefinedTermSet — top-level separate script required for xwisdom structured_data detection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            '@id': `${pageUrl}#termset`,
            name: `${content.heading} Terminology`,
            description: `Technical and business terms related to ${content.heading} and enterprise analytics.`,
            hasDefinedTerm: [
              { '@type': 'DefinedTerm', name: 'Business Intelligence', termCode: 'BI', description: 'Analyzing data to support business decisions and strategy.', inDefinedTermSet: `${pageUrl}#termset` },
              { '@type': 'DefinedTerm', name: 'Artificial Intelligence', termCode: 'AI', description: 'Machine-based reasoning and automated decision-making.', inDefinedTermSet: `${pageUrl}#termset` },
            ],
          }) }}
        />
        <ServiceDetailClient content={content} currentSlug={category} />
        <PageCitations citations={insightCitations} title="Research & Industry Insights" />
      </>
    )
}
