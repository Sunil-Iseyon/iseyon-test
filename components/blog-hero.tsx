'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function BlogHero() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#blog-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Skip to blog posts
      </a>
      
      <header className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
          >
            Blog | AI, BI & Data Analytics Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md"
          >
            iSeyon Analytics dives into the world of AI and analytics, exploring the latest trends, innovations, and best practices shaping modern businesses.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:block"
        >
          <Image
            src="/bunny2.png"
            alt="Hero banner for iSeyon Analytics blog featuring AI, Business Intelligence, and data analytics insights and trends"
            width={600}
            height={300}
            className="w-full max-w-md lg:max-w-lg"
            priority
          />
        </motion.div>
      </header>
    </>
  )
}
