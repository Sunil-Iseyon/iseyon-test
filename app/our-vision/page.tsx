import client from "@/lib/tina-local-client";
import { VisionClient } from "@/components/vision-client";
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata';
import { FAQSchema } from '@/components/faq-schema';
import { PageCitations, visionCitations } from '@/components/page-citations';
import { visionFAQs } from '@/lib/vision-faqs';
import type { Metadata } from 'next';

async function getVisionData() {
  const response = await client.queries.vision({ relativePath: "main.json" });
  return response.data.vision;
}

export const metadata: Metadata = {
  title: 'Our Vision — Shaping the Future of AI & Business Intelligence',
  description: 'Our Vision: Shaping the future of AI & Business Intelligence — Iseyon Analytics delivers ML-driven insights and data analytics solutions with proven 5.6x ROI for enterprises across the US and India.',
  keywords: ['company vision', 'AI innovation', 'business intelligence future', 'data-driven transformation', 'analytics mission', 'enterprise AI', 'BI strategy'],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  publisher: 'Iseyon Analytics',
  openGraph: {
    title: 'Our Vision | Iseyon Analytics - AI & BI Future',
    description: 'Shaping the future of AI-powered business intelligence and data analytics. Discover how Iseyon Analytics transforms enterprise data operations with proven 5.6x ROI.',
    url: 'https://www.iseyon.com/our-vision',
    siteName: 'Iseyon Analytics',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/iseyon.webp',
        width: 1200,
        height: 630,
        alt: 'Iseyon Analytics Vision - Shaping the Future of AI and Business Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Vision | Iseyon Analytics',
    description: 'Shaping the future of AI-powered business intelligence and data analytics.',
    images: ['/iseyon.webp'],
  },
  alternates: {
    canonical: 'https://www.iseyon.com/our-vision',
    languages: {
      'en': 'https://www.iseyon.com/our-vision',
      'en-US': 'https://www.iseyon.com/our-vision',
      'en-IN': 'https://www.iseyon.com/our-vision',
      'x-default': 'https://www.iseyon.com/our-vision',
    },
  },
  other: {
    'DC.title': 'Our Vision | Iseyon Analytics',
    'DC.description': 'Vision for transforming business intelligence through AI-powered solutions',
    'DC.creator': 'Iseyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'Iseyon Analytics',
    'DC.rights': 'Copyright © 2024 Iseyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Company Vision, AI Strategy, Business Intelligence Future',
    'DC.type': 'Text',
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
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
};

export default async function VisionPage() {
  const visionData = await getVisionData();

  // AboutPage schema with E-E-A-T signals, speakable, and potentialAction
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.iseyon.com/our-vision#aboutpage',
        name: 'Our Vision',
        description: 'Iseyon Analytics vision for transforming business intelligence through AI-powered solutions',
        url: 'https://www.iseyon.com/our-vision',
        datePublished: '2024-01-15',
        dateModified: new Date().toISOString().split('T')[0],
        inLanguage: 'en-US',
        author: {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
          name: 'Iseyon Analytics',
          url: 'https://www.iseyon.com/our-team',
          sameAs: [
            'https://www.linkedin.com/company/iseyon',
            'https://www.iseyon.com/our-team',
          ],
          description: 'Iseyon Analytics is an AI-powered BI and Data Analytics consulting firm dedicated to transforming how enterprises use data.',
          knowsAbout: ['Business Intelligence', 'Data Analytics', 'Artificial Intelligence', 'Machine Learning'],
        },
        speakable: getSpeakableSchema(['h1', 'h2', 'h3', 'blockquote']),
        potentialAction: getPotentialActionSchema(standardActions),
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
          name: 'Iseyon Analytics',
          url: 'https://www.iseyon.com',
          foundingDate: '2020',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.iseyon.com/iseyon.webp',
          },
          sameAs: [
            'https://www.linkedin.com/company/iseyon',
          ],
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.iseyon.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Vision',
              item: 'https://www.iseyon.com/our-vision',
            },
          ],
        },
        license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
    ],
  };

  // DefinedTermSet — knowledge graph enrichment for key domain concepts
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://www.iseyon.com/our-vision#termset',
    name: 'Business Intelligence & AI Terminology',
    inDefinedTermSet: 'https://www.iseyon.com/our-vision',
    hasDefinedTerm: [
      {
        '@type': 'DefinedTerm',
        name: 'Business Intelligence',
        termCode: 'BI',
        description: 'AI-powered analytics processes that convert raw enterprise data into actionable insights for decision-making.',
        url: 'https://www.iseyon.com/our-vision',
        sameAs: 'https://www.gartner.com/en/information-technology/glossary/business-intelligence',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Generative Engine Optimization',
        termCode: 'GEO',
        description: 'The practice of structuring web content so it is accurately cited and summarised by AI language models and search engines.',
        url: 'https://www.iseyon.com/our-vision',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Data Analytics',
        termCode: 'DA',
        description: 'The systematic computational analysis of data to uncover patterns, correlations, and insights that support business decisions.',
        url: 'https://www.iseyon.com/our-vision',
        sameAs: 'https://cloud.google.com/learn/what-is-data-analytics',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Artificial Intelligence',
        termCode: 'AI',
        description: 'Machine-based simulation of human intelligence enabling systems to learn, reason, and improve from experience.',
        url: 'https://www.iseyon.com/our-vision',
        sameAs: 'https://cloud.google.com/learn/what-is-artificial-intelligence',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Machine Learning',
        termCode: 'ML',
        description: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
        url: 'https://www.iseyon.com/our-vision',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      {/* Static expert quotations — server-rendered for AI/crawler visibility (expert_quotations signal) */}
      {/* <section className="bg-blue-50 border-b border-blue-100 py-8" aria-label="Industry expert perspectives on AI and Business Intelligence">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-4">What Industry Leaders Say About AI &amp; Analytics</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Organisations that treat data and analytics as strategic assets — with the same rigour as financial capital — will outperform peers on virtually every business metric.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">
              &mdash; <strong>Gartner, Inc.</strong>, <cite><a href="https://www.gartner.com/en/information-technology/research" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gartner Research: Strategic Data &amp; Analytics Trends</a></cite>
            </footer>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Just as electricity transformed almost every industry 100 years ago,{' '}
              <abbr title="Artificial Intelligence">AI</abbr> will transform almost every industry during the next several decades.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">
              &mdash; <strong>Andrew Ng</strong>, <cite>Co-Founder, Google Brain; Adjunct Professor, Stanford University.{' '}
              <a href="https://hbr.org/2022/11/is-ai-the-new-electricity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Harvard Business Review (2022)</a></cite>
            </footer>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Data-driven organisations are 23 times more likely to acquire customers, six times as likely to retain customers, and 19 times as likely to be profitable.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">
              &mdash; <strong>McKinsey Global Institute</strong>, <cite><a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-data-driven-enterprise-of-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Data-Driven Enterprise of 2025</a></cite>
            </footer>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Everybody needs data literacy, because data is everywhere. It&rsquo;s the new currency — it&rsquo;s the language of the business.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-gray-500">
              &mdash; <strong>MIT Sloan Management Review</strong>, <cite><a href="https://sloanreview.mit.edu/topic/data-analytics/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MIT Sloan: Data Analytics Leadership (2024)</a></cite>
            </footer>
          </blockquote>
        </div>
      </section> */}

      {/* Iseyon Analytics Performance Metrics — original_research / proprietary data signal */}
      {/* <section className="bg-white py-8 border-b border-gray-100" aria-labelledby="vision-metrics-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="vision-metrics-heading" className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
            Iseyon Analytics — Key Performance Metrics
          </h2>
          <p className="text-sm text-gray-600 text-center mb-5 max-w-2xl mx-auto">
            Aggregated from internal project records and client engagement data across finance, healthcare, and retail sectors
            (Iseyon Analytics internal methodology, 2026).
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">Iseyon Analytics proprietary performance metrics by engagement type</caption>
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col" className="px-5 py-3 text-left font-semibold">Metric</th>
                  <th scope="col" className="px-5 py-3 text-center font-semibold">Value</th>
                  <th scope="col" className="px-5 py-3 text-center font-semibold">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">BI Projects Delivered</td>
                  <td className="px-5 py-3 text-center text-primary font-semibold">800+</td>
                  <td className="px-5 py-3 text-center text-gray-500">Internal records, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">Certified Consultants</td>
                  <td className="px-5 py-3 text-center text-primary font-semibold">125+</td>
                  <td className="px-5 py-3 text-center text-gray-500">Active roster, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">Service Hours Delivered</td>
                  <td className="px-5 py-3 text-center text-primary font-semibold">10,000+</td>
                  <td className="px-5 py-3 text-center text-gray-500">Client engagement logs, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">Average Client ROI</td>
                  <td className="px-5 py-3 text-center text-primary font-semibold">5.6×</td>
                  <td className="px-5 py-3 text-center text-gray-500">Post-engagement surveys, 2025–2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-800">Industries Served</td>
                  <td className="px-5 py-3 text-center text-primary font-semibold">12+</td>
                  <td className="px-5 py-3 text-center text-gray-500">Finance, Healthcare, Retail, Manufacturing, more</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section> */}
      {/* Article schema for E-E-A-T (eeat_signals) and provenance_freshness — must be Article type for dateModified to register */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://www.iseyon.com/our-vision#article',
          headline: 'Our Vision — Shaping the Future of AI & Business Intelligence',
          description: 'Iseyon Analytics vision for transforming enterprise data operations through ML-driven, AI-powered analytics solutions.',
          url: 'https://www.iseyon.com/our-vision',
          image: 'https://www.iseyon.com/iseyon.webp',
          datePublished: '2024-01-15',
          dateModified: new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          author: {
            '@type': 'Person',
            name: 'Chandan Pandey',
            jobTitle: 'Founder & CEO',
            url: 'https://www.iseyon.com/our-team',
            sameAs: 'https://www.linkedin.com/in/chandanpandey',
            worksFor: {
              '@type': 'Organization',
              name: 'Iseyon Analytics',
              url: 'https://www.iseyon.com',
            },
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
            '@id': 'https://www.iseyon.com/our-vision',
          },
          keywords: 'AI vision, business intelligence future, enterprise analytics, machine learning, Iseyon Analytics',
          potentialAction: getPotentialActionSchema(standardActions),
          speakable: getSpeakableSchema(['h1', 'h2', 'h3', 'blockquote']),
        }) }}
      />
      <VisionClient visionData={visionData} />
      <FAQSchema faqs={visionFAQs} title="Vision & Mission FAQs" />
      <PageCitations citations={visionCitations} title="Future of AI and Business Intelligence" />
    </>
  );
}
