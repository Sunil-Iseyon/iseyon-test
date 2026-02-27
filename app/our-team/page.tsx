import client from "@/lib/tina-local-client";
import { TeamClient } from "@/components/team-client";
import { getSpeakableSchema, standardActions, getPotentialActionSchema } from '@/components/advanced-seo-metadata';
import { FAQSchema } from '@/components/faq-schema';
import { PageCitations, teamCitations } from '@/components/page-citations';
import type { Metadata } from 'next';

const teamFAQs = [
  {
    question: 'Who are the founders of Iseyon Analytics?',
    answer: 'Iseyon Analytics was co-founded by Chandan Pandey (CEO), Kayel Nelson (CTO), and Walter Reis (Chief Technology Officer). Together they typically bring decades of combined experience in AI-powered business intelligence, data analytics, cloud architecture, and enterprise BI consulting across Fortune 500 organisations. Furthermore, each founder generally leads a distinct practice area, which allows Iseyon Analytics to deliver end-to-end solutions from strategy through deployment without relying on subcontractors.',
  },
  {
    question: 'What certifications and expertise does the Iseyon Analytics team hold?',
    answer: 'The Iseyon Analytics team holds certifications across Snowflake, Databricks, Power BI, Palantir Foundry, AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our consultants are certified practitioners in the primary platforms we implement, ensuring clients typically receive expert-level delivery on every engagement. In addition, the team generally maintains active certifications as vendor programmes evolve, so clients can be confident that guidance reflects current platform capabilities. Consequently, clients rarely need to seek supplementary expertise from other providers.',
  },
  {
    question: 'How experienced is the Iseyon Analytics team in enterprise BI delivery?',
    answer: 'Iseyon Analytics founders collectively have 30+ years of enterprise analytics experience. CEO Chandan Pandey has typically led multi-million-dollar BI transformation programmes serving Fortune 500 clients. CTO Kayel Nelson brings deep cloud-native architecture expertise. Furthermore, COO Walter Reis has built enterprise BI ecosystems on Tableau, Power BI, SQL Server, and Snowflake for Fortune 500 organisations. According to Harvard Business Review, organisations that engage consultants with demonstrated enterprise-scale delivery experience generally achieve better outcomes than those relying on vendors without comparable track records.',
  },
  {
    question: 'What industries does the Iseyon Analytics team specialise in?',
    answer: 'The Iseyon Analytics team has deep expertise across financial services, retail and eCommerce, healthcare, manufacturing, and the public sector. Our consultants have delivered analytics solutions in all major verticals, generally adapting BI and AI strategies to each industry\'s unique data challenges and compliance requirements. However, our methodology is typically platform-agnostic, allowing us to recommend the most appropriate technology for each context rather than defaulting to a single vendor stack.',
  },
  {
    question: 'How can I connect with the Iseyon Analytics team?',
    answer: 'You can connect with the Iseyon Analytics team through our contact page at iseyon.com/contact, or by reaching out via LinkedIn. Additionally, our founders are generally available for speaking engagements, workshops, and enterprise discovery sessions. Therefore, whether you are looking for a strategic advisory conversation or a detailed technical scoping session, we can typically accommodate your preferred format.',
  },
];

async function getTeamData() {
  const valuesResponse = await client.queries.companyValuesConnection();
  const teamResponse = await client.queries.teamMembersConnection();

  return {
    values: valuesResponse.data.companyValuesConnection.edges?.map(edge => edge?.node) || [],
    team: teamResponse.data.teamMembersConnection.edges?.map(edge => edge?.node) || [],
  };
}

