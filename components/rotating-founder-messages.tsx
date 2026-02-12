'use client'

import { useState, useEffect } from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

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
}

export function RotatingFounderMessages({ 
  messages, 
  interval = 10000 
}: RotatingFounderMessagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (messages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, interval)

    return () => clearInterval(timer)
  }, [messages.length, interval])

  if (!messages || messages.length === 0) {
    return null
  }

  const currentMessage = messages[currentIndex]

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center gap-2 sm:gap-3">
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
      <div className="text-gray-700 text-xs sm:text-sm leading-relaxed prose prose-sm sm:prose prose-p:my-0 max-w-full lg:max-w-5xl">
        <TinaMarkdown content={currentMessage.message} />
      </div>

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
    </div>
  )
}
