'use client'

import React from "react"

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Rss } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: "Our Team", url: "/our-team" },
    { name: "Our Vision", url: "/our-vision" },
    { name: "Contact Us", url: "/contact" },
    { name: "Blog", url: "/blog" },
  ]
  const insights = [
    { label: 'Business Intelligence', href: '/insights/business-intelligence' },
    { label: 'Internal Applications', href: '/insights/internal-applications' },
    { label: 'Support for Communities', href: '/insights/support-communities' }
  ]

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.')
        setTimeout(() => setError(''), 5000)
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      setTimeout(() => setError(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white z-10">
          <img src="/iseyon-whiteLogo.webp" alt="Iseyon Analytics white logo representing Vision, Leadership and Consistency" className="h-20 w-45" />
        </Link>
            <p className=" text-sm">
              Transforming businesses through AI-powered analytics and data-driven intelligence solutions.
            </p>
          </motion.div>

          {/* Office Address */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-base md:text-lg">Office</h3>
            <div className="flex items-start gap-3 text-xs md:text-sm">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
              <div>
                <p className="leading-relaxed">New York l New Jersey | Minnesota l California l Washington l Bangalore</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm mt-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <p>(651) 503-9126</p>
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <p>info@iSeyon.com</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-base md:text-lg">Company</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="relative inline-block after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-background after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
           <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-base md:text-lg">Insights</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              {insights.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="relative inline-block after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-background after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          {/* <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-base md:text-lg">Stay Updated</h3>
            <p className="text-xs md:text-sm">
              Subscribe to get the latest updates on AI and analytics.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-3 md:px-4 py-2 rounded bg-white text-black placeholder-muted-foreground border border-border focus:border-accent focus:outline-none transition-colors text-xs md:text-sm disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-3 md:px-4 py-2 bg-white text-primary hover:text-white rounded font-medium hover:bg-transparent hover:border hover:border-white transition-colors text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-xs md:text-sm"
                >
                  ✓ Thank you for subscribing! Check your email.
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-xs md:text-sm"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div> */}
        </div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="border-t border-slate-700 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/iseyon"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>

          <div className="text-center md:text-right text-xs md:text-sm">
            <p className="inline">&copy; 2026 Iseyon Analytics. All rights reserved. | </p>
            <Link href="/privacy-policy" target='_blank'
            className="relative inline-block after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-background after:transition-all after:duration-300 hover:after:w-full">
             Privacy Policy</Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
