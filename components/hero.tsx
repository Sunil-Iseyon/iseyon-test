'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

interface HeroProps {
  data: {
    badge?: string
    title?: string
    description?: string
    primaryCta?: {
      text?: string
      href?: string
    }
    secondaryCta?: {
      text?: string
      href?: string
    }
  }
}

export function Hero({ data }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -60, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const flowingVariants = {
    animate: {
      y: [30, 80, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const scrollToServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const servicesSection = document.getElementById('services')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className="relative min-h-[85vh] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
        />
      </div>

      {/* Animated Background Elements with Radial Gradients */}
      <motion.div
        className="absolute top-100 right-[-100] w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)'
        }}
        variants={floatingVariants}
        animate="animate"
        transition={{ duration: 4 }}
      />
      <motion.div
        className="absolute top-100 right-[-100] w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(139, 92, 246, 0.25) 35%, rgba(255, 255, 255, 0.1) 60%, transparent 80%)'
        }}
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-[-100] left-[-100] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%'
        }}
        variants={flowingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-[-100] left-[-100] w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(139, 92, 246, 0.25) 35%, rgba(255, 255, 255, 0.1) 60%, transparent 80%)'
        }}
        variants={floatingVariants}
        animate="animate"
      />



      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          className="text-center space-y-6 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm"
          >
            {data?.badge || '✨ AI-Powered Business Intelligence'}
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Turn Raw Data Into
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real Business Decisions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-100/80 max-w-2xl mx-auto"
          >
            Connect all your data sources, build dashboards instantly, and uncover insights in minutes — without complex engineering.
          </motion.p>

          {/* Value bullets */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 text-sm text-blue-100/80"
          >
            {['Real-time dashboards', 'AI insights', 'Enterprise-grade security'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Link
              href={data?.primaryCta?.href || '/contact'}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-400/40 transition"
            >
              {data?.primaryCta?.text || 'Get Started'}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={data?.secondaryCta?.href || '#services'}
              onClick={scrollToServices}
              className="relative inline-flex h-12 items-center justify-center px-8 py-2 rounded-xl 
             bg-transparent text-white text-sm font-semibold
             border border-slate-600 
             overflow-hidden
             transition-all duration-300
             hover:shadow-2xl hover:shadow-white/10
             hover:translate-x-1"
            >
              {/* Top gradient line */}
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px 
                  bg-gradient-to-r from-transparent via-teal-500 to-transparent 
                  shadow-2xl" />

              {/* Text */}
              <span className="relative z-20">
                {data?.secondaryCta?.text || 'Learn More'}
              </span>

              {/* Shimmer effect */}
              <div className="absolute inset-0 
                  bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.15),55%,transparent)]
                  bg-size-[200%_100%] 
                  animate-shimmer" />
            </Link>

          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-2 md:gap-4 max-w-md mx-auto pt-2 md:pt-4 px-2 md:px-0"
          >
            {[
              { value: '500+', label: 'Companies' },
              { value: '99.9%', label: 'Uptime' },
              { value: '10B+', label: 'Data Points' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-2 md:p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-lg"
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <p className="text-lg md:text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Micro trust */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-white/40"
          >
            Trusted by startups and enterprises worldwide
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
