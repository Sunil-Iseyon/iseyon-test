import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import client from '@/lib/tina-local-client'
import { ServiceDetailClient } from '@/components/service-detail-client'
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
  const description = content.subheading || `Iseyon Analytics insights on ${content.heading}. Expert analysis and solutions for modern enterprises.`

  return {
    title: `${content.heading} | Iseyon Analytics`,
    description,
    keywords: [content.heading, 'business intelligence', 'data analytics', 'Iseyon Analytics', category],
    openGraph: {
      title: `${content.heading} | Iseyon Analytics`,
      description,
      url: pageUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${content.heading} | Iseyon Analytics`,
      description,
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'en': pageUrl,
        'x-default': pageUrl,
      },
    },
    other: {
      'DC.title': `${content.heading} | Iseyon Analytics`,
      'DC.creator': 'Iseyon Analytics',
      'DC.description': description,
      'DC.date': new Date().toISOString().split('T')[0],
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

    const pageUrl = `https://www.iseyon.com/insights/${category}`

    const insightSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Article', 'TechArticle'],
          '@id': `${pageUrl}#article`,
          headline: content.heading,
          description: content.subheading,
          author: {
            '@type': 'Organization',
            '@id': 'https://www.iseyon.com/#organization',
            name: 'Iseyon Analytics',
            url: 'https://www.iseyon.com',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://www.iseyon.com/#organization',
          },
          url: pageUrl,
          datePublished: '2024-06-01',
          dateModified: '2026-02-18',
          inLanguage: 'en-US',
          isPartOf: {
            '@type': 'WebSite',
            '@id': 'https://www.iseyon.com/#website',
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.iseyon.com' },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.iseyon.com/insights' },
              { '@type': 'ListItem', position: 3, name: content.heading, item: pageUrl },
            ],
          },
        },
      ],
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(insightSchema) }}
        />
        <ServiceDetailClient content={content} currentSlug={category} />
      </>
    )
}
