'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export function ProjectsCarousel() {
  const projects = [
    {
      id: 1,
      title: 'Enterprise AI Analytics Engine',
      description: 'Built comprehensive AI-powered analytics system for enterprise clients, processing real-time data streams and generating predictive insights.',
      image: 'bg-gradient-to-br from-sky-400 via-blue-500 to-primary',
      client: 'Fortune 500 Tech Company',
      results: ['40% faster insights', '$50M value generated', '99.9% uptime']
    },
    {
      id: 2,
      title: 'Healthcare Data Intelligence',
      description: 'Implemented AI-driven predictive analytics for patient outcomes and hospital resource optimization.',
      image: 'bg-gradient-to-br from-accent to-cyan-400',
      client: 'MediHealth Systems',
      results: ['50% better predictions', '20% cost reduction', '95% uptime']
    },
    {
      id: 3,
      title: 'FinTech Risk Management',
      description: 'Created real-time fraud detection and risk analysis system processing millions of transactions daily.',
      image: 'bg-gradient-to-br from-primary to-indigo-600',
      client: 'FinanceFlow',
      results: ['99.2% fraud detection', '$50M saved', '100ms latency']
    },
    {
      id: 4,
      title: 'Manufacturing Efficiency Suite',
      description: 'Optimized production processes using IoT data and machine learning for predictive maintenance.',
      image: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      client: 'AutoMake Industries',
      results: ['35% downtime reduction', '28% productivity increase', '$15M saved']
    }
  ]

  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const headingScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1])
  const headingY = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0.7])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [200, 0])
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  const project = projects[current]

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale: headingScale, y: headingY, opacity: headingOpacity }}
          className="text-center px-4 pointer-events-none"
        >
          <motion.h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-accent leading-tight">
            AI Project Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-primary/60 font-medium"
          >
            Transforming businesses with cutting-edge analytics
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-96 mb-20"
      >
        <div className="bg-white rounded-3xl border border-border shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className={`${project.image} h-80 lg:h-full flex flex-col items-end justify-center p-8 relative overflow-hidden`}
              >
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-white/20 text-center">
                    <p className="text-9xl font-black">{String(project.id).padStart(2, '0')}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="p-8 lg:p-12 flex flex-col justify-between"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4"
                  >
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                      Featured Project
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-bold text-foreground mb-4 leading-tight"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-foreground/70 mb-6 leading-relaxed text-lg"
                  >
                    {project.description}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-secondary font-semibold mb-6"
                  >
                    Client: {project.client}
                  </motion.p>

                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-4">Key Results</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="p-4 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-colors"
                        >
                          <p className="font-bold text-primary text-lg">{result}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                  <div className="flex items-center gap-2">
                    {projects.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`h-2 rounded-full transition-all ${
                          idx === current ? 'bg-primary w-8' : 'bg-border hover:bg-foreground/30'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePrev}
                      className="p-2 rounded-lg bg-muted hover:bg-border transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 text-foreground" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="p-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
