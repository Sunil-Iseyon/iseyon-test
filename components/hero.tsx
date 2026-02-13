'use client'

import { ArrowRight, Mail } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { RotatingFounderMessages } from '@/components/rotating-founder-messages'
import { motion } from 'framer-motion'

interface HeroProps {
  data: {
    badge?: string
    title?: string
    description?: any
    primaryCta?: {
      text?: string
      href?: string
    }
    secondaryCta?: {
      text?: string
      href?: string
    }
  }
  founderMessages?: Array<{
    name: string
    role: string
    initials: string
    avatar?: string
    message: any
  }>
}

export function Hero({ data, founderMessages = [] }: HeroProps) {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      const navbarHeight = 80
      const elementPosition = servicesSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }
  return (
    <section className='pt-12 md:pt-11 min-h-screen mx-2 sm:mx-4 lg:mx-5 flex flex-col'>
      <main className="rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl overflow-hidden flex-1 flex flex-col">
        <div className="mx-auto py-6 sm:py-10 flex-1 flex flex-col">
          <div className='bg-linear-to-br from-sky-200 via-blue-50 to-sky-50 px-3 sm:px-4 lg:px-24 py-6 sm:py-8 md:py-10 rounded-t-lg sm:rounded-t-2xl lg:rounded-t-3xl flex-1 flex flex-col justify-center'>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full">
              {/* Left Content */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6 z-10 w-full max-w-full overflow-hidden">
                {/* Header */}
                <div className="space-y-2 sm:space-y-3">
                  {data.badge && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-teal-600 italic text-xs sm:text-sm lg:text-base font-medium">
                      {data.badge}
                    </motion.p>
                  )}
                  {data.title && (
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight break-words hyphens-auto max-w-full"
                      style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                      {data.title}
                    </motion.h1>
                  )}
                  {data.description && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed break-words max-w-full"
                      style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                      {typeof data.description === 'string' ? (
                        <p>{data.description}</p>
                      ) : (
                        <TinaMarkdown content={data.description} />
                      )}
                    </motion.div>
                  )}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-row items-center gap-3 sm:gap-4 pt-2">
                  {data.primaryCta?.text && data.primaryCta?.href && (
                    <Button asChild className="group duration-300 transform hover:-translate-y-1 bg-white text-teal-600 hover:bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 flex items-center justify-center gap-2 font-semibold text-xs sm:text-sm lg:text-base shadow-sm whitespace-nowrap transition-all">

                      <a href={data.primaryCta.href}>
                        <Mail size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                        {data.primaryCta.text}
                      </a>
                    </Button>
                  )}
                  {data.secondaryCta?.text && data.secondaryCta?.href && (
                    <Button asChild variant="ghost"
                      onClick={scrollToServices}>

                      {/* <a href={data.secondaryCta.href}> */}
                      <div className="group border border-teal-600 text-teal-600 hover:text-teal-700 hover:bg-teal-50 flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 whitespace-nowrap transition-all">
                        {data.secondaryCta.text}
                        <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </div>

                      {/* </a> */}
                    </Button>
                  )}
                </motion.div>

                {/* Divider Line */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="w-full max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg h-0.5 bg-linear-to-r from-green-500 via-green-200 to-transparent rounded-full mt-4 sm:mt-6 origin-left"></motion.div>
                {/* <div className="w-220 h-1 bg-white absolute left-0 rounded-full mb-2"></div> */}
                {/* Trust Logos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="space-y-2">
                  <p className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wide">
                    Trusted by leading companies
                  </p>
                  <div className="relative overflow-hidden py-2">
                    <div className="flex items-center space-x-8 sm:space-x-10 lg:space-x-12 animate-scroll">
                      {/* Original set */}
                      <Image src="/partners/databricks-logo.webp" alt="Databricks" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/tableau.webp" alt="Tableau" width={90} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/strategy.webp" alt="Strategy" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/microsoft.webp" alt="Microsoft" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/snowflake.webp" alt="Snowflake" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/AWS.webp" alt="AWS" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-16 sm:w-18 lg:w-20 h-auto" />
                      <Image src="/partners/informatica.webp" alt="Informatica" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/lancet.webp" alt="Lancet" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />

                      {/* Duplicate set for seamless loop */}
                      <Image src="/partners/databricks-logo.webp" alt="Databricks" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/tableau.webp" alt="Tableau" width={90} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/strategy.webp" alt="Strategy" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/microsoft.webp" alt="Microsoft" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/snowflake.webp" alt="Snowflake" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/AWS.webp" alt="AWS" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-16 sm:w-18 lg:w-20 h-auto" />
                      <Image src="/partners/informatica.webp" alt="Informatica" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                      <Image src="/partners/lancet.webp" alt="Lancet" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-[70px] h-auto" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Illustration */}
              <div className="relative h-full hidden lg:flex items-center justify-center">

                <div className="absolute inset-0 hidden lg:block">
                  {/* Column 1 - Left side tall bars - animated from top */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "20rem" }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute top-67 left-59 w-26 bg-linear-to-t from-sky-300 via-sky-200/40 to-transparent"
                  />

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.8, height: "14rem" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="absolute top-79 right-50 w-26 bg-linear-to-t from-sky-200 via-sky-200/40 to-transparent"
                  />

                  {/* Column 3 - Right side bars */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "12rem" }}
                    transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                    className="absolute top-72 right-30 w-20 bg-linear-to-t from-sky-300 via-sky-200/40 to-transparent"
                  />
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 0.8, height: "14rem" }}
                    transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
                    className="absolute top-72 right-2 w-28 bg-linear-to-t from-sky-200 via-sky-200/40 to-transparent"
                  />
                </div>


                {/* AI/BI Visualizations */}
                <svg
                  className="absolute w-full h-full"
                  viewBox="0 0 600 700"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Gradient definitions for cohesive color scheme */}
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(125, 211, 252, 0.8)" />
                      <stop offset="100%" stopColor="rgba(14, 165, 233, 0.6)" />
                    </linearGradient>
                    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                      <stop offset="100%" stopColor="rgba(240, 249, 255, 0.9)" />
                    </linearGradient>
                    {/* Arrow marker for pipeline */}
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                      <polygon points="0 0, 6 3, 0 6" fill="rgba(14, 165, 233, 0.6)" />
                    </marker>
                  </defs>

                  {/* Organized background decorative elements */}
                  {/* <g opacity="0.4">
                <circle cx="500" cy="200" r="35" fill="rgba(165, 243, 252, 0.25)" />
                <circle cx="250" cy="550" r="45" fill="rgba(206, 250, 253, 0.3)" />
                <circle cx="150" cy="150" r="25" fill="rgba(125, 211, 252, 0.2)" />
              </g> */}

                  <g transform="translate(50, 0)">
                    {/* Dashboard Preview Card */}
                    <g transform="translate(100, 200)">
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        {/* Card shadow */}
                        <rect x="2" y="2" width="180" height="120" rx="8" fill="rgba(14, 165, 233, 0.1)" />
                        <rect x="0" y="0" width="180" height="120" rx="8" fill="url(#cardGradient)" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="2" />
                        <rect x="10" y="10" width="160" height="20" rx="4" fill="rgba(14, 165, 233, 0.2)" />
                        <rect x="10" y="40" width="70" height="60" rx="4" fill="rgba(125, 211, 252, 0.4)" />
                        <rect x="90" y="40" width="80" height="60" rx="4" fill="rgba(165, 243, 252, 0.4)" />
                        {/* Dashboard icons */}
                        <circle cx="20" cy="20" r="3" fill="rgba(14, 165, 233, 0.7)" />
                        <circle cx="30" cy="20" r="3" fill="rgba(14, 165, 233, 0.7)" />
                      </motion.g>
                    </g>

                    {/* Chart Visualization - Bar Chart */}
                    <g transform="translate(350, 270)">
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        {/* Card shadow */}
                        <rect x="2" y="2" width="160" height="140" rx="8" fill="rgba(6, 182, 212, 0.1)" />
                        <rect x="0" y="0" width="160" height="140" rx="8" fill="url(#cardGradient)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" />
                        <text x="80" y="20" textAnchor="middle" fontSize="12" fill="rgba(15, 23, 42, 0.7)" fontWeight="600">Analytics</text>
                        {/* Bar chart bars */}
                        <rect x="20" y="90" width="20" height="30" rx="2" fill="rgba(14, 165, 233, 0.7)" />
                        <rect x="50" y="70" width="20" height="50" rx="2" fill="rgba(6, 182, 212, 0.7)" />
                        <rect x="80" y="50" width="20" height="70" rx="2" fill="rgba(14, 165, 233, 0.8)" />
                        <rect x="110" y="80" width="20" height="40" rx="2" fill="rgba(6, 182, 212, 0.6)" />
                        {/* Axis lines */}
                        <line x1="15" y1="125" x2="145" y2="125" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1" />
                        <line x1="15" y1="40" x2="15" y2="125" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1" />
                      </motion.g>
                    </g>

                    {/* Forecast Graph - Line Chart */}
                    <g transform="translate(100, 350)">
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                      >
                        {/* Card shadow */}
                        <rect x="2" y="2" width="200" height="130" rx="8" fill="rgba(125, 211, 252, 0.1)" />
                        <rect x="0" y="0" width="200" height="130" rx="8" fill="url(#cardGradient)" stroke="rgba(125, 211, 252, 0.4)" strokeWidth="2" />
                        <text x="100" y="20" textAnchor="middle" fontSize="12" fill="rgba(15, 23, 42, 0.7)" fontWeight="600">Forecast</text>
                        {/* Grid lines */}
                        <line x1="20" y1="40" x2="180" y2="40" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1" />
                        <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1" />
                        <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1" />
                        <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1" />
                        {/* Forecast line */}
                        <polyline
                          points="20,90 60,70 100,75 140,50 180,45"
                          fill="none"
                          stroke="rgba(14, 165, 233, 0.8)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* Forecast area */}
                        <polygon
                          points="20,90 60,70 100,75 140,50 180,45 180,100 20,100"
                          fill="rgba(14, 165, 233, 0.15)"
                        />
                        {/* Data points */}
                        <circle cx="20" cy="90" r="4" fill="rgba(14, 165, 233, 1)" />
                        <circle cx="60" cy="70" r="4" fill="rgba(14, 165, 233, 1)" />
                        <circle cx="100" cy="75" r="4" fill="rgba(14, 165, 233, 1)" />
                        <circle cx="140" cy="50" r="4" fill="rgba(14, 165, 233, 1)" />
                        <circle cx="180" cy="45" r="4" fill="rgba(6, 182, 212, 1)" />
                      </motion.g>
                    </g>

                    {/* AI Pipeline Illustration */}
                    <g transform="translate(320, 150)">
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                      >
                        {/* Card shadow */}
                        <rect x="2" y="2" width="140" height="110" rx="8" fill="rgba(165, 243, 252, 0.1)" />
                        <rect x="0" y="0" width="140" height="110" rx="8" fill="url(#cardGradient)" stroke="rgba(165, 243, 252, 0.4)" strokeWidth="2" />
                        <text x="70" y="18" textAnchor="middle" fontSize="11" fill="rgba(15, 23, 42, 0.7)" fontWeight="600">AI Pipeline</text>
                        {/* Pipeline nodes */}
                        <circle cx="30" cy="45" r="12" fill="rgba(14, 165, 233, 0.3)" stroke="rgba(14, 165, 233, 0.8)" strokeWidth="2" />
                        <circle cx="70" cy="45" r="12" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="2" />
                        <circle cx="110" cy="45" r="12" fill="rgba(125, 211, 252, 0.3)" stroke="rgba(125, 211, 252, 0.8)" strokeWidth="2" />
                        {/* Pipeline connections */}
                        <line x1="42" y1="45" x2="58" y2="45" stroke="rgba(14, 165, 233, 0.6)" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        <line x1="82" y1="45" x2="98" y2="45" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        {/* Labels */}
                        <text x="30" y="72" textAnchor="middle" fontSize="8" fill="rgba(71, 85, 105, 0.8)">Data</text>
                        <text x="70" y="72" textAnchor="middle" fontSize="8" fill="rgba(71, 85, 105, 0.8)">Process</text>
                        <text x="110" y="72" textAnchor="middle" fontSize="8" fill="rgba(71, 85, 105, 0.8)">Insight</text>
                        {/* AI sparkles */}
                        {/* AI sparkles with glow effect */}
                        <g filter="url(#glow)">
                          <path d="M 25 30 L 27 34 L 31 32 L 28 36 L 32 38 L 27 37 L 25 41 L 23 37 L 19 38 L 22 36 L 19 32 L 23 34 Z" fill="rgba(250, 204, 21, 0.8)" />
                          <path d="M 105 30 L 107 34 L 111 32 L 108 36 L 112 38 L 107 37 L 105 41 L 103 37 L 99 38 L 102 36 L 99 32 L 103 34 Z" fill="rgba(250, 204, 21, 0.8)" />
                        </g>
                      </motion.g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>


          {/* Bottom Section - Founder Messages */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 pt-6 sm:pt-8 md:pt-10 border-gray-200 px-4 sm:px-8 md:px-12 lg:px-12 xl:px-24">
            {/* Rotating Founder Messages */}
            <div className="w-full">
              <RotatingFounderMessages messages={founderMessages} interval={10000} delay={1500} />
            </div>
          </div>
        </div>
      </main>
    </section>

  )
}
