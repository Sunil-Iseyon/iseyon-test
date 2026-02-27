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
    answer: "The Iseyon Analytics blog covers AI-powered business intelligence, data analytics, cloud platforms (Snowflake, Databricks, Palantir), emerging technologies, industry trends, and best practices for data-driven decision making. Furthermore, our articles typically explore real-world implementation case studies and technology comparisons to help practitioners make informed platform choices. According to Gartner, organisations that regularly consume expert analytics content generally improve their technology selection decisions by a significant margin."
  },
  {
    question: "How often is the blog updated with new content?",
    answer: "We regularly publish new articles and insights from our expert team, typically publishing several times per month, covering the latest developments in AI, BI, and data analytics. Consequently, readers can generally expect fresh content that reflects recent market shifts, analyst reports, and emerging practices in the data engineering and business intelligence space. In addition, we occasionally release in-depth guides and reports that provide comprehensive coverage of complex topics."
  },
  {
    question: "Who writes the blog articles?",
    answer: "Our blog articles are written by the Iseyon Analytics expert team, including our founders and senior consultants with decades of combined experience in business intelligence, data analytics, and AI integration. Furthermore, contributing authors typically hold industry certifications from Databricks, Snowflake, Microsoft, and Palantir, ensuring that technical content is accurate and reflects current platform capabilities. However, all articles are reviewed for accuracy before publication to maintain editorial standards."
  },
  {
    question: "Can I subscribe to receive blog updates?",
    answer: "Yes, you can subscribe to our newsletter at the footer of any page to receive the latest blog posts, industry insights, and company updates directly to your inbox. In addition, subscribers typically receive curated digests that highlight the most relevant content for their industry or technology stack. Additionally, newsletter subscribers are generally the first to receive invitations to webinars and community events hosted by Iseyon Analytics."
  },
  {
    question: "How can I request a specific topic to be covered?",
    answer: "We welcome topic suggestions and aim to address the areas most relevant to our readers. Please contact us through our contact page or send an email to info@iSeyon.com with your suggested topics or questions you would like addressed. Furthermore, topics that reflect common questions from multiple readers are generally prioritised for upcoming editorial planning cycles. Therefore, community input directly shapes our content roadmap."
  },
]

export const serviceFAQs: FAQ[] = [
  {
    question: "What services does Iseyon Analytics provide?",
    answer: "Iseyon Analytics provides AI-powered business intelligence consulting, cloud platform implementation (Snowflake, Databricks, Palantir, Anaplan), Power BI services, data analytics solutions, and custom AI integration services. Furthermore, our certified consultants typically tailor each engagement to the client's industry and data maturity level."
  },
  {
    question: "How long does a typical BI implementation project take?",
    answer: "Project timelines generally vary based on scope and complexity. Smaller implementations may typically take 4–8 weeks, while enterprise-wide transformations can often require 3–6 months. Consequently, we provide detailed timelines during the consultation phase to ensure alignment. For example, a Snowflake data platform migration typically differs in scope from a full AI analytics modernisation programme."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we typically provide comprehensive post-implementation support including training, documentation, maintenance packages, and ongoing optimisation services to ensure long-term success. In addition, our consultants generally remain available for iterative improvements as business requirements evolve."
  },
  {
    question: "What industries do you specialise in?",
    answer: "We generally serve various industries including healthcare, finance, retail, manufacturing, technology, and professional services. However, our solutions are typically customised to meet industry-specific requirements and compliance standards. For example, healthcare clients often require HIPAA-aligned data governance, while financial services clients may prioritise SOX compliance."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "We follow industry-leading security practices and typically implement role-based access controls, encryption, and compliance measures aligned with relevant regulations (GDPR, HIPAA, SOC 2) based on your industry requirements. According to research by Gartner, organisations that invest in structured data governance frameworks generally achieve significantly lower security incident rates than those relying on ad hoc approaches."
  },
]

