import client from "@/lib/tina-local-client";
import { VisionClient } from "@/components/vision-client";
import { FAQSchema } from '@/components/faq-schema';
import { visionFAQs } from '@/lib/vision-faqs';
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata';
import type { Metadata } from 'next';

async function getVisionData() {
  const response = await client.queries.vision({ relativePath: "main.json" });
  return response.data.vision;
}

export const metadata: Metadata = {
  title: 'Our Vision | iSeyon Analytics - Shaping the Future of AI & BI',
  description: 'Discover iSeyon Analytics vision for transforming business intelligence through AI-powered solutions. Learn about our mission to help enterprises achieve 5.6x ROI through data-driven transformation.',
  keywords: ['company vision', 'AI innovation', 'business intelligence future', 'data-driven transformation', 'analytics mission', 'enterprise AI', 'BI strategy'],
  authors: [{ name: 'iSeyon Analytics Team', url: 'https://iseyon-analytics-v0.vercel.app/team' }],
  publisher: 'iSeyon Analytics',
  openGraph: {
    title: 'Our Vision | iSeyon Analytics',
    description: 'Shaping the future of AI-powered business intelligence and data analytics.',
    url: 'https://iseyon-analytics-v0.vercel.app/vision',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Vision | iSeyon Analytics',
    description: 'Shaping the future of AI-powered business intelligence.',
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app/vision',
    languages: {
      'en': 'https://iseyon-analytics-v0.vercel.app/vision',
      'en-US': 'https://iseyon-analytics-v0.vercel.app/vision',
      'en-IN': 'https://iseyon-analytics-v0.vercel.app/vision',
      'x-default': 'https://iseyon-analytics-v0.vercel.app/vision',
    },
  },
  other: {
    'DC.title': 'Our Vision | iSeyon Analytics',
    'DC.description': 'Vision for transforming business intelligence through AI-powered solutions',
    'DC.creator': 'iSeyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'iSeyon Analytics',
    'DC.rights': 'Copyright © 2024 iSeyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Company Vision, AI Strategy, Business Intelligence Future',
    'DC.type': 'Text',
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'robots': 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  },
};

export default async function VisionPage() {
  const visionData = await getVisionData();

  // AboutPage schema with E-E-A-T signals, speakable, and potentialAction
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://iseyon-analytics-v0.vercel.app/vision#aboutpage',
        name: 'Our Vision',
        description: 'iSeyon Analytics vision for transforming business intelligence through AI-powered solutions',
        url: 'https://iseyon-analytics-v0.vercel.app/vision',
        datePublished: '2024-01-15',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'en-US',
        speakable: getSpeakableSchema(['h1', 'h2', '.vision-content']),
        potentialAction: getPotentialActionSchema(standardActions),
        publisher: {
          '@type': 'Organization',
          '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
          name: 'iSeyon Analytics',
          url: 'https://iseyon-analytics-v0.vercel.app',
          foundingDate: '2020',
          logo: {
            '@type': 'ImageObject',
            url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
          },
          sameAs: [
            'https://www.linkedin.com/company/iseyon-analytics',
          ],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://iseyon-analytics-v0.vercel.app',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Vision',
              item: 'https://iseyon-analytics-v0.vercel.app/vision',
            },
          ],
        },
        license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <VisionClient visionData={visionData} />
      <FAQSchema faqs={visionFAQs} title="Vision & Values FAQs" />
    </>
  );
}
