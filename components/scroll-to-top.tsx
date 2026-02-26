'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * ScrollToTop — instantly scrolls the window to (0,0) on every pathname change.
 *
 * This is required so that:
 *  1. Every new page opens at the top (expected UX).
 *  2. `whileInView` / `viewport={{ once: true }}` Framer Motion animations
 *     start from an un-scrolled position, so reveal effects are visible as
 *     the user scrolls down rather than firing silently above the fold.
 *
 * Placed inside a <Suspense> wrapper in the root layout to avoid blocking
 * the initial render while the pathname is resolved.
 */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Use 'instant' so the page jumps without a visible scroll animation —
    // the route transition itself is the UX signifier, not a smooth scroll.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
