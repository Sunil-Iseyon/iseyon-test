'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { TinaRichText } from './tina-rich-text'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface ServiceContent {
  heading: string;
  subheading: string;
  image: string;
  content: TinaMarkdownContent;
  category: string;
}

export function ServiceDetailClient({ content }: { content: ServiceContent }) {
  return (
    <main className="min-h-screen bg-white">
      <div className='px-12 flex flex-col mx-auto'>
        <section className="pt-32 pb-20 max-w-7xl flex flex-col mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">

              {/* Text */}
              <div className="flex flex-col justify-center items-center lg:items-start max-w-xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                >
                  {content.heading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-sm md:text-lg text-gray-600 mb-12"
                >
                  {content.subheading}
                </motion.p>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:w-[500px] h-[240px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={content.image}
                  alt={content.heading}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rich Text Content Section */}
        <section className="py-2">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <TinaRichText content={content.content} className="text-lg text-gray-700 leading-relaxed space-y-5" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Static CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss how our solutions can drive your success
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/95 transition-all shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
