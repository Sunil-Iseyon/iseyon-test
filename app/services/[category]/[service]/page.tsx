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

    // Generate schemas
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: content.heading,
      provider: {
        '@type': 'Organization',
        name: 'iSeyon Analytics',
        url: 'https://iseyon-analytics-v0.vercel.app',
      },
      areaServed: ['US', 'IN'],
      description: content.subheading,
      category: category,
      url: `https://iseyon-analytics-v0.vercel.app/services/${category}/${service}`,
    }

    // Get FAQs from TinaCMS content
    const faqs = content.faqs || []
    const faqSchema = faqs.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    } : null

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <ServiceDetailClient content={content} />
      </>
    )
}
