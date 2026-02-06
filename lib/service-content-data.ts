import {
  BarChart3,
  TrendingUp,
  PieChart,
  Target,
  Cog,
  Database,
  Activity,
  Layers,
  Cloud,
  Server,
  Cpu,
  Zap,
  LineChart,
  TableIcon,
  Brain,
  GitBranch,
  HardDrive,
  Settings,
  ShieldCheck,
  Users,
  BookOpen,
  type LucideIcon,
} from 'lucide-react'

// Service Category Types
export type ServiceCategory = 'cloud-and-platforms' | 'bi-and-analytics' | 'data-and-engineering' | 'support'
export type InsightCategory = 'business-intelligence' | 'internal-applications' | 'support-communities'

interface PageContent {
  slug: string
  title: string
  description: string
  heroImage: string
  backLink: string
  backLinkText: string
  contentSections?: {
    heading: string
    paragraphs: string[]
  }[]
  features: {
    icon: LucideIcon
    title: string
    description: string
  }[]
  featuresTitle?: string
  featuresDescription?: string
  stats?: {
    value: string
    label: string
  }[]
  benefits?: {
    text: string
  }[]
  benefitsTitle?: string
  benefitsImage?: string
  bottomCtaTitle?: string
  bottomCtaDescription?: string
  bottomCtaButtonText?: string
}

