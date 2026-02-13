'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, TrendingUp, Shield, Brain, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Particles } from '@/components/particles'

const iconMap = {
  Zap,
  TrendingUp,
  Shield,
  Brain,
};

interface ProjectData {
  name: string;
  tagline: string;
  logo: string;
  description: string;
  featuredImage: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

interface NewProjectProps {
  data: ProjectData;
}

export function NewProject({ data }: NewProjectProps) {
  return (
    <section className="relative pt-10 md:pt-20 snap-start">
      <div className="">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Logo */}
          <Link href="/" className="mx-auto flex items-center justify-center gap-2 font-bold text-xl text-primary">
            <img src={data.logo} alt={data.name} className="h-28 w-60 mx-auto" />
          </Link>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl  font-medium max-w-3xl mx-auto"
          >
            {data.tagline}
          </motion.p>
        </motion.div>

        {/* Project details */}
        <div className="w-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Animated Background */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Particles */}
          <Particles />
          
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background */}
            <div className="absolute inset-0 bg-primary -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 py-5">
              {/* Featured Image */}
              <div className="h-64 lg:h-full flex items-center justify-center relative overflow-hidden p-4 lg:p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={data.featuredImage}
                    alt={data.name}
                    width={500}
                    height={500}
                    className="object-contain w-full h-full max-w-md hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>                

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold">
                      Featured Project
                    </span>
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-3 leading-tight text-white"
                  >
                    {data.name}
                  </motion.h3>

                    {/* <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="text-foreground/70 mb-6 leading-relaxed text-sm"
                    >
                      Unlock smarter decisions with cutting-edge AI tools for forecasting, automation, and data intelligence, crafted to streamline your operations, supercharge efficiency and drive meaningful growth.

                    </motion.p> */}

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {data.features.map((feature, index) => {
                      const Icon = iconMap[feature.icon as keyof typeof iconMap] || Zap;
                      return (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.0 + (index * 0.2) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <Icon className="w-5 h-5 text-white mt-0.5 shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white">{feature.title}</p>
                            <p className="text-xs text-white/80">{feature.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row gap-3">
                    <Link href={data.ctaLink} target='_blank'>
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        viewport={{ once: true }}
                        // whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-4  py-2.5 border-2 border-white text-white rounded-lg font-semibold sm:text-sm  hover:bg-white/10 hover:border-white/50 flex items-center justify-center gap-2 text-xs  whitespace-nowrap transition-all"
                      >
                        {data.ctaText}
                        <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact">
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        viewport={{ once: true }}
                        // whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--secondary), 0.1)", boxShadow: "0 20px 40px rgba(var(--secondary), 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2  text-white bg-secondary rounded-lg font-semibold text-xs sm:text-sm  transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap"
                      >
                        <Mail size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
