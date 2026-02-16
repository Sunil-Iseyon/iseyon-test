import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import client from '@/lib/tina-local-client'
import { ServiceDetailClient } from '@/components/service-detail-client'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import type { Metadata } from 'next'

interface ServiceContent {
  heading: string;
  subheading: string;
  image: string;
  content: TinaMarkdownContent;
  category: string;
}

interface ServiceParams {
  category: string;
  service: string;
}

// Fetch service content from Tina CMS
async function getServiceContent(category: string, service: string): Promise<ServiceContent | null> {
  try {
    // Try to fetch the service directly by filename
    const response = await client.queries.serviceContent({
      relativePath: `${service}.json`
    })
    
    const content = response.data.serviceContent as ServiceContent
    
    // Verify category matches
    if (content.category?.toLowerCase() === category.toLowerCase()) {
      return content
    }
    
    return null
  } catch (error) {
    console.error('Error fetching service content:', error)
    return null
  }
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<ServiceParams>
}): Promise<Metadata> {
  const { category, service } = await params
  const content = await getServiceContent(category, service)

  if (!content) {
    return {
      title: 'Service Not Found | iSeyon Analytics',
    }
  }

  const serviceName = content.heading
  const description = content.subheading || `Expert ${serviceName} consulting and implementation services by iSeyon Analytics. Transform your data operations with our proven expertise.`

  return {
    title: `${serviceName} Services | iSeyon Analytics`,
    description,
    keywords: [serviceName, `${serviceName} consulting`, `${serviceName} implementation`, 'business intelligence', 'data analytics', 'iSeyon Analytics'],
    openGraph: {
      title: `${serviceName} Services | iSeyon Analytics`,
      description,
      url: `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`,
      type: 'website',
      images: content.image ? [{ url: content.image, alt: serviceName }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} Services | iSeyon Analytics`,
      description,
      images: content.image ? [content.image] : [],
    },
    alternates: {
      canonical: `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`,
    },
  }
}

export default async function ServicePage({
    params,
}: {
    params: Promise<ServiceParams>
}) {
    const { category, service } = await params
    const content = await getServiceContent(category, service)

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center max-w-7xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-foreground/70">
                        The requested service page does not exist.
                        <br />
                        <span className="text-sm">Category: {category}, Service: {service}</span>
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

    // Enhanced Service schema with E-E-A-T signals
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: content.heading,
      name: content.heading,
      provider: {
        '@type': 'Organization',
        name: 'iSeyon Analytics',
        url: 'https://iseyon-analytics-v0.vercel.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New York',
          addressRegion: 'NY',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-651-503-9126',
          contactType: 'Customer Service',
        },
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
      description: content.subheading,
      category: category,
      url: `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`,
      datePublished: '2025-10-01',
      dateModified: '2026-02-16',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${content.heading} Solutions`,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: content.heading,
              description: content.subheading,
            },
          },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '250',
        bestRating: '5',
        worstRating: '1',
      },
      about: service === 'Anaplan' ? {
        '@type': 'DefinedTerm',
        name: 'Anaplan',
        description: 'Connected Planning platform for FP&A, supply chain, and enterprise-wide planning.',
      } : undefined,
    }

    // Article schema for authorship and publication dates
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: content.heading,
      description: content.subheading,
      author: {
        '@type': 'Organization',
        name: 'iSeyon Analytics Team',
        url: 'https://iseyon-analytics-v0.vercel.app/team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'iSeyon Analytics',
        logo: {
          '@type': 'ImageObject',
          url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
        },
      },
      datePublished: '2025-10-01',
      dateModified: '2026-02-16',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`,
      },
    }

    // BreadcrumbList schema for navigation
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
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
          name: 'Services',
          item: 'https://iseyon-analytics-v0.vercel.app/#services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: content.heading,
          item: `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`,
        },
      ],
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ServiceDetailClient content={content} />
      </>
    )
}
