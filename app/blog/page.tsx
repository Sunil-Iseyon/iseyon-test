import Image from 'next/image'
import client from '@/lib/tina-local-client'
import { BlogList } from '@/components/blog-list'

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
    <div className="max-w-7xl mx-auto px-6 py-16 pt-24">

      {/* HERO */}
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-6xl font-bold mb-4">Our Blog & Insight</h1>
          <p className="text-gray-600 max-w-md">
            We delve into the world of EHS, exploring the latest trends,
            regulations, and best practices.
          </p>
        </div>

        <Image
          src="/bunny2.png"
          alt="Hero"
          width={600}
          height={300}
        />
      </div>

      <BlogList blogs={blogs} />
    </div>
  )
}