// Services Content Data
export const servicesContent: Record<ServiceCategory, Record<string, PageContent>> = {
  'cloud-and-platforms': {
    aws: {
      slug: 'aws',
      title: 'AWS Solutions',
      description: 'Build, deploy, and scale applications with Amazon Web Services. Leverage the most comprehensive cloud platform for your business.',
      heroImage: '/services/aws.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      contentSections: [
        {
          heading: 'Comprehensive AWS Cloud Solutions',
          paragraphs: [
            'Amazon Web Services (AWS) is the world\'s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Whether you are looking to migrate your existing infrastructure, build new applications, or optimize your current cloud setup, our AWS experts are here to help you every step of the way.',
            'Our team of AWS-certified professionals brings years of experience in designing, implementing, and managing cloud solutions across various industries. We understand that every business has unique requirements, and we tailor our AWS solutions to meet your specific needs while ensuring best practices in security, performance, and cost optimization.',
          ],
        },
        {
          heading: 'Migration and Modernization',
          paragraphs: [
            'Moving to the cloud can be a complex undertaking, but with our proven migration methodology, we make the transition smooth and efficient. We begin with a comprehensive assessment of your current infrastructure, applications, and workloads to develop a customized migration strategy that minimizes risk and downtime.',
            'Our migration services include lift-and-shift migrations for quick moves to the cloud, re-platforming to take advantage of cloud-native features, and complete application modernization using containers, serverless architectures, and microservices. We ensure that your applications are not just moved to the cloud, but optimized to take full advantage of AWS capabilities.',
          ],
        },
        {
          heading: 'Security and Compliance',
          paragraphs: [
            'Security is paramount in today\'s digital landscape, and AWS provides a robust set of tools and services to help you build secure, compliant applications. Our security experts implement defense-in-depth strategies using AWS security services including IAM, Security Groups, WAF, Shield, and GuardDuty.',
            'We help you achieve compliance with industry standards such as HIPAA, PCI-DSS, SOC 2, and GDPR through proper configuration, monitoring, and documentation. Our approach includes regular security assessments, automated compliance checks, and continuous monitoring to ensure your AWS environment remains secure and compliant.',
          ],
        },
      ],
      featuresTitle: 'AWS Capabilities',
      featuresDescription: 'Harness the power of AWS cloud services',
      features: [
        {
          icon: Cloud,
          title: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to AWS with minimal downtime and maximum efficiency.',
        },
        {
          icon: Server,
          title: 'EC2 & Compute',
          description: 'Deploy scalable compute capacity with EC2, Lambda, and container services.',
        },
        {
          icon: Database,
          title: 'Database Services',
          description: 'Implement RDS, DynamoDB, and other managed database solutions.',
        },
        {
          icon: ShieldCheck,
          title: 'Security & Compliance',
          description: 'Ensure your applications meet security standards with AWS security services.',
        },
      ],
      stats: [
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '200+', label: 'AWS Services' },
        { value: '50%', label: 'Cost Savings' },
        { value: '24/7', label: 'Support' },
      ],
      benefits: [
        { text: 'Scalable infrastructure on demand' },
        { text: 'Pay only for what you use' },
        { text: 'Global reach with low latency' },
        { text: 'Enterprise-grade security' },
        { text: 'Automated backups and recovery' },
        { text: 'Seamless integration with existing tools' },
      ],
      benefitsTitle: 'Why Choose AWS?',
      benefitsImage: '/services/aws-benefits.jpg',
      bottomCtaTitle: 'Ready to Move to the Cloud?',
      bottomCtaDescription: 'Let our AWS-certified experts guide your cloud transformation journey.',
      bottomCtaButtonText: 'Get Started with AWS',
    },
    azure: {
      slug: 'azure',
      title: 'Microsoft Azure',
      description: 'Transform your business with Microsoft Azure cloud services. Build, manage, and deploy applications on a global network.',
      heroImage: '/services/azure.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Azure Solutions',
      featuresDescription: 'Enterprise-grade cloud computing platform',
      features: [
        {
          icon: Cloud,
          title: 'Hybrid Cloud',
          description: 'Connect on-premises and cloud environments with Azure hybrid solutions.',
        },
        {
          icon: Brain,
          title: 'AI & Machine Learning',
          description: 'Build intelligent applications with Azure AI and cognitive services.',
        },
        {
          icon: Database,
          title: 'Data Management',
          description: 'Store, manage, and analyze data with Azure SQL and Cosmos DB.',
        },
        {
          icon: Settings,
          title: 'DevOps Tools',
          description: 'Streamline development with Azure DevOps and CI/CD pipelines.',
        },
      ],
      benefits: [
        { text: 'Seamless Microsoft integration' },
        { text: 'Hybrid and multi-cloud capabilities' },
        { text: 'Advanced AI and analytics' },
        { text: 'Comprehensive compliance coverage' },
        { text: 'Global data center presence' },
      ],
    },
    snowflake: {
      slug: 'snowflake',
      title: 'Snowflake Data Cloud',
      description: 'Unlock the power of your data with Snowflake. A cloud data platform designed for mobilizing data.',
      heroImage: '/services/snowflake.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Snowflake Features',
      featuresDescription: 'The data cloud built for modern analytics',
      features: [
        {
          icon: Database,
          title: 'Data Warehousing',
          description: 'Centralize and analyze data from multiple sources in one platform.',
        },
        {
          icon: Zap,
          title: 'Instant Scalability',
          description: 'Scale compute and storage independently for optimal performance.',
        },
        {
          icon: GitBranch,
          title: 'Data Sharing',
          description: 'Securely share live data across your organization and partners.',
        },
        {
          icon: LineChart,
          title: 'Real-time Analytics',
          description: 'Query and analyze data in real-time with near-zero latency.',
        },
      ],
      benefits: [
        { text: 'Zero maintenance overhead' },
        { text: 'Automatic scaling and optimization' },
        { text: 'Support for structured and semi-structured data' },
        { text: 'Built-in data sharing and collaboration' },
        { text: 'Pay only for what you use' },
      ],
    },
    databricks: {
      slug: 'databricks',
      title: 'Databricks Platform',
      description: 'Unify your data, analytics, and AI on one platform. Accelerate innovation with Databricks.',
      heroImage: '/services/databricks.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Databricks Capabilities',
      featuresDescription: 'Unified analytics and AI platform',
      features: [
        {
          icon: Brain,
          title: 'Machine Learning',
          description: 'Build, train, and deploy ML models at scale with MLflow integration.',
        },
        {
          icon: Zap,
          title: 'Delta Lake',
          description: 'Reliable data lakes with ACID transactions and scalable metadata.',
        },
        {
          icon: LineChart,
          title: 'Real-time Analytics',
          description: 'Process streaming and batch data with Apache Spark.',
        },
        {
          icon: Users,
          title: 'Collaborative Notebooks',
          description: 'Work together on data projects with shared notebooks and workflows.',
        },
      ],
      benefits: [
        { text: 'Unified platform for data and AI' },
        { text: 'Apache Spark optimization' },
        { text: 'Built-in MLOps capabilities' },
        { text: 'Multi-cloud support' },
        { text: 'Enterprise security and governance' },
      ],
    },
  },
  'bi-and-analytics': {
    'power-bi': {
      slug: 'power-bi',
      title: 'Power BI Solutions',
      description: 'Transform data into stunning visualizations and actionable insights with Microsoft Power BI.',
      heroImage: '/services/powerbi.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Power BI Features',
      featuresDescription: 'Interactive business intelligence platform',
      features: [
        {
          icon: BarChart3,
          title: 'Interactive Dashboards',
          description: 'Create compelling, interactive dashboards that tell your data story.',
        },
        {
          icon: LineChart,
          title: 'Advanced Analytics',
          description: 'Leverage AI-powered analytics and predictive insights.',
        },
        {
          icon: Settings,
          title: 'Data Modeling',
          description: 'Build sophisticated data models with DAX and Power Query.',
        },
        {
          icon: Users,
          title: 'Collaboration',
          description: 'Share reports and collaborate with team members seamlessly.',
        },
      ],
      benefits: [
        { text: 'Connect to 100+ data sources' },
        { text: 'Real-time dashboard updates' },
        { text: 'Mobile-ready reports' },
        { text: 'Integration with Microsoft 365' },
        { text: 'AI-powered insights' },
      ],
    },
    tableau: {
      slug: 'tableau',
      title: 'Tableau Analytics',
      description: 'See and understand your data with Tableau. Create beautiful, interactive visualizations in minutes.',
      heroImage: '/services/tableau.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Tableau Capabilities',
      featuresDescription: 'Visual analytics platform',
      features: [
        {
          icon: PieChart,
          title: 'Visual Discovery',
          description: 'Explore data visually and discover hidden insights naturally.',
        },
        {
          icon: TrendingUp,
          title: 'Trend Analysis',
          description: 'Identify patterns and trends with advanced analytics.',
        },
        {
          icon: Database,
          title: 'Data Blending',
          description: 'Combine data from multiple sources without complex coding.',
        },
        {
          icon: Target,
          title: 'Forecasting',
          description: 'Predict future trends with built-in forecasting algorithms.',
        },
      ],
      benefits: [
        { text: 'Drag-and-drop interface' },
        { text: 'Natural language queries' },
        { text: 'Embedded analytics' },
        { text: 'Scalable performance' },
        { text: 'Enterprise data governance' },
      ],
    },
    microstrategy: {
      slug: 'microstrategy',
      title: 'MicroStrategy Platform',
      description: 'Enterprise analytics and mobility platform. Deliver insights to every user, on any device.',
      heroImage: '/services/microstrategy.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'MicroStrategy Features',
      featuresDescription: 'Enterprise business intelligence platform',
      features: [
        {
          icon: BarChart3,
          title: 'HyperIntelligence',
          description: 'Inject analytics directly into workflows and applications.',
        },
        {
          icon: Brain,
          title: 'AI-Powered Insights',
          description: 'Get intelligent recommendations and automated insights.',
        },
        {
          icon: TableIcon,
          title: 'Enterprise Reporting',
          description: 'Create pixel-perfect reports for regulatory compliance.',
        },
        {
          icon: ShieldCheck,
          title: 'Security & Governance',
          description: 'Enterprise-grade security and data governance controls.',
        },
      ],
      benefits: [
        { text: 'HyperIntelligence technology' },
        { text: 'Mobile-first design' },
        { text: 'Federated analytics' },
        { text: 'Cloud-native architecture' },
        { text: 'Self-service capabilities' },
      ],
    },
  },
  'data-and-engineering': {
    'sql-server': {
      slug: 'sql-server',
      title: 'SQL Server Solutions',
      description: 'Build intelligent, mission-critical applications with SQL Server. Industry-leading performance and security.',
      heroImage: '/services/sql-server.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'SQL Server Features',
      featuresDescription: 'Enterprise database management system',
      features: [
        {
          icon: Database,
          title: 'High Performance',
          description: 'Lightning-fast transaction processing and query performance.',
        },
        {
          icon: ShieldCheck,
          title: 'Advanced Security',
          description: 'Protect data with encryption, row-level security, and auditing.',
        },
        {
          icon: Brain,
          title: 'Intelligent Features',
          description: 'Leverage AI and machine learning within the database.',
        },
        {
          icon: HardDrive,
          title: 'Data Warehousing',
          description: 'Build scalable data warehouses for analytics workloads.',
        },
      ],
      benefits: [
        { text: 'In-memory performance' },
        { text: 'Always-on availability' },
        { text: 'Cloud-ready capabilities' },
        { text: 'Advanced analytics integration' },
        { text: 'Comprehensive disaster recovery' },
      ],
    },
    'big-data-consulting': {
      slug: 'big-data-consulting',
      title: 'Big Data Consulting',
      description: 'Harness the power of big data. Transform massive datasets into strategic business value.',
      heroImage: '/services/big-data.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Big Data Solutions',
      featuresDescription: 'Enterprise-scale data processing',
      features: [
        {
          icon: Database,
          title: 'Data Lake Architecture',
          description: 'Design and implement scalable data lakes for all your data.',
        },
        {
          icon: Zap,
          title: 'Real-time Processing',
          description: 'Process streaming data in real-time with Apache Kafka and Spark.',
        },
        {
          icon: Brain,
          title: 'Advanced Analytics',
          description: 'Apply machine learning and AI to big data workloads.',
        },
        {
          icon: Cpu,
          title: 'Distributed Computing',
          description: 'Leverage Hadoop, Spark, and cloud platforms for processing.',
        },
      ],
      benefits: [
        { text: 'Handle petabyte-scale data' },
        { text: 'Real-time and batch processing' },
        { text: 'Cost-effective storage' },
        { text: 'Advanced analytics capabilities' },
        { text: 'Scalable infrastructure' },
      ],
    },
    'data-management-consulting': {
      slug: 'data-management-consulting',
      title: 'Data Management Consulting',
      description: 'Optimize your data strategy. Implement best practices for data governance, quality, and lifecycle management.',
      heroImage: '/services/data-management.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Data Management Services',
      featuresDescription: 'Comprehensive data governance and quality',
      features: [
        {
          icon: Settings,
          title: 'Data Governance',
          description: 'Establish policies, standards, and processes for data management.',
        },
        {
          icon: ShieldCheck,
          title: 'Data Quality',
          description: 'Ensure accuracy, completeness, and consistency of your data.',
        },
        {
          icon: GitBranch,
          title: 'Master Data Management',
          description: 'Create a single source of truth for critical business data.',
        },
        {
          icon: Database,
          title: 'Metadata Management',
          description: 'Catalog and manage metadata across your data ecosystem.',
        },
      ],
      benefits: [
        { text: 'Improved data quality' },
        { text: 'Regulatory compliance' },
        { text: 'Reduced data redundancy' },
        { text: 'Better decision-making' },
        { text: 'Enhanced data security' },
      ],
    },
    cloud: {
      slug: 'cloud',
      title: 'Cloud Data Engineering',
      description: 'Build modern data platforms in the cloud. Design scalable, resilient data pipelines and architectures.',
      heroImage: '/services/cloud-data.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Cloud Data Solutions',
      featuresDescription: 'Modern cloud data architectures',
      features: [
        {
          icon: Cloud,
          title: 'Cloud Migration',
          description: 'Migrate data workloads to AWS, Azure, or Google Cloud.',
        },
        {
          icon: Zap,
          title: 'Data Pipelines',
          description: 'Build automated ETL/ELT pipelines with modern tools.',
        },
        {
          icon: Database,
          title: 'Data Warehousing',
          description: 'Implement cloud data warehouses like Snowflake and Redshift.',
        },
        {
          icon: Settings,
          title: 'Infrastructure as Code',
          description: 'Automate infrastructure provisioning with Terraform and CloudFormation.',
        },
      ],
      benefits: [
        { text: 'Elastic scalability' },
        { text: 'Pay-as-you-go pricing' },
        { text: 'Reduced operational overhead' },
        { text: 'Global availability' },
        { text: 'Built-in disaster recovery' },
      ],
    },
  },
  'support': {
    'support-training': {
      slug: 'support-training',
      title: 'Support & Training',
      description: 'Empower your team with expert training and ongoing support. Maximize your technology investments.',
      heroImage: '/services/support-training.jpg',
      backLink: '/services',
      backLinkText: 'Back to Services',
      featuresTitle: 'Support & Training Services',
      featuresDescription: 'Comprehensive support for your success',
      features: [
        {
          icon: BookOpen,
          title: 'Technical Training',
          description: 'Hands-on training programs tailored to your team\'s needs.',
        },
        {
          icon: Users,
          title: '24/7 Support',
          description: 'Round-the-clock technical support from certified experts.',
        },
        {
          icon: Settings,
          title: 'Implementation Support',
          description: 'Guidance throughout your implementation journey.',
        },
        {
          icon: Target,
          title: 'Best Practices',
          description: 'Learn industry best practices and optimization techniques.',
        },
      ],
      benefits: [
        { text: 'Certified instructors' },
        { text: 'Custom training programs' },
        { text: 'On-site and remote options' },
        { text: 'Ongoing support packages' },
        { text: 'Knowledge transfer sessions' },
      ],
    },
  },
}

