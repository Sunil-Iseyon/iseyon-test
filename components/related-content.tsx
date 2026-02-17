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
    href: '/team',
    icon: Users,
  },
  {
    title: 'Our Vision',
    description: 'Learn about our mission and values',
    href: '/vision',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLinks.map((link, index) => {
            const Icon = link.icon || FileText
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="group block h-full p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Service-specific related links
export const serviceRelatedLinks: RelatedLink[] = [
  {
    title: 'Power BI Services',
    description: 'Advanced Power BI implementation and consulting',
    href: '/services/bi-and-analytics/power-bi',
    icon: Briefcase,
  },
  {
    title: 'Snowflake Consulting',
    description: 'Expert Snowflake implementation and optimization',
    href: '/services/cloud-and-platforms/Snowflake',
    icon: Briefcase,
  },
  {
    title: 'Databricks Solutions',
    description: 'Comprehensive Databricks analytics platform services',
    href: '/services/cloud-and-platforms/databricks',
    icon: Briefcase,
  },
  {
    title: 'Palantir Integration',
    description: 'Palantir Foundry implementation and support',
    href: '/services/cloud-and-platforms/palantir',
    icon: Briefcase,
  },
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
    href: '/team',
    icon: Users,
  },
]
