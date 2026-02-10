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

  // Extract numeric part and suffix from value (e.g., "500+" -> number: 500, suffix: "+")
  const parseValue = (val: string) => {
    const match = val.match(/^([\d.]+)(.*)$/)
    if (match) {
      return {
        number: parseFloat(match[1]),
        suffix: match[2],
      }
    }
    return { number: 0, suffix: val }
  }

  const { number, suffix } = parseValue(value)
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
      // Format the number appropriately
      let formattedNumber: string
      if (number >= 1000000) {
        // For millions, show one decimal place
        formattedNumber = (latest / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
      } else if (number >= 1000) {
        // For thousands, round to nearest whole number
        formattedNumber = Math.round(latest).toString()
      } else if (number % 1 !== 0) {
        // For decimals (like 99.9), preserve one decimal place
        formattedNumber = latest.toFixed(1)
      } else {
        formattedNumber = Math.round(latest).toString()
      }
      
      setDisplayValue(formattedNumber + suffix)
    })

    return () => unsubscribe()
  }, [springValue, number, suffix])

  return (
    <motion.div
      ref={ref}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {displayValue}
    </motion.div>
  )
}