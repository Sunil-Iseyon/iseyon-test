'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import aws from '@/public/partners/AWS.webp'
import databricks from '@/public/partners/databricks-logo.webp'
import informaica from '@/public/partners/informatica.webp'
import microsoft from '@/public/partners/microsoft.webp'
import snowflake from '@/public/partners/snowflake.webp'
import strategy from '@/public/partners/strategy.webp'
import tableau from '@/public/partners/tableau.webp'
import lancet from '@/public/partners/lancet.webp'

export function PartnersSlider() {
  const partners = [
    { name: 'AWS', logo: aws },
    { name: 'Databricks', logo: databricks },
    { name: 'Informatica', logo: informaica },
    { name: 'Microsoft', logo: microsoft },
    { name: 'Snowflake', logo: snowflake },
    { name: 'Strategy', logo: strategy },
    { name: 'Tableau', logo: tableau },
    { name: 'Lancet', logo: lancet },
  ]

  return (
    <section className="py-20 bg-white border-y border-slate-200 snap-start snap-always">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base md:text-lg text-foreground/60">
            Our platform powers analytics for companies worldwide
          </p>
        </motion.div>

        {/* Animated Slider - Fixed infinite loop */}
        <div className="relative overflow-hidden py-6">
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
                  className="flex-shrink-0 w-56 h-32 md:w-64 md:h-40 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer group"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: '500+', label: 'Active Clients' },
            { number: '99.9%', label: 'Uptime' },
            { number: '50M+', label: 'Daily Transactions' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 text-center"
              whileHover={{ y: -5 }}
            >
              <motion.p
                className="text-4xl font-bold text-slate-900 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-foreground/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
