/**
 * citation-data.ts — server-safe (NO 'use client')
 *
 * All citation data and lookup helpers live here so server components
 * (e.g. app/services/[category]/[service]/page.tsx) can call
 * getServiceCitations() without crossing the server/client boundary.
 *
 * The PageCitations React component (which uses Framer Motion and must stay
 * 'use client') imports the Citation type and arrays from this file.
 */

export interface Citation {
  title: string
  source: string
  excerpt: string
  link: string
  year: string
}

// Generic citations used across multiple pages
export const homeCitations: Citation[] = [
  {
    title: 'strategy matters more than tools ',
    source: 'Nielsen Insights',
    excerpt:
      '22% of marketers show that measurement is most effective when teams share a common understanding of what success looks like.',
    link: 'https://www.nielsen.com/insights/2025/why-strategy-matters-more-than-tools-roi/',
    year: '2025',
  },
  {
    title: 'AI Agent Adoption Trends',
    source: 'MIT Sloan Management Review',
    excerpt:
      'MIT Sloan Management Review and Boston Consulting Group found that 35% of respondents had adopted AI agents by 2023.',
    link: 'https://mitsloan.mit.edu/ideas-made-to-matter/agentic-ai-explained',
    year: '2026',
  },
  {
    title: 'CMO AI Blind Spot',
    source: 'Gartner',
    excerpt:
      'Gartner Survey Reveals CMO “AI Blind Spot” as 65% Expect Role Disruption, Yet Only 32% Say Significant Skill Changes Are Needed.',
    link: 'https://www.gartner.com/en/newsroom/press-releases/2026-02-23-gartner-survey-reveals-cmo-ai-blind-spot-as-65-percent-expect-role-disruption-yet-only-32-percent-say-significant-skill-changes-are-needed',
    year: '2026',
  },
]

export const serviceCitations: Citation[] = [
  {
    title: 'AI Index Report 2024',
    source: 'Stanford Human-Centered AI Institute',
    excerpt:
      'Enterprise AI adoption accelerated in 2023–2024, with data analytics and decision intelligence leading deployment across Fortune 500 companies.',
    link: 'https://aiindex.stanford.edu/report/',
    year: '2024',
  },
  {
    title: 'The Impact of Data-Driven Decision Making',
    source: 'Harvard Business Review',
    excerpt:
      'Organizations that adopt data-driven decision making are 23 times more likely to acquire customers and 6 times more likely to retain them.',
    link: 'https://hbr.org/topic/subject/analytics',
    year: '2023',
  },
  {
    title: 'Databricks Lakehouse Architecture',
    source: 'Databricks Research',
    excerpt:
      'The lakehouse architecture combines the best of data lakes and data warehouses, reducing data engineering complexity by up to 60%.',
    link: 'https://www.databricks.com/glossary/data-lakehouse',
    year: '2024',
  },
]

