'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { TinaRichText } from './tina-rich-text'
import { FAQSchema, serviceFAQs, insightFAQs } from './faq-schema'
import { RelatedContent, getCategoryRelatedLinks } from './related-content'
import { AuthorMetadata } from './content-enhancements'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface ServiceContent {
  heading: string;
  subheading: string;
  image: string;
  content: TinaMarkdownContent;
  category: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  _sys?: {
    filename: string;
  };
}

export function ServiceDetailClient({ 
  content,
  currentSlug,
}: { 
  content: ServiceContent
  currentSlug?: string
}) {
  // Determine if this is an insight page based on category
  const isInsightPage = content.category === 'business-intelligence' || content.category === 'internal-applications'
  const defaultFAQs = isInsightPage ? insightFAQs : serviceFAQs
  const sectionTitle = isInsightPage ? 'Insights' : 'Services'

  // Use URL-derived slug first (most accurate), fall back to _sys then heading
  const resolvedSlug = currentSlug ?? content._sys?.filename ?? content.heading.toLowerCase().replace(/\s+/g, '-')

  return (
    <main id="main-content" className="min-h-screen bg-white pt-20">

      {/* Page Intent Declaration — canonical terminology & agentic handoff (static, non-animated) */}
      <section className="bg-primary text-white py-2.5" aria-label="Service page context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm text-white/90 text-center max-w-5xl mx-auto leading-relaxed">
            <strong>Iseyon Analytics — {content.heading} Services</strong>:
            {' '}Expert <abbr title="Artificial Intelligence" className="no-underline">AI</abbr>-powered{' '}
            <abbr title="Business Intelligence" className="no-underline">BI</abbr> consulting and implementation services
            for enterprises. Request a demo or consultation at{' '}
            <a href="mailto:info@iSeyon.com" className="underline hover:no-underline">info@iSeyon.com</a>
            {' '}or <a href="/contact" className="underline hover:no-underline">iseyon.com/contact</a>.
          </p>
        </div>
      </section>

      <div className='px-3 sm:px-6 md:px-8 lg:px-12 flex flex-col mx-auto'>
        <section aria-labelledby="service-hero-heading" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 max-w-7xl flex flex-col mx-auto">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Back Button */}
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.nav>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-34 text-center lg:text-left">

              {/* Text */}
              <div className="flex flex-col justify-center items-center lg:items-start max-w-xl">
                <motion.h1
                  id="service-hero-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6"
                >
                  {content.heading + ' ' + sectionTitle}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12 service-description"
                >
                  {content.subheading}
                </motion.p>
              </div>

              {/* Image */}
              <motion.figure
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full lg:w-150 h-45 sm:h-60 md:h-80 lg:h-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={content.image}
                  alt={`${content.heading} services — analytics and business intelligence dashboard by Iseyon Analytics showing data insights and reporting capabilities`}
                  fill
                  priority
                />
              </motion.figure>
            </div>
            
            {/* E-E-A-T: Author and Publication Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <AuthorMetadata
                author="Iseyon Analytics Team"
                authorTitle="AI & BI Experts"
                authorUrl="/our-team"
                publicationDate="2024-06-01"
                lastUpdated="2026-02-20"
              />
            </motion.div>
          </div>
        </section>

        {/* Rich Text Content Section */}
        <section id="service-content" aria-labelledby="service-content-heading">
          <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="p-4 sm:p-6">
              {/* Key Takeaways for retrieval optimization */}
              <aside
                aria-label="Key Takeaways"
                className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-8 not-prose"
              >
                <h2 id="service-content-heading" className="text-base font-bold text-slate-900 mb-2">
                  Key Takeaways
                </h2>
                <ul className="space-y-1 text-sm text-gray-700 list-none m-0 p-0">
                  <li>• {content.heading} services tailored for modern enterprises</li>
                  <li>• Expert Iseyon Analytics team with proven <abbr title="Artificial Intelligence">AI</abbr> &amp; <abbr title="Business Intelligence">BI</abbr> experience</li>
                  <li>• End-to-end implementation from strategy to deployment</li>
                </ul>
              </aside>

              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-sm sm:prose md:prose-lg max-w-none"
              >
                <TinaRichText content={content.content} className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed [&>h3]:mt-10 [&>h3]:mb-3 [&>h3]:pt-8 [&>h3]:border-t [&>h3]:border-gray-200 space-y-4 sm:space-y-5 md:space-y-6" />
              </motion.div>
            </div>
            {/* Expert Quotations — unique per-page citations for AI crawler authority signals */}
              {isInsightPage && (
                <div className="not-prose space-y-5 mb-8" aria-label="Industry expert perspectives">
                  <blockquote className="border-l-4 border-primary pl-5 py-3 bg-slate-50 rounded-r-lg">
                    <p className="text-base text-gray-700 italic leading-relaxed mb-2">
                      &ldquo;Insights-driven businesses grow at eight times the rate of global GDP. Companies that systematically turn data into action — not just reporting — are widening the performance gap on their slower-moving competitors every quarter.&rdquo;
                    </p>
                    <footer className="text-sm text-gray-500 font-medium">
                      &mdash; Forrester Research, <cite><a href="https://www.forrester.com/report/insights-driven-businesses-set-the-pace-in-global-business/RES136276" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Insights-Driven Businesses Set the Pace in Global Business</a></cite>
                    </footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-indigo-500 pl-5 py-3 bg-slate-50 rounded-r-lg">
                    <p className="text-base text-gray-700 italic leading-relaxed mb-2">
                      &ldquo;Worldwide data and analytics software revenues will reach $274.3 billion by 2026. Organisations that embed analytics into daily operations rather than treating it as a separate discipline will capture the majority of that value.&rdquo;
                    </p>
                    <footer className="text-sm text-gray-500 font-medium">
                      &mdash; IDC Research, <cite><a href="https://www.idc.com/getdoc.jsp?containerId=prUS49998922" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Worldwide Data and Analytics Software Market Forecast</a></cite>
                    </footer>
                  </blockquote>
                </div>
              )}
          </div>
          
        </section>
        
      </div>
      

      {/* FAQ Section - Now uses dynamic FAQs from Tina or defaults */}
      <section id="faq-section" aria-labelledby="faq-section-heading">
        <h2 id="faq-section-heading" className="sr-only">Frequently Asked Questions</h2>
        <FAQSchema 
          faqs={content.faqs && content.faqs.length > 0 ? content.faqs : defaultFAQs} 
          title={`Frequently Asked Questions About ${content.heading}`}
          potentialAction={[
            {
              '@type': 'BookAppointment',
              name: `Request a ${content.heading} Consultation`,
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `https://www.iseyon.com/contact?service=${encodeURIComponent(content.heading.toLowerCase().replace(/\s+/g, '-'))}`,
                actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
              },
            },
            {
              '@type': 'DownloadAction',
              name: `Download ${content.heading} Implementation Overview`,
              target: `https://www.iseyon.com/contact?service=${encodeURIComponent(content.heading.toLowerCase().replace(/\s+/g, '-'))}&type=guide`,
            },
          ]}
        />
      </section>

      {/* Related Content */}
      <RelatedContent 
        title={`Explore Our Other ${sectionTitle}`}
        links={getCategoryRelatedLinks(
          content.category,
          resolvedSlug,
        )}
      />

      {/* Static CTA Section */}
      <section id="cta-section" aria-labelledby="cta-heading" className="py-12 bg-linear-to-br from-primary via-primary/90 to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
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
