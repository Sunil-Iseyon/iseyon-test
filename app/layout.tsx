import React from "react"
import type { Metadata } from 'next'
import { Sansation, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
  title: 'iSeyon Analytics | AI-Powered Business Intelligence',
  description: 'Transform your business with AI-powered analytics and intelligence solutions',
  icons: {
    icon: [
      {
        url: '/iseyon.webp',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${open_Sans.variable} ${sansation.variable}`}>
      
      <body className="antialiased" style={{ fontFamily: 'var(--font-open-sans)' }}>
        <Header/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
