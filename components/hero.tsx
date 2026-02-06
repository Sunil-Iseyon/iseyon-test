'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'


export function Hero() {
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
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative h-screen pt-20 overflow-hidden bg-black snap-start snap-always">
      {/* Spline 3D Background */}
      {/* <div className="absolute inset-0 z-0">
        <Spline
          scene="/scene.splinecode"
          className="w-full"
        />
      </div> */}
      <BackgroundRippleEffect interactive trigger="hover"/>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-b from-transparent to-black" />

      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pointer-events-none">
        <motion.div
          className="pointer-events-auto text-center space-y-6 md:space-y-8 py-12 md:py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.span
              className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs md:text-sm font-medium shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              ✨ Welcome to the Future of Analytics
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2 md:px-0"
            style={{
              background: 'linear-gradient(180deg, #71747c 0%, #e8e9eb 30%, #ffffff 50%, #c5c7ca 70%, #8b8e95 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3)) drop-shadow(0 4px 8px rgba(255,255,255,0.2))',
            }}
          >
            <span>
              Transform your business 

            </span>
            <br />
            <span>with powerful data and analytics solutions. </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md backdrop-blur-sm px-4 md:px-0"
          >
            Unlock actionable insights from your data with our cutting-edge artificial intelligence and analytics platform. Make smarter decisions faster.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4 px-4 md:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/request-demo">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[0.8] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#38bdf8_0%,#3b82f6_50%,black_100%)]" />
                  <span className="inline-flex px-5 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/watch-demo">
                <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 h-12 animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] border-slate-800 text-slate-400">
                  <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                  <span className="relative z-20">
                    Request Demo
                  </span>
                </button>
              </Link>
            </motion.div>
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
        </motion.div>
      </div>
    </section>
  )
}
