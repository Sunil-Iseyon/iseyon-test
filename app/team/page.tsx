import client from "@/lib/tina-local-client";
import { TeamClient } from "@/components/team-client";
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata';
import type { Metadata } from 'next';

async function getTeamData() {
  const valuesResponse = await client.queries.companyValuesConnection();
  const teamResponse = await client.queries.teamMembersConnection();

  return {
    values: valuesResponse.data.companyValuesConnection.edges?.map(edge => edge?.node) || [],
    team: teamResponse.data.teamMembersConnection.edges?.map(edge => edge?.node) || [],
  };
}

export const metadata: Metadata = {
  title: 'iSeyon Analytics Team | Meet Our AI & BI Experts',
  description: 'Meet the expert team behind iSeyon Analytics. Our founders bring decades of combined experience in AI-powered business intelligence, data analytics, cloud platforms (Snowflake, Databricks, Palantir), and enterprise solutions.',
  keywords: ['iSeyon Analytics team', 'AI experts', 'business intelligence team', 'data analytics professionals', 'BI consultants', 'Databricks experts', 'Snowflake consultants'],
  authors: [{ name: 'iSeyon Analytics Team', url: 'https://iseyon-analytics-v0.vercel.app/team' }],
  publisher: 'iSeyon Analytics',
  openGraph: {
    title: 'iSeyon Analytics Team | Meet Our AI & BI Experts',
    description: 'Meet the expert team behind iSeyon Analytics. Our founders bring decades of experience in AI-powered business intelligence, data analytics, and enterprise solutions.',
    url: 'https://iseyon-analytics-v0.vercel.app/team',
    type: 'website',
    images: [
      {
        url: '/team.png',
        width: 1200,
        height: 630,
        alt: 'iSeyon Analytics Team - AI and Business Intelligence Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iSeyon Analytics Team | Meet Our AI & BI Experts',
    description: 'Meet the expert team behind iSeyon Analytics. Our founders bring decades of experience in AI-powered business intelligence.',
    images: ['/team.png'],
  },
  alternates: {
    canonical: 'https://iseyon-analytics-v0.vercel.app/team',
    languages: {
      'en': 'https://iseyon-analytics-v0.vercel.app/team',
      'en-US': 'https://iseyon-analytics-v0.vercel.app/team',
      'en-IN': 'https://iseyon-analytics-v0.vercel.app/team',
      'x-default': 'https://iseyon-analytics-v0.vercel.app/team',
    },
  },
  other: {
    'DC.title': 'iSeyon Analytics Team | AI & BI Experts',
    'DC.description': 'Expert team in AI-powered business intelligence and data analytics',
    'DC.creator': 'iSeyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'iSeyon Analytics',
    'DC.rights': 'Copyright © 2024 iSeyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Team Profile, AI Experts, Business Intelligence Professionals',
    'DC.type': 'Collection',
    'license': 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    'robots': 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  },
};

export default async function TeamPage() {
  const { values, team } = await getTeamData();

  // AboutPage schema with E-E-A-T signals, speakable, and potentialAction
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://iseyon-analytics-v0.vercel.app/team#aboutpage',
    name: 'Our Team',
    description: 'Meet the expert team at iSeyon Analytics driving innovation in AI-powered business intelligence and data analytics',
    url: 'https://iseyon-analytics-v0.vercel.app/team',
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    speakable: getSpeakableSchema(['h1', 'h2', '.team-member']),
    potentialAction: getPotentialActionSchema(standardActions),
    publisher: {
      '@type': 'Organization',
      '@id': 'https://iseyon-analytics-v0.vercel.app/#organization',
      name: 'iSeyon Analytics',
      foundingDate: '2020',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Team',
        item: 'https://iseyon-analytics-v0.vercel.app/team',
      },
    ],
  };

  // Generate Organization schema with team members and E-E-A-T signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iSeyon Analytics',
    url: 'https://iseyon-analytics-v0.vercel.app',
    logo: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
    description: 'AI-Powered Business Intelligence and Analytics Solutions with proven 5.6x ROI',
    foundingDate: '2020',
    knowsAbout: [
      'Artificial Intelligence',
      'Business Intelligence',
      'Data Analytics',
      'Machine Learning',
      'Cloud Computing',
      'Snowflake',
      'Databricks',
      'Palantir',
      'Power BI',
    ],
    founder: team.map((member: any) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      image: member.image,
      sameAs: member.linkedin ? [member.linkedin] : [],
      worksFor: {
        '@type': 'Organization',
        name: 'iSeyon Analytics',
      },
    })),
    sameAs: [
      'https://iseyon-analytics-v0.vercel.app/team',
      'https://iseyon-analytics-v0.vercel.app/vision',
      'https://iseyon-analytics-v0.vercel.app/contact',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <TeamClient values={values as any} team={team as any} />
    </>
  );
}
