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
      title: 'Blog Post Not Found | iSeyon Analytics',
    }
  }

  return {
    title: `${blog.title} | iSeyon Analytics Blog`,
    description: blog.summary || blog.title,
    keywords: blog.tags || [],
    openGraph: {
      title: blog.title,
      description: blog.summary || blog.title,
      url: `https://iseyon-analytics-v0.vercel.app/blog/${id}`,
      type: 'article',
      images: blog.image ? [{ url: blog.image }] : [],
      publishedTime: blog.date,
      authors: [blog.author || 'iSeyon Analytics Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.summary || blog.title,
      images: blog.image ? [blog.image] : [],
    },
    alternates: {
      canonical: `https://iseyon-analytics-v0.vercel.app/blog/${id}`,
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

  // Article schema for blog post
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.summary || blog.title,
    image: blog.image,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      '@type': 'Person',
      name: blog.author || 'iSeyon Analytics Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://iseyon-analytics-v0.vercel.app/blog/${id}`,
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
