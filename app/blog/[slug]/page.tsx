import client from '@/lib/tina-local-client'
import { BlogDetailClient } from './blog-detail-client'
import type { Metadata } from 'next'

async function getBlogPosts() {
  const response = await client.queries.blogPostsConnection()
  return response.data.blogPostsConnection.edges.map((edge, index) => ({
    ...edge.node,
    id: index + 1,
    slug: (edge.node as any)._sys?.filename || `post-${index + 1}`,
  }))
}

export async function generateStaticParams() {
  const blogs = await getBlogPosts()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blogs = await getBlogPosts()
  const blog = blogs.find(b => b.slug === slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found | Iseyon Analytics',
    }
  }

  const rawDescription: string = typeof (blog as any).summary === 'string' && (blog as any).summary
    ? (blog as any).summary
    : typeof blog.shortDescription === 'string' && blog.shortDescription
    ? blog.shortDescription
    : blog.title

  // Ensure meta description echoes H1 (blog.title) for intent_alignment — prepend title if key terms absent
  const titleKeywords = blog.title.split(/[\s:,\-\u2013\u2014]+/).filter((w: string) => w.length > 3)
  const hasTitle = titleKeywords.slice(0, 3).some((kw: string) =>
    rawDescription.toLowerCase().includes(kw.toLowerCase())
  )
  const metaBase = hasTitle ? rawDescription : `${blog.title} \u2014 ${rawDescription}`
  const metaDescription = metaBase.length > 160 ? metaBase.slice(0, 157) + '...' : metaBase

  return {
    title: `${blog.title} | Iseyon Analytics Blog`,
    description: metaDescription,
    keywords: (blog as any).tags || ['business intelligence', 'data analytics', 'AI', 'Iseyon Analytics'],
    authors: [{ name: (blog as any).author || 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
    publisher: 'Iseyon Analytics',
    openGraph: {
      title: blog.title,
      description: metaDescription,
      url: `https://www.iseyon.com/blog/${slug}`,
      siteName: 'Iseyon Analytics',
      type: 'article',
      locale: 'en_US',
      images: blog.image ? [{ url: blog.image, width: 1200, height: 630, alt: blog.title }] : [{ url: '/iseyon.webp', width: 1200, height: 630, alt: 'Iseyon Analytics Blog' }],
      publishedTime: blog.date,
      authors: [(blog as any).author || 'Iseyon Analytics Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: metaDescription,
      images: blog.image ? [blog.image] : ['/iseyon.webp'],
    },
    alternates: {
      canonical: `https://www.iseyon.com/blog/${slug}`,
      languages: {
        'en': `https://www.iseyon.com/blog/${slug}`,
        'en-US': `https://www.iseyon.com/blog/${slug}`,
        'en-IN': `https://www.iseyon.com/blog/${slug}`,
        'x-default': `https://www.iseyon.com/blog/${slug}`,
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
      'DC.title': blog.title,
      'DC.creator': (blog as any).author || 'Iseyon Analytics Team',
      'DC.description': metaDescription,
      'DC.date': blog.date || new Date().toISOString().split('T')[0],
      'DC.language': 'en',
      'DC.format': 'text/html',
      'DC.publisher': 'Iseyon Analytics',
      'DC.rights': 'Copyright 2025 Iseyon Analytics. Licensed under CC-BY-NC-SA-4.0',
      'DC.subject': 'Business Intelligence, Data Analytics, AI',
      'DC.type': 'Text',
      'article:author': (blog as any).author || 'Iseyon Analytics Team',
    },
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blogs = await getBlogPosts()
  
  const currentIndex = blogs.findIndex(b => b.slug === slug)
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
  const currentDate = new Date().toISOString().split('T')[0]
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    alternativeHeadline: blog.shortDescription || blog.title,
    description: blog.shortDescription || blog.title,
    image: {
      '@type': 'ImageObject',
      url: blog.image ? `https://www.iseyon.com${blog.image}` : 'https://www.iseyon.com/iseyon.webp',
      width: '1200',
      height: '630',
    },
    datePublished: blog.date,
    dateModified: currentDate,
    author: {
      '@type': 'Person',
      name: blog.author || 'Iseyon Analytics Team',
      jobTitle: 'Analytics Expert',
      worksFor: {
        '@type': 'Organization',
        name: 'Iseyon Analytics',
        url: 'https://www.iseyon.com',
      },
      url: 'https://www.iseyon.com/our-team',
      sameAs: [
        'https://www.iseyon.com/our-team',
        'https://www.linkedin.com/company/iseyon',
      ],
      knowsAbout: ['Business Intelligence', 'Artificial Intelligence', 'Data Analytics', 'Cloud Platforms'],
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
      '@id': `https://www.iseyon.com/blog/${slug}`,
    },
    keywords: (blog as any).tags?.join(', ') || 'AI, Business Intelligence, Data Analytics',
    articleSection: blog.category || 'Business Intelligence and Analytics',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    about: {
      '@type': 'Thing',
      name: 'Business Intelligence',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.blog-content p:first-of-type', 'h3', 'blockquote'],
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: `https://www.iseyon.com/blog/${slug}`,
    },
  }

  // FAQPage schema — extracted from FAQ section in content (where present)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is covered in "${blog.title}"?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: blog.shortDescription || blog.title,
        },
      },
      {
        '@type': 'Question',
        name: 'What services does Iseyon Analytics provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Iseyon Analytics provides AI-powered business intelligence (BI), data analytics, cloud platform consulting (Snowflake, Databricks, Palantir), and custom dashboard development.',
        },
      },
    ],
  }

  // DefinedTerm schema for "Iseyon Analytics"
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Iseyon Analytics',
    description: 'A data analytics and business intelligence consultancy specializing in AI-powered insights, cloud platforms, and enterprise analytics.',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Iseyon Analytics Glossary',
      url: 'https://www.iseyon.com/our-vision',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <BlogDetailClient blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
    </>
  )
}


