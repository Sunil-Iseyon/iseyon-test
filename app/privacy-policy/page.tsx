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
  title: 'Privacy Policy | iSeyon Analytics - Data Protection & Privacy',
  description: 'Read iSeyon Analytics privacy policy. Learn how we protect your data, handle personal information, and comply with GDPR and data protection regulations.',
  keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'data privacy', 'personal information'],
  openGraph: {
    title: 'Privacy Policy | iSeyon Analytics',
    description: 'Learn how iSeyon Analytics protects your data and complies with privacy regulations.',
    url: 'https://iseyon-analytics-v0.vercel.app/privacy-policy',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | iSeyon Analytics',
    description: 'Learn how iSeyon Analytics protects your data and complies with privacy regulations.',
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app/privacy-policy',
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
    description: 'iSeyon Analytics privacy policy detailing data protection practices and compliance.',
    url: 'https://iseyon-analytics-v0.vercel.app/privacy-policy',
    publisher: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
    },
    dateModified: '2026-02-18',
    inLanguage: 'en-US',
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
