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
          <div className="max-w-4xl flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mx-auto text-center">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight">
                {visionData?.missionHeading || 'Vision, Leadership, Consistency'}
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Closing the gap between business leaders and technology professionals
              </h3>
              <TinaRichText 
                content={visionData?.missionDescription} 
                className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6 md:mb-8" 
              />
              <div className="flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 justify-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">812</div>
                  <div className="text-xs sm:text-sm text-foreground/60 max-w-[15rem]">Hundreds of successful BI projects completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">126</div>
                  <div className="text-xs sm:text-sm text-foreground/60 max-w-[15rem]">More than 100 consultants serving clients worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10k+</div>
                  <div className="text-xs sm:text-sm text-foreground/60 max-w-[15rem]">Over 10 thousands hours of services performed</div>
                </div>
              </div>
            </motion.div>

     
          </div>
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
              We envision a future where artificial intelligence and advanced analytics are seamlessly integrated into every aspect of business operations, matching Gartner's forecast of $2.52 trillion worldwide AI spending in 2026<sup><a href='#cite1' className="text-primary hover:underline">[1]</a></sup>.
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
              The principles that guide everything we do, aligning with Deloitte's State of AI in the Enterprise 2026 report on scaling AI projects<sup><a href='#cite2' className="text-primary hover:underline">[2]</a></sup>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
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
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</h3>
                  <TinaRichText content={value.description} className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-3 sm:py-4 md:py-5 bg-linear-to-r from-primary via-primary/95 to-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-4 sm:mb-6 md:mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
              Our Commitment to You
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
              We're committed to providing continuous innovation, unwavering support, and solutions that evolve with your business. Together, we're building the future of intelligent business analytics.
            </p>

            {/* Citations */}
            
          </motion.div>
        </div>
      </section>
    </main>
  )
}
