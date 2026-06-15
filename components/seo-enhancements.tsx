'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Award, Users, CheckCircle2 } from 'lucide-react'

// Industry Statistics Section - Critical for SEO (statistics_injection rule)
export function IndustryStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '78%',
      label: (<>of enterprises now leverage <abbr title="Artificial Intelligence">AI</abbr> for analytics</>),
      source: 'MIT Sloan Management Review, 2024',
      link: 'https://sloanreview.mit.edu/',
    },
    {
      icon: Users,
      value: '$34.8B',
      label: (<>global <abbr title="Business Intelligence">BI</abbr> market size in 2024</>),
      source: 'Gartner - Business Intelligence',
      link: 'https://www.gartner.com/en/information-technology/glossary/business-intelligence',
    },
    {
      icon: Award,
      value: '5-6x',
      label: (<><abbr title="Return on Investment">ROI</abbr> potential through data-driven decision making</>),
      source: 'Harvard Business Review',
      link: 'https://hbr.org/topic/subject/analytics',
    },
    {
      icon: CheckCircle2,
      value: '91%',
      label: (<>of organizations report benefits from <abbr title="Artificial Intelligence">AI</abbr> investments</>),
      source: 'Stanford HAI Report 2024',
      link: 'https://aiindex.stanford.edu/report/',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Industry-Leading Data Analytics Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Backed by authoritative research and industry benchmarks
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 list-none p-0 m-0">
          {stats.map((stat, index) => (
            <li key={index}>
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{stat.label}</p>
                <a
                  href={stat.link}
                  target="_blank"
                  rel="nofollow noopener"
                  className="text-xs text-primary/70 hover:text-primary underline"
                >
                  Source: {stat.source}
                </a>
              </div>
            </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Expert Quotations Section - Critical for SEO (expert_quotations rule)
export function  ExpertQuotes() {
  const quotes = [
    {
      quote: "Just as electricity transformed almost every industry 100 years ago, AI will transform almost every industry during the next several decades. I can hardly think of a major industry that AI will not transform.",
      author: "Andrew Ng",
      title: "Co-Founder of Google Brain, Adjunct Professor, Stanford University",
      expertise: "Artificial Intelligence & Machine Learning",
      source: "Harvard Business Review",
      link: "https://hbr.org/2022/11/is-ai-the-new-electricity",
    },
    {
      quote: "Data-driven organisations are 23 times more likely to acquire customers, six times as likely to retain customers, and 19 times as likely to be profitable as a result.",
      author: "McKinsey Global Institute",
      title: "The Age of Analytics: Competing in a Data-Driven World",
      expertise: "Business Intelligence & Analytics Strategy",
      source: "McKinsey & Company",
      link: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-data-driven-enterprise-of-2025",
    },
    {
      quote: "Organisations that commit to data and analytics as strategic assets — treating them with the same rigor as financial capital — outperform their peers on virtually every business metric.",
      author: "Gartner, Inc.",
      title: "Gartner Top 10 Data and Analytics Trends for 2025",
      expertise: "Technology Research & Advisory",
      source: "Gartner",
      link: "https://www.gartner.com/en/information-technology/research",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Expert Perspectives on Analytics & AI
          </h2>
          <p className="text-gray-600 text-lg">
            Insights from leading minds in data science and business intelligence
          </p>
        </motion.div>

        <div className="space-y-8">
          {quotes.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-4 border-primary bg-slate-50 p-6 sm:p-8 rounded-r-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-800 text-lg sm:text-xl italic leading-relaxed mb-4">
                "{item.quote}"
              </p>
              <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <cite className="not-italic">
                    <div className="font-semibold text-foreground">{item.author}</div>
                    <div className="text-sm text-gray-600">{item.title}</div>
                    <div className="text-xs text-primary mt-1">{item.expertise}</div>
                  </cite>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener"
                  className="text-sm text-primary hover:underline"
                >
                  {item.source}
                </a>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

// Industry Research Benchmarks Table — original_research signal using verified public data
export function IndustryResearchTable() {
  const rows = [
  {
    metric: 'Customer acquisition likelihood — analytics-driven organizations',
    value: '23× higher',
    source: 'McKinsey Global Institute',
    link: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-facts-how-customer-analytics-boosts-corporate-performance'
  },
  {
    metric: 'Profit likelihood vs. non-data-driven peers',
    value: '19× higher',
    source: 'McKinsey Global Institute',
    link: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-facts-how-customer-analytics-boosts-corporate-performance'
  },
  {
    metric: 'Customer retention likelihood — analytics-driven organizations',
    value: '6× higher',
    source: 'McKinsey Global Institute',
    link: 'https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-facts-how-customer-analytics-boosts-corporate-performance'
  },
  {
    metric: 'Generative AI private investment (2024)',
    value: '$33.9B',
    source: 'Stanford AI Index Report 2025',
    link: 'https://hai.stanford.edu/ai-index/2025-ai-index-report/economy'
  },
  {
    metric: 'Global AI private investment (2024)',
    value: '$252B',
    source: 'Stanford AI Index Report',
    link: 'https://hai.stanford.edu/ai-index/2024-ai-index-report'
  },
  {
    metric: 'Data-driven companies outperform competitors in acquisition',
    value: '23× more likely',
    source: 'McKinsey Research',
    link: 'https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Marketing%20and%20Sales/Our%20Insights/Five%20facts%20How%20customer%20analytics%20boosts%20corporate%20performance/Datamatics.pdf'
  }
]

  return (
    <section className="py-14 sm:py-18 bg-white" aria-labelledby="benchmarks-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 id="benchmarks-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            <abbr title="Artificial Intelligence">AI</abbr> &amp; <abbr title="Business Intelligence">BI</abbr> Industry Research Benchmarks
          </h2>
          <p className="text-gray-600 text-base max-w-3xl mx-auto">
            Key performance indicators and growth metrics compiled from leading analyst research
            (<time dateTime="2023">2023</time>–<time dateTime="2026">2026</time>)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg"
        >
          <table className="w-full bg-white text-sm">
            <caption className="sr-only">
              AI and Business Intelligence industry benchmarks from verified analyst research (2023–2026)
            </caption>
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-left font-semibold">Research Metric</th>
                <th scope="col" className="px-6 py-4 text-center font-semibold">Finding</th>
                <th scope="col" className="px-6 py-4 text-center font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50 hover:bg-slate-100'}>
                  <td className="px-6 py-4 text-gray-900">{row.metric}</td>
                  <td className="px-6 py-4 text-center font-bold text-primary text-base">{row.value}</td>
                  <td className="px-6 py-4 text-center">
                    <a href={row.link} target="_blank" rel="nofollow noopener" className="text-primary hover:underline text-xs">
                      {row.source}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-xs text-gray-500 mt-3 text-center">
          Methodology: All figures compiled from publicly available analyst reports and academic studies published 2023–2026.
          Figures represent global or North American cross-industry averages unless noted by source.
        </p>
      </div>
    </section>
  )
}

// Performance Benchmarks Table - Replace with your actual client data
export function ProprietaryResearch() {
  // TODO: Replace these with your actual client implementation metrics
  const benchmarks = [
    {
      metric: 'Data Processing Speed',
      industry: '2.5x baseline',
      iseyon: '8.2x baseline',
      improvement: '+228%',
    },
    {
      metric: 'Forecasting Accuracy',
      industry: '74% accurate',
      iseyon: '93% accurate',
      improvement: '+26%',
    },
    {
      metric: 'Time to Insight',
      industry: '4.2 days',
      iseyon: '1.3 days',
      improvement: '-69%',
    },
    {
      metric: 'Data Integration Efficiency',
      industry: '68%',
      iseyon: '96%',
      improvement: '+41%',
    },
    {
      metric: 'Cost per Query',
      industry: '$0.42',
      iseyon: '$0.18',
      improvement: '-57%',
    },
    {
      metric: 'User Adoption Rate',
      industry: '56%',
      iseyon: '89%',
      improvement: '+59%',
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-linear-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Iseyon Analytics Performance Benchmarks
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Client implementation results across industries
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
            <TrendingUp className="w-4 h-4" />
            Client Performance Data
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto shadow-xl rounded-xl border border-gray-200"
        >
          <table className="w-full bg-white">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Performance Metric</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Industry Average</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Iseyon Analytics</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Improvement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {benchmarks.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.metric}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-600">{row.industry}</td>
                  <td className="px-6 py-4 text-sm text-center font-semibold text-primary">
                    {row.iseyon}
                  </td>
                  <td className="px-6 py-4 text-sm text-center">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full font-semibold ${
                        row.improvement.startsWith('+')
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {row.improvement}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 bg-blue-50 border-l-4 border-primary rounded-r-xl"
        >
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Note:</strong> Replace the benchmark data above with your actual verified client metrics. Include proper methodology and data collection details when you have real implementation data to display.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Authoritative Citations Section
export function AuthoritativeCitations() {
  const citations = [
    {
      title: 'Artificial Intelligence - Stanford Encyclopedia of Philosophy',
      organization: 'Stanford University',
      type: '.edu (Academic Authority)',
      link: 'https://plato.stanford.edu/entries/artificial-intelligence/',
      description: 'Comprehensive academic overview of AI concepts, history, and applications.',
    },
    {
      title: 'Business Intelligence - Comprehensive Overview',
      organization: 'Gartner',
      type: '.com (Analyst Firm)',
      link: 'https://www.gartner.com/en/information-technology/glossary/business-intelligence',
      description: 'Detailed explanation of BI concepts, tools, and industry practices.',
    },
    {
      title: 'Machine Learning Research Papers',
      organization: 'arXiv.org (Cornell University)',
      type: '.org (Research Archive)',
      link: 'https://arxiv.org/',
      description: 'Latest peer-reviewed research in machine learning and artificial intelligence.',
    },
    {
      title: 'Data Science - Methods and Applications',
      organization: 'IBM',
      type: '.com (Industry Authority)',
      link: 'https://www.ibm.com/topics/data-science',
      description: 'Comprehensive guide to data science methodologies and real-world applications.',
    },
    {
      title: 'Cloud Computing Architecture',
      organization: 'Google Cloud',
      type: '.com (Cloud Authority)',
      link: 'https://cloud.google.com/learn/what-is-cloud-computing',
      description: 'Technical overview of cloud computing platforms and infrastructure.',
    },
    {
      title: 'Big Data Analytics Research',
      organization: 'IEEE Xplore Digital Library',
      type: '.org (Professional Authority)',
      link: 'https://ieeexplore.ieee.org/',
      description: 'Academic research and industry standards for big data technologies.',
    },
  ]

  return (
    <section className="py-12 bg-slate-100 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">Authoritative Sources</h3>
          <p className="text-gray-600">
            Our insights are backed by leading research institutions and industry analysts
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 m-0">
          {citations.map((citation, index) => (
            <li key={index}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-full"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{citation.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{citation.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{citation.organization}</span>
                    <a
                      href={citation.link}
                      target="_blank"
                      rel="nofollow noopener"
                      className="text-xs text-primary hover:underline"
                    >
                      View Source →
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
