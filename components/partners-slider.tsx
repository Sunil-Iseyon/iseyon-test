'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedCounter } from '@/components/animated-counter'

interface Partner {
  name: string;
  logo: string;
}

interface PartnersSliderProps {
  partners: Partner[];
}

export function PartnersSlider({ partners }: PartnersSliderProps) {

  return (
    <section className="py-12 md:py-20 bg-white border-y border-slate-200 snap-start snap-always">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-foreground/60">
            Our platform powers analytics for companies worldwide
          </p>
        </motion.div>

        {/* Animated Slider - Fixed infinite loop */}
        <div className="relative overflow-hidden py-4 md:py-6">
          <div className="flex gap-8 md:gap-12">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -(((partners.length * 280) + 32))],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {/* Triple set for seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.06, y: -5 }}
                  className="shrink-0 w-56 h-32 md:w-64 md:h-40 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer group"
                >
                  <motion.div
                    className="relative w-48 h-24 md:w-56 md:h-32"
                    whileHover={{ scale: 1.08 }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain mx-auto"
                    />
                  </motion.div>
                  <motion.p
                    className="text-foreground font-semibold text-center text-xs md:text-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10" />
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-12 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: '800+', label: 'Project Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Service available' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative p-2 sm:p-4 md:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 border border-blue-200 text-center overflow-hidden shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient orb */}
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <AnimatedCounter value={stat.number} duration={2 + idx * 0.3} />
                <p className="text-foreground/70 font-semibold text-[8px] sm:text-xs md:text-sm uppercase tracking-wide mt-0.5 sm:mt-1 leading-tight px-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
