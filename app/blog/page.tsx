import { BlogList } from '@/components/blog-list'
import { BlogHero } from '@/components/blog-hero'
import client from '@/lib/tina-local-client'

async function getBlogPosts() {
  const response = await client.queries.blogPostsConnection()
  return response.data.blogPostsConnection.edges.map((edge, index) => ({
    ...edge.node,
    id: index + 1,
  }))
}

export default async function BlogPage() {
  const blogs = await getBlogPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 pt-20 sm:pt-22 md:pt-24">
      <BlogHero />
      <BlogList blogs={blogs} />
    </div>
  )
}
