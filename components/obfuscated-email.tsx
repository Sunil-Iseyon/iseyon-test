'use client'

import { useEffect, useState } from 'react'

interface ObfuscatedEmailProps {
  /** Local part of the email address (before @) */
  u: string
  /** Domain part of the email address (after @) */
  d: string
  className?: string
}

/**
 * Renders an email address as a mailto link assembled entirely in the browser.
 * The server-rendered HTML contains no email address, protecting against
 * spam bots and email harvesting crawlers.
 */
export function ObfuscatedEmail({ u, d, className }: ObfuscatedEmailProps) {
  const [addr, setAddr] = useState('')

  useEffect(() => {
    // Assembled only on the client — never present in server-rendered HTML
    setAddr(`${u}\u0040${d}`)
  }, [u, d])

  if (!addr) {
    // Placeholder with no email data while JS hydrates
    return <span className={className} aria-label="Email address" />
  }

  return (
    <a href={`mailto:${addr}`} className={className}>
      {addr}
    </a>
  )
}
