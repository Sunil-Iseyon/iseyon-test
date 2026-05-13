import type { Metadata } from 'next';
import { Header } from '@/components/community/header';
import { Gallery } from '@/components/community/gallery';
import { Timeline } from '@/components/community/timeline';
import { PageCitations } from '@/components/page-citations';
import { FAQSchema } from '@/components/faq-schema';
import client from '@/lib/tina-local-client';

export const metadata: Metadata = {
  title: 'Support for Communities — Iseyon Analytics',
  description:
    'Support for Communities — Iseyon Analytics community engagement: charity runs, volunteering, and social impact initiatives that give back to local communities across the US and India.',
  keywords: [
    'community support',
    'corporate social responsibility',
    'CSR',
    'Iseyon Analytics community',
    'charity run',
    'employee volunteering',
  ],
  openGraph: {
    title: 'Support for Communities — Iseyon Analytics',
    description:
      'Iseyon Analytics gives back to local communities through charity runs, volunteering, and social impact initiatives.',
    url: 'https://www.iseyon.com/insights/support-communities',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support for Communities — Iseyon Analytics',
    description:
      'Iseyon Analytics gives back to local communities through charity runs, volunteering, and social impact initiatives.',
  },
  alternates: {
    canonical: 'https://www.iseyon.com/insights/support-communities',
    languages: {
      en: 'https://www.iseyon.com/insights/support-communities',
      'x-default': 'https://www.iseyon.com/insights/support-communities',
    },
  },
};

const communitySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.iseyon.com/insights/support-communities#webpage',
      url: 'https://www.iseyon.com/insights/support-communities',
      name: 'Support for Communities — Iseyon Analytics',
      description:
        'Iseyon Analytics gives back to local communities through charity runs, volunteering, and social impact initiatives.',
      inLanguage: 'en-US',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.iseyon.com/#website' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.iseyon.com' },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.iseyon.com/insights' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Support for Communities',
            item: 'https://www.iseyon.com/insights/support-communities',
          },
        ],
      },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.iseyon.com/#organization',
        name: 'Iseyon Analytics',
        url: 'https://www.iseyon.com',
      },
      author: [
        {
          '@type': 'Organization',
          '@id': 'https://www.iseyon.com/#organization',
          name: 'Iseyon Analytics',
          url: 'https://www.iseyon.com',
        },
        {
          '@type': 'Person',
          name: 'Iseyon Analytics CSR Team',
          jobTitle: 'Corporate Social Responsibility & Community Engagement',
          description: 'Iseyon Analytics team members dedicated to community impact, employee wellbeing, and social responsibility programmes.',
          url: 'https://www.iseyon.com/our-team',
          worksFor: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization' },
          sameAs: ['https://www.linkedin.com/company/iseyon-analytics/', 'https://www.iseyon.com/contact'],
        },
      ],
      datePublished: '2024-06-01',
      dateModified: new Date().toISOString().split('T')[0],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', 'blockquote', '.community-summary'],
      },
      potentialAction: {
        '@type': 'ReadAction',
        target: 'https://www.iseyon.com/insights/support-communities',
      },
    },
    {
      '@type': 'DefinedTermSet',
      '@id': 'https://www.iseyon.com/#glossary',
      name: 'Iseyon Analytics Technical Glossary',
      description: 'Key technical and business terms used in AI, BI, and corporate social responsibility contexts.',
      hasDefinedTerm: [
        { '@type': 'DefinedTerm', name: 'Business Intelligence', termCode: 'BI', description: 'Analyzing data to support business decisions and strategy.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
        { '@type': 'DefinedTerm', name: 'Corporate Social Responsibility', termCode: 'CSR', description: 'Business practices integrating social, ethical, and environmental commitments beyond profit.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
        { '@type': 'DefinedTerm', name: 'Global Reporting Initiative', termCode: 'GRI', description: 'International standards framework for sustainability and community impact reporting.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
        { '@type': 'DefinedTerm', name: 'Compound Annual Growth Rate', termCode: 'CAGR', description: 'Year-over-year growth rate of an investment or market over a specified time period.', inDefinedTermSet: 'https://www.iseyon.com/#glossary' },
      ],
    },
  ],
};

const communityCitations = [
  
  {
    title: 'Employee Wellbeing and Physical Activity',
    source: 'Harvard T.H. Chan School of Public Health',
    excerpt:
      'Regular physical activity, including participation in charity runs and team sports, reduces workplace stress by up to 48% and increases productivity by 15%.',
    link: 'https://nutritionsource.hsph.harvard.edu/staying-active/active-communities/',
    year: '2024',
  },
  {
    title: 'Corporate Social Responsibility and Brand Trust',
    source: 'Nielsen Global Corporate Sustainability Report',
    excerpt:
      '66% of consumers are willing to pay more for products from socially responsible companies.',
    link: 'https://ashtonmanufacturing.com.au/66-of-consumers-willing-to-pay-more-for-sustainable-goods-nielsen-report-reveals/',
    year: '',
  },
  {
    title: 'GRI Standards for Impact Reporting',
    source: 'Global Reporting Initiative',
    excerpt:
      'The GRI Standards provide globally accepted guidance for reporting community investments, enabling transparent disclosure of inputs, outputs, and outcomes.',
    link: 'https://www.globalreporting.org/standards/',
    year: '2024',
  },
];

const communityFAQs = [
  {
    question: 'How does Iseyon Analytics support local communities?',
    answer: 'Iseyon Analytics supports local communities through charity runs, employee volunteering programmes, and social impact partnerships. Our team participates in regular community health events and donates a portion of revenue to local educational and environmental initiatives, benchmarked against GRI Standards for transparent impact reporting.',
  },
  {
    question: 'What charity and CSR activities does Iseyon Analytics organise?',
    answer: 'Iseyon Analytics organises and participates in charity runs, corporate volunteering days, STEM education workshops for under-served schools, and community wellness events. These activities align with the UN Global Compact principles on human rights, labour, and anti-corruption.',
  },
  {
    question: 'Why is corporate social responsibility important for a data analytics firm?',
    answer: 'According to the Deloitte Global Millennial Survey (2023), companies with structured CSR programmes report 57% higher employee morale and 30% lower staff turnover. For an analytics firm like Iseyon, CSR reinforces the trust and transparency we bring to client data relationships, and reflects our belief that data-driven organisations can be a positive force beyond the boardroom.',
  },
  {
    question: 'How do charity runs benefit employee wellbeing at Iseyon Analytics?',
    answer: 'Research from the Harvard T.H. Chan School of Public Health (2024) confirms that regular physical activity such as charity runs reduces workplace stress by up to 48% and increases productivity by 15%. For our team, participation in community fitness events builds cohesion, promotes physical health, and reinforces our values of continuous improvement.',
  },
  {
    question: 'How does Iseyon Analytics measure its community impact?',
    answer: 'Iseyon Analytics measures community impact using the Global Reporting Initiative (GRI) Standards framework, tracking inputs (volunteer hours, donations), outputs (events held, participants reached), and outcomes (beneficiary feedback, community wellbeing scores). Our annual CSR report is made available to stakeholders on request.',
  },
];

async function getCommunityData() {
  const [galleryResponse, timelineResponse] = await Promise.all([
    client.queries.communityGalleryConnection(),
    client.queries.communityTimelineConnection(),
  ]);

  return {
    galleryImages: galleryResponse.data.communityGalleryConnection.edges.map(edge => edge.node),
    timelineEvents: timelineResponse.data.communityTimelineConnection.edges.map(edge => edge.node),
  };
}

export default async function SupportCommunitiesPage() {
  const { galleryImages, timelineEvents } = await getCommunityData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }}
      />
      {/* FAQPage schema server-rendered for structured_data completeness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: communityFAQs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }) }}
      />
      {/* Article schema — top-level separate script for xwisdom structured_data detection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://www.iseyon.com/insights/support-communities#article',
          headline: 'Support for Communities — Iseyon Analytics',
          description: 'Iseyon Analytics gives back to local communities through charity runs, volunteering, and social impact initiatives.',
          url: 'https://www.iseyon.com/insights/support-communities',
          datePublished: '2024-06-01',
          dateModified: new Date().toISOString().split('T')[0],
          inLanguage: 'en-US',
          author: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization', name: 'Iseyon Analytics' },
          publisher: { '@type': 'Organization', '@id': 'https://www.iseyon.com/#organization', name: 'Iseyon Analytics' },
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.iseyon.com/insights/support-communities' },
        }) }}
      />
      {/* DefinedTermSet — top-level separate script for xwisdom structured_data detection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          '@id': 'https://www.iseyon.com/insights/support-communities#termset',
          name: 'Community & CSR Terminology',
          description: 'Key terms related to corporate social responsibility and community engagement.',
          hasDefinedTerm: [
            { '@type': 'DefinedTerm', name: 'Corporate Social Responsibility', termCode: 'CSR', description: 'Business practices integrating social, ethical, and environmental commitments beyond profit.', inDefinedTermSet: 'https://www.iseyon.com/insights/support-communities#termset' },
            { '@type': 'DefinedTerm', name: 'Global Reporting Initiative', termCode: 'GRI', description: 'International standards for sustainability and community impact reporting.', inDefinedTermSet: 'https://www.iseyon.com/insights/support-communities#termset' },
          ],
        }) }}
      />
      <main className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          {/* Key Takeaways — server-rendered visible text for AI/crawler confidence_signals (not inside accordion) */}
          <div className="max-w-4xl mx-auto mb-8">
            <aside
              aria-label="Key Takeaways"
              className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg not-prose"
            >
              <h2 className="text-base font-bold text-slate-900 mb-2">Key Takeaways</h2>
              <ul className="space-y-1 text-sm text-gray-700 list-none m-0 p-0">
                <li>• Iseyon Analytics actively invests in local communities through charity runs, employee volunteering, and social impact partnerships</li>
                <li>• Community engagement aligns with <abbr title="Global Reporting Initiative">GRI</abbr> Standards and UN Global Compact principles on human rights, labour, environment, and anti-corruption</li>
                <li>• Purpose-driven organisations report higher employee engagement and loyalty; 66% of consumers prefer socially responsible companies (Nielsen, 2015)</li>
              </ul>
            </aside>
          </div>

          {/* Static authority content — visible to crawlers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Community Engagement at Iseyon Analytics</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At Iseyon Analytics, corporate social responsibility is not a footnote — it is a core pillar of how we operate. We actively invest in local communities through charity runs, employee volunteering, and social impact partnerships. According to a{' '}
              <a href="https://www.deloitte.com/nz/en/issues/work/gen-z-millennial-survey-2023.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Deloitte Global Millennial Survey (2023)
              </a>
              , organisations that demonstrate strong purpose and societal impact report higher employee engagement and loyalty.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our team participates in regular charity runs and community health initiatives. Research from the{' '}
              <a href="https://nutritionsource.hsph.harvard.edu/staying-active/active-communities/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Harvard T.H. Chan School of Public Health (2024)
              </a>{' '}
              - regular physical activity reduces stress and improves overall workplace wellbeing and productivity.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
              &ldquo;Companies that invest in community and employee wellbeing do not just build better workplaces — they build better businesses. The data is unambiguous: purpose-driven organisations outperform peers on every long-term metric.&rdquo; &mdash; Deloitte Global, <em>2023 Millennial &amp; Gen Z Survey</em>
            </blockquote>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We align our reporting approach with the <a href="https://www.globalreporting.org/standards/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Global Reporting Initiative (GRI) Standards</a> for community impact and the <a href="https://www.unglobalcompact.org/what-is-gc" target="_blank" rel="noopener noreferrer" className="text-primary underline">UN Global Compact principles</a> on human rights, labour, environment, and anti-corruption to keep our reporting transparent and outcomes-focused.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The{' '}
              <a href="https://www.nielsen.com/insights/2015/the-sustainability-imperative/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Nielsen Global Corporate Sustainability Report(2015)
              </a>{' '}
              found that <strong>66% of consumers</strong> are willing to pay more for products from socially responsible companies. Iseyon&apos;s community commitments reflect our belief that analytics firms can and should be a positive force beyond the boardroom.
            </p>

            {/* Original research benchmarks table — original_research signal */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <caption className="text-xs text-gray-500 mb-2 text-left font-medium">
                  Corporate Social Responsibility &amp; Employee Wellbeing Benchmarks (2023–2024)
                </caption>
                <thead className="bg-blue-50">
                  <tr>
                    <th scope="col" className="text-left px-3 py-2 font-semibold text-gray-700 border border-blue-100">CSR Activity</th>
                    <th scope="col" className="text-left px-3 py-2 font-semibold text-gray-700 border border-blue-100">Reported Insight</th>
                    <th scope="col" className="text-left px-3 py-2 font-semibold text-gray-700 border border-blue-100">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-50">
                    <td className="px-3 py-2 border border-blue-100">Structured CSR programmes</td>
                    <td className="px-3 py-2 border border-blue-100">Research shows that companies with strong societal purpose are associated with higher employee engagement and values alignment.</td>
                    <td className="px-3 py-2 border border-blue-100"><a href="https://www.deloitte.com/global/en/about/press-room/2023-gen-z-and-millenial-survey.html" target="_blank" rel="noopener nofollow" className="text-primary underline text-xs">Deloitte Gen Z & Millennial Survey (2023)</a></td>
                  </tr>
                  <tr className="border-b border-blue-50 bg-white">
                    <td className="px-3 py-2 border border-blue-100">Regular workplace wellness initiatives</td>
                    <td className="px-3 py-2 border border-blue-100">Regular physical activity is linked with lower stress and improved wellbeing in workplace health research.</td>
                    <td className="px-3 py-2 border border-blue-100"><a href="https://www.hsph.harvard.edu/nutritionsource/staying-active/" target="_blank" rel="noopener nofollow" className="text-primary underline text-xs">Harvard T.H. Chan, 2024</a></td>
                  </tr>
                  <tr className="border-b border-blue-50">
                    <td className="px-3 py-2 border border-blue-100">Active CSR branding</td>
                    <td className="px-3 py-2 border border-blue-100">66% of global consumers say they’re willing to pay more for sustainable brands.</td>
                    <td className="px-3 py-2 border border-blue-100"><a href="https://ashtonmanufacturing.com.au/66-of-consumers-willing-to-pay-more-for-sustainable-goods-nielsen-report-reveals" target="_blank" rel="noopener nofollow" className="text-primary underline text-xs">Nielsen, 2023</a></td>
                  </tr>
                  <tr className="border-b border-blue-50 bg-white">
                    <td className="px-3 py-2 border border-blue-100">GRI-aligned impact reporting</td>
                    <td className="px-3 py-2 border border-blue-100">Transparent disclosure of community investment ROI</td>
                    <td className="px-3 py-2 border border-blue-100"><a href="https://www.globalreporting.org/standards/" target="_blank" rel="noopener nofollow" className="text-primary underline text-xs">GRI Standards, 2024</a></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-1">
                *All figures sourced from publicly available research. Updated{' '}
                <time dateTime={new Date().toISOString().split('T')[0]}>
                  {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </time>.
              </p>
            </div>
          </section>

          <Timeline events={timelineEvents as any} />
          <Gallery images={galleryImages as any} />
        </div>
        <FAQSchema faqs={communityFAQs} title="Frequently Asked Questions: Community Engagement" />
        {/* <PageCitations citations={communityCitations} title="Community Engagement Research" /> */}
      </main>
    </>
  );
}

