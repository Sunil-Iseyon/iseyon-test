'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(value)

  // Extract numeric part and suffix from value (e.g., "500+", "99.9%", "50M+")
  const parseValue = (val: string) => {
    // Handle percentages
    if (val.includes('%')) {
      const match = val.match(/^([\d.]+)%(.*)$/)
      if (match) {
        return {
          number: parseFloat(match[1]),
          suffix: '%' + (match[2] || ''),
          isPercent: true,
        }
      }
    }
    
    // Handle regular numbers with suffixes
    const match = val.match(/^([\d.]+)(.*)$/)
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2],
        isPercent: false,
      }
    }
    
    return { number: 0, suffix: val, isPercent: false }
  }

  const { number, suffix, isPercent } = parseValue(value)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(number)
    }
  }, [isInView, motionValue, number])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      let formattedNumber: string
      
      if (isPercent) {
        // For percentages, preserve one decimal place
        formattedNumber = latest.toFixed(1)
      } else if (number >= 1000000) {
        // For millions, show one decimal place
        formattedNumber = (latest / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
        // Don't add suffix here as it's included in 'M'
        setDisplayValue(formattedNumber + suffix.replace('M', ''))
        return
      } else if (number >= 1000) {
        // For thousands, round to nearest whole number
        formattedNumber = Math.round(latest).toString()
      } else if (number % 1 !== 0) {
        // For decimals, preserve one decimal place
        formattedNumber = latest.toFixed(1)
      } else {
        formattedNumber = Math.round(latest).toString()
      }
      
      setDisplayValue(formattedNumber + suffix)
    })

    return () => unsubscribe()
  }, [springValue, number, suffix, isPercent])

  return (
    <motion.div
      ref={ref}
      className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-1 sm:mb-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {displayValue}
    </motion.div>
  )
}