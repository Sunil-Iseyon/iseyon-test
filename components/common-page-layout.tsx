'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface Stat {
  value: string
  label: string
}

interface Benefit {
  text: string
}

interface CommonPageLayoutProps {
  // Hero section
  heroImage: string
  title: string
  description: string
  backLink?: string
  backLinkText?: string
  ctaText?: string
  ctaLink?: string

  // Features section
  features?: Feature[]
  featuresTitle?: string
  featuresDescription?: string

  // Stats section (optional)
  stats?: Stat[]

  // Benefits section (optional)
  benefits?: Benefit[]
  benefitsTitle?: string
  benefitsImage?: string

  // Bottom CTA section
  bottomCtaTitle?: string
  bottomCtaDescription?: string
  bottomCtaButtonText?: string
  bottomCtaButtonLink?: string
}

export function CommonPageLayout({
  heroImage,
  title,
  description,
  backLink = '/insights',
  backLinkText = 'Back to Insights',
  ctaText = 'Contact Us',
  ctaLink = '/contact',
  features = [],
  featuresTitle = 'Powerful Capabilities',
  featuresDescription = 'Everything you need to succeed',
  stats,
  benefits,
  benefitsTitle = 'Why Choose Our Solutions?',
  benefitsImage,
  bottomCtaTitle = 'Ready to Transform Your Business?',
  bottomCtaDescription = 'Let our experts help you unlock the full potential of your data.',
  bottomCtaButtonText = 'Get Started Today',
  bottomCtaButtonLink = '/contact',
}: CommonPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Image */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {backLink && (
              <Link
                href={backLink}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {backLinkText}
              </Link>
            )}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              {description}
            </p>
            {ctaLink && ctaText && (
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && stats.length > 0 && (
        <section className="py-16 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-8`}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      {features && features.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {featuresTitle}
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                {featuresDescription}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex gap-6 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-border hover:border-accent transition-all"
                  >
                    <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section with Image */}
      {benefits && benefits.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-8">
                  {benefitsTitle}
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg text-foreground/80">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {benefitsImage && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={benefitsImage}
                    alt={benefitsTitle}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {bottomCtaTitle}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {bottomCtaDescription}
            </p>
            {bottomCtaButtonLink && bottomCtaButtonText && (
              <Link
                href={bottomCtaButtonLink}
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg"
              >
                {bottomCtaButtonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