export const contactFAQs: FAQ[] = [
  {
    question: "How can I get started with Iseyon Analytics?",
    answer: "Simply fill out our contact form, schedule a consultation, or call us at +1-651-503-9126. We will discuss your specific needs, data challenges, and business objectives, then provide a customised solution proposal. Furthermore, our initial discovery sessions typically last 30–60 minutes and are designed to give you a clear understanding of potential ROI before any commitment."
  },
  {
    question: "What information should I include in my initial inquiry?",
    answer: "Please share your business objectives, current data challenges, existing systems, and desired outcomes. The more context you provide, the more accurately we can tailor our recommendations. Consequently, discovery sessions that include a brief overview of your current data stack generally result in more actionable output. For example, noting which platforms (Snowflake, Databricks, Power BI) you currently use helps us identify integration opportunities immediately."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer complimentary initial consultations to understand your requirements and determine how we can help achieve your business intelligence goals. In addition, these sessions are typically non-committal and designed to help you evaluate whether our expertise aligns with your needs. According to industry benchmarks, organisations that engage in structured discovery before procurement generally experience shorter implementation timelines."
  },
  {
    question: "What is the typical response time for inquiries?",
    answer: "We aim to respond to all inquiries within 24 business hours during the standard working week. However, for time-sensitive requirements, you may call us directly at +1-651-503-9126 for a same-day response. Additionally, submissions made via the contact form typically receive an automated acknowledgement within minutes, followed by a personalised reply from our team."
  },
  {
    question: "Where is Iseyon Analytics located?",
    answer: "Our headquarters is in New York, USA, and we serve clients across the United States and India, with full capabilities to work remotely with global clients. Furthermore, our distributed team model generally allows us to accommodate multiple time zones without compromising response quality or project continuity. Therefore, geography is typically not a barrier to engagement."
  },
]

export const teamFAQs: FAQ[] = [
  {
    question: "What experience does the Iseyon Analytics team have?",
    answer: "Our team brings decades of combined experience in business intelligence, data analytics, AI implementation, and cloud platforms. Furthermore, our founders and senior consultants have typically led enterprise-scale transformations for Fortune 500 companies across healthcare, finance, retail, and technology sectors. According to research by the MIT Sloan Management Review, organisations that engage consultants with cross-industry experience generally achieve faster time-to-value on analytics platform investments."
  },
  {
    question: "Does your team have industry certifications?",
    answer: "Yes, our team holds certifications from leading technology partners including Microsoft (Power BI, Azure), Databricks, Snowflake, Palantir, and other enterprise platforms. In addition, our consultants typically maintain active certifications and renew them as vendor programmes evolve. Consequently, clients can be confident that the guidance they receive reflects the most current product capabilities and architectural best practices."
  },
  {
    question: "Can I meet with the team before starting a project?",
    answer: "Absolutely. We strongly encourage discovery meetings where you can meet the specific team members who will be working on your engagement. This typically helps build trust, surface any technical prerequisites early, and ensures full alignment on goals, milestones, and communication cadences before work begins. However, if a full meeting is not feasible, we can generally provide written bios and case study references for review."
  },
  {
    question: "How does Iseyon Analytics stay current with technology trends?",
    answer: "Our team continuously invests in training, attends industry conferences, and maintains active partnerships with leading technology vendors including Databricks, Snowflake, and Microsoft. Furthermore, we regularly publish analyst research summaries and technical deep-dives on our blog to share knowledge with the broader community. Additionally, our internal knowledge-sharing practice generally ensures that insights from one client engagement benefit all others where applicable."
  },
]

export const insightFAQs: FAQ[] = [
  {
    question: "How can these insights help my organisation?",
    answer: "Our insights generally provide actionable strategies and best practices that help organisations leverage data analytics, AI, and business intelligence to improve decision-making and drive competitive advantage. Furthermore, according to McKinsey Global Institute (2023), organisations that systematically apply data-driven insights typically outperform peers in operational efficiency and revenue growth."
  },
  {
    question: "Are these insights based on real-world implementations?",
    answer: "Yes, all our insights are typically derived from our extensive experience implementing solutions for clients across various industries. In addition, we combine practical knowledge with industry research and peer-reviewed analysis of emerging trends to ensure our guidance reflects current best practices."
  },
  {
    question: "How often are insights updated?",
    answer: "We regularly update our insights to reflect the latest technological developments and industry best practices. Consequently, the content generally reflects lessons learned from recent client engagements as well as published analyst research. For the most current information, we recommend checking our blog."
  },
  {
    question: "Can I request a consultation based on these insights?",
    answer: "Absolutely. If you'd like to discuss how these insights apply to your specific situation, please contact us through our contact page or call +1-651-503-9126 for a free consultation. Additionally, our consultants can typically provide a same-day initial assessment for well-scoped enquiries."
  },
  {
    question: "Do you provide implementation support for these concepts?",
    answer: "Yes, we typically offer full implementation services including strategy development, platform selection, deployment, training, and ongoing support. However, the level of support generally varies by engagement scope. For example, a proof-of-concept may require less ongoing support than an enterprise-wide data platform migration."
  },
]
