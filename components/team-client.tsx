'use client'

import { motion } from 'framer-motion'
import { Linkedin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { TinaRichText } from './tina-rich-text'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'

interface TeamMember {
  name?: string
  role?: string
  bio?: string | TinaMarkdownContent
  image?: string
  linkedin?: string
}

interface CompanyValue {
  icon?: string
  title?: string
  description?: string | TinaMarkdownContent
}

interface TeamClientProps {
  values: CompanyValue[]
  team: TeamMember[]
}

export function TeamClient({ values, team }: TeamClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="pt-30 bg-white">

      {/* Company Values Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Values Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
                >
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    Our Values
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                >
                  What Drives Us Forward
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg text-gray-600 mb-8"
                >
                  Our core values shape everything we do, guiding our decisions and defining our culture.
                </motion.p>
              </div>

              {/* Values List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <TinaRichText content={value.description} className="text-gray-600 leading-relaxed" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative  w-full aspect-4/3 flex items-center justify-center">
                {/* Decorative background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[90%] rounded-[50%] bg-linear-to-br from-indigo-500 via-indigo-400 to-indigo-300 opacity-20 blur-3xl"></div>

                {/* Main Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/team/team-values.jpg"
                    alt="Our Team Values"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The People Behind Our Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the talented individuals who make it all happen
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || '/team/placeholder.jpg'}
                    alt={member.name || 'Team Member'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* LinkedIn Icon */}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white z-20"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <TinaRichText content={member.bio} className="text-gray-600 leading-relaxed" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
