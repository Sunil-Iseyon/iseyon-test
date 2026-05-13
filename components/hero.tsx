'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { RotatingFounderMessages } from '@/components/rotating-founder-messages'
import { motion } from 'framer-motion'

// ─── Radial Wheel ────────────────────────────────────────────────────────────

const wheelCategories = [
  { title: 'Analytics',             desc: 'Strategy, Tableau, Power BI, Domo, Snowflake, Redshift, Synapse, SQL', color: 'text-cyan-600' },
  { title: 'Cloud Platforms',       desc: 'AWS, Azure, Google Cloud, Snowflake, Palantir AIP',                    color: 'text-cyan-600' },
  { title: 'Infrastructure',        desc: 'Cloud Services, Managed Infrastructure, End User, Network Security',   color: 'text-teal-600' },
  { title: 'Data Engineering',      desc: 'AWS Glue, Azure Data Factory, MuleSoft, Boomi, Airflow',              color: 'text-teal-600' },
  { title: 'Big Data & Streaming',  desc: 'Apache Spark, Databricks',                                            color: 'text-green-700' },
  { title: 'ERP',                   desc: 'Oracle, SAP, Dynamics 365, Workday',                                  color: 'text-green-700' },
  { title: 'PLM',                   desc: 'Centric, Bamboo Rose',                                                color: 'text-teal-600' },
  { title: 'Ecommerce & Planning',  desc: 'Shopify, Anaplan, POS',                                               color: 'text-teal-600' },
  { title: 'Custom Development',    desc: 'Python, Java, JavaScript, REST APIs, Micro Services',                 color: 'text-cyan-600' },
  { title: 'Test / QA',             desc: 'Functional, Automated, Performance, Data, Usability',                 color: 'text-indigo-900' },
  { title: 'Program Management',    desc: 'Project Management, Jira, Business Analysts',                         color: 'text-primary' },
]

function HeroWheel() {
  // Three breakpoint radii: xs (hidden labels), sm-md, lg+
  const [radiusPct, setRadiusPct] = useState(52)
  const [showLabels, setShowLabels] = useState(true)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) {
        setRadiusPct(50)
      } else if (w < 1024) {
        setRadiusPct(52)
      } else {
        setRadiusPct(52)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const n = wheelCategories.length

  const items = wheelCategories.map((cat, i) => {
    const angleDeg = (i * 360) / n - 90        // start at top, clockwise
    const angleRad = (angleDeg * Math.PI) / 180
    const lx = 39 + radiusPct * Math.cos(angleRad)  // true center (50, 50)
    const ly = 45 + radiusPct * Math.sin(angleRad)
    return { ...cat, lx, ly }
  })

  return (
    // Show on all screen sizes; overflow-x-hidden on the parent section
    // prevents any slight overflow from causing page-level scroll.
    <div className="relative w-full aspect-square max-w-64 sm:max-w-96 lg:max-w-125 mx-auto">
      {/* Center image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative md:w-full md:h-full w-[80%] h-[80%]">
          <Image
            src="/HeroServices.png"
            alt="iSeyon Analytics AI/ML services wheel"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Category labels — equally spaced; hidden on xs mobile */}
      <ul className="contents" aria-label="Iseyon Analytics service capabilities">
      { items.map((item, i) => (
        <motion.li
          key={item.title}
          className="absolute flex flex-col items-center text-center gap-0 list-none"
          style={{
            left: `${item.lx}%`,
            top: `${item.ly}%`,
            transform: 'translate(-50%, -50%)',
            width: 'clamp(72px, 20%, 112px)',
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + i * 0.12, ease: 'easeOut' }}
        >
          <span className={`text-[7px] sm:text-[8px] lg:text-[10px] xl:text-[12px] font-bold leading-tight ${item.color} text-center `}>
            {item.title}
          </span>
          <span className="text-[6px] sm:text-[7px] lg:text-[8.5px] xl:text-[10px] text-gray-500 leading-snug text-center  ">
            {item.desc}
          </span>
        </motion.li>
      ))}
      </ul>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

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
    xFalcon?: {
      enabled?: boolean
      title?: string
      description?: string
      logo?: string
      url?: string
      ctaText?: string
    }
  }
  founderMessages?: Array<{
    name: string
    role: string
    initials: string
    avatar?: string
    message: any
  }>
  services?: Array<{
    heading: string
    homePageDescription?: string
    category: string
  }>
}

