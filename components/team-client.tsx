'use client'

import { motion } from 'framer-motion'
import { Linkedin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { TinaRichText } from './tina-rich-text'
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text'
import { useState } from 'react'

interface TeamMember {
  name?: string
  role?: string
  descp?: string | TinaMarkdownContent
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
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % team.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + team.length) % team.length)
  }

  return (
    <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-30 bg-white">

      {/* Company Values Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left - Values Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full"
                >
                  <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    Our Values
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6"
                >
                  What Drives Us Forward
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8"
                >
                  Our core values shape everything we do, guiding our decisions and defining our culture.
                </motion.p>
              </div>

              {/* Values List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3 sm:space-y-4 md:space-y-6"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-3 sm:gap-4 group"
                  >
                    <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-1.5 md:mb-2 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <TinaRichText content={value.description} className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed" />
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
              className="relative mt-6 lg:mt-0"
            >
              <div className="relative w-full aspect-4/3 flex items-center justify-center">
                {/* Decorative background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[90%] rounded-[50%] bg-linear-to-br from-indigo-500 via-indigo-400 to-indigo-300 opacity-20 blur-3xl"></div>

                {/* Main Image */}
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          >
            <span className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
              The People Behind Our Success
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the talented individuals who make it all happen
            </p>
          </motion.div>

          {/* Team Grid - Desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Member Image */}
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                  <Image
                    src={member.image || '/team/placeholder.jpg'}
                    alt={member.name || 'Team Member'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Description on Hover - Desktop */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    
                    <TinaRichText content={member.descp} className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed line-clamp-4" />
                  </div>
                  
                  {/* LinkedIn Icon */}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white z-30"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  )}
                </div>

                {/* Member Info - Desktop (Below Image) */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm sm:text-base">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Carousel - Mobile */}
          <div className="sm:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  const swipeVelocity = velocity.x;
                  
                  if (swipe > 50 || swipeVelocity > 500) {
                    // Swipe right - go to previous
                    prevSlide();
                  } else if (swipe < -50 || swipeVelocity < -500) {
                    // Swipe left - go to next
                    nextSlide();
                  }
                }}
                className="flex cursor-grab active:cursor-grabbing"
                animate={{ x: -currentSlide * 100 + '%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="min-w-full px-2"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      {/* Member Image */}
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={member.image || '/team/placeholder.jpg'}
                          alt={member.name || 'Team Member'}
                          fill
                          className="object-cover pointer-events-none"
                        />
                        {/* LinkedIn Icon */}
                        {member.linkedin && (
                          <Link
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 z-20"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                      </div>

                      {/* Member Info - Mobile */}
                      <div className="p-5 pointer-events-none">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {member.name}
                        </h3>
                        <p className="text-primary font-semibold mb-3 text-base">
                          {member.role}
                        </p>
                        <TinaRichText content={member.descp} className="text-sm text-gray-600 leading-relaxed" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-30"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-30"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
