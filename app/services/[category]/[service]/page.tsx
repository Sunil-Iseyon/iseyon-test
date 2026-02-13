import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import client from '@/lib/tina-local-client'
import { ServiceDetailClient } from '@/components/service-detail-client'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

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

    return <ServiceDetailClient content={content} />
}
