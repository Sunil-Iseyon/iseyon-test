'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, XCircle, Info } from 'lucide-react'

export function NewsletterStatusBanner() {
  const searchParams = useSearchParams()
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState<'confirmed' | 'already-confirmed' | 'error' | null>(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const newsletterStatus = searchParams.get('newsletter')
    const errorMessage = searchParams.get('message')

    if (newsletterStatus) {
      setStatus(newsletterStatus as any)
      setMessage(errorMessage || '')
      setShow(true)

      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setShow(false)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [searchParams])

  if (!show || !status) return null

  const getStatusConfig = () => {
    switch (status) {
      case 'confirmed':
        return {
          icon: CheckCircle,
          color: 'bg-green-50 border-green-200 text-green-800',
          iconColor: 'text-green-600',
          title: '🎉 Subscription Confirmed!',
          description: 'Thank you for subscribing to our newsletter. You\'ll start receiving our latest insights soon.'
        }
      case 'already-confirmed':
        return {
          icon: Info,
          color: 'bg-blue-50 border-blue-200 text-blue-800',
          iconColor: 'text-blue-600',
          title: 'Already Subscribed',
          description: 'You\'re already subscribed to our newsletter. No further action needed!'
        }
      case 'error':
        return {
          icon: XCircle,
          color: 'bg-red-50 border-red-200 text-red-800',
          iconColor: 'text-red-600',
          title: 'Subscription Error',
          description: message || 'We couldn\'t confirm your subscription. Please try again or contact support.'
        }
      default:
        return null
    }
  }

  const config = getStatusConfig()
  if (!config) return null

  const Icon = config.icon

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className={`rounded-lg border-2 p-4 shadow-lg ${config.color}`}>
        <div className="flex items-start gap-3">
          <Icon className={`h-6 w-6 flex-shrink-0 ${config.iconColor}`} />
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-1">{config.title}</h3>
            <p className="text-sm opacity-90">{config.description}</p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <XCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
