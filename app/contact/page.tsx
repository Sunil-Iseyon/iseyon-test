import { ContactClient } from '@/components/contact-client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | iSeyon Analytics - Get in Touch',
  description: 'Contact iSeyon Analytics for AI-powered business intelligence solutions. Request a demo, book a consultation, or get answers to your data analytics questions.',
  keywords: ['contact iSeyon Analytics', 'request demo', 'business intelligence consultation', 'AI analytics support', 'data solutions inquiry'],
  openGraph: {
    title: 'Contact Us | iSeyon Analytics',
    description: 'Get in touch with iSeyon Analytics for AI-powered business intelligence solutions.',
    url: 'https://iseyon-analytics-v0.vercel.app/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | iSeyon Analytics',
    description: 'Get in touch with iSeyon Analytics for AI-powered business intelligence solutions.',
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app/contact',
  },
}

export default function ContactPage() {
  // ContactPage schema
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact iSeyon Analytics',
    description: 'Contact information and form for iSeyon Analytics',
    url: 'https://iseyon-analytics-v0.vercel.app/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      url: 'https://iseyon-analytics-v0.vercel.app',
      logo: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-651-503-9126',
        contactType: 'Customer Service',
        email: 'info@iSeyon.com',
        availableLanguage: ['English'],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New York',
        addressRegion: 'NY',
        addressCountry: 'US',
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  )
}
