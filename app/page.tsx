import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { NewProject } from '@/components/new-project'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BannerSection } from '@/components/banner-section'
import { PartnersSlider } from '@/components/partners-slider'
import { IndustryStats, ExpertQuotes, ProprietaryResearch, AuthoritativeCitations } from '@/components/seo-enhancements'
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
  description: '78% of enterprises leverage AI for analytics. iSeyon Analytics delivers proven 5.6x ROI through AI-powered BI solutions, cloud platforms (Snowflake, Databricks, Palantir), and expert data analytics consulting. Transform your data into strategic insights.',
  keywords: [
    'AI business intelligence',
    'data analytics solutions',
    'BI consulting',
    'Power BI services',
    'Snowflake consulting',
    'Databricks',
    'AI integration',
    'business analytics',
    'predictive analytics',
    'data visualization',
    'cloud data platforms',
    'Palantir consulting',
    'Anaplan implementation',
    'enterprise analytics',
  ],
  openGraph: {
    title: 'iSeyon Analytics | AI-Powered Business Intelligence with 5.6x ROI',
    description: '78% of enterprises now use AI for analytics. Join industry leaders achieving 5.6x ROI with iSeyon\'s AI-powered BI and data analytics solutions.',
    url: 'https://iseyon-analytics-v0.vercel.app',
    siteName: 'iSeyon Analytics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'iSeyon Analytics - AI-Powered Business Intelligence',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iSeyon Analytics | AI-Powered BI with Proven 5.6x ROI',
    description: 'Transform your business with AI-powered analytics. 78% of enterprises now leverage AI for data-driven decisions.',
    images: ['/iseyon.webp'],
    creator: '@iSeyonAnalytics',
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app',
    languages: {
      'en': 'https://iseyon-analytics-v0.vercel.app',
      'en-US': 'https://iseyon-analytics-v0.vercel.app',
      'en-IN': 'https://iseyon-analytics-v0.vercel.app',
      'x-default': 'https://iseyon-analytics-v0.vercel.app',
    },
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
  authors: [{ name: 'iSeyon Analytics Team', url: 'https://iseyon-analytics-v0.vercel.app/team' }],
  creator: 'iSeyon Analytics',
  publisher: 'iSeyon Analytics',
  category: 'Business Intelligence and Data Analytics',
  other: {
    // Dublin Core metadata
    'DC.title': 'iSeyon Analytics | AI-Powered Business Intelligence & Data Analytics',
    'DC.description': 'AI-powered business intelligence and data analytics solutions with proven 5.6x ROI',
    'DC.creator': 'iSeyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'iSeyon Analytics',
    'DC.rights': 'Copyright © 2024 iSeyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Business Intelligence, AI Analytics, Data Science, Cloud Platforms',
    'DC.type': 'Service',
    // License metadata
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'referrer': 'no-referrer-when-downgrade',
  },
}

export default async function Home() {
  const data = await getHomeData();

  // Enhanced Organization schema with E-E-A-T signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iSeyon Analytics',
    alternateName: 'iSeyon AI-Powered Analytics',
    url: 'https://iseyon-analytics-v0.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      width: '600',
      height: '60',
    },
    description: '78% of enterprises now leverage AI for analytics. iSeyon Analytics delivers AI-Powered Business Intelligence and Data Analytics Solutions with proven 5.6x ROI.',
    foundingDate: '2020',
    foundingLocation: 'New York, USA',
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
      'https://iseyon-analytics-v0.vercel.app/team',
      'https://iseyon-analytics-v0.vercel.app/vision',
      'https://iseyon-analytics-v0.vercel.app/contact',
      'https://iseyon-analytics-v0.vercel.app/blog',
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
    serviceType: [
      'Business Intelligence Consulting',
      'AI Integration Services',
      'Data Analytics Solutions',
      'Cloud Platform Consulting',
      'Power BI Implementation',
      'Snowflake Consulting',
      'Databricks Solutions',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Business Intelligence',
      'Data Analytics',
      'Machine Learning',
      'Cloud Computing',
      'Data Visualization',
      'Predictive Analytics',
    ],
    award: [
      'Databricks Partner Excellence Award',
      'Microsoft Gold Partner',
      'Snowflake Elite Services Partner',
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
    publisher: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
    },
  };

  // WebPage schema with speakable content
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'iSeyon Analytics - AI-Powered Business Intelligence Solutions',
    description: '78% of enterprises now leverage AI for analytics. Get 5.6x ROI with iSeyon\'s data-driven solutions.',
    url: 'https://iseyon-analytics-v0.vercel.app',
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      url: 'https://iseyon-analytics-v0.vercel.app',
    },
    about: {
      '@type': 'Thing',
      name: 'Business Intelligence and Data Analytics',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.hero-description'],
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
    },
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://iseyon-analytics-v0.vercel.app',
      },
    ],
  };



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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-white snap-y snap-proximity">
        <Hero data={data.hero as any} founderMessages={data.founderMessages as any} />
        {/* <IndustryStats /> */}
        <ServicesSection services={data.services as any} />
        {/* <ProprietaryResearch /> */}
        <NewProject data={data.project as any} />
        {/* <ExpertQuotes /> */}
        <TestimonialsSection testimonials={data.testimonials as any} />
        {/* <AuthoritativeCitations /> */}
        <BannerSection data={data.banner as any} />
        <PartnersSlider partners={data.partners as any} />
      </main>
    </>
  )
}
