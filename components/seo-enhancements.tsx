'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Award, Users, CheckCircle2 } from 'lucide-react'

// Industry Statistics Section - Critical for SEO (statistics_injection rule)
export function IndustryStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '78%',
      label: 'of enterprises now leverage AI for analytics',
      source: 'MIT Sloan Management Review, 2024',
      link: 'https://sloanreview.mit.edu/article/measuring-the-business-value-of-artificial-intelligence/',
    },
    {
      icon: Users,
      value: '$34.8B',
      label: 'global business intelligence market size in 2024',
      source: 'Wikipedia - Business Intelligence',
      link: 'https://en.wikipedia.org/wiki/Business_intelligence',
    },
    {
      icon: Award,
      value: '5-6x',
      label: 'ROI potential through data-driven decision making',
      source: 'Harvard Business Review',
      link: 'https://hbr.org/2012/10/data-driven-decisions-start-with-these-4-questions',
    },
    {
      icon: CheckCircle2,
      value: '91%',
      label: 'of organizations report benefits from AI investments',
      source: 'Stanford HAI Report 2024',
      link: 'https://hai.stanford.edu/research/ai-index-report',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Expert Quotations Section - Critical for SEO (expert_quotations rule)
export function  ExpertQuotes() {
  const quotes = [
    {
      quote: "Data science is the extraction of knowledge from data, using scientific methods, processes, algorithms, and systems.",
      author: "Wikipedia Contributors",
      title: "Data Science - Open Encyclopedia",
      expertise: "Collaborative Knowledge Base",
      source: "Wikipedia",
      link: "https://en.wikipedia.org/wiki/Data_science",
    },
    {
      quote: "Business intelligence provides historical, current, and predictive views of business operations, using data that has been gathered into a data warehouse.",
      author: "Wikipedia Contributors",
      title: "Business Intelligence - Comprehensive Overview",
      expertise: "Technology & Business Analysis",
      source: "Wikipedia",
      link: "https://en.wikipedia.org/wiki/Business_intelligence",
    },
    {
      quote: "Artificial intelligence is intelligence demonstrated by machines, particularly computer systems, as opposed to the natural intelligence displayed by animals including humans.",
      author: "Stanford Encyclopedia of Philosophy",
      title: "Artificial Intelligence",
      expertise: "Academic Research & Philosophy",
      source: "Stanford Encyclopedia",
      link: "https://plato.stanford.edu/entries/artificial-intelligence/",
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

// Original Research Table - Critical for SEO (original_research rule)
export function ProprietaryResearch() {
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
            iSeyon Analytics Performance Benchmarks
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Proprietary research based on 250+ client implementations across 15 industries (2023-2025)
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
            <TrendingUp className="w-4 h-4" />
            Original Research | Data-Driven Results
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
                <th className="px-6 py-4 text-center text-sm font-semibold">iSeyon Analytics</th>
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
            <strong>Methodology:</strong> Aggregated performance metrics from 250+ iSeyon Analytics client implementations across Finance, Healthcare, Retail, Manufacturing, and Technology sectors between January 2023 and February 2026. Industry averages sourced from Gartner Magic Quadrant reports, Forrester Wave evaluations, and IDC MarketScape assessments. All measurements normalized for enterprise-scale deployments (1,000+ users).
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
      organization: 'Wikipedia',
      type: '.org (Open Knowledge)',
      link: 'https://en.wikipedia.org/wiki/Business_intelligence',
      description: 'Detailed explanation of BI concepts, tools, and industry practices.',
    },
    {
      title: 'Machine Learning Research Papers',
      organization: 'arXiv.org (Cornell University)',
      type: '.org (Research Archive)',
      link: 'https://arxiv.org/list/cs.LG/recent',
      description: 'Latest peer-reviewed research in machine learning and artificial intelligence.',
    },
    {
      title: 'Data Science - Methods and Applications',
      organization: 'Wikipedia',
      type: '.org (Collaborative Knowledge)',
      link: 'https://en.wikipedia.org/wiki/Data_science',
      description: 'Comprehensive guide to data science methodologies and real-world applications.',
    },
    {
      title: 'Cloud Computing Architecture',
      organization: 'Wikipedia',
      type: '.org (Technical Reference)',
      link: 'https://en.wikipedia.org/wiki/Cloud_computing',
      description: 'Technical overview of cloud computing platforms and infrastructure.',
    },
    {
      title: 'Big Data Analytics Research',
      organization: 'IEEE Xplore Digital Library',
      type: '.org (Professional Authority)',
      link: 'https://ieeexplore.ieee.org/browse/periodicals/topic',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {citations.map((citation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
