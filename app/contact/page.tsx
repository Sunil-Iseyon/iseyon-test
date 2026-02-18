import { ContactClient } from '@/components/contact-client'
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | iSeyon Analytics - Get in Touch',
  description: 'Contact iSeyon Analytics for AI-powered business intelligence solutions. Request a demo, book a consultation, or get answers to your data analytics questions. Available in US and India.',
  keywords: ['contact iSeyon Analytics', 'request demo', 'business intelligence consultation', 'AI analytics support', 'data solutions inquiry', 'BI consulting'],
  authors: [{ name: 'iSeyon Analytics Team', url: 'https://iseyon-analytics-v0.vercel.app/team' }],
  publisher: 'iSeyon Analytics',
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
    languages: {
      'en': 'https://iseyon-analytics-v0.vercel.app/contact',
      'en-US': 'https://iseyon-analytics-v0.vercel.app/contact',
      'en-IN': 'https://iseyon-analytics-v0.vercel.app/contact',
      'x-default': 'https://iseyon-analytics-v0.vercel.app/contact',
    },
  },
  other: {
    // Dublin Core metadata
    'DC.title': 'Contact Us | iSeyon Analytics',
    'DC.description': 'Contact information and consultation request form for iSeyon Analytics',
    'DC.creator': 'iSeyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'iSeyon Analytics',
    'DC.rights': 'Copyright © 2024 iSeyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Business Intelligence Contact, AI Analytics Consultation',
    'DC.type': 'InteractiveResource',
    // License metadata
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'robots': 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  },
}

export default function ContactPage() {
  // ContactPage schema with enhanced E-E-A-T signals, speakable, and potentialAction
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ContactPage', 'WebPage'],
        '@id': 'https://iseyon-analytics-v0.vercel.app/contact#contactpage',
        name: 'Contact iSeyon Analytics',
        description: 'Contact information and consultation request form for iSeyon Analytics - AI-powered business intelligence solutions',
        url: 'https://iseyon-analytics-v0.vercel.app/contact',
        datePublished: '2024-01-15',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://iseyon-analytics-v0.vercel.app/#website',
          name: 'iSeyon Analytics',
          url: 'https://iseyon-analytics-v0.vercel.app',
        },
        author: {
          '@type': 'Organization',
          '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
          name: 'iSeyon Analytics',
          url: 'https://iseyon-analytics-v0.vercel.app',
          logo: {
            '@type': 'ImageObject',
            url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
          },
          foundingDate: '2020',
          knowsAbout: ['Business Intelligence', 'Data Analytics', 'AI Integration', 'Cloud Platforms'],
          areaServed: ['US', 'IN'],
          member: {
            '@type': 'OrganizationRole',
            member: {
              '@type': 'Person',
              name: 'iSeyon Analytics Team',
              jobTitle: 'Business Intelligence & AI Consultants',
              worksFor: {
                '@type': 'Organization',
                name: 'iSeyon Analytics'
              },
              knowsAbout: ['Artificial Intelligence', 'Business Intelligence', 'Data Science', 'Cloud Computing'],
              url: 'https://iseyon-analytics-v0.vercel.app/team'
            }
          }
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
        },
        speakable: getSpeakableSchema(['h1', 'h2', '.contact-info']),
        potentialAction: getPotentialActionSchema(standardActions),
        mainEntity: {
          '@type': 'Organization',
          '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
          name: 'iSeyon Analytics',
          url: 'https://iseyon-analytics-v0.vercel.app',
          logo: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
          foundingDate: '2020',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-651-503-9126',
            contactType: 'Customer Service',
            email: 'info@iSeyon.com',
            availableLanguage: ['English'],
            areaServed: ['US', 'IN'],
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'New York',
            addressRegion: 'NY',
            addressCountry: 'US',
          },
          sameAs: [
            'https://www.linkedin.com/company/iseyon-analytics',
          ],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://iseyon-analytics-v0.vercel.app',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact',
              item: 'https://iseyon-analytics-v0.vercel.app/contact',
            },
          ],
        },
        license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
    ],
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