export function Hero({ data, founderMessages = [], services = [] }: HeroProps) {
  const xFalcon = data.xFalcon

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
    <section className='pt-12 md:pt-11 mx-2 sm:mx-4 lg:mx-5 flex flex-col overflow-x-hidden'>
      <main className="rounded-t-lg sm:rounded-t-xl lg:rounded-t-2xl flex-1 flex flex-col">
        <div className="mx-auto py-4 md:py-8 lg:py-12 flex-1 flex flex-col">
          <div className='bg-linear-to-br from-sky-200 via-blue-50 to-sky-50 px-3 sm:px-4 lg:px-24 py-8 md:py-12 lg:py-16 rounded-t-lg sm:rounded-t-2xl lg:rounded-t-3xl flex-1 flex flex-col justify-center'>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-8 lg:mb-12">
              {/* Left Content */}
              <article className="space-y-3 sm:space-y-4 z-10 w-full max-w-full overflow-hidden flex flex-col items-center md:items-start">
                {/* Header */}
                <header className="space-y-2 sm:space-y-3">
                  {/* {data.badge && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-teal-600 italic text-xs sm:text-sm lg:text-base text-center md:text-left font-medium">
                      {data.badge}
                    </motion.p>
                  )} */}
                  {data.title && (
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl lg:text-4xl xl:text-6xl text-center md:text-left font-bold text-slate-900 leading-tight break-words hyphens-auto max-w-full"
                      style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                      {data.title}
                    </motion.h1>
                  )}
                  {data.description && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-gray-600 text-sm md:text-base text-center md:text-left leading-relaxed break-words max-w-full"
                      style={{ wordWrap: 'break-word', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                      {typeof data.description === 'string' ? (
                        <p>{data.description}</p>
                      ) : (
                        <TinaMarkdown content={data.description} />
                      )}
                    </motion.div>
                  )}
                </header>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-row items-center justify-center md:justify-normal gap-3 sm:gap-4 pt-2">
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

                {/* <div className="mt-4 pt-4">
              <RotatingFounderMessages messages={founderMessages} interval={10000} delay={1500} />
            </div> */}

                {xFalcon?.enabled !== false && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 1.1, ease: 'easeOut' }}
                    className="mt-4 pt-4"
                  >
                    <div className="rounded-xl border border-teal-200/70 bg-white/55 backdrop-blur-sm p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <a
                          href={xFalcon?.url || 'https://www.xfalcon.ai/'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Image
                            src={xFalcon?.logo || '/favicon_48.png'}
                            alt={`${xFalcon?.title || 'xFalcon'} logo`}
                            width={36}
                            height={36}
                            className="h-9 w-9"
                          />
                          <span className="text-2xl font-semibold text-slate-900">{xFalcon?.title || 'xFalcon'}</span>
                        </a>
                      </div>
                      <p className="text-slate-700 text-base leading-relaxed max-w-2xl">
                        {xFalcon?.description || 'A typical MCP server gives an LLM a database connection. xFalcon gives it domain expertise, institutional memory, guardrails against analytical mistakes, and a structured workflow.'}
                      </p>
                      <a
                        href={xFalcon?.url || 'https://www.xfalcon.ai/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 mt-3 text-teal-600 font-semibold hover:text-teal-700"
                      >
                        {xFalcon?.ctaText || 'Visit Full site'}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </motion.div>
                )}
                
              </article>

              {/* Right Illustration — Radial Wheel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                <HeroWheel />
              </motion.div>
            </div>
            
          </div>
        </div>
      </main>
    </section>

  )
}
