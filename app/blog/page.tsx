'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

type Blog = {
  id: number
  title: string
  description: string
  image: string
  category: string
  date: string
  readTime: string
}

const categories = ['All', 'Newsletter', 'Tips', 'Insight', 'Success Stories']

const blogs: Blog[] = [
  {
    id: 1,
    title: 'The Future of EHS: Emerging Trends to Watch',
    description:
      'Technological advancements, data analytics, and industry disruptions...',
    image: '/blog/1.jpg',
    category: 'Newsletter',
    date: 'Oct 18, 2023',
    readTime: '7 min read',
  },
  {
    id: 2,
    title: 'Mental Health Matters: EHS Strategies',
    description:
      'Addressing stress, burnout, and mental health in the workplace...',
    image: '/blog/2.jpg',
    category: 'Tips',
    date: 'Oct 18, 2023',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Creating a Safety Culture: Leadership Insights',
    description:
      'Empowering your team to prioritize safety every day...',
    image: '/blog/3.jpg',
    category: 'Insight',
    date: 'Oct 18, 2023',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === 'All' || blog.category === activeCategory

      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 pt-24">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center"
      >
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
          // className="ml-auto"
        />
      </motion.div>

      {/* FILTER + SEARCH */}
      <div className="flex flex-wrap gap-4 items-center mt-14">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm transition
              ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
          >
            {cat}
          </button>
        ))}

        <div className="ml-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

          <input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-full text-sm outline-none"
          />
        </div>
      </div>

      {/* BLOG GRID */}
      <motion.div
        layout
        className="grid md:grid-cols-3 gap-8 mt-12"
      >
        {filteredBlogs.map((blog) => (
          <motion.div
            key={blog.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            className="rounded-xl border overflow-hidden bg-white shadow-sm"
          >
            <div className="relative h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <span className="text-xs text-blue-600 font-medium">
                {blog.category}
              </span>

              <h3 className="font-semibold mt-2">{blog.title}</h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {blog.description}
              </p>

              <div className="text-xs text-gray-400 mt-4">
                {blog.date} · {blog.readTime}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
