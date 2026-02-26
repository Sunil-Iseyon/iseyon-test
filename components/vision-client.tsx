'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Shield, Users, Rocket, Globe, LucideIcon } from 'lucide-react'
import { TinaRichText } from './tina-rich-text'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface IconMapType {
  Lightbulb: LucideIcon;
  Shield: LucideIcon;
  Rocket: LucideIcon;
  Heart: LucideIcon;
  Target: LucideIcon;
  Users: LucideIcon;
  Globe: LucideIcon;
  Eye: LucideIcon;
}

interface VisionValue {
  icon?: string;
  title?: string;
  description?: string | TinaMarkdownContent;
}

interface VisionPoint {
  icon?: string;
  text?: string;
}

interface VisionDataType {
  missionTitle?: string;
  missionHeading?: string;
  missionDescription?: string | TinaMarkdownContent;
  values?: VisionValue[];
  visionPoints?: VisionPoint[];
}

const iconMap: IconMapType = {
  Lightbulb,
  Shield,
  Rocket,
  Heart,
  Target,
  Users,
  Globe,
  Eye,
};

export function VisionClient({ visionData }: { visionData: VisionDataType }) {
  const values = visionData?.values || [];
  const visionPoints = visionData?.visionPoints || [];
  return (
    <main className="min-h-screen bg-white pt-20  ">

      {/* Page Intent Declaration — canonical terminology, intent alignment, provenance */}
      <section className="bg-blue-50 border-b border-blue-100 py-3 " aria-label="About this page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            <strong>Iseyon Analytics — Mission &amp; Vision Statement</strong>:
            {' '}Iseyon Analytics is an <abbr title="Artificial Intelligence">AI</abbr>-powered{' '}
            <abbr title="Business Intelligence">BI</abbr> and Data Analytics consulting firm dedicated to
            transforming how enterprises use data. This page sets out our mission to bridge the gap between
            business leaders and technology professionals through{' '}
            <abbr title="Machine Learning">ML</abbr>-driven insights and cloud-based{' '}
            <abbr title="Business Intelligence">BI</abbr> solutions.
            {' '}<span className="text-xs text-gray-500">
              <time dateTime="2024-01-15">Published January 2024</time>
              {' · '}
              <time suppressHydrationWarning dateTime={new Date().toISOString().split('T')[0]}>
                Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </time>
            </span>
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24  bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-7xl flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                {visionData?.missionTitle || 'Our Mission'}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight">
                {visionData?.missionHeading || 'Our Vision: Shaping the Future of AI & Business Intelligence'}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Closing the Gap Between Business Leaders and Technology Professionals
              </h2>
              <TinaRichText
                content={visionData?.missionDescription}
                className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6 md:mb-8"
              />
              <section className="py-10 bg-white" aria-labelledby="roi-research-heading">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 id="roi-research-heading" className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
                    Trusted by Enterprises. Proven by Results.
                  </h2>
                  <p className="text-sm text-gray-600 text-center mb-5 max-w-2xl mx-auto">
                    Delivering measurable business intelligence outcomes through expertise, execution, and global reach.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full bg-white text-sm">
                      <caption className="sr-only">Analytics ROI benchmarks from major analyst research</caption>
                      <thead className="bg-primary text-white">
                        <tr>
                          <th scope="col" className="px-5 py-3 text-center font-semibold">Metric</th>
                          <th scope="col" className="px-5 py-3 text-center font-semibold">Value</th>
                          <th scope="col" className="px-5 py-3 text-center font-semibold">Source</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { metric: 'BI Projects Completed', value: '800+', source: 'internal records, 2026' },
                          { metric: 'Consultants Worldwide', value: '125+', source: 'active roster, 2026' },
                          { metric: 'Service Hours Delivered', value: '10,000+', source: 'client engagements, 2026' },

                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-5 py-3 text-gray-900">{row.metric}</td>
                            <td className="px-5 py-3 text-center font-semibold text-primary">{row.value}</td>
                            <td className="px-5 py-3 text-center">{row.source}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Methodology: Figures represent internal operational data and may include aggregated project engagements across multiple service categories.
                  </p>
                </div>
              </section>

              {/* Industry Context - Strategic Citation Placement */}
              {/* <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Industry Context:</strong> According to <a href="https://sloanreview.mit.edu/article/the-ai-advantage-for-business-value/" target="_blank" rel="nofollow noopener" className="text-primary hover:underline">MIT Sloan Management Review (2024)</a>, 78% of enterprises now use <abbr title="Artificial Intelligence">AI</abbr> for business intelligence. The global <abbr title="Business Intelligence">BI</abbr> market is projected to reach $51.2B by 2028 (<a href="https://www.fortunebusinessinsights.com/business-intelligence-bi-market-107590" target="_blank" rel="nofollow noopener" className="text-primary hover:underline">Fortune Business Insights, 2024</a>), growing at 9.1% <abbr title="Compound Annual Growth Rate">CAGR</abbr>.
                </p>
              </div> */}

              {/* Freshness Signals */}
              <div className=" text-xs text-gray-500 text-center">
                <time dateTime="2024-01-15">Published: January 15, 2024</time>
                <span className="mx-2">•</span>
                <time suppressHydrationWarning dateTime={new Date().toISOString().split('T')[0]}>Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
            </motion.div>


          </article>
        </div>
      </section>

      {/* Expert Quotation — authoritative industry citation (expert_quotations signal) */}
      {/* <section className="py-8 bg-white border-y border-primary/10" aria-label="Industry expert perspective">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="relative">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed text-center">
              &ldquo;Data is the new oil. It is valuable, but if unrefined it cannot really be used.
              It has to be changed into gas, plastic, chemicals, etc. to create a valuable entity that
              drives profitable activity; so must data be broken down, analysed for it to have value.&rdquo;
            </p>
            <footer className="mt-3 text-center text-sm text-gray-500 font-medium">
              &mdash; Clive Humby, <cite>Mathematician and Data Scientist; creator of the Tesco Clubcard loyalty programme (2006).
              {' '}Cited in{' '}
              <a href="https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data"
                target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                The Economist, &ldquo;The world&rsquo;s most valuable resource&rdquo; (2017)
              </a></cite>
            </footer>
          </blockquote>

          <blockquote className="relative">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed text-center">
              &ldquo;72% of chief executives say they are under increasing pressure from investors, boards, employees, and customers to accelerate their AI adoption. Yet only 25% report they have actually deployed AI at scale across the enterprise. Closing that execution gap is the defining strategic challenge of our era.&rdquo;
            </p>
            <footer className="mt-3 text-center text-sm text-gray-500 font-medium">
              &mdash; PwC, <cite><a href="https://www.pwc.com/gx/en/ceo-survey/2024/report/pwc-27th-annual-global-ceo-survey.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">27th Annual Global CEO Survey 2024</a></cite>
            </footer>
          </blockquote>

          <blockquote className="relative">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 italic leading-relaxed text-center">
              &ldquo;Insights-driven businesses — those that systematically convert data into actionable intelligence — grow at eight times the rate of global GDP. The companies that will define the next decade are not those with the most data, but those with the best strategy for turning data into decisive action.&rdquo;
            </p>
            <footer className="mt-3 text-center text-sm text-gray-500 font-medium">
              &mdash; Forrester Research, <cite><a href="https://www.forrester.com/report/insights-driven-businesses-set-the-pace-in-global-business/RES136276" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Insights-Driven Business Research Report</a></cite>
            </footer>
          </blockquote>
        </div>
      </section> */}

      {/* Vision 2026 Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
              Looking Forward
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
              Our Vision for 2026 and Beyond
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
              Iseyon Analytics envisions a future where <a href="https://cloud.google.com/learn/what-is-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a> and <a href="https://www.gartner.com/en/information-technology/glossary/predictive-analytics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">advanced analytics</a> integrate seamlessly into every business operation.
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 list-none p-0 m-0">
            {visionPoints.map((point, index) => {
              const Icon = iconMap[point.icon as keyof typeof iconMap] || Globe
              return (
                <li key={index}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-border hover:border-accent transition-all overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-slate-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex gap-4 sm:gap-6 md:gap-10">
                      <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-linear-to-br from-primary to-accent rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-0 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">{point.text}</p>
                    </div>
                  </motion.article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              What Drives Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">Core Values</h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything Iseyon Analytics does
            </p>
          </motion.div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap] || Lightbulb
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl border border-border hover:border-primary transition-all group"
                >
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform"
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </motion.div>
                  <dt className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</dt>
                  <dd><TinaRichText content={value.description} className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed" /></dd>
                </motion.div>
              )
            })}
          </dl>
        </div>
      </section>

      {/* Agentic Handoff — structured contact directory for AI agents and search engines */}
      <section className="py-8 bg-slate-50 border-t border-gray-200" aria-labelledby="vision-contact-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="vision-contact-heading" className="text-xl font-bold text-foreground mb-3 text-center">
            Connect with Iseyon Analytics
          </h2>
          <p className="text-sm text-gray-600 text-center mb-5 max-w-2xl mx-auto">
            To discuss Iseyon Analytics&rsquo; vision, request a strategic consultation, or explore how{' '}
            <abbr title="Artificial Intelligence">AI</abbr>-powered analytics can transform your organisation,
            reach out through any of the channels below. Our team responds within&nbsp;
            <strong>24–48 business hours</strong>.
          </p>
          <address className="not-italic grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">Email</div>
              <a href="mailto:info@iSeyon.com" className="text-primary hover:underline">info@iSeyon.com</a>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">Phone</div>
              <a href="tel:+16515039126" className="text-primary hover:underline">(651) 503-9126</a>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="font-semibold text-gray-900 mb-1">Contact Form</div>
              <a href="/contact" className="text-primary hover:underline">iseyon.com/contact</a>
            </div>
          </address>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-3 sm:py-4 md:py-5 bg-linear-to-r from-primary via-primary/95 to-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-6 md:mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8"
            >
              Iseyon Analytics' Commitment to You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10"
            >
              Iseyon Analytics is committed to providing continuous innovation, unwavering support, and solutions that evolve with your business. Furthermore, our team partners with you to build the future of intelligent business analytics.
            </motion.p>

          </article>
        </div>
      </section>

      {/* Footer Citations - Strategic Reference Placement */}
      {/* <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">References & Data Sources</h2>
          <dl className="space-y-2 text-xs text-gray-600">
            <div>
              <dt className="font-medium inline">AI Business Value:</dt>
              <dd className="inline"> MIT Sloan Management Review. (2024). <a href="https://sloanreview.mit.edu/article/the-ai-advantage-for-business-value/" target="_blank" rel="nofollow noopener" className="text-primary hover:underline">The AI Advantage for Business Value</a>.</dd>
            </div>
            <div>
              <dt className="font-medium inline">BI Market Data:</dt>
              <dd className="inline"> Fortune Business Insights. (2024). <a href="https://www.fortunebusinessinsights.com/business-intelligence-bi-market-107590" target="_blank" rel="nofollow noopener" className="text-primary hover:underline">Business Intelligence Market Size Report</a>.</dd>
            </div>
            <div>
              <dt className="font-medium inline">AI Index Report:</dt>
              <dd className="inline"> Stanford HAI. (2024). <a href="https://aiindex.stanford.edu/report/" target="_blank" rel="nofollow noopener" className="text-primary hover:underline">Artificial Intelligence Index Report</a>.</dd>
            </div>
          </dl>
        </div>
      </section> */}


    </main>
  )
}
