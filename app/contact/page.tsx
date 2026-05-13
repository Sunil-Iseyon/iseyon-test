import { ContactClient } from '@/components/contact-client'
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata'
import { PageCitations, contactCitations } from '@/components/page-citations'
import { FAQSchema } from '@/components/faq-schema'
import { contactFAQs } from '@/lib/faq-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Iseyon Analytics - Get in Touch',
  description: 'Contact Us | Get in Touch with Iseyon Analytics — request a demo, book a free AI & BI consultation, or get pricing. Email info@iSeyon.com or call (651) 503-9126. Typically respond within 24 hours.',
  keywords: ['contact Iseyon Analytics', 'request demo', 'business intelligence consultation', 'AI analytics support', 'data solutions inquiry', 'BI consulting', 'data analytics contact'],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  publisher: 'Iseyon Analytics',
  openGraph: {
    title: 'Contact Us | Iseyon Analytics - AI-Powered BI Solutions',
    description: 'Contact Iseyon Analytics to request a demo or book a free consultation for AI-powered business intelligence, data analytics, and cloud platform solutions.',
    url: 'https://www.iseyon.com/contact',
    siteName: 'Iseyon Analytics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Iseyon Analytics - AI-Powered Business Intelligence Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Iseyon Analytics',
    description: 'Contact Iseyon Analytics for AI-powered business intelligence and data analytics solutions.',
    images: ['/iseyon.webp'],
  },
  alternates: {
    canonical: 'https://www.iseyon.com/contact',
    languages: {
      'en': 'https://www.iseyon.com/contact',
      'en-US': 'https://www.iseyon.com/contact',
      'en-IN': 'https://www.iseyon.com/contact',
      'x-default': 'https://www.iseyon.com/contact',
    },
  },
  other: {
    'DC.title': 'Contact Us | iSeyon Analytics',
    'DC.description': 'Contact information and consultation details for iSeyon Analytics',
    'DC.creator': 'iSeyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'iSeyon Analytics',
    'DC.rights': 'Copyright © 2024 iSeyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Business Intelligence Contact, AI Analytics Consultation',
    'DC.type': 'InteractiveResource',
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
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

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ContactPage', 'WebPage'],
        '@id': 'https://www.iseyon.com/contact#contactpage',
        name: 'Contact iSeyon Analytics',
        description: 'Contact information for iSeyon Analytics - AI-powered business intelligence solutions',
        url: 'https://www.iseyon.com/contact',
        datePublished: '2024-01-15',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'en-US',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.iseyon.com/#website',
          name: 'iSeyon Analytics',
          url: 'https://www.iseyon.com',
        },
        author: {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
          name: 'iSeyon Analytics',
          url: 'https://www.iseyon.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.iseyon.com/ISeyon.webp',
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
              url: 'https://www.iseyon.com/our-team'
            }
          }
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
        },
        speakable: getSpeakableSchema(['h1', 'h2', 'h3', 'blockquote']),
        potentialAction: getPotentialActionSchema(standardActions),
        mainEntity: {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
          name: 'iSeyon Analytics',
          url: 'https://www.iseyon.com',
          logo: 'https://www.iseyon.com/ISeyon.webp',
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
            'https://www.linkedin.com/company/iseyon',
          ],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.iseyon.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact',
              item: 'https://www.iseyon.com/contact',
            },
          ],
        },
        license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
    ],
  }

  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://www.iseyon.com/contact#termset',
    name: 'Business Intelligence Consultation Terminology',
    hasDefinedTerm: [
      {
        '@type': 'DefinedTerm',
        name: 'Business Intelligence Consultation',
        termCode: 'BI-CONSULT',
        description: 'A strategic session with certified BI experts to assess enterprise data needs and recommend high-impact analytics solutions.',
        url: 'https://www.iseyon.com/contact',
      },
      {
        '@type': 'DefinedTerm',
        name: 'AI-Powered Analytics',
        termCode: 'AI-ANALYTICS',
        description: 'Analytics workflows enhanced by machine learning models that automate pattern detection, forecasting, and insight generation.',
        url: 'https://www.iseyon.com/contact',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://www.iseyon.com/contact#article',
          headline: 'Contact Iseyon Analytics — Get in Touch',
          description: 'Get in touch with Iseyon Analytics to request a demo, book a free consultation, or inquire about AI-powered business intelligence and data analytics solutions.',
          url: 'https://www.iseyon.com/contact',
          image: 'https://www.iseyon.com/iseyon.webp',
          datePublished: '2024-01-15',
          dateModified: new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          author: {
            '@type': 'Person',
            name: 'Chandan Pandey',
            jobTitle: 'Founder & CEO',
            url: 'https://www.iseyon.com/our-team',
            worksFor: {
              '@type': 'Organization',
              name: 'Iseyon Analytics',
              url: 'https://www.iseyon.com',
            },
          },
          publisher: {
            '@type': 'Organization',
            name: 'Iseyon Analytics',
            url: 'https://www.iseyon.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.iseyon.com/iseyon.webp',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.iseyon.com/contact',
          },
          keywords: 'contact Iseyon Analytics, AI BI consultation, request demo, data analytics inquiry',
          potentialAction: getPotentialActionSchema(standardActions),
          speakable: getSpeakableSchema(['h1', 'h2', 'h3', 'blockquote']),
        }) }}
      />

      <ContactClient />
      <FAQSchema faqs={contactFAQs} title="Frequently Asked Questions" />
      {/* <PageCitations citations={contactCitations} title="BI/AI Success Stories &amp; Research" /> */}
    </>
  )
}
