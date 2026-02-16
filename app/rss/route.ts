import client from '@/lib/tina-local-client'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const baseUrl = 'https://iseyon-analytics-v0.vercel.app'
  
  try {
    // Fetch all blog posts
    const response = await client.queries.blogPostsConnection()
    const blogPosts = response.data.blogPostsConnection.edges.map((edge, index) => ({
      ...edge.node,
      id: index + 1,
    }))

    // Generate RSS feed
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>iSeyon Analytics Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Evidence-based insights on AI-powered business intelligence, data analytics, cloud platforms, and emerging technologies.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/iseyon.webp</url>
      <title>iSeyon Analytics</title>
      <link>${baseUrl}</link>
    </image>
    ${blogPosts
      .map((post) => {
        const postUrl = `${baseUrl}/blog/${post.id}`
        const imageUrl = post.image ? `${baseUrl}${post.image}` : ''
        
        // Parse date - handle different date formats
        let pubDate = new Date()
        if (post.date) {
          // Try to parse the date string (e.g., "Oct 15, 2023")
          const parsed = new Date(post.date)
          if (!isNaN(parsed.getTime())) {
            pubDate = parsed
          }
        }

        return `
    <item>
      <title><![CDATA[${post.title || 'Untitled'}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.shortDescription || post.description || ''}]]></description>
      ${post.description ? `<content:encoded><![CDATA[${post.description}]]></content:encoded>` : ''}
      <pubDate>${pubDate.toUTCString()}</pubDate>
      ${post.author ? `<dc:creator><![CDATA[${post.author}]]></dc:creator>` : ''}
      ${post.category ? `<category><![CDATA[${post.category}]]></category>` : ''}
      ${imageUrl ? `<enclosure url="${imageUrl}" type="image/jpeg"/>` : ''}
    </item>`
      })
      .join('')}
  </channel>
</rss>`

    return new NextResponse(rss, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new NextResponse('Error generating RSS feed', { status: 500 })
  }
}
