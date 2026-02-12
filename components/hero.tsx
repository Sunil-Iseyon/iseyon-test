'use client'

import { ArrowRight,Mail } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { RotatingFounderMessages } from '@/components/rotating-founder-messages'

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
  return (
    <section className='mt-10 min-h-[600px] sm:min-h-[700px] lg:min-h-screen mx-2 sm:mx-4 lg:mx-5'>
<main className="rounded-t-xl sm:rounded-t-2xl overflow-hidden">
      <div className="mx-auto py-10">
        <div className='bg-linear-to-br from-sky-200 via-blue-50 to-sky-50 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4 sm:py-5 rounded-t-2xl sm:rounded-t-3xl'>
 <div className="grid lg:grid-cols-2  items-center">
          {/* Left Content */}
          <div className="space-y-3 z-10 w-full max-w-full lg:max-w-2xl">
            {/* Header */}
            <div className="space-y-1 sm:space-y-4">
              {data.badge && (
                <p className="text-teal-600 italic text-sm sm:text-base lg:text-lg font-medium">
                  {data.badge}
                </p>
              )}
              {data.title && (
                <h1 className="text-3xl sm:text-4xl md:text-[3.5rem]  font-bold text-slate-900 leading-tight">
                  {data.title}
                </h1>
              )}
              {data.description && (
                <div className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-full lg:max-w-2xl">
                  {typeof data.description === 'string' ? (
                    <p>{data.description}</p>
                  ) : (
                    <TinaMarkdown content={data.description} />
                  )}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              {data.primaryCta?.text && data.primaryCta?.href && (
                <Button asChild className="bg-white text-teal-600 hover:bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                  <a href={data.primaryCta.href}>
                    <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                    {data.primaryCta.text}
                  </a>
                </Button>
              )}
              {data.secondaryCta?.text && data.secondaryCta?.href && (
                <Button asChild variant="ghost" className="text-teal-600 hover:text-teal-700 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <a href={data.secondaryCta.href}>
                    {data.secondaryCta.text}
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                </Button>
              )}
            </div>
        
            {/* Divider Line */}
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-0.5 bg-linear-to-r from-green-500 via-green-200 to-transparent rounded-full"></div>
            {/* <div className="w-220 h-1 bg-white absolute left-0 rounded-full mb-2"></div> */}
            {/* Trust Logos */}
            <div className="space-y-1 sm:space-y-2">
              <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide">
                Trusted by leading companies
              </p>
              <div className="relative overflow-hidden">
                <div className="flex items-center space-x-8 sm:space-x-6 animate-scroll">
                  {/* Original set */}
                  <Image src="/partners/databricks-logo.webp" alt="Databricks" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/tableau.webp" alt="Tableau" width={90} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/strategy.webp" alt="Strategy" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/microsoft.webp" alt="Microsoft" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/snowflake.webp" alt="Snowflake" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/AWS.webp" alt="AWS" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-20 h-auto" />
                  <Image src="/partners/informatica.webp" alt="Informatica" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/lancet.webp" alt="Lancet" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  
                  {/* Duplicate set for seamless loop */}
                  <Image src="/partners/databricks-logo.webp" alt="Databricks" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/tableau.webp" alt="Tableau" width={90} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/strategy.webp" alt="Strategy" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/microsoft.webp" alt="Microsoft" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/snowflake.webp" alt="Snowflake" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/AWS.webp" alt="AWS" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-14 sm:w-16 lg:w-20 h-auto" />
                  <Image src="/partners/informatica.webp" alt="Informatica" width={80} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                  <Image src="/partners/lancet.webp" alt="Lancet" width={70} height={20} className="shrink-0 opacity-60 hover:opacity-100 transition grayscale hover:grayscale-0 w-12 sm:w-14 lg:w-[70px] h-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-full hidden lg:flex items-center justify-center">

            <div className="absolute inset-0">
              {/* Column 1 - Left side tall bars */}
              <div className="absolute top-67 left-59 w-26 h-80 bg-linear-to-t from-sky-300 via-sky-200/40 to-transparent"></div>

              <div className="absolute top-79 right-50 w-26 h-56 bg-linear-to-t from-sky-200 via-sky-200/40 to-transparent opacity-80"></div>
             
              {/* Column 2 - Middle bars */}
              {/* <div className="absolute bottom-0 left-64 w-20 h-40 bg-cyan-100 opacity-50"></div> */}
              {/* <div className="absolute bottom-48 right-10  rounded-full w-24 h-32 bg-cyan-100 opacity-55"></div> */}
             
              {/* Column 3 - Right side bars */}
              <div className="absolute top-72 right-30 w-20 h-48 bg-linear-to-t from-sky-300 via-sky-200/40 to-transparent "></div>
              <div className="absolute top-72 right-2 w-28 h-56 bg-linear-to-t from-sky-200 via-sky-200/40 to-transparent opacity-80 "></div>
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
                  {/* Card shadow */}
                  <rect x="2" y="2" width="180" height="120" rx="8" fill="rgba(14, 165, 233, 0.1)" />
                  <rect x="0" y="0" width="180" height="120" rx="8" fill="url(#cardGradient)" stroke="rgba(14, 165, 233, 0.4)" strokeWidth="2"/>
                  <rect x="10" y="10" width="160" height="20" rx="4" fill="rgba(14, 165, 233, 0.2)"/>
                  <rect x="10" y="40" width="70" height="60" rx="4" fill="rgba(125, 211, 252, 0.4)"/>
                  <rect x="90" y="40" width="80" height="60" rx="4" fill="rgba(165, 243, 252, 0.4)"/>
                  {/* Dashboard icons */}
                  <circle cx="20" cy="20" r="3" fill="rgba(14, 165, 233, 0.7)"/>
                  <circle cx="30" cy="20" r="3" fill="rgba(14, 165, 233, 0.7)"/>
                </g>

                {/* Chart Visualization - Bar Chart */}
                <g transform="translate(350, 270)">
                  {/* Card shadow */}
                  <rect x="2" y="2" width="160" height="140" rx="8" fill="rgba(6, 182, 212, 0.1)" />
                  <rect x="0" y="0" width="160" height="140" rx="8" fill="url(#cardGradient)" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2"/>
                  <text x="80" y="20" textAnchor="middle" fontSize="12" fill="rgba(15, 23, 42, 0.7)" fontWeight="600">Analytics</text>
                  {/* Bar chart bars */}
                  <rect x="20" y="90" width="20" height="30" rx="2" fill="rgba(14, 165, 233, 0.7)"/>
                  <rect x="50" y="70" width="20" height="50" rx="2" fill="rgba(6, 182, 212, 0.7)"/>
                  <rect x="80" y="50" width="20" height="70" rx="2" fill="rgba(14, 165, 233, 0.8)"/>
                  <rect x="110" y="80" width="20" height="40" rx="2" fill="rgba(6, 182, 212, 0.6)"/>
                  {/* Axis lines */}
                  <line x1="15" y1="125" x2="145" y2="125" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1"/>
                  <line x1="15" y1="40" x2="15" y2="125" stroke="rgba(148, 163, 184, 0.5)" strokeWidth="1"/>
                </g>

                {/* Forecast Graph - Line Chart */}
                <g transform="translate(100, 350)">
                  {/* Card shadow */}
                  <rect x="2" y="2" width="200" height="130" rx="8" fill="rgba(125, 211, 252, 0.1)" />
                  <rect x="0" y="0" width="200" height="130" rx="8" fill="url(#cardGradient)" stroke="rgba(125, 211, 252, 0.4)" strokeWidth="2"/>
                  <text x="100" y="20" textAnchor="middle" fontSize="12" fill="rgba(15, 23, 42, 0.7)" fontWeight="600">Forecast</text>
                  {/* Grid lines */}
                  <line x1="20" y1="40" x2="180" y2="40" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1"/>
                  <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1"/>
                  <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(226, 232, 240, 0.5)" strokeWidth="1"/>
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
                  <circle cx="20" cy="90" r="4" fill="rgba(14, 165, 233, 1)"/>
                  <circle cx="60" cy="70" r="4" fill="rgba(14, 165, 233, 1)"/>
                  <circle cx="100" cy="75" r="4" fill="rgba(14, 165, 233, 1)"/>
                  <circle cx="140" cy="50" r="4" fill="rgba(14, 165, 233, 1)"/>
                  <circle cx="180" cy="45" r="4" fill="rgba(6, 182, 212, 1)"/>
                </g>

                {/* AI Pipeline Illustration */}
                <g transform="translate(320, 150)">
                  {/* Card shadow */}
                  <rect x="2" y="2" width="140" height="110" rx="8" fill="rgba(165, 243, 252, 0.1)" />
                  <rect x="0" y="0" width="140" height="110" rx="8" fill="url(#cardGradient)" stroke="rgba(165, 243, 252, 0.4)" strokeWidth="2"/>
                  <text x="70" y="18" textAnchor="middle" fontSize="11" fill="rgba(15, 23, 42, 0.7)" fontWeight="600">AI Pipeline</text>
                  {/* Pipeline nodes */}
                  <circle cx="30" cy="45" r="12" fill="rgba(14, 165, 233, 0.3)" stroke="rgba(14, 165, 233, 0.8)" strokeWidth="2"/>
                  <circle cx="70" cy="45" r="12" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="2"/>
                  <circle cx="110" cy="45" r="12" fill="rgba(125, 211, 252, 0.3)" stroke="rgba(125, 211, 252, 0.8)" strokeWidth="2"/>
                  {/* Pipeline connections */}
                  <line x1="42" y1="45" x2="58" y2="45" stroke="rgba(14, 165, 233, 0.6)" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <line x1="82" y1="45" x2="98" y2="45" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  {/* Labels */}
                  <text x="30" y="72" textAnchor="middle" fontSize="8" fill="rgba(71, 85, 105, 0.8)">Data</text>
                  <text x="70" y="72" textAnchor="middle" fontSize="8" fill="rgba(71, 85, 105, 0.8)">Process</text>
                  <text x="110" y="72" textAnchor="middle" fontSize="8" fill="rgba(71, 85, 105, 0.8)">Insight</text>
                  {/* AI sparkles */}
                  {/* AI sparkles with glow effect */}
                  <g filter="url(#glow)">
                    <path d="M 25 30 L 27 34 L 31 32 L 28 36 L 32 38 L 27 37 L 25 41 L 23 37 L 19 38 L 22 36 L 19 32 L 23 34 Z" fill="rgba(250, 204, 21, 0.8)"/>
                    <path d="M 105 30 L 107 34 L 111 32 L 108 36 L 112 38 L 107 37 L 105 41 L 103 37 L 99 38 L 102 36 L 99 32 L 103 34 Z" fill="rgba(250, 204, 21, 0.8)"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        </div>
       

        {/* Bottom Section - Founder Messages */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6  pt-3 sm:pt-4  border-gray-200 px-4 sm:px-8 md:px-12 lg:px-12 xl:px-24">
          {/* Rotating Founder Messages */}
          <div className="w-full">
            <RotatingFounderMessages messages={founderMessages} interval={10000} />
          </div>
        </div>
      </div>
    </main>
    </section>
    
  )
}