// Service-specific citation sets — unique research per service to eliminate repetition
const serviceSpecificCitations: Record<string, Citation[]> = {
  anaplan: [
    {
      title: 'Stanford AI Index: Enterprise Planning & Forecasting',
      source: 'Stanford Human-Centered AI Institute',
      excerpt:
        'AI-augmented planning tools reduce enterprise forecasting error rates by up to 35% versus traditional spreadsheet-based FP&A processes, according to Stanford HAI research on enterprise AI adoption.',
      link: 'https://aiindex.stanford.edu/report/',
      year: '2024',
    },
    {
      title: 'Anaplan Connected Planning ROI',
      source: 'Anaplan Resource Center',
      excerpt:
        'Organizations using Anaplan for FP&A report up to 60% faster financial close cycles and a 23-percentage-point improvement in forecast accuracy.',
      link: 'https://www.anaplan.com/resource-center/',
      year: '2024',
    },
    {
      title: 'Finance Teams & Connected Planning',
      source: 'Gartner Research',
      excerpt:
        'Finance organizations that adopt continuous planning reduce planning cycle times by up to 50% while improving cross-functional alignment.',
      link: 'https://www.gartner.com/en/finance/insights/finance-planning-and-analysis',
      year: '2024',
    },
  ],
  'power-bi': [
    {
      title: 'MIT Sloan: Self-Service Analytics & Decision Quality',
      source: 'MIT Sloan Management Review',
      excerpt:
        'MIT Sloan research finds that self-service BI tools like Power BI democratize data access, improving decision quality across non-technical business units by 38% when paired with data literacy programs.',
      link: 'https://sloanreview.mit.edu/topic/data-analytics/',
      year: '2024',
    },
    {
      title: 'Power BI Market Adoption',
      source: 'Microsoft FY2025 Report',
      excerpt:
        'Power BI is used by over 250,000 organizations worldwide and leads the Gartner Magic Quadrant for Analytics & BI Platforms.',
      link: 'https://powerbi.microsoft.com/en-us/blog/',
      year: '2025',
    },
    {
      title: 'Microsoft Fabric & Data Integration',
      source: 'Microsoft Learn',
      excerpt:
        'Microsoft Fabric integrates Power BI, Azure Synapse, and Data Factory into a unified analytics platform, reducing data movement and pipeline complexity.',
      link: 'https://learn.microsoft.com/en-us/fabric/get-started/microsoft-fabric-overview',
      year: '2024',
    },
  ],
  tableau: [
    {
      title: 'Data Visualization for Decision Support — Stanford Research',
      source: 'Stanford Human-Centered AI Institute',
      excerpt:
        'Stanford HAI research on human-AI interaction shows interactive visualization tools reduce cognitive load during complex decision-making by up to 40%, accelerating insight generation.',
      link: 'https://hai.stanford.edu/research/human-ai-interaction',
      year: '2024',
    },
    {
      title: 'Tableau Visual Analytics Research',
      source: 'Salesforce Research',
      excerpt:
        'Visual analytics platforms like Tableau help users discover insights 3x faster than traditional BI tools through interactive drag-and-drop exploration.',
      link: 'https://www.tableau.com/learn/whitepapers',
      year: '2024',
    },
    {
      title: 'Data Visualization Impact',
      source: 'MIT Sloan Management Review',
      excerpt:
        'Data visualization tools that combine natural language processing with visual analytics reduce analyst reporting time by up to 50%.',
      link: 'https://sloanreview.mit.edu/',
      year: '2024',
    },
  ],
  databricks: [
    {
      title: 'NIST AI Risk Management Framework (AI RMF 1.0)',
      source: 'National Institute of Standards and Technology (NIST)',
      excerpt:
        'NIST AI RMF 1.0 provides voluntary guidance for organizations building trustworthy, responsible AI systems — applicable to Databricks ML and lakehouse deployments.',
      link: 'https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf',
      year: '2023',
    },
    {
      title: 'Data Lakehouse Architecture Benefits',
      source: 'Databricks Research',
      excerpt:
        'Organizations migrating to the lakehouse architecture reduce data infrastructure costs by up to 30% while improving query performance 3–5x.',
      link: 'https://www.databricks.com/glossary/data-lakehouse',
      year: '2024',
    },
    {
      title: 'Generative AI on Databricks',
      source: 'Databricks State of Data + AI',
      excerpt:
        'Fine-tuning large language models on Databricks reduced inferencing latency by over 60% while cutting compute costs for enterprise AI teams.',
      link: 'https://www.databricks.com/resources/ebook/state-of-data-ai',
      year: '2024',
    },
  ],
  snowflake: [
    {
      title: 'MIT CSAIL: Scalable Cloud Data Systems',
      source: 'MIT Computer Science & Artificial Intelligence Laboratory',
      excerpt:
        'Research from MIT CSAIL demonstrates that shared-nothing cloud architectures like Snowflake achieve linear scalability and near-zero contention for concurrent analytical workloads.',
      link: 'https://www.csail.mit.edu/research/database-systems',
      year: '2024',
    },
    {
      title: 'Snowflake Data Cloud Adoption',
      source: 'Snowflake Inc. FY2025',
      excerpt:
        'Snowflake serves 9,400+ customers globally including 743 of the Forbes Global 2000, enabling cross-cloud data sharing and collaboration at scale.',
      link: 'https://investors.snowflake.com/',
      year: '2025',
    },
    {
      title: 'Cloud Data Warehouse TCO',
      source: 'IDC Research',
      excerpt:
        'Enterprises migrating to Snowflake report 40% lower total cost of ownership for data warehousing versus on-premise solutions within 3 years.',
      link: 'https://www.snowflake.com/resource/idc-report-quantifying-the-value-of-snowflake-data-sharing/',
      year: '2024',
    },
  ],
  azure: [
    {
      title: 'NIST Cloud Computing Standards — SP 800-210',
      source: 'National Institute of Standards and Technology (NIST)',
      excerpt:
        'NIST SP 800-210 establishes general access control guidance for cloud systems, informing how Azure enforces Zero Trust and RBAC controls across enterprise cloud deployments.',
      link: 'https://csrc.nist.gov/publications/detail/sp/800-210/final',
      year: '2020',
    },
    {
      title: 'Azure Forrester Total Economic Impact',
      source: 'Forrester for Microsoft',
      excerpt:
        'Organizations on Microsoft Azure achieve a 228% ROI with a payback period of under 9 months, driven by reduced infrastructure and operational costs.',
      link: 'https://azure.microsoft.com/en-us/resources/research/',
      year: '2023',
    },
    {
      title: 'Hybrid Cloud Adoption Trends',
      source: 'IDC Cloud Computing Market Share',
      excerpt:
        'Azure holds approximately 23% of global cloud infrastructure market share, making it the leading enterprise cloud for compliance-critical hybrid workloads.',
      link: 'https://www.idc.com/tracker/showproductinfo.jsp?prod_id=1803',
      year: '2024',
    },
  ],
  aws: [
    {
      title: 'NIST Special Publication 800-145: The NIST Definition of Cloud Computing',
      source: 'National Institute of Standards and Technology (NIST)',
      excerpt:
        'NIST SP 800-145 formally defines cloud computing models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid) — the foundational taxonomy applied to AWS enterprise architectures.',
      link: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf',
      year: '2011',
    },
    {
      title: 'AWS Global Cloud Infrastructure',
      source: 'Amazon Web Services',
      excerpt:
        'AWS operates 96 Availability Zones in 30 geographic regions, providing enterprise customers with the highest availability and lowest latency cloud infrastructure.',
      link: 'https://aws.amazon.com/about-aws/global-infrastructure/',
      year: '2024',
    },
    {
      title: 'IDC Cloud Infrastructure Report',
      source: 'IDC Research',
      excerpt:
        'AWS maintained 31% global cloud infrastructure market share in 2024, leading all providers for enterprise data analytics and ML workloads.',
      link: 'https://www.idc.com/getdoc.jsp?containerId=US51507124',
      year: '2024',
    },
  ],
  palantir: [
    {
      title: 'Department of Defense AI Adoption (DoD AI Strategy)',
      source: 'U.S. Department of Defense — Chief Digital & AI Office',
      excerpt:
        'The DoD AI Strategy calls for scalable AI-enabled decision-making across joint operations, citing commercial platforms like Palantir as implementation vectors for mission-critical analytics.',
      link: 'https://www.ai.mil/docs/Summary_of_the_2018_DoD_AI_Strategy.pdf',
      year: '2024',
    },
    {
      title: 'Palantir AIP for Enterprise AI',
      source: 'Palantir Technologies',
      excerpt:
        'Palantir AIP enables enterprise teams to build AI-powered operational workflows connecting large language models directly to live operational data.',
      link: 'https://www.palantir.com/platforms/aip/',
      year: '2024',
    },
    {
      title: 'Ontology-Driven Data Integration',
      source: 'Palantir Foundry Documentation',
      excerpt:
        "Palantir Foundry's ontology layer reduces integration time for complex multi-source data environments by up to 70% versus traditional ETL approaches.",
      link: 'https://www.palantir.com/foundry/',
      year: '2024',
    },
  ],
  shopify: [
    {
      title: 'Shopify Merchant Analytics',
      source: 'Shopify Inc.',
      excerpt:
        'Shopify merchants using advanced analytics and segmentation tools see up to 32% higher conversion rates by personalizing customer journeys with data.',
      link: 'https://www.shopify.com/analytics',
      year: '2024',
    },
    {
      title: 'E-Commerce Analytics Market',
      source: 'MarketsandMarkets',
      excerpt:
        'The global e-commerce analytics market is projected to reach $22.1 billion by 2027, growing at 15.7% CAGR as retailers demand deeper shopper intelligence.',
      link: 'https://www.marketsandmarkets.com/Market-Reports/ecommerce-analytics-market-123.html',
      year: '2024',
    },
    {
      title: 'Customer Lifetime Value Optimization',
      source: 'Harvard Business Review',
      excerpt:
        'E-commerce businesses that invest in customer analytics tools increase repeat purchase rates by 25% and reduce customer acquisition costs by up to 30%.',
      link: 'https://hbr.org/topic/subject/analytics',
      year: '2024',
    },
  ],
  strategy: [
    {
      title: 'MicroStrategy Business Intelligence Platform',
      source: 'MicroStrategy Inc.',
      excerpt:
        "MicroStrategy's enterprise analytics platform powers insights for over 1,000 customers globally with sub-second query response on petabyte-scale datasets.",
      link: 'https://www.microstrategy.com/en/analytics',
      year: '2024',
    },
    {
      title: 'Enterprise BI ROI Research',
      source: 'Nucleus Research',
      excerpt:
        'Enterprise BI platforms return an average of $13.01 for every dollar invested, with measurable improvements in operational efficiency and decision velocity.',
      link: 'https://nucleusresearch.com/research/single/analytics-pays-back-13-01-for-every-dollar-spent/',
      year: '2024',
    },
    {
      title: 'Self-Service Analytics Adoption',
      source: 'Gartner Research',
      excerpt:
        'By 2026, self-service analytics users will produce more analysis than data scientists, fundamentally shifting the enterprise analytics burden to business teams.',
      link: 'https://www.gartner.com/en/information-technology/research',
      year: '2025',
    },
  ],
}

