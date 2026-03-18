'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Shield, Brain, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Particles } from '@/components/particles'

const iconMap = { Zap, TrendingUp, Shield, Brain };

interface ProjectData {
  order?: number;
  name: string;
  tagline: string;
  logo: string;
  description: string;
  featuredImage: string;
  features: { icon: string; title: string; description: string }[];
  ctaText: string;
  ctaLink: string;
}

interface NewProjectProps {
  projects: ProjectData[];
}

export function NewProject({ projects }: NewProjectProps) {
  const [active, setActive] = useState(0);

  if (!Array.isArray(projects) || projects.length === 0) return null;

  const data = projects[active];

  return (
    <section className="relative pt-10 md:pt-20 snap-start">
      <div>
        {/* Section heading + tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
            Our Products
          </h2>

          {/* Tab switcher — only when multiple projects */}
          {projects.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                    i === active
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-transparent text-primary border-primary/30 hover:border-primary hover:bg-primary/5'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Logo + tagline — animated sub-heading above the panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`header-${active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-6 px-4"
          >
            <Link href={data.ctaLink || '#'} target="_blank" className="inline-flex items-center justify-center">
              <img
                src={data.logo}
                alt={data.name ?? ''}
                className="h-16 w-auto max-w-[180px] object-contain mx-auto"
              />
            </Link>
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto mt-2">
              {data.tagline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Project details panel — original UI */}
        <div className="w-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Animated background blobs */}
          
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <Particles />

          <div className="relative overflow-hidden rounded-2xl w-full">
            <div className="absolute inset-0 bg-primary -z-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`panel-${active}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-[560px]"
              >
                {/* Featured Image */}
                <div className="h-full flex items-center justify-center relative overflow-hidden p-4 lg:p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={data.featuredImage}
                      alt={data.name ?? ''}
                      width={500}
                      height={500}
                      className="object-contain w-full h-full max-w-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center overflow-y-auto">
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold">
                        Featured Project
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-3 leading-tight text-white">
                      {data.name}
                    </h3>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {(data.features ?? []).map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap] || Zap;
                        return (
                          <div key={index} className="flex items-start gap-2">
                            <Icon className="w-5 h-5 text-white mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm font-semibold text-white">{feature.title}</p>
                              <p className="text-xs text-white/80">{feature.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row gap-3 flex-wrap">
                      <Link href={data.ctaLink || '#'} target="_blank">
                        <button className="group px-4 py-2.5 border-2 border-white text-white rounded-lg font-semibold sm:text-sm hover:bg-white/10 hover:border-white/50 flex items-center justify-center gap-2 text-xs whitespace-nowrap transition-all">
                          {data.ctaText}
                          <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                      <Link href="/contact">
                        <button className="px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 text-white bg-secondary rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap">
                          <Mail size={18} className="sm:w-5 sm:h-5" />
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
