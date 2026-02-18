import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import client from '@/lib/tina-local-client'
import { ServiceDetailClient } from '@/components/service-detail-client'
import { PageCitations, serviceCitations } from '@/components/page-citations'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import type { Metadata } from 'next'

interface ServiceContent {
  heading: string;
  subheading: string;
  image: string;
  content: TinaMarkdownContent;
  category: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
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
      title: 'Service Not Found',
    }
  }

  const serviceName = content.heading
  const description = content.subheading || `Expert ${serviceName} consulting and implementation services by Iseyon Analytics. Transform your data operations with our proven expertise.`
  const pageUrl = `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`
  const imageAlt = `${serviceName} services dashboard showing data analytics and business intelligence capabilities provided by Iseyon Analytics`

  return {
    title: `${serviceName} Services`,
    description,
    keywords: [serviceName, `${serviceName} consulting`, `${serviceName} implementation`, 'business intelligence', 'data analytics', 'Iseyon Analytics'],
    openGraph: {
      title: `${serviceName} Services | Iseyon Analytics`,
      description,
      url: pageUrl,
      type: 'website',
      images: content.image ? [{ url: content.image, alt: imageAlt }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} Services | Iseyon Analytics`,
      description,
      images: content.image ? [content.image] : [],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'en': pageUrl,
        'x-default': pageUrl,
      },
    },
    other: {
      'DC.title': `${serviceName} Services | Iseyon Analytics`,
      'DC.creator': 'Iseyon Analytics',
      'DC.description': description,
      'DC.date': new Date().toISOString().split('T')[0],
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

    // Generate schemas
    const currentDate = new Date().toISOString().split('T')[0]
    const pageUrl = `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`
    
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': ['Service', 'TechArticle'],
          '@id': `${pageUrl}#service`,
          serviceType: content.heading,
          name: `${content.heading} Services`,
          headline: content.heading,
          description: content.subheading,
          provider: {
            '@type': 'Organization',
            '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
            name: 'Iseyon Analytics',
            url: 'https://iseyon-analytics-v0.vercel.app',
            logo: {
              '@type': 'ImageObject',
              url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
            },
            foundingDate: '2020',
            knowsAbout: ['Business Intelligence', 'Data Analytics', 'AI Integration', content.heading],
            sameAs: [
              'https://www.linkedin.com/company/iseyon-analytics',
              'https://iseyon-analytics-v0.vercel.app/team',
              'https://iseyon-analytics-v0.vercel.app/vision',
            ],
          },
          author: {
            '@type': 'Organization',
            '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
          },
          areaServed: ['US', 'IN'],
          category: category,
          url: pageUrl,
          datePublished: '2024-01-15',
          dateModified: currentDate,
          inLanguage: 'en-US',
          image: content.image ? {
            '@type': 'ImageObject',
            url: `https://iseyon-analytics-v0.vercel.app${content.image}`,
            caption: `${content.heading} services dashboard by Iseyon Analytics`,
          } : undefined,
          isPartOf: {
            '@type': 'WebSite',
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
                name: 'Services',
                item: 'https://iseyon-analytics-v0.vercel.app/#services',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: content.heading,
                item: pageUrl,
              },
            ],
          },
        },
      ],
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <ServiceDetailClient content={content} />
        <PageCitations citations={serviceCitations} title="Industry-Leading Data Platform Research" />
      </>
    )
}