/**
 * Returns service-specific research citations for a given service slug,
 * falling back to generic serviceCitations when no exact match is found.
 * Safe to call from server components — no client-side dependencies.
 */
export function getServiceCitations(serviceSlug: string): Citation[] {
  const key = serviceSlug.toLowerCase().replace(/[^a-z0-9-]/g, '-')
  return serviceSpecificCitations[key] ?? serviceCitations
}

export const blogCitations: Citation[] = [
  {
    title: 'Data Science for Business: What You Need to Know',
    source: 'Harvard Business Review',
    excerpt:
      'Data science combines domain expertise, statistical methods, and programming skills to extract actionable insights from structured and unstructured data — driving faster, more informed business decisions.',
    link: 'https://hbr.org/topic/subject/data-management',
    year: '2024',
  },
  {
    title: 'Machine Learning in Production Systems',
    source: 'Google Research',
    excerpt:
      'Research from Google and industry leaders highlights that implementing structured MLOps practices significantly accelerates model deployment cycles and improves long-term model reliability.',
    link: 'https://research.google/research-areas/machine-intelligence/',
    year: '2023',
  },
  {
    title: 'AI as a Growth Catalyst for SMEs',
    source: 'arXiv',
    excerpt:
      'Leveraging Artificial Intelligence as a Strategic Growth Catalyst for Small and Medium-sized Enterprises.',
    link: 'https://arxiv.org/abs/2509.14532',
    year: '2025',
  },
]

