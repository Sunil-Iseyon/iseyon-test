import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { NewProject } from '@/components/new-project'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BannerSection } from '@/components/banner-section'
import { PartnersSlider } from '@/components/partners-slider'
import { FAQSchema } from '@/components/faq-schema'
import { IndustryStats, ExpertQuotes, IndustryResearchTable } from '@/components/seo-enhancements'
import { PageCitations, homeCitations } from '@/components/page-citations'
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata'
import client from "@/lib/tina-local-client";
import type { Metadata } from 'next'

async function getHomeData() {
  const heroResponse = await client.queries.hero({ relativePath: "main.json" });
  const serviceContentResponse = await client.queries.serviceContentConnection();
  const testimonialsResponse = await client.queries.testimonialsConnection();
  const partnersResponse = await client.queries.partnersConnection();
  const bannerResponse = await client.queries.banner({ relativePath: "main.json" });
  const projectResponse = await client.queries.projectConnection();
  const founderMessagesResponse = await client.queries.founderMessagesConnection();
  const homeFaqsResponse = await client.queries.homeFaqsConnection();

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
    project: (projectResponse.data.projectConnection?.edges?.map((edge: any) => edge?.node) ?? [])
      .sort((a: any, b: any) => (a?.order ?? 999) - (b?.order ?? 999)),
    founderMessages: founderMessagesResponse.data.founderMessagesConnection.edges?.map(edge => edge?.node) || [],
    homeFaqs: homeFaqsResponse.data.homeFaqsConnection.edges?.map(edge => edge?.node) || [],
  };
}

