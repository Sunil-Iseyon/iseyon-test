import client from '@/lib/tina-local-client'
import { BlogDetailClient } from './blog-detail-client'

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

  return <BlogDetailClient blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
}
