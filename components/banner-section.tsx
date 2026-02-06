'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function BannerSection() {
  const benefits = [
    'Enterprise-grade Security',
    'Real-time Data Processing',
    '99.9% Uptime SLA',
    'AI-Powered Insights',
    'Scalable Infrastructure',
    'Dedicated Support',
    'Custom Integrations',
    'Advanced Compliance'
  ]

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden snap-start snap-always">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={headingVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Why Choose iSeyon?
            </motion.h2>
            <motion.p
              variants={subheadingVariants}
              className="text-lg text-primary-foreground/80 mb-8"
            >
              We provide the most comprehensive AI-powered analytics platform with enterprise-grade features and world-class support. Transform your business data into strategic advantage.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 flex-wrap"
              variants={statsVariants}
            >
              <div className="flex items-center gap-3">
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <div className="text-white">
                  <p className="font-semibold">Companies Trust Us</p>
                  <p className="text-sm text-primary-foreground/70">Worldwide</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05}}
                className="flex items-center gap-3 p-4 rounded-lg bg-white/10 border border-white/20 hover:border-white/30 transition-all"
              >
                <Check className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