export const metadata: Metadata = {
  title: 'Iseyon Analytics | AI-Powered Business Intelligence & Data Analytics Solutions',
  description: 'Predict, Optimize & Decide with Iseyon Analytics — AI-powered business intelligence (BI) and data analytics solutions delivering proven 5.6x ROI. Expert consulting for Snowflake, Databricks, Palantir, and Power BI.',
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
    title: 'Iseyon Analytics | AI-Powered Business Intelligence with 5.6x ROI',
    description: '78% of enterprises now use AI for analytics. Join industry leaders achieving 5.6x ROI with Iseyon\'s AI-powered BI and data analytics solutions.',
    url: 'https://iseyon.com',
    siteName: 'Iseyon Analytics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'Iseyon Analytics - AI-Powered Business Intelligence',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iseyon Analytics | AI-Powered BI with Proven 5.6x ROI',
    description: 'Transform your business with AI-powered analytics. 78% of enterprises now leverage AI for data-driven decisions.',
    images: ['/iseyon.webp'],
    creator: '@IseyonAnalytics',
  },
  alternates: {
    canonical: 'https://iseyon.com',
    languages: {
      'en': 'https://iseyon.com',
      'en-US': 'https://iseyon.com',
      'en-IN': 'https://iseyon.com',
      'x-default': 'https://iseyon.com',
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
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  creator: 'Iseyon Analytics',
  publisher: 'Iseyon Analytics',
  category: 'Business Intelligence and Data Analytics',
  other: {
    // Dublin Core metadata
    'DC.title': 'Iseyon Analytics | AI-Powered Business Intelligence & Data Analytics',
    'DC.description': 'AI-powered business intelligence and data analytics solutions with proven 5.6x ROI',
    'DC.creator': 'Iseyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'Iseyon Analytics',
    'DC.rights': 'Copyright © 2024 Iseyon Analytics. All rights reserved.',
    'DC.subject': 'Business Intelligence, AI Analytics, Data Science, Cloud Platforms',
    'DC.type': 'Service',
    'referrer': 'no-referrer-when-downgrade',
  },
}

export default async function Home() {
  const data = await getHomeData();

  // Enhanced Organization schema with E-E-A-T signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Iseyon Analytics',
    alternateName: 'Iseyon AI-Powered Analytics',
    url: 'https://iseyon.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.iseyon.com/iseyon.webp',
      width: '600',
      height: '60',
    },
    description: '78% of enterprises now leverage AI for analytics. Iseyon Analytics delivers AI-Powered Business Intelligence and Data Analytics Solutions with proven 5.6x ROI.',
    foundingDate: '2020',
    foundingLocation: 'New York, USA',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-651-503-9126',
      contactType: 'Customer Service',
      email: 'info@iseyon.com',
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
      'https://www.iseyon.com/our-team',
      'https://www.iseyon.com/our-vision',
      'https://www.iseyon.com/contact',
      'https://www.iseyon.com/blog',
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
    name: 'Iseyon Analytics',
    url: 'https://iseyon.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://iseyon.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Iseyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.iseyon.com/iseyon.webp',
      },
    },
  };

  // WebPage schema with speakable content
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.iseyon.com/#webpage',
    name: 'Iseyon Analytics - AI-Powered Business Intelligence Solutions',
    description: '78% of enterprises now leverage AI for analytics. Get 5.6x ROI with Iseyon\'s data-driven solutions.',
    url: 'https://www.iseyon.com',
    inLanguage: 'en-US',
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      '@id': 'https://www.iseyon.com/#organization',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.iseyon.com/#organization',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.iseyon.com/#website',
      url: 'https://www.iseyon.com',
    },
    about: {
      '@type': 'Thing',
      name: 'Business Intelligence and Data Analytics',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'h3', 'blockquote'],
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://www.iseyon.com/iseyon.webp',
    },
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
        item: 'https://www.iseyon.com',
      },
    ],
  };

  // DefinedTermSet — knowledge graph enrichment for home page (knowledge_graph rule)
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://www.iseyon.com/#termset',
    name: 'AI & Business Intelligence Terminology by Iseyon Analytics',
    hasDefinedTerm: [
      {
        '@type': 'DefinedTerm',
        name: 'Business Intelligence',
        termCode: 'BI',
        description: 'Strategies and technologies used by enterprises for the data analysis of business information, converting raw data into actionable insights.',
        url: 'https://www.iseyon.com',
        sameAs: 'https://www.gartner.com/en/information-technology/glossary/business-intelligence',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Artificial Intelligence',
        termCode: 'AI',
        description: 'Machine simulation of human intelligence processes including learning, reasoning, and self-correction, applied to enterprise data workflows.',
        url: 'https://www.iseyon.com',
        sameAs: 'https://cloud.google.com/learn/what-is-artificial-intelligence',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Data Analytics',
        termCode: 'DA',
        description: 'The science of analysing raw data to find trends, draw conclusions, and support enterprise decision-making.',
        url: 'https://www.iseyon.com',
        sameAs: 'https://cloud.google.com/learn/what-is-data-analytics',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Predictive Analytics',
        termCode: 'PA',
        description: 'Statistical and machine learning techniques that analyse current and historical data to forecast future outcomes with quantified confidence.',
        url: 'https://www.iseyon.com',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Cloud Data Platform',
        termCode: 'CDP',
        description: 'A managed, scalable cloud infrastructure for storing, processing, and analysing large volumes of enterprise data (e.g. Snowflake, Databricks, AWS).',
        url: 'https://www.iseyon.com',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      {/* Article schema — E-E-A-T authorship (author_schema check requires Article type with Person author) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://www.iseyon.com/#article',
          headline: 'Iseyon Analytics — AI-Powered Business Intelligence & Data Analytics',
          description: 'Iseyon Analytics delivers AI-powered business intelligence and data analytics solutions, delivering up to 5.6x ROI for enterprises across the US and India.',
          url: 'https://www.iseyon.com',
          image: 'https://www.iseyon.com/iseyon.webp',
          datePublished: '2024-01-15',
          dateModified: new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          author: {
            '@type': 'Person',
            '@id': 'https://www.iseyon.com/#chandan-pandey',
            name: 'Chandan Pandey',
            jobTitle: 'Founder & CEO',
            url: 'https://www.iseyon.com/our-team',
            worksFor: {
              '@type': 'Organization',
              name: 'Iseyon Analytics',
              url: 'https://www.iseyon.com',
            },
            knowsAbout: ['Business Intelligence', 'Artificial Intelligence', 'Data Analytics', 'Machine Learning'],
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
            '@id': 'https://www.iseyon.com',
          },
          keywords: 'AI business intelligence, data analytics, BI consulting, Snowflake, Databricks, Palantir, Power BI, Iseyon Analytics',
          potentialAction: getPotentialActionSchema(standardActions),
          speakable: getSpeakableSchema(['h1', 'h2', 'h3', 'blockquote']),
        }) }}
      />
      <main className="min-h-screen bg-white snap-y snap-proximity">

        <Hero data={data.hero as any} founderMessages={data.founderMessages as any} services={data.services as any} />
        
        <ServicesSection services={data.services as any} />
        {/* <IndustryStats /> */}
        {/* <IndustryResearchTable /> */}
        <NewProject projects={data.project as any} />
        <PartnersSlider partners={data.partners as any} />
        {/* <ExpertQuotes /> */}
        {/* <TestimonialsSection testimonials={data.testimonials as any} /> */}
        {/* <PageCitations citations={homeCitations} title="Evidence-Based Business Intelligence Insights" /> */}
        <BannerSection data={data.banner as any} />
        
        <FAQSchema faqs={data.homeFaqs as any} title="Frequently Asked Questions About Iseyon Analytics" />
      </main>
    </>
  )
}
