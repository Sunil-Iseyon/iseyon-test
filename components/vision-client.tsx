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
      <section className="pb-24 pt-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col lg:flex-row lg:items-center  gap-12 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <Target className="w-4 h-4" />
                {visionData?.missionTitle || 'Our Mission'}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {visionData?.missionHeading || 'Vision, Leadership, Consistency'}
              </h2>
              <h3 className="text-2xl md:text-2xl font-semibold text-gray-500 mb-6 leading-tight">
                Closing the gap between business leaders and technology professionals
              </h3>
              <TinaRichText 
                content={visionData?.missionDescription} 
                className="text-lg text-foreground/70 leading-relaxed mb-8" 
              />
              <div className="flex gap-20 justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-foreground/60">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">99%</div>
                  <div className="text-sm text-foreground/60">Satisfaction</div>
                </div>
              </div>
            </motion.div>

     
          </div>
        </div>
      </section>

      {/* Vision 2026 Section */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <Rocket className="w-4 h-4" />
              Looking Forward
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Vision for 2026 and Beyond
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We envision a future where artificial intelligence and advanced analytics are seamlessly integrated into every aspect of business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="group relative p-8 bg-white rounded-2xl border border-border hover:border-accent transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative flex gap-10">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{point.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
       
      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <Heart className="w-4 h-4" />
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Core Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="relative p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-border hover:border-primary transition-all group"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <TinaRichText content={value.description} className="text-foreground/70 leading-relaxed" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-5 bg-linear-to-r from-primary via-primary/95 to-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Commitment to You
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
              We're committed to providing continuous innovation, unwavering support, and solutions that evolve with your business. Together, we're building the future of intelligent business analytics.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
