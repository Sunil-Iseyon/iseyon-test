'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FAQ = {
  question: string
  answer: string
}

type FAQSchemaProps = {
  faqs: FAQ[]
  title?: string
  showVisibleFAQ?: boolean
  potentialAction?: object | object[]
}

export function FAQSchema({ faqs, title = "Frequently Asked Questions", showVisibleFAQ = true, potentialAction }: FAQSchemaProps) {
  // FAQ Schema for search engines
  const faqSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
  if (potentialAction) {
    faqSchema.potentialAction = potentialAction
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Visible FAQ Section */}
      {showVisibleFAQ && (
        <section className="py-16 sm:py-20 md:py-24 bg-slate-50" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Find answers to common questions about our services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
                    itemScope 
                    itemProp="mainEntity" 
                    itemType="https://schema.org/Question"
                  >
                    <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-5">
                      <span itemProp="name">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent 
                      className="text-gray-600 pb-5"
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                 ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}

// Pre-defined FAQ sets for different pages
export const blogFAQs: FAQ[] = [
  {
    question: "What topics does the Iseyon Analytics blog cover?",
    answer: "The Iseyon Analytics blog covers AI-powered business intelligence, data analytics, cloud platforms (Snowflake, Databricks, Palantir), emerging technologies, industry trends, and best practices for data-driven decision making."
  },
  {
    question: "How often is the blog updated with new content?",
    answer: "We regularly publish new articles and insights from our expert team, typically 2-3 times per month, covering the latest developments in AI, BI, and data analytics."
  },
  {
    question: "Who writes the blog articles?",
    answer: "Our blog articles are written by the Iseyon Analytics expert team, including our founders and senior consultants with decades of combined experience in business intelligence, data analytics, and AI integration."
  },
  {
    question: "Can I subscribe to receive blog updates?",
    answer: "Yes! You can subscribe to our newsletter at the footer of any page to receive the latest blog posts, industry insights, and company updates directly to your inbox."
  },
  {
    question: "How can I request a specific topic to be covered?",
    answer: "We welcome topic suggestions! Please contact us through our contact page or send an email to info@Iseyon.com with your suggested topics or questions you'd like addressed."
  },
]

export const serviceFAQs: FAQ[] = [
  {
    question: "What services does Iseyon Analytics provide?",
    answer: "Iseyon Analytics provides AI-powered business intelligence consulting, cloud platform implementation (Snowflake, Databricks, Palantir, Anaplan), Power BI services, data analytics solutions, and custom AI integration services."
  },
  {
    question: "How long does a typical BI implementation project take?",
    answer: "Project timelines vary based on scope and complexity. Small implementations may take 4-8 weeks, while enterprise-wide transformations can take 3-6 months. We provide detailed timelines during the consultation phase."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we provide comprehensive post-implementation support including training, documentation, maintenance packages, and ongoing optimization services to ensure long-term success."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve various industries including healthcare, finance, retail, manufacturing, technology, and professional services. Our solutions are customized to meet industry-specific requirements and compliance standards."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "We follow industry-leading security practices, implement role-based access controls, encryption, and ensure compliance with relevant regulations (GDPR, HIPAA, SOC 2) based on your industry requirements."
  },
]

export const contactFAQs: FAQ[] = [
  {
    question: "How can I get started with Iseyon Analytics?",
    answer: "Simply fill out our contact form, schedule a consultation, or call us at +1-651-503-9126. We'll discuss your needs and provide a customized solution proposal."
  },
  {
    question: "What information should I include in my initial inquiry?",
    answer: "Please share your business objectives, current data challenges, existing systems, and desired outcomes. This helps us provide more accurate and relevant recommendations."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer complimentary initial consultations to understand your requirements and determine how we can help achieve your business intelligence goals."
  },
  {
    question: "What is the typical response time for inquiries?",
    answer: "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly at +1-651-503-9126."
  },
  {
    question: "Where is Iseyon Analytics located?",
    answer: "Our headquarters is in New York, USA, and we serve clients across the United States and India, with capabilities to work remotely with global clients."
  },
]

export const teamFAQs: FAQ[] = [
  {
    question: "What experience does the Iseyon Analytics team have?",
    answer: "Our team brings decades of combined experience in business intelligence, data analytics, AI implementation, and cloud platforms. Our founders and consultants have worked with Fortune 500 companies and led enterprise-scale transformations."
  },
  {
    question: "Does your team have industry certifications?",
    answer: "Yes, our team holds certifications from leading technology partners including Microsoft (Power BI, Azure), Databricks, Snowflake, Palantir, and other enterprise platforms."
  },
  {
    question: "Can I meet with the team before starting a project?",
    answer: "Absolutely! We encourage discovery meetings where you can meet the team members who will be working on your project. This helps build trust and ensures alignment on goals and approach."
  },
  {
    question: "How does Iseyon Analytics stay current with technology trends?",
    answer: "Our team continuously invests in training, attends industry conferences, maintains partnerships with leading technology vendors, and actively contributes to the analytics community through our blog and thought leadership."
  },
]

export const insightFAQs: FAQ[] = [
  {
    question: "How can these insights help my organization?",
    answer: "Our insights provide actionable strategies and best practices that help organizations leverage data analytics, AI, and business intelligence to improve decision-making, increase efficiency, and drive competitive advantage."
  },
  {
    question: "Are these insights based on real-world implementations?",
    answer: "Yes, all our insights are derived from our extensive experience implementing solutions for clients across various industries. We combine practical knowledge with industry research and emerging trends."
  },
  {
    question: "How often are insights updated?",
    answer: "We regularly update our insights to reflect the latest technological developments, industry best practices, and lessons learned from recent client engagements. Check our blog for the most current information."
  },
  {
    question: "Can I request a consultation based on these insights?",
    answer: "Absolutely! If you'd like to discuss how these insights apply to your specific situation, please contact us through our contact page or call +1-651-503-9126 for a free consultation."
  },
  {
    question: "Do you provide implementation support for these concepts?",
    answer: "Yes, we offer full implementation services including strategy development, platform selection, deployment, training, and ongoing support to help you successfully implement these insights in your organization."
  },
]
