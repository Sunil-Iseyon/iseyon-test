'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, FileText, Users, Target, Briefcase, BookOpen } from 'lucide-react'

interface RelatedLink {
  title: string
  description: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface RelatedContentProps {
  title?: string
  links?: RelatedLink[]
  showDefaultLinks?: boolean
}

const defaultInternalLinks: RelatedLink[] = [
  {
    title: 'Our Services',
    description: 'Explore our comprehensive AI-powered BI and data analytics solutions',
    href: '/#services',
    icon: Briefcase,
  },
  {
    title: 'Meet Our Team',
    description: 'Get to know the experts behind our success',
    href: '/our-team',
    icon: Users,
  },
  {
    title: 'Our Vision',
    description: 'Learn about our mission and values',
    href: '/our-vision',
    icon: Target,
  },
  {
    title: 'Latest Insights',
    description: 'Read our latest blog posts and industry insights',
    href: '/blog',
    icon: BookOpen,
  },
  {
    title: 'Contact Us',
    description: 'Get in touch to discuss your data analytics needs',
    href: '/contact',
    icon: FileText,
  },
]

export function RelatedContent({ 
  title = "Explore More", 
  links = [], 
  showDefaultLinks = true 
}: RelatedContentProps) {
  const displayLinks = links.length > 0 ? links : (showDefaultLinks ? defaultInternalLinks : [])

  if (displayLinks.length === 0) return null

  return (
    <section className="py-16 bg-linear-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">
            Discover more about our solutions and expertise
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
          {displayLinks.map((link, index) => {
            const Icon = link.icon || FileText
            return (
              <li key={index}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link
                    href={link.href}
                    className="group block h-full p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {link.description}
                        </p>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

// ─── Category-specific service links ─────────────────────────────────────────

const biAndAnalyticsLinks: RelatedLink[] = [
  {
    title: 'Power BI Services',
    description: 'Interactive dashboards and self-service reporting powered by Microsoft Power BI',
    href: '/services/bi-and-analytics/power-bi',
    icon: Briefcase,
  },
  {
    title: 'Tableau Consulting',
    description: 'Visual analytics and storytelling with Tableau for enterprise teams',
    href: '/services/bi-and-analytics/Tableau',
    icon: Briefcase,
  },
  {
    title: 'Analytics Strategy',
    description: 'Data strategy roadmaps that align analytics investments with business goals',
    href: '/services/bi-and-analytics/Strategy',
    icon: Briefcase,
  },
]

const cloudAndPlatformsLinks: RelatedLink[] = [
  {
    title: 'Snowflake Consulting',
    description: 'Cloud data warehouse design, optimization, and governance on Snowflake',
    href: '/services/cloud-and-platforms/Snowflake',
    icon: Briefcase,
  },
  {
    title: 'Databricks Solutions',
    description: 'Unified analytics and data lakehouse pipelines built on Databricks',
    href: '/services/cloud-and-platforms/databricks',
    icon: Briefcase,
  },
  {
    title: 'Palantir Integration',
    description: 'Palantir Foundry implementation and operational analytics',
    href: '/services/cloud-and-platforms/palantir',
    icon: Briefcase,
  },
  {
    title: 'Anaplan Planning',
    description: 'Connected planning and scenario modeling on the Anaplan platform',
    href: '/services/cloud-and-platforms/Anaplan',
    icon: Briefcase,
  },
  {
    title: 'AWS Data Services',
    description: 'End-to-end analytics architectures on Amazon Web Services',
    href: '/services/cloud-and-platforms/aws',
    icon: Briefcase,
  },
  {
    title: 'Azure Analytics',
    description: 'Microsoft Azure data platform implementation and managed services',
    href: '/services/cloud-and-platforms/Azure',
    icon: Briefcase,
  },
  {
    title: 'Shopify Solutions',
    description: 'End-to-end Shopify store design, development, and analytics integration',
    href: '/services/cloud-and-platforms/shopify',
    icon: Briefcase,
  },
]

const dataAndEngineeringLinks: RelatedLink[] = [
  {
    title: 'SQL & Reporting',
    description: 'SQL development, stored procedures, and enterprise reporting services',
    href: '/services/data-and-engineering/sql',
    icon: Briefcase,
  },
  {
    title: 'Data Management',
    description: 'Data governance, quality, and master data management programs',
    href: '/services/data-and-engineering/Data_Management',
    icon: Briefcase,
  },
  {
    title: 'Big Data Engineering',
    description: 'Large-scale data pipeline design using Apache Spark and distributed systems',
    href: '/services/data-and-engineering/Big-Data',
    icon: Briefcase,
  },
]

const insightsLinks: RelatedLink[] = [
  {
    title: 'Business Intelligence',
    description: 'Explore our BI insights covering dashboards, reporting, and analytics strategy',
    href: '/insights/business-intelligence',
    icon: BookOpen,
  },
  {
    title: 'Internal Applications',
    description: 'Insights on building custom internal tools and operational applications',
    href: '/insights/internal-applications',
    icon: BookOpen,
  },
]

/**
 * Returns same-category related links for a service page, excluding the current page.
 */
export function getCategoryRelatedLinks(
  category: string,
  currentSlug: string,
): RelatedLink[] {
  let pool: RelatedLink[] = []
  if (category === 'bi-and-analytics') pool = biAndAnalyticsLinks
  else if (category === 'cloud-and-platforms') pool = cloudAndPlatformsLinks
  else if (category === 'data-and-engineering') pool = dataAndEngineeringLinks
  else if (category === 'business-intelligence' || category === 'internal-applications') pool = insightsLinks
  else pool = serviceRelatedLinks

  return pool.filter(
    (l) => !l.href.toLowerCase().endsWith(`/${currentSlug.toLowerCase()}`),
  )
}

// Flat list for generic usage (all services)
export const serviceRelatedLinks: RelatedLink[] = [
  ...biAndAnalyticsLinks,
  ...cloudAndPlatformsLinks,
  ...dataAndEngineeringLinks,
]

// Blog-specific related links
export const blogRelatedLinks: RelatedLink[] = [
  {
    title: 'All Blog Posts',
    description: 'Explore our complete collection of insights',
    href: '/blog',
    icon: BookOpen,
  },
  {
    title: 'Our Services',
    description: 'Learn about our AI and BI solutions',
    href: '/#services',
    icon: Briefcase,
  },
  {
    title: 'Expert Team',
    description: 'Meet our industry experts and thought leaders',
    href: '/our-team',
    icon: Users,
  },
]
