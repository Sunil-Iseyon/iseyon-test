import client from "@/lib/tina-local-client";
import { TeamClient } from "@/components/team-client";
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
  description: 'Meet the expert team behind iSeyon Analytics. Our founders bring decades of experience in AI-powered business intelligence, data analytics, and enterprise solutions.',
  keywords: ['iSeyon Analytics team', 'AI experts', 'business intelligence team', 'data analytics professionals', 'BI consultants'],
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
  },
};

export default async function TeamPage() {
  const { values, team } = await getTeamData();

  // AboutPage schema
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Team',
    description: 'Meet the expert team at iSeyon Analytics driving innovation in AI-powered business intelligence and data analytics.',
    url: 'https://iseyon-analytics-v0.vercel.app/team',
    publisher: {
      '@type': 'Organization',
      name: 'iSeyon Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
      },
    },
    inLanguage: 'en-US',
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

  // Generate Organization schema with team members
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iSeyon Analytics',
    url: 'https://iseyon-analytics-v0.vercel.app',
    logo: 'https://iseyon-analytics-v0.vercel.app/iseyon.webp',
    description: 'AI-Powered Business Intelligence and Analytics Solutions',
    foundingDate: '2020',
    founder: team.map((member: any) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      image: member.image,
      sameAs: member.linkedin ? [member.linkedin] : [],
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
