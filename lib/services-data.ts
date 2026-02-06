import { BarChart3, Brain, Zap, Shield, TrendingUp, Database, Code, Users, LucideIcon } from 'lucide-react';

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  benefits: ServiceBenefit[];
  cta: string;
  detailedDescription?: string;
  useCases?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const servicesData: Record<string, ServiceData> = {
  'advanced-analytics': {
    title: 'Advanced Analytics',
    subtitle: 'Deep dive into your data with our comprehensive analytics platform',
    description: 'Our Advanced Analytics platform empowers organizations to extract meaningful insights from complex datasets. Powered by cutting-edge AI algorithms, we transform raw data into actionable intelligence that drives strategic decision-making.',
    image: '/services/business-analytics.webp',
    icon: BarChart3,
    features: [
      'Real-time interactive dashboards',
      'Custom report generation',
      'Predictive analytics models',
      'Advanced data visualization',
      'Automated insights discovery',
      'Cross-platform data integration'
    ],
    benefits: [
      {
        title: 'Faster Decisions',
        description: 'Reduce time-to-insight by up to 80% with automated analytics'
      },
      {
        title: 'Improved Accuracy',
        description: 'AI-powered analysis eliminates human error and bias'
      },
      {
        title: 'Scalable Solutions',
        description: 'Handle millions of data points without performance degradation'
      }
    ],
    stats: [
      { label: 'Faster Insights', value: '80%' },
      { label: 'Data Accuracy', value: '99.9%' },
      { label: 'ROI Increase', value: '3x' }
    ],
    useCases: [
      'Customer behavior analysis',
      'Sales forecasting',
      'Market trend identification',
      'Performance optimization'
    ],
    cta: 'Start Analyzing'
  },
  'ai-solutions': {
    title: 'AI Solutions',
    subtitle: 'Implement machine learning models to transform your business',
    description: 'Harness the power of artificial intelligence to automate processes, predict outcomes, and unlock new opportunities. Our AI solutions are tailored to your specific business needs and industry requirements.',
    image: '/services/AI.webp',
    icon: Brain,
    features: [
      'Custom ML model development',
      'Natural language processing',
      'Computer vision applications',
      'Recommendation engines',
      'Predictive maintenance',
      'Intelligent automation'
    ],
    benefits: [
      {
        title: 'Automation at Scale',
        description: 'Automate complex tasks that previously required human intervention'
      },
      {
        title: 'Predictive Power',
        description: 'Anticipate trends and customer behavior before they happen'
      },
      {
        title: 'Competitive Edge',
        description: 'Stay ahead with cutting-edge AI capabilities'
      }
    ],
    stats: [
      { label: 'Task Automation', value: '70%' },
      { label: 'Prediction Accuracy', value: '95%' },
      { label: 'Cost Reduction', value: '40%' }
    ],
    useCases: [
      'Customer service chatbots',
      'Fraud detection systems',
      'Product recommendations',
      'Sentiment analysis'
    ],
    cta: 'Explore AI'
  },
  'data-integration': {
    title: 'Data Integration',
    subtitle: 'Seamlessly unify all your data sources into one platform',
    description: 'Break down data silos and create a unified view of your business. Our data integration solutions connect disparate systems, ensuring data consistency and accessibility across your organization.',
    image: '/services/data-integration.webp',
    icon: Database,
    features: [
      'API integrations',
      'Real-time data pipelines',
      'ETL/ELT tools',
      'Data quality management',
      'Master data management',
      'Cloud-native architecture'
    ],
    benefits: [
      {
        title: 'Unified Data',
        description: 'Single source of truth for all your business data'
      },
      {
        title: 'Real-time Sync',
        description: 'Keep data synchronized across all systems instantly'
      },
      {
        title: 'Reduced Complexity',
        description: 'Simplify your data architecture and reduce maintenance'
      }
    ],
    stats: [
      { label: 'Integration Time', value: '75%' },
      { label: 'Data Accuracy', value: '99%' },
      { label: 'System Connections', value: '100+' }
    ],
    useCases: [
      'CRM and ERP integration',
      'Multi-cloud data sync',
      'Legacy system modernization',
      'Data warehouse consolidation'
    ],
    cta: 'Integrate Now'
  },
  'business-intelligence': {
    title: 'Business Intelligence',
    subtitle: 'Transform raw data into strategic business insights',
    description: 'Make data-driven decisions with confidence. Our BI solutions provide executive dashboards, KPI tracking, and comprehensive analytics that give you complete visibility into your business performance.',
    image: '/services/StrategyB.webp',
    icon: TrendingUp,
    features: [
      'Executive dashboards',
      'KPI tracking & alerts',
      'Trend analysis',
      'Competitive insights',
      'Financial reporting',
      'Operational analytics'
    ],
    benefits: [
      {
        title: 'Clear Visibility',
        description: 'See your entire business at a glance with intuitive dashboards'
      },
      {
        title: 'Actionable Insights',
        description: 'Turn data into decisions with clear recommendations'
      },
      {
        title: 'Strategic Planning',
        description: 'Plan for the future with data-backed forecasts'
      }
    ],
    stats: [
      { label: 'Decision Speed', value: '5x' },
      { label: 'Report Generation', value: 'Instant' },
      { label: 'Business Growth', value: '45%' }
    ],
    useCases: [
      'Executive reporting',
      'Sales performance tracking',
      'Market analysis',
      'Financial forecasting'
    ],
    cta: 'Get Insights'
  },
  'security-compliance': {
    title: 'Security & Compliance',
    subtitle: 'Enterprise-grade security with full regulatory compliance',
    description: 'Protect your most valuable asset – your data. Our security solutions ensure your analytics platform meets the highest standards of data protection and regulatory compliance.',
    image: '/services/Shopify_Banner_Design_c0viof.png',
    icon: Shield,
    features: [
      'End-to-end encryption',
      'Role-based access control',
      'Comprehensive audit logs',
      'GDPR/HIPAA compliance',
      'SOC 2 certification',
      'Regular security audits'
    ],
    benefits: [
      {
        title: 'Peace of Mind',
        description: 'Rest easy knowing your data is protected by industry-leading security'
      },
      {
        title: 'Regulatory Ready',
        description: 'Meet compliance requirements without additional effort'
      },
      {
        title: 'Trust & Transparency',
        description: 'Build customer trust with robust data protection'
      }
    ],
    stats: [
      { label: 'Security Rating', value: 'A+' },
      { label: 'Compliance Standards', value: '15+' },
      { label: 'Breach Rate', value: '0%' }
    ],
    useCases: [
      'Healthcare data protection',
      'Financial services compliance',
      'PCI DSS certification',
      'Data privacy management'
    ],
    cta: 'Secure Your Data'
  },
  'real-time-processing': {
    title: 'Real-time Processing',
    subtitle: 'Process and analyze data as it happens',
    description: 'In today\'s fast-paced business environment, speed is everything. Our real-time processing solutions enable instant insights, allowing you to respond to opportunities and threats as they emerge.',
    image: '/services/internal-apps.webp',
    icon: Zap,
    features: [
      'Streaming analytics',
      'Sub-millisecond latency',
      'High-throughput processing',
      'Complex event processing',
      'Real-time alerting',
      'Live dashboards'
    ],
    benefits: [
      {
        title: 'Instant Insights',
        description: 'Get answers in milliseconds, not hours or days'
      },
      {
        title: 'Rapid Response',
        description: 'React to events as they happen, not after the fact'
      },
      {
        title: 'Operational Excellence',
        description: 'Optimize operations with real-time visibility'
      }
    ],
    stats: [
      { label: 'Processing Speed', value: '<1ms' },
      { label: 'Data Throughput', value: '10M/sec' },
      { label: 'Uptime', value: '99.99%' }
    ],
    useCases: [
      'IoT sensor monitoring',
      'Stock trading platforms',
      'Fraud detection',
      'Supply chain optimization'
    ],
    cta: 'Go Real-time'
  },
  'custom-development': {
    title: 'Custom Development',
    subtitle: 'Tailored solutions built for your unique needs',
    description: 'Every business is unique, and sometimes off-the-shelf solutions just don\'t cut it. Our custom development team builds bespoke analytics applications designed specifically for your requirements.',
    image: '/services/advanced-analytics.jpg',
    icon: Code,
    features: [
      'Custom applications',
      'API development',
      'System integrations',
      'White-label solutions',
      'Legacy modernization',
      'Consulting services'
    ],
    benefits: [
      {
        title: 'Perfect Fit',
        description: 'Solutions designed around your exact workflow and needs'
      },
      {
        title: 'Competitive Advantage',
        description: 'Unique capabilities that set you apart from competitors'
      },
      {
        title: 'Full Ownership',
        description: 'Complete control over your custom solutions'
      }
    ],
    stats: [
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'On-time Delivery', value: '95%' },
      { label: 'Projects Delivered', value: '500+' }
    ],
    useCases: [
      'Custom dashboards',
      'Industry-specific tools',
      'Proprietary algorithms',
      'Enterprise integrations'
    ],
    cta: 'Start Building'
  },
  'support-training': {
    title: 'Support & Training',
    subtitle: 'Dedicated support to ensure your success',
    description: 'Your success is our success. Our dedicated support and training team ensures you get maximum value from your analytics investment, from initial implementation through ongoing optimization.',
    image: '/services/support-training.jpg',
    icon: Users,
    features: [
      '24/7 technical support',
      'Comprehensive training programs',
      'Dedicated account management',
      'Implementation assistance',
      'Best practices guidance',
      'Community forums'
    ],
    benefits: [
      {
        title: 'Always Available',
        description: 'Expert help whenever you need it, day or night'
      },
      {
        title: 'Rapid Adoption',
        description: 'Get your team up to speed quickly with expert training'
      },
      {
        title: 'Continuous Improvement',
        description: 'Ongoing optimization to maximize your ROI'
      }
    ],
    stats: [
      { label: 'Response Time', value: '<5min' },
      { label: 'Customer Success Rate', value: '97%' },
      { label: 'Training Hours', value: '10K+' }
    ],
    useCases: [
      'Onboarding programs',
      'Technical troubleshooting',
      'Best practice consulting',
      'Performance optimization'
    ],
    cta: 'Get Support'
  }
};

export type ServiceKey = keyof typeof servicesData;
export const serviceKeys = Object.keys(servicesData) as ServiceKey[];
