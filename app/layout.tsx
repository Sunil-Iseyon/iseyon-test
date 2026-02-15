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
  authors: [{ name: 'iSeyon Analytics Team' }],
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
        alt: 'iSeyon Analytics',
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
    google: 'your-google-verification-code', // Add your actual verification code
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
      
      <body className="antialiased" style={{ fontFamily: 'var(--font-open-sans)' }}>
        <Suspense fallback={null}>
          <RouteProgress />
        </Suspense>
        <Header servicesMenu={servicesMenu} />
        <Suspense fallback={null}>
          <NewsletterStatusBanner />
        </Suspense>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