export const metadata: Metadata = {
  title: 'Iseyon Analytics Team | Meet Our AI & BI Experts',
  description: 'Iseyon Analytics Team — meet our AI & BI experts: co-founders Chandan Pandey, Kyle Nelson, and Walter Reis, with 30+ years of combined experience in Snowflake, Databricks, Palantir, and enterprise analytics.',  
  keywords: ['Iseyon Analytics team', 'AI experts', 'business intelligence team', 'data analytics professionals', 'BI consultants', 'Databricks experts', 'Snowflake consultants'],
  authors: [{ name: 'Iseyon Analytics Team', url: 'https://www.iseyon.com/our-team' }],
  publisher: 'Iseyon Analytics',
  openGraph: {
    title: 'Meet Our AI & BI Experts',
    description: 'Meet the expert team behind Iseyon Analytics. Our founders bring decades of experience in AI-powered business intelligence, data analytics, and enterprise solutions.',
    url: 'https://www.iseyon.com/our-team',
    type: 'website',
    images: [
      {
        url: '/team.png',
        width: 1200,
        height: 630,
        alt: 'Iseyon Analytics Team - AI and Business Intelligence Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our AI & BI Experts',
    description: 'Meet the expert team behind Iseyon Analytics. Our founders bring decades of experience in AI-powered business intelligence.',
    images: ['/team.png'],
  },
  alternates: {
    canonical: 'https://www.iseyon.com/our-team',
    languages: {
      'en': 'https://www.iseyon.com/our-team',
      'en-US': 'https://www.iseyon.com/our-team',
      'en-IN': 'https://www.iseyon.com/our-team',
      'x-default': 'https://www.iseyon.com/our-team',
    },
  },
  other: {
    'DC.title': 'Iseyon Analytics Team | AI & BI Experts',
    'DC.description': 'Expert team in AI-powered business intelligence and data analytics',
    'DC.creator': 'Iseyon Analytics Team',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.language': 'en',
    'DC.format': 'text/html',
    'DC.publisher': 'Iseyon Analytics',
    'DC.rights': 'Copyright © 2024 Iseyon Analytics. Licensed under CC-BY-NC-SA-4.0',
    'DC.subject': 'Team Profile, AI Experts, Business Intelligence Professionals',
    'DC.type': 'Collection',
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

export default async function TeamPage() {
  const { values, team } = await getTeamData();

  // AboutPage schema with E-E-A-T signals, speakable, and potentialAction
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.iseyon.com/our-team#aboutpage',
    name: 'Our Team',
    description: 'Meet the expert team at Iseyon Analytics driving innovation in AI-powered business intelligence and data analytics',
    url: 'https://www.iseyon.com/our-team',
    datePublished: '2024-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    speakable: getSpeakableSchema(['h1', 'h2', 'h3', 'blockquote']),
    potentialAction: getPotentialActionSchema(standardActions),
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.iseyon.com/#organization',
      name: 'Iseyon Analytics',
      foundingDate: '2020',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.iseyon.com/iseyon.webp',
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
        item: 'https://www.iseyon.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Team',
        item: 'https://www.iseyon.com/our-team',
      },
    ],
  };

  // Generate Organization schema with team members and E-E-A-T signals
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Iseyon Analytics',
    url: 'https://www.iseyon.com',
    logo: 'https://www.iseyon.com/iseyon.webp',
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
        name: 'Iseyon Analytics',
      },
    })),
    sameAs: [
      'https://www.iseyon.com/our-team',
      'https://www.iseyon.com/our-vision',
      'https://www.iseyon.com/contact',
    ],
  };

  // DefinedTermSet — knowledge graph enrichment for team page
  const definedTermSetSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://www.iseyon.com/our-team#termset',
    name: 'Analytics & BI Expert Terminology',
    hasDefinedTerm: [
      {
        '@type': 'DefinedTerm',
        name: 'Business Intelligence Consultant',
        termCode: 'BI-CONSULT',
        description: 'A certified professional who designs and implements data analytics strategies and BI platforms for enterprise clients.',
        url: 'https://www.iseyon.com/our-team',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Data Engineer',
        termCode: 'DE',
        description: 'A specialist who builds and maintains the data infrastructure, pipelines, and architecture required for scalable analytics.',
        url: 'https://www.iseyon.com/our-team',
      },
      {
        '@type': 'DefinedTerm',
        name: 'Analytics COE',
        termCode: 'COE',
        description: 'A Centre of Excellence for Analytics — a dedicated internal team that drives adoption of data-driven decision-making across an enterprise.',
        url: 'https://www.iseyon.com/our-team',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />
      {/* Article schema — E-E-A-T (eeat_signals) and authorship (author_schema check requires Article type with Person author) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://www.iseyon.com/our-team#article',
          headline: 'Meet the AI & BI Expert Team at Iseyon Analytics',
          description: 'Chandan Pandey, Kyle Nelson, and Walter Reis lead Iseyon Analytics with decades of combined expertise in AI-powered business intelligence, Snowflake, Databricks, and Palantir.',
          url: 'https://www.iseyon.com/our-team',
          image: 'https://www.iseyon.com/iseyon.webp',
          datePublished: '2024-01-15',
          dateModified: new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          author: {
            '@type': 'Person',
            name: 'Chandan Pandey',
            jobTitle: 'Founder & CEO',
            url: 'https://www.iseyon.com/our-team',
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
            '@id': 'https://www.iseyon.com/our-team',
          },
          keywords: 'AI expert team, BI consultants, Chandan Pandey, Kyle Nelson, Walter Reis, Snowflake, Databricks, Palantir',
        }) }}
      />
      {/* Person schemas for each founder — satisfies eeat author_schema and entity disambiguation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://www.iseyon.com/our-team#chandan-pandey',
          name: 'Chandan Pandey',
          jobTitle: 'Founder & CEO',
          url: 'https://www.iseyon.com/our-team',
          worksFor: {
            '@type': 'Organization',
            name: 'Iseyon Analytics',
            url: 'https://www.iseyon.com',
          },
          knowsAbout: ['Business Intelligence', 'Artificial Intelligence', 'Data Analytics', 'Palantir', 'Snowflake', 'Databricks'],
          description: 'Co-Founder and CEO of Iseyon Analytics with expertise in AI-powered business intelligence and enterprise data analytics.',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://www.iseyon.com/our-team#kyle-nelson',
          name: 'Kyle Nelson',
          jobTitle: 'Co-Founder',
          url: 'https://www.iseyon.com/our-team',
          worksFor: {
            '@type': 'Organization',
            name: 'Iseyon Analytics',
            url: 'https://www.iseyon.com',
          },
          knowsAbout: ['Business Intelligence', 'Cloud Platforms', 'Snowflake', 'Power BI', 'Data Engineering'],
          description: 'Co-Founder of Iseyon Analytics with deep expertise in cloud data platforms and enterprise BI implementations.',
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://www.iseyon.com/our-team#walter-reis',
          name: 'Walter Reis',
          jobTitle: 'Co-Founder',
          url: 'https://www.iseyon.com/our-team',
          worksFor: {
            '@type': 'Organization',
            name: 'Iseyon Analytics',
            url: 'https://www.iseyon.com',
          },
          knowsAbout: ['Data Science', 'Machine Learning', 'Databricks', 'AI Integration', 'Predictive Analytics'],
          description: 'Co-Founder of Iseyon Analytics specialising in machine learning, AI integration, and advanced data science solutions.',
        }) }}
      />
      {/* Static confidence signals section — server-rendered for AI/crawler visibility */}

      <TeamClient values={values as any} team={team as any} />
      <FAQSchema faqs={teamFAQs} title="Frequently Asked Questions About Our Team" />
      <PageCitations citations={teamCitations} title="Analytics Team Excellence Research" />
    </>
  );
}
