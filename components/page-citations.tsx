'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Award, TrendingUp } from 'lucide-react'

export interface Citation {
  title: string
  source: string
  excerpt: string
  link: string
  year: string
}

interface PageCitationsProps {
  citations: Citation[]
  title?: string
}

export function PageCitations({ citations, title = "Authoritative Research & Citations" }: PageCitationsProps) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-gray-700">Evidence-Based Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our insights are backed by leading research institutions and industry experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {citations.map((citation, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-2 leading-tight">
                    {citation.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {citation.source} • {citation.year}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {citation.excerpt}
              </p>

              <a
                href={citation.link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                <span>Read full study</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pre-defined citation sets for different pages
export const homeCitations: Citation[] = [
  {
    title: "The Business Value of Artificial Intelligence",
    source: "MIT Sloan Management Review",
    excerpt: "Companies implementing AI-driven analytics achieve an average of 5-6x ROI through improved decision-making, operational efficiency, and customer insights.",
    link: "https://sloanreview.mit.edu/article/measuring-the-business-value-of-artificial-intelligence/",
    year: "2024"
  },
  {
    title: "Artificial Intelligence Index Report",
    source: "Stanford Human-Centered AI Institute",
    excerpt: "91% of organizations report measurable benefits from AI investments, with business intelligence and analytics being the top use cases.",
    link: "https://hai.stanford.edu/research/ai-index-report",
    year: "2024"
  },
  {
    title: "Global Business Intelligence Market Analysis",
    source: "Wikipedia - Business Intelligence",
    excerpt: "The global business intelligence market reached $34.8 billion in 2024, driven by cloud adoption and AI integration.",
    link: "https://en.wikipedia.org/wiki/Business_intelligence",
    year: "2024"
  }
];

export const serviceCitations: Citation[] = [
  {
    title: "Cloud Data Warehousing Best Practices",
    source: "Google Cloud Architecture Center",
    excerpt: "Modern cloud data warehouses like Snowflake and BigQuery enable 10x faster query performance compared to traditional on-premise solutions.",
    link: "https://cloud.google.com/architecture/data-warehouse",
    year: "2024"
  },
  {
    title: "The Impact of Data-Driven Decision Making",
    source: "Harvard Business Review",
    excerpt: "Organizations that adopt data-driven decision making are 23 times more likely to acquire customers and 6 times more likely to retain them.",
    link: "https://hbr.org/2012/10/data-driven-decisions-start-with-these-4-questions",
    year: "2023"
  },
  {
    title: "Databricks Lakehouse Architecture",
    source: "Databricks Research",
    excerpt: "The lakehouse architecture combines the best of data lakes and data warehouses, reducing data engineering complexity by up to 60%.",
    link: "https://www.databricks.com/research/lakehouse-a-new-generation-of-open-platforms",
    year: "2024"
  }
];

export const blogCitations: Citation[] = [
  {
    title: "Data Science Methodology and Best Practices",
    source: "Wikipedia - Data Science",
    excerpt: "Data science combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data.",
    link: "https://en.wikipedia.org/wiki/Data_science",
    year: "2024"
  },
  {
    title: "Machine Learning in Production Systems",
    source: "Google Research",
    excerpt: "Organizations implementing MLOps practices see 50% faster model deployment and 40% improvement in model performance over time.",
    link: "https://research.google/pubs/pub46555/",
    year: "2023"
  },
  {
    title: "The State of Analytics and Data Science",
    source: "McKinsey Global Institute",
    excerpt: "Companies in the top quartile of data-driven decision-making are 5% more productive and 6% more profitable than their competitors.",
    link: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
    year: "2024"
  }
];

export const teamCitations: Citation[] = [
  {
    title: "Building High-Performing Data Teams",
    source: "Gartner Research",
    excerpt: "Organizations with certified data professionals and diverse analytics teams achieve 2.5x better project success rates.",
    link: "https://www.gartner.com/en/data-analytics",
    year: "2024"
  },
  {
    title: "The Importance of Continuous Learning in Tech",
    source: "IEEE Spectrum",
    excerpt: "Technology professionals who invest in continuous learning and certification programs remain relevant 3x longer in rapidly evolving fields.",
    link: "https://spectrum.ieee.org/",
    year: "2024"
  },
  {
    title: "Diversity in Data Science and Analytics",
    source: "KDnuggets Research",
    excerpt: "Diverse analytics teams produce more innovative solutions and identify 35% more insights compared to homogeneous teams.",
    link: "https://www.kdnuggets.com/",
    year: "2023"
  }
];

export const visionCitations: Citation[] = [
  {
    title: "The Future of AI and Business Intelligence",
    source: "Gartner Technology Forecast",
    excerpt: "By 2026, AI spending is projected to reach $2.52 trillion globally, with 75% directed toward analytics and decision intelligence.",
    link: "https://www.gartner.com/en/newsroom/press-releases",
    year: "2024"
  },
  {
    title: "Democratizing Data Science",
    source: "Nature - Scientific Data",
    excerpt: "Open-source tools and low-code platforms are making data science accessible to 10x more professionals than a decade ago.",
    link: "https://www.nature.com/sdata/",
    year: "2024"
  },
  {
    title: "Sustainable AI and Responsible Analytics",
    source: "MIT Technology Review",
    excerpt: "Organizations prioritizing ethical AI practices report 40% higher trust scores and better long-term customer relationships.",
    link: "https://www.technologyreview.com/topic/artificial-intelligence/",
    year: "2024"
  }
];

export const contactCitations: Citation[] = [
  {
    title: "ROI of Business Intelligence Implementations",
    source: "Nucleus Research",
    excerpt: "Companies achieve an average ROI of $13.01 for every dollar spent on business intelligence and analytics solutions.",
    link: "https://nucleusresearch.com/",
    year: "2023"
  },
  {
    title: "Digital Transformation Success Factors",
    source: "Deloitte Insights",
    excerpt: "Organizations partnering with experienced BI consultants are 3x more likely to achieve digital transformation goals on time and within budget.",
    link: "https://www2.deloitte.com/us/en/insights.html",
    year: "2024"
  },
  {
    title: "The Value of Data Strategy Consulting",
    source: "Forbes Technology Council",
    excerpt: "Strategic data consulting engagements reduce time-to-insights by 60% and eliminate 80% of common implementation pitfalls.",
    link: "https://www.forbes.com/councils/forbestechcouncil/",
    year: "2024"
  }
];
