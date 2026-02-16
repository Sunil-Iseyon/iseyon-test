import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { NewProject } from '@/components/new-project'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BannerSection } from '@/components/banner-section'
import { PartnersSlider } from '@/components/partners-slider'
import { FAQSchema } from '@/components/faq-schema'
import client from "@/lib/tina-local-client";
import type { Metadata } from 'next'

async function getHomeData() {
  const heroResponse = await client.queries.hero({ relativePath: "main.json" });
  const serviceContentResponse = await client.queries.serviceContentConnection();
  const testimonialsResponse = await client.queries.testimonialsConnection();
  const partnersResponse = await client.queries.partnersConnection();
  const bannerResponse = await client.queries.banner({ relativePath: "main.json" });
  const projectResponse = await client.queries.project({ relativePath: "main.json" });
  const founderMessagesResponse = await client.queries.founderMessagesConnection();

  // Filter for services that should show on home page and sort by modification date
  const allServiceContent = serviceContentResponse.data.serviceContentConnection.edges?.map(edge => ({
    ...edge?.node,
    _sys: edge?.node?._sys
  })) || [];
  
  const homePageServices = allServiceContent
    .filter(service => service.showOnHomePage === true)
    .sort((a, b) => {
      // Sort by modification date (newest first)
      const dateA = new Date(a._sys?.lastModifiedAt || a._sys?.createdAt || 0);
      const dateB = new Date(b._sys?.lastModifiedAt || b._sys?.createdAt || 0);
      return dateB.getTime() - dateA.getTime();
    });

  return {
    hero: heroResponse.data.hero,
    services: homePageServices,
    testimonials: testimonialsResponse.data.testimonialsConnection.edges?.map(edge => edge?.node) || [],
    partners: partnersResponse.data.partnersConnection.edges?.map(edge => edge?.node) || [],
    banner: bannerResponse.data.banner,
    project: projectResponse.data.project,
    founderMessages: founderMessagesResponse.data.founderMessagesConnection.edges?.map(edge => edge?.node) || [],
  };
}

export const metadata: Metadata = {
  title: 'iSeyon Analytics | AI-Powered Business Intelligence & Data Analytics Solutions',
  description: 'Transform your business with cutting-edge AI-powered business intelligence and data analytics solutions. Expert BI consulting, cloud platforms, and AI integration services.',
  keywords: ['AI business intelligence', 'data analytics solutions', 'BI consulting', 'Power BI services', 'Snowflake consulting', 'Databricks', 'AI integration', 'business analytics'],
  openGraph: {
    title: 'iSeyon Analytics | AI-Powered Business Intelligence Solutions',
    description: 'Transform your business with AI-powered analytics. Expert BI consulting, cloud platforms, and data intelligence solutions.',
    url: 'https://iseyon-analytics-v0.vercel.app',
    siteName: 'iSeyon Analytics',
    type: 'website',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'iSeyon Analytics - AI-Powered Business Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iSeyon Analytics | AI-Powered Business Intelligence',
    description: 'Transform your business with AI-powered analytics and data intelligence solutions.',
    images: ['/iseyon.webp'],
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app',
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

export default async function Home() {
  const data = await getHomeData();

  // Organization schema for home page
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iSeyon Analytics',
    url: 'https://iseyon-analytics-v0.vercel.app',
    logo: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
    description: 'AI-Powered Business Intelligence and Data Analytics Solutions',
    foundingDate: '2020',
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
    sameAs: [
      'https://iseyon-analytics-v0.vercel.app/team',
      'https://iseyon-analytics-v0.vercel.app/vision',
      'https://iseyon-analytics-v0.vercel.app/contact',
    ],
    areaServed: ['US', 'IN'],
    serviceType: [
      'Business Intelligence Consulting',
      'AI Integration Services',
      'Data Analytics Solutions',
      'Cloud Platform Consulting',
    ],
  };

  // WebSite schema for search box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'iSeyon Analytics',
    url: 'https://iseyon-analytics-v0.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://iseyon-analytics-v0.vercel.app/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // FAQ data
  const faqs = [
    {
      question: 'What is iSeyon Analytics and what services do you offer?',
      answer: 'iSeyon Analytics is an AI-powered business intelligence consultancy specializing in data analytics, cloud platforms (Snowflake, Databricks, Palantir), BI tools (Power BI, Tableau), and AI integration services. We help businesses transform their data into actionable insights.',
    },
    {
      question: 'How does AI-powered business intelligence differ from traditional BI?',
      answer: 'AI-powered BI leverages machine learning and artificial intelligence to automate data analysis, predict trends, and provide proactive insights. Unlike traditional BI which relies on historical reporting, AI-powered solutions can identify patterns, anomalies, and opportunities in real-time, enabling faster and smarter decision-making.',
    },
    {
      question: 'Which industries does iSeyon Analytics serve?',
      answer: 'We serve multiple industries including Finance, Healthcare, Retail, Manufacturing, Technology, and more. Our solutions are customizable to meet the specific needs of any data-driven organization.',
    },
    {
      question: 'What cloud platforms do you specialize in?',
      answer: 'We specialize in leading cloud data platforms including Snowflake, Databricks, Palantir, Anaplan, Azure, and AWS. Our team has extensive experience in implementing, optimizing, and managing these platforms for enterprise clients.',
    },
    {
      question: 'How can I get started with iSeyon Analytics?',
      answer: 'Getting started is easy! Contact us through our contact form or call us at +1-651-503-9126. Our team will assess your needs and create a customized solution that aligns with your business goals.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <main className="min-h-screen bg-white snap-y snap-proximity">
        <Hero data={data.hero as any} founderMessages={data.founderMessages as any} />
        <ServicesSection services={data.services as any} />
        <NewProject data={data.project as any} />
        <TestimonialsSection testimonials={data.testimonials as any} />
        <BannerSection data={data.banner as any} />
        <PartnersSlider partners={data.partners as any} />
      </main>
    </>
  )
}
