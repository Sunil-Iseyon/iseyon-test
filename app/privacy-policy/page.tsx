import client from '@/lib/tina-local-client'
import { PrivacyPolicyClient } from '@/components/privacy-policy-client'
import type { Metadata } from 'next'

async function getPrivacyPolicy() {
  const response = await client.queries.privacyPolicy({
    relativePath: 'privacy-policy.json'
  })
  return response.data.privacyPolicy
}

export const metadata: Metadata = {
  title: 'Privacy Policy — Data Protection & Privacy',
  description: 'Read the Iseyon Analytics Privacy Policy. Learn how we protect your personal data, handle information requests, and comply with GDPR and applicable data protection regulations.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'personal data', 'data privacy', 'Iseyon Analytics privacy', 'cookie policy'],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  publisher: 'Iseyon Analytics',
  openGraph: {
    title: 'Privacy Policy | Iseyon Analytics',
    description: 'Learn how Iseyon Analytics protects your personal data and complies with GDPR and applicable data protection regulations.',
    url: 'https://www.iseyon.com/privacy-policy',
    siteName: 'Iseyon Analytics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'Iseyon Analytics Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Iseyon Analytics',
    description: 'Learn how Iseyon Analytics protects your data and complies with privacy regulations.',
    images: ['/iseyon.webp'],
  },
  alternates: {
    canonical: 'https://www.iseyon.com/privacy-policy',
    languages: {
      'en': 'https://www.iseyon.com/privacy-policy',
      'en-US': 'https://www.iseyon.com/privacy-policy',
      'x-default': 'https://www.iseyon.com/privacy-policy',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  other: {
    'DC.title': 'Privacy Policy | Iseyon Analytics',
    'DC.description': 'Data protection and privacy policy for Iseyon Analytics',
    'DC.creator': 'Iseyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'Iseyon Analytics',
    'DC.rights': 'Copyright 2025 Iseyon Analytics.',
    'DC.subject': 'Privacy Policy, Data Protection, GDPR',
    'DC.type': 'Text',
  },
}

export default async function PrivacyPolicyPage() {
  const privacyPolicy = await getPrivacyPolicy()

  // Add WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    description: 'Iseyon Analytics privacy policy detailing data protection practices and compliance.',
    url: 'https://www.iseyon.com/privacy-policy',
    publisher: {
      '@type': 'Organization',
      name: 'Iseyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.iseyon.com/ISeyon.webp',
      },
    },
    datePublished: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.privacy-summary'],
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: 'https://www.iseyon.com/privacy-policy',
    },
    mentions: [
      { '@type': 'Thing', name: 'General Data Protection Regulation', alternateName: 'GDPR' },
      { '@type': 'Thing', name: 'Personal Data Protection' },
      { '@type': 'Thing', name: 'Data Privacy' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What personal data does Iseyon Analytics collect?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Iseyon Analytics collects your full name, email address, company name, and job title when provided via contact or newsletter forms. We also collect usage data via analytics cookies. We do not collect sensitive data such as health information or financial account details.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Iseyon Analytics GDPR compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Iseyon Analytics complies with the General Data Protection Regulation (GDPR), the UK GDPR, and the California Consumer Privacy Act (CCPA) where applicable. We process personal data on lawful bases and honour all data subject rights including access, rectification, erasure, portability, and objection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I request deletion of my personal data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can request deletion of your personal data by emailing privacy@iseyon.com. We will respond within 30 days in accordance with GDPR requirements and delete your data promptly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Iseyon Analytics share or sell personal data to third parties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Iseyon Analytics does not sell your personal data. We may share data with trusted service providers who process it on our behalf under strict data processing agreements. We do not share data for third-party marketing purposes.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Static privacy confidence section — confidence_signals + voice_optimization */}
      <section className="bg-blue-50 border-b border-blue-100 py-4 privacy-summary pt-20" aria-label="Privacy policy summary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-700 leading-relaxed text-center">
            <strong>Iseyon Analytics Privacy Policy</strong> — Iseyon Analytics complies with the{' '}
            <abbr title="General Data Protection Regulation">GDPR</abbr>, <abbr title="UK General Data Protection Regulation">UK GDPR</abbr>,
            and <abbr title="California Consumer Privacy Act">CCPA</abbr>. According to the{' '}
            <a href="https://www.cisco.com/c/dam/en/us/products/collateral/security/cybersecurity-series-2021-cps.pdf" target="_blank" rel="noopener nofollow" className="text-blue-600 hover:underline">
              Cisco 2021 Consumer Privacy Survey
            </a>
            , <strong>86% of consumers care about data privacy</strong> and want more control over how their
            data is used. We honour all data subject rights including access, rectification, erasure, and portability.
            {' '}<time dateTime="2025-01-01">Last reviewed January 2025</time>.
          </p>
        </div>
      </section>
      <PrivacyPolicyClient content={privacyPolicy.content as any} />
    </>
  )
}
