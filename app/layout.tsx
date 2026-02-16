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
  metadataBase: new URL('https://iseyon-analytics-v0.vercel.app'),
  title: {
    default: 'iSeyon Analytics | AI-Powered Business Intelligence',
    template: '%s | iSeyon Analytics',
  },
  description: 'Transform your business with AI-powered analytics and intelligence solutions. Expert BI consulting, cloud platforms, and data-driven insights.',
  keywords: ['AI business intelligence', 'data analytics', 'BI consulting', 'Power BI', 'Snowflake', 'Databricks', 'business analytics', 'AI solutions'],
  authors: [{ name: 'iSeyon Analytics Team', url: 'https://iseyon-analytics-v0.vercel.app/team' }],
  creator: 'iSeyon Analytics',
  publisher: 'iSeyon Analytics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/iseyon.webp',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iseyon-analytics-v0.vercel.app',
    siteName: 'iSeyon Analytics',
    title: 'iSeyon Analytics | AI-Powered Business Intelligence',
    description: 'Transform your business with AI-powered analytics and intelligence solutions',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'iSeyon Analytics company logo providing AI-powered business intelligence and data analytics solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iSeyon Analytics | AI-Powered Business Intelligence',
    description: 'Transform your business with AI-powered analytics and intelligence solutions',
    images: ['/iseyon.webp'],
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
    canonical: 'https://iseyon-analytics-v0.vercel.app',
    languages: {
      'en': 'https://iseyon-analytics-v0.vercel.app',
      'x-default': 'https://iseyon-analytics-v0.vercel.app',
    },
    types: {
      'application/rss+xml': 'https://iseyon-analytics-v0.vercel.app/feed.xml',
    },
  },
  other: {
    'DC.title': 'iSeyon Analytics | AI-Powered Business Intelligence',
    'DC.creator': 'iSeyon Analytics',
    'DC.description': 'Transform your business with AI-powered analytics and intelligence solutions',
    'DC.publisher': 'iSeyon Analytics',
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
  
  return (
    <html lang="en" className={`${open_Sans.variable} ${sansation.variable}`}>
      <head>
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="search" href="/llms.txt" type="text/plain" title="LLM Instructions" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'var(--font-open-sans)' }}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
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
