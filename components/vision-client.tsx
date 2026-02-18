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
    <main className="min-h-screen bg-white">

      {/* Mission Section */}
      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20 sm:pt-24 md:pt-28 lg:pt-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mx-auto text-center">
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
              <dl className="flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 justify-center">
                <div className="text-center">
                  <dt className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">800+</dt>
                  <dd className="text-xs sm:text-sm text-foreground/60 max-w-[15rem]">BI projects completed (internal records, 2026)</dd>
                </div>
                <div className="text-center">
                  <dt className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">125+</dt>
                  <dd className="text-xs sm:text-sm text-foreground/60 max-w-[15rem]">Consultants worldwide (active roster, 2026)</dd>
                </div>
                <div className="text-center">
                  <dt className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10,000+</dt>
                  <dd className="text-xs sm:text-sm text-foreground/60 max-w-[15rem]">Service hours delivered (client engagements, 2026)</dd>
                </div>
              </dl>
            </motion.div>

     
          </article>
        </div>
      </section>

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
             Iseyon Analytics envisions a future where <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AI</a> and <a href="https://en.wikipedia.org/wiki/Analytics" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">advanced analytics</a> integrate seamlessly into every <a href="https://en.wikipedia.org/wiki/Business_operations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">business operation</a>. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {visionPoints.map((point, index) => {
              const Icon = iconMap[point.icon as keyof typeof iconMap] || Globe
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-border hover:border-accent transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-slate-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative flex gap-4 sm:gap-6 md:gap-10">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-0 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">{point.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
    </main>
  )
}