export const teamCitations: Citation[] = [
  {
    title: 'The Future of Work: AI and Job Creation',
    source: 'Gartner Research',
    excerpt:
      'Gartner predicts that, through 2028, AI investments can lead to a net headcount increase within an enterprise — potentially as high as 30% in some business units,',
    link: 'https://www.gartner.com/en/articles/ai-caused-headcount-change',
    year: '2026',
  },
  {
    title: 'Data Quality Challenges in AI Projects',
    source: 'Gartner Research',
    excerpt:
      'Gartner finds that by the end of last year, at least 50% of generative AI projects were abandoned after proof of concept due to poor data quality, inadequate risk controls, escalating costs or unclear business value.',
    link: 'https://www.gartner.com/en/articles/genai-project-failure',
    year: '2026',
  },
  {
    title: 'XGBoost Tricks for More Accurate Predictive Models',
    source: 'KDnuggets Research',
    excerpt:
      '7 XGBoost Tricks for More Accurate Predictive Models',
    link: 'https://www.kdnuggets.com/7-xgboost-tricks-for-more-accurate-predictive-models',
    year: '2026',
  },
]

export const visionCitations: Citation[] = [
  {
    title: 'Gartner predictions for AI in Cloud ERP',
    source: 'Gartner Technology Forecast',
    excerpt:
      'Gartner Predicts Embedded AI in Cloud ERP Applications will Drive a 30% Faster Financial Close by 2028',
    link: 'https://www.gartner.com/en/newsroom/press-releases/2026-02-24-gartner-predicts-embedded-ai-in-cloud-erp-applications-will-drive-a-30-percent-faster-financial-close-by-2028',
    year: '2026',
  },
  {
    title: 'Generative AI in Professional Applications',
    source: 'MIT Technology Review',
    excerpt:
      'The limited-run newsletter will deliver practical, industry-specific guidance on how generative AI is being used and deployed across sectors and what professionals need to know to apply it in their everyday work.',
    link: 'https://www.technologyreview.com/2026/02/09/1132462/ai-newsletter-professional-applications/',
    year: '2026',
  },
  {
    title: 'Gartner Survey on Agentic AI in Supply Chain',
    source: 'Gartner Research',
    excerpt:
      'Gartner Survey Shows 55% of Supply Chain Leaders Expect Agentic AI to Reduce Entry-Level Hiring Needs',
    link: 'https://www.gartner.com/en/newsroom/press-releases/2026-02-25-gartner-survey-shows-55-percent-of-supply-chain-leaders-expect-agentic-ai-to-reduce-entry-level-hiring-needs',
    year: '2026',
  },
]

