'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { TinaRichText } from './tina-rich-text'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface ServiceContent {
  heading: string;
  subheading: string;
  image: string;
  content: TinaMarkdownContent;
  category: string;
}

export function ServiceDetailClient({ 
  content
}: { 
  content: ServiceContent
}) {

  return (
    <main className="min-h-screen bg-white">
      <div className='px-3 sm:px-6 md:px-8 lg:px-12 flex flex-col mx-auto'>
        <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 max-w-7xl flex flex-col mx-auto">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-34 text-center lg:text-left">

              {/* Text */}
              <div className="flex flex-col justify-center items-center lg:items-start max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6"
                >
                  {content.heading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12"
                >
                  {content.subheading}
                </motion.p>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:w-150 h-45 sm:h-60 md:h-80 lg:h-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={content.image}
                  alt={`${content.heading} services dashboard showing data analytics and business intelligence capabilities by iSeyon Analytics`}
                  fill
                  // className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rich Text Content Section */}
        <section className="">
          <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-sm sm:prose md:prose-lg max-w-none"
              >
                <TinaRichText content={content.content} className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4 md:space-y-5" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Static CTA Section */}
      <section className="py-12 bg-linear-to-br from-primary via-primary/90 to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our solutions can drive your success
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-white text-primary rounded-xl font-bold text-sm sm:text-base hover:bg-white/95 transition-all shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl"
            >
              <span>Get Started Today</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
