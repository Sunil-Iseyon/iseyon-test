'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Blog = {
  id?: number
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

  const renderBlogCard = (blog: Blog, idx: number) => (
    <motion.div
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
    >
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 sm:p-5">
        {/* <motion.span 
          className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block"
          whileHover={{ scale: 1.05 }}
        >
          {blog.category}
        </motion.span> */}

        <h3 className="font-semibold mt-2 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
          {blog.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
          {blog.shortDescription || blog.description}
        </p>

        <div className="text-xs text-gray-400 mt-3 sm:mt-4 flex items-center gap-2">
          {blog.author && <span className="font-medium">{blog.author}</span>}
          {blog.author && <span>·</span>}
          <span>{blog.date}</span>
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
    </motion.div>
  );

  return (
    <>
      {/* SEARCH */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-end items-center mt-10 sm:mt-12 md:mt-14"
      >
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />

          <input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 sm:pl-10 pr-4 py-2 border rounded-full text-xs sm:text-sm outline-none w-full sm:w-64"
          />
        </div>
      </motion.div>

      {/* BLOG CAROUSEL - Both Mobile and Desktop */}
      <div className="mt-8 sm:mt-10 px-4">
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
              <CarouselItem key={blog.id || idx} className="basis-[85%] sm:basis-[90%] md:basis-1/3 pl-4">
                <Link href={`/blog/${blog.id || idx}`}>
                  {renderBlogCard(blog, idx)}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          {filteredBlogs.length > 3 && (
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative left-0 translate-x-0 hover:text-white" />
              <CarouselNext className="relative right-0 translate-x-0 hover:text-white" />
            </div>
          )}
        </Carousel>
      </div>
    </>
  )
}
