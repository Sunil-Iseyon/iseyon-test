import type { Metadata } from 'next'
import { SymposiumClient } from '@/components/symposium-client'

export const metadata: Metadata = {
  title: 'AI Symposium Interest Poll | Rourkela, Odisha',
  description:
    'Help us decide the best month for the AI Agents Symposium in Rourkela, Odisha. Share your availability and AI topic interests to shape this one-day community event.',
  keywords: [
    'AI Symposium Rourkela',
    'AI Agents event Odisha',
    'AI conference India Q4 2026',
    'LLM workshop Rourkela',
    'AI event Odisha 2026',
    'community poll AI symposium',
    'Iseyon AI Symposium',
  ],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  publisher: 'Iseyon Analytics',
  openGraph: {
    title: 'AI Symposium Interest Poll | Rourkela, Odisha',
    description:
      "Help us decide the best month for the AI Agents Symposium. Share your preferred date and AI interests — we'll notify you when registrations open.",
    url: 'https://www.iseyon.com/symposium',
    siteName: 'Iseyon Analytics',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'AI Agents Symposium – Rourkela, Odisha, Q4 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Symposium Interest Poll | Rourkela, Odisha',
    description:
      'Help us choose the best month for the AI Agents Symposium in Rourkela. Share your availability and AI interests.',
    images: ['/iseyon.webp'],
  },
  alternates: {
    canonical: 'https://www.iseyon.com/symposium',
    languages: {
      en: 'https://www.iseyon.com/symposium',
      'en-IN': 'https://www.iseyon.com/symposium',
      'x-default': 'https://www.iseyon.com/symposium',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function SymposiumPage() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'AI Agents Symposium – Rourkela',
    description:
      'A full-day AI Agents Symposium in Rourkela, Odisha featuring keynotes, panels, live demos, and hands-on workshops. Date to be finalised based on community interest.',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    startDate: '2026-10-01',
    endDate: '2027-01-31',
    location: {
      '@type': 'Place',
      name: 'Rourkela',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rourkela',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Iseyon Analytics',
      url: 'https://www.iseyon.com',
    },
    url: 'https://www.iseyon.com/symposium',
    inLanguage: 'en-IN',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <SymposiumClient />
    </>
  )
}
