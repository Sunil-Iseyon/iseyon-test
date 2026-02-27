import React from "react"
import { Suspense } from "react"
import type { Metadata } from 'next'
import { Sansation, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterStatusBanner } from "@/components/newsletter-status-banner"
import { RouteProgress } from "@/components/route-progress"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getServicesForNavigation } from "@/lib/tina-queries"

const open_Sans = Open_Sans({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-open-sans'
});

const sansation = Sansation({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-sansation'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iseyon.com'),
  title: {
    default: 'Iseyon Analytics | AI-Powered Business Intelligence',
    template: '%s | Iseyon Analytics',
  },
  description: 'Transform your business with AI-powered analytics and intelligence solutions. Expert BI consulting, cloud platforms, and data-driven insights.',
  keywords: ['AI business intelligence', 'data analytics', 'BI consulting', 'Power BI', 'Snowflake', 'Databricks', 'business analytics', 'AI solutions'],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  creator: 'Iseyon Analytics',
  publisher: 'Iseyon Analytics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iseyon.com',
    siteName: 'Iseyon Analytics',
    title: 'Iseyon Analytics | AI-Powered Business Intelligence',
    description: 'Transform your business with AI-powered analytics and intelligence solutions',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'Iseyon Analytics company logo providing AI-powered business intelligence and data analytics solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iseyon Analytics | AI-Powered Business Intelligence',
    description: 'Transform your business with AI-powered analytics and intelligence solutions',
    images: ['/iseyon-logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://iseyon.com',
    languages: {
      'en': 'https://iseyon.com',
      'x-default': 'https://iseyon.com',
    },
    types: {
      'application/rss+xml': 'https://iseyon.com/feed.xml',
    },
  },
  other: {
    'DC.title': 'Iseyon Analytics | AI-Powered Business Intelligence',
    'DC.creator': 'Iseyon Analytics',
    'DC.description': 'Transform your business with AI-powered analytics and intelligence solutions',
    'DC.publisher': 'Iseyon Analytics',
    'DC.language': 'en',
    'DC.rights': 'Copyright iSeyon Analytics. All rights reserved.',
    'license': 'https://creativecommons.org/licenses/by/4.0/',
    'rights': 'Copyright iSeyon Analytics. Reuse permitted under CC BY 4.0.',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch services dynamically for navigation
  const servicesMenu = await getServicesForNavigation();

  // Global Organization schema for E-E-A-T
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://iseyon.com/#organization',
    name: 'Iseyon Analytics',
    alternateName: ['iSeyon Analytics', 'Iseyon', 'iSeyon'],
    legalName: 'Iseyon Analytics',
    url: 'https://iseyon.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://iseyon.com/iseyon.webp',
      width: 250,
      height: 60,
    },
    foundingDate: '2020',
    founders: [
      {
        '@type': 'Person',
        name: 'Srinivas Reddy Karri',
        jobTitle: 'Founder & CEO',
        sameAs: ['https://www.iseyon.com/our-team', 'https://www.linkedin.com/company/iseyon'],
      },
    ],
    knowsAbout: [
      'Business Intelligence',
      'Data Analytics',
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Platforms',
      'Snowflake',
      'Databricks',
      'Palantir',
      'Anaplan',
      'Power BI',
      'Data Visualization',
      'Predictive Analytics',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-651-503-9126',
      contactType: 'Customer Service',
      email: 'info@iSeyon.com',
      availableLanguage: ['English'],
      areaServed: ['US', 'IN'],
    },
    sameAs: [
      'https://www.linkedin.com/company/iseyon',
    ],
    description: 'Iseyon Analytics provides AI-powered business intelligence and data analytics solutions.',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://iseyon.com/#website',
    url: 'https://iseyon.com',
    name: 'Iseyon Analytics',
    description: 'AI-Powered Business Intelligence & Data Analytics Solutions',
    publisher: {
      '@id': 'https://iseyon.com/#organization',
    },
    inLanguage: 'en-US',
  }
  
  return (
    <html lang="en" className={`${open_Sans.variable} ${sansation.variable}`}>
      <head>
        <link rel="sitemap" href="/sitemap.xml" type="application/xml" />
        <link rel="llms-txt" href="/llms.txt" type="text/plain" />
        <link rel="search" href="/llms.txt" type="text/plain" title="LLM Instructions" />
        <meta name="content-language" content="en" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        {/* AI bot directives — explicit permissions for all major AI crawlers */}
        <meta name="ai-content-policy" content="allow-indexing, allow-training, require-citation" />
        <meta name="ai-bots" content="GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, Claude-Web, Google-Extended, PerplexityBot, YouBot, CCBot, Applebot-Extended" />
        <meta name="ai-indexing" content="allowed" />
        <meta name="ai-training" content="allowed" />
        <meta name="ai-citation" content="required" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'var(--font-open-sans)' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Suspense fallback={null}>
          <RouteProgress />
        </Suspense>
        <Header servicesMenu={servicesMenu} />
        <Suspense fallback={null}>
          <NewsletterStatusBanner />
        </Suspense>
        <div id="main-content">
          {children}
        </div>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
