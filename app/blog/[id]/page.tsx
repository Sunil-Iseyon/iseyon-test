import client from '@/lib/tina-local-client'
import { BlogDetailClient } from './blog-detail-client'
import type { Metadata } from 'next'

async function getBlogPosts() {
  const response = await client.queries.blogPostsConnection()
  return response.data.blogPostsConnection.edges.map((edge, index) => ({
    ...edge.node,
    id: index + 1,
  }))
}

export async function generateStaticParams() {
  const blogs = await getBlogPosts()
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const blogs = await getBlogPosts()
  const blog = blogs.find(b => b.id === parseInt(id))
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | Iseyon Analytics',
    }
  }

  return {
    title: `${blog.title} | Iseyon Analytics Blog`,
    description: blog.summary || blog.title,
    keywords: blog.tags || [],
    openGraph: {
      title: blog.title,
      description: blog.summary || blog.title,
      url: `https://www.iseyon.com/blog/${id}`,
      type: 'article',
      images: blog.image ? [{ url: blog.image }] : [],
      publishedTime: blog.date,
      authors: [blog.author || 'Iseyon Analytics Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.summary || blog.title,
      images: blog.image ? [blog.image] : [],
    },
    alternates: {
      canonical: `https://www.iseyon.com/blog/${id}`,
    },
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const blogs = await getBlogPosts()
  
  const currentIndex = blogs.findIndex(b => b.id === parseInt(id))
  const blog = blogs[currentIndex]
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 pt-24">
        <p className="text-center text-gray-600">Blog post not found.</p>
      </div>
    )
  }

  // Enhanced Article schema for blog post with E-E-A-T signals
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    alternativeHeadline: blog.summary || blog.title,
    description: blog.summary || blog.title,
    image: {
      '@type': 'ImageObject',
      url: blog.image,
      width: '1200',
      height: '630',
    },
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      '@type': 'Person',
      name: blog.author || 'Iseyon Analytics Team',
      url: 'https://www.iseyon.com/our-team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Iseyon Analytics',
      url: 'https://www.iseyon.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.iseyon.com/iseyon.webp',
        width: '600',
        height: '60',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.iseyon.com/blog/${id}`,
    },
    keywords: blog.tags?.join(', ') || 'AI, Business Intelligence, Data Analytics',
    articleSection: 'Business Intelligence and Analytics',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: 'Business Intelligence',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.blog-content p:first-of-type'],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogDetailClient blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
    </>
  )
}
