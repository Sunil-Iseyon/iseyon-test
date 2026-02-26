'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Blog = {
  id?: number
  slug?: string
  title: string
  shortDescription?: string
  description: string
  image: string
  category: string
  date: string
  readTime: string
  author?: string
}

export function BlogList({ blogs }: { blogs: Blog[] }) {
  const [search, setSearch] = useState('')

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase())

      return matchesSearch
    })
  }, [search, blogs])

  // Helper function to convert date string to ISO format
  const formatDateToISO = (dateStr: string): string => {
    try {
      const date = new Date(dateStr)
      return date.toISOString().split('T')[0]
    } catch {
      return new Date().toISOString().split('T')[0]
    }
  }

  const renderBlogCard = (blog: Blog, idx: number) => (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: idx * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
      }}
      className="rounded-xl border overflow-hidden bg-white shadow-sm cursor-pointer h-full group transition-all"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={blog.image}
            alt={`${blog.title} - iSeyon Analytics blog article cover image`}
            fill
            className="object-cover"
            itemProp="image"
          />
        </motion.div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-semibold mt-2 group-hover:text-blue-600 transition-colors text-sm sm:text-base" itemProp="headline">
          {blog.title}
        </h3>

        <div className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2" itemProp="description">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <>{children}</>,
              a: ({ href, children }) => (
                <a href={href ?? '#'} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {blog.shortDescription || blog.description}
          </ReactMarkdown>
        </div>

        <div className="text-xs text-gray-400 mt-3 sm:mt-4 flex items-center gap-2">
          {blog.author && (
            <span className="font-medium" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{blog.author}</span>
            </span>
          )}
          {blog.author && <span>·</span>}
          <time dateTime={formatDateToISO(blog.date)} itemProp="datePublished">
            {blog.date}
          </time>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
        
        {/* Arrow indicator on hover */}
        <motion.div
          className="mt-3 sm:mt-4 text-blue-600 font-medium text-xs sm:text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          Read More →
        </motion.div>
      </div>
    </motion.article>
  );

  return (
    <main id="blog-content" role="main" aria-label="Blog articles">
      {/* H2 Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 sm:mt-10 mb-4"
      >
        Recent Posts
      </motion.h2>
      
      {/* SEARCH */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-end items-center mt-6 sm:mt-8"
        role="search"
      >
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" aria-hidden="true" />

          <input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 sm:pl-10 pr-4 py-2 border rounded-full text-xs sm:text-sm outline-none w-full sm:w-64"
            aria-label="Search blog articles"
          />
        </div>
      </motion.div>

      {/* BLOG CAROUSEL - Mobile only */}
      <section className="mt-8 sm:mt-10 px-4 md:hidden" aria-label="Blog post carousel">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {filteredBlogs.map((blog, idx) => (
              <CarouselItem key={blog.slug || blog.id || idx} className="basis-[85%] sm:basis-[90%] pl-4">
                <Link href={`/blog/${blog.slug || blog.id || idx}`}>
                  {renderBlogCard(blog, idx)}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          {filteredBlogs.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative left-0 translate-x-0 hover:text-white" />
              <CarouselNext className="relative right-0 translate-x-0 hover:text-white" />
            </div>
          )}
        </Carousel>
      </section>

      {/* BLOG GRID - Desktop only */}
      <section className="hidden md:block mt-10 px-4" aria-label="Blog post grid">
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {filteredBlogs.map((blog, idx) => (
            <li key={blog.slug || blog.id || idx}>
              <Link href={`/blog/${blog.slug || blog.id || idx}`}>
                {renderBlogCard(blog, idx)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
