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
  title: 'Privacy Policy | Iseyon Analytics - Data Protection & Privacy',
  description: 'Read Iseyon Analytics privacy policy. Learn how we protect your data, handle personal information, and comply with GDPR and data protection regulations.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'data privacy', 'personal information'],
  openGraph: {
    title: 'Privacy Policy | Iseyon Analytics',
    description: 'Learn how Iseyon Analytics protects your data and complies with privacy regulations.',
    url: 'https://www.iseyon.com/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Iseyon Analytics',
    description: 'Learn how Iseyon Analytics protects your data and complies with privacy regulations.',
  },
  alternates: {
    canonical: 'https://www.iseyon.com/privacy-policy',
    languages: {
      'en': 'https://www.iseyon.com/privacy-policy',
      'x-default': 'https://www.iseyon.com/privacy-policy',
    },
  },
  robots: {
    index: true,
    follow: true,
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
        url: 'https://www.iseyon.com/iseyon.webp',
      },
    },
    datePublished: '2025-01-01',
    dateModified: '2026-02-18',
    inLanguage: 'en-US',
    mentions: [
      { '@type': 'Thing', name: 'General Data Protection Regulation', alternateName: 'GDPR' },
      { '@type': 'Thing', name: 'Personal Data Protection' },
      { '@type': 'Thing', name: 'Data Privacy' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <PrivacyPolicyClient content={privacyPolicy.content as any} />
    </>
  )
}