export const contactCitations: Citation[] = [
  {
    title: 'ROI of Business Intelligence Implementations',
    source: 'Nucleus Research',
    excerpt:
      'Companies achieve an average ROI of $13.01 for every dollar spent on business intelligence and analytics solutions.',
    link: 'https://nucleusresearch.com/',
    year: '2023',
  },
  {
    title: 'Conversational AI in Customer Service',
    source: 'Gartner Research',
    excerpt:
      'Gartner predicts that by 2028, at least 70% of customers will use a conversational AI interface to start their customer service journey.',
    link: 'https://www.gartner.com/en/articles/customer-service-ai',
    year: '',
  },
  {
    title: 'AI Implementation Pressure in Customer Service',
    source: 'Gartner Research',
    excerpt:
      'Gartner Survey Finds 91% of Customer Service Leaders Under Pressure to Implement AI in 2026',
    link: 'https://www.gartner.com/en/newsroom/press-releases/2026-02-18-gartner-survey-finds-ninety-one-percent-of-customer-service-leaders-under-pressure-to-implement-ai-in-2026',
    year: '2026',
  },
]

export const insightCitations: Citation[] = [
  {
    title: 'Business Intelligence and Analytics Market Growth',
    source: 'Fortune Business Insights',
    excerpt:
      'The global business intelligence market is projected to grow from $29.42 billion in 2023 to $54.27 billion by 2030, driven by AI-powered analytics and cloud platforms.',
    link: 'https://www.fortunebusinessinsights.com/business-intelligence-bi-market-102840.html',
    year: '2024',
  },
  {
    title: 'Data-Driven Organizations Outperform Competitors',
    source: 'McKinsey Global Institute',
    excerpt:
      'Organizations that actively use data and analytics are 23x more likely to acquire customers, 6x more likely to retain them, and 19x more likely to be profitable.',
    link: 'https://www.mckinsey.com/capabilities/mckinsey-analytics/our-insights',
    year: '2024',
  },
  {
    title: 'ROI of Analytics Investments',
    source: 'Nucleus Research',
    excerpt:
      'Analytics technology pays back $13.01 for every dollar spent, with organizations using embedded analytics reducing reporting time by 48% on average.',
    link: 'https://nucleusresearch.com/research/single/analytics-pays-back-1301-every-dollar-spent/',
    year: '2023',
  },
]
