import client from "@/lib/tina-local-client";
import { VisionClient } from "@/components/vision-client";
import type { Metadata } from 'next';

async function getVisionData() {
  const response = await client.queries.vision({ relativePath: "main.json" });
  return response.data.vision;
}

export const metadata: Metadata = {
  title: 'Our Vision | iSeyon Analytics - Shaping the Future of AI & BI',
  description: 'Discover iSeyon Analytics vision for transforming business intelligence through AI-powered solutions. Learn about our mission, values, and commitment to innovation.',
  keywords: ['company vision', 'AI innovation', 'business intelligence future', 'data-driven transformation', 'analytics mission'],
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
  },
};

export default async function VisionPage() {
  const visionData = await getVisionData();

  // AboutPage schema
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Vision',
    description: 'iSeyon Analytics vision for transforming business intelligence through AI-powered solutions.',
    url: 'https://iseyon-analytics-v0.vercel.app/vision',
    publisher: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <VisionClient visionData={visionData} />
    </>
  );
}
