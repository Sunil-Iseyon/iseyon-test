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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 pt-20 sm:pt-22 md:pt-24">

      {/* HERO */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Our Blog</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md">
            We dive into the world of AI and analytics, exploring the latest trends, innovations, and best practices shaping modern businesses.
          </p>
        </div>

        <div className="hidden md:block">
          <Image
            src="/bunny2.png"
            alt="Hero"
            width={600}
            height={300}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <BlogList blogs={blogs} />
    </div>
  )
}
