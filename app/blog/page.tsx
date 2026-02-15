import { BlogList } from '@/components/blog-list'
import { BlogHero } from '@/components/blog-hero'
import client from '@/lib/tina-local-client'
import type { Metadata } from 'next'

async function getBlogPosts() {
  const response = await client.queries.blogPostsConnection()
  return response.data.blogPostsConnection.edges.map((edge, index) => ({
    ...edge.node,
    id: index + 1,
  }))
}

export const metadata: Metadata = {
  title: 'Blog | iSeyon Analytics - AI, BI & Data Analytics Insights',
  description: 'Explore expert insights on AI-powered business intelligence, data analytics, cloud platforms, and emerging technologies. Learn from industry experts at iSeyon Analytics.',
  keywords: ['AI blog', 'business intelligence insights', 'data analytics articles', 'BI trends', 'technology insights'],
  openGraph: {
    title: 'Blog | iSeyon Analytics - AI & BI Insights',
    description: 'Expert insights on AI-powered business intelligence, data analytics, and emerging technologies.',
    url: 'https://iseyon-analytics-v0.vercel.app/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | iSeyon Analytics',
    description: 'Expert insights on AI-powered business intelligence and data analytics.',
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app/blog',
  },
}

export default async function BlogPage() {
  const blogs = await getBlogPosts()

  // Blog collection schema
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'iSeyon Analytics Blog',
    description: 'Expert insights on AI-powered business intelligence and data analytics',
    url: 'https://iseyon-analytics-v0.vercel.app/blog',
    publisher: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 pt-20 sm:pt-22 md:pt-24">
        <BlogHero />
        <BlogList blogs={blogs} />
      </div>
    </>
  )
}
