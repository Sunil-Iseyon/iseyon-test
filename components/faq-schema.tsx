'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FAQ } from '@/lib/faq-data'

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

// Re-export data arrays from the server-safe lib/faq-data module.
// Server Components must import these directly from '@/lib/faq-data' to avoid
// getting ClientReference proxies when crossing the 'use client' boundary.
export type { FAQ } from '@/lib/faq-data'
export { blogFAQs, serviceFAQs, contactFAQs, teamFAQs, insightFAQs } from '@/lib/faq-data'

