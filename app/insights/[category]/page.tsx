import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import client from '@/lib/tina-local-client'
import { ServiceDetailClient } from '@/components/service-detail-client'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

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

    return <ServiceDetailClient content={content} currentSlug={category} />
}
