'use client'

import { useState, useEffect } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { AnimatePresence, motion } from 'framer-motion'

interface FounderMessage {
  name: string
  role: string
  initials: string
  avatar?: string
  message: any
}

interface RotatingFounderMessagesProps {
  messages: FounderMessage[]
  interval?: number
  delay?: number
}

export function RotatingFounderMessages({ 
  messages, 
  interval = 10000,
  delay = 1500
}: RotatingFounderMessagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Show messages after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (messages.length <= 1 || !isVisible) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, interval)

    return () => clearInterval(timer)
  }, [messages.length, interval, isVisible])

  if (!messages || messages.length === 0) {
    return null
  }

  const currentMessage = messages[currentIndex]

  return (
    <motion.div
      className="space-y-3 sm:space-y-4"
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* initial={false} prevents the enter-animation on first mount —
          the outer motion.div already handles the fade-in, so this only
          animates when the message actually rotates */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            {/* Avatar */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-400 border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0">
              {currentMessage.initials}
            </div>
            
            {/* Name and Role */}
            <div>
              <p className="font-semibold text-slate-900 text-sm sm:text-base">{currentMessage.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{currentMessage.role}</p>
            </div>
          </div>

          {/* Message */}
          <div className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed prose prose-sm sm:prose prose-p:my-0 max-w-[54rem]">
            {typeof currentMessage.message === 'string' ? (
              <p>{currentMessage.message}</p>
            ) : (
              <TinaMarkdown content={currentMessage.message} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      {messages.length > 1 && (
        <div className="flex gap-1.5 sm:gap-2 pt-1 sm:pt-2">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-5 sm:w-6 bg-teal-500' 
                  : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to message ${index + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