// Insights Content Data
export const insightsContent: Record<InsightCategory, PageContent> = {
  'business-intelligence': {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Transform your raw data into strategic competitive advantages with our advanced BI solutions.',
    heroImage: '/insights/business-intelligence.jpg',
    backLink: '/insights',
    backLinkText: 'Back to Insights',
    featuresTitle: 'Powerful BI Capabilities',
    featuresDescription: 'Everything you need to turn data into actionable insights',
    features: [
      {
        icon: BarChart3,
        title: 'Executive Dashboards',
        description: 'Real-time dashboards provide a consolidated view of your entire business operations, KPIs, and performance metrics.',
      },
      {
        icon: TrendingUp,
        title: 'Advanced Reporting',
        description: 'Generate comprehensive reports that tell the story behind your data with custom analysis and trend identification.',
      },
      {
        icon: PieChart,
        title: 'Predictive Analytics',
        description: 'Leverage machine learning to forecast future trends, customer behavior, and market opportunities.',
      },
      {
        icon: Target,
        title: 'KPI Tracking',
        description: 'Monitor key performance indicators in real-time with automated alerts and threshold notifications.',
      },
    ],
    benefits: [
      { text: 'Make faster, data-driven decisions' },
      { text: 'Identify trends before competitors' },
      { text: 'Reduce reporting time by 80%' },
      { text: 'Unify data from all sources' },
      { text: 'Automate routine analytics tasks' },
      { text: 'Improve forecast accuracy' },
    ],
    benefitsTitle: 'Why Choose Our BI Solutions?',
    benefitsImage: '/bi-insights.png',
  },
  'internal-applications': {
    slug: 'internal-applications',
    title: 'Internal Applications',
    description: 'Streamline your operations with custom AI-powered internal applications built for efficiency and collaboration.',
    heroImage: '/insights/internal-applications.jpg',
    backLink: '/insights',
    backLinkText: 'Back to Insights',
    featuresTitle: 'Powerful Internal Tools',
    featuresDescription: 'Build custom applications that perfectly fit your organization\'s unique needs',
    features: [
      {
        icon: Cog,
        title: 'Workflow Automation',
        description: 'Automate repetitive tasks and streamline internal processes with intelligent workflow engines.',
      },
      {
        icon: Database,
        title: 'Data Management Systems',
        description: 'Centralized data management platforms that enable seamless collaboration across departments.',
      },
      {
        icon: Activity,
        title: 'Performance Monitoring',
        description: 'Real-time monitoring of internal operations, system health, and team performance.',
      },
      {
        icon: Layers,
        title: 'Custom Integrations',
        description: 'Connect all your internal tools and systems into one unified, intelligent platform.',
      },
    ],
    stats: [
      { value: '75%', label: 'Reduction in Manual Tasks' },
      { value: '3x', label: 'Faster Processes' },
      { value: '99.9%', label: 'System Uptime' },
      { value: '50%', label: 'Cost Savings' },
    ],
    benefits: [
      { text: 'Reduce manual data entry by 75%' },
      { text: 'Automate approval workflows' },
      { text: 'Real-time collaboration tools' },
      { text: 'Seamless system integrations' },
    ],
    benefitsTitle: 'Transform Your Internal Operations',
    benefitsImage: '/insights/workflow-automation.jpg',
    bottomCtaTitle: 'Empower Your Team',
    bottomCtaDescription: 'Transform your internal operations with applications designed for your specific needs.',
    bottomCtaButtonText: 'Schedule a Demo',
  },
  'support-communities': {
    slug: 'support-communities',
    title: 'Support for Communities',
    description: 'Build and nurture vibrant communities with our comprehensive support solutions.',
    heroImage: '/insights/support-communities.jpg',
    backLink: '/insights',
    backLinkText: 'Back to Insights',
    features: [],
    // This page uses a custom layout with Gallery and Timeline components
  },
}

// Helper function to get all service slugs
export function getAllServiceSlugs(): { category: ServiceCategory; slug: string }[] {
  const slugs: { category: ServiceCategory; slug: string }[] = []
  
  Object.entries(servicesContent).forEach(([category, services]) => {
    Object.keys(services).forEach((slug) => {
      slugs.push({ category: category as ServiceCategory, slug })
    })
  })
  
  return slugs
}

// Helper function to get all insight slugs
export function getAllInsightSlugs(): string[] {
  return Object.keys(insightsContent)
}
