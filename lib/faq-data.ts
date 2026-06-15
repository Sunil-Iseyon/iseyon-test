/**
 * faq-data.ts — server-safe (NO 'use client')
 *
 * All static FAQ arrays live here so Server Components can import them
 * directly without crossing the 'use client' boundary in faq-schema.tsx.
 * The FAQSchema React component imports and re-exports these for convenience.
 */

export type FAQ = {
  question: string
  answer: string
}

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
    answer: "We welcome topic suggestions and aim to address the areas most relevant to our readers. Please contact us through our contact page or send an email to info@iseyon.com with your suggested topics or questions you would like addressed. Furthermore, topics that reflect common questions from multiple readers are generally prioritised for upcoming editorial planning cycles. Therefore, community input directly shapes our content roadmap."
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
    question: "Who are the founders of Iseyon Analytics?",
    answer: "Iseyon Analytics was co-founded by Chandan Pandey (CEO), Kayel Nelson (CTO), and Walter Reis (Chief Technology Officer). Together they typically bring decades of combined experience in AI-powered business intelligence, data analytics, cloud architecture, and enterprise BI consulting across Fortune 500 organisations. Furthermore, each founder generally leads a distinct practice area, which allows Iseyon Analytics to deliver end-to-end solutions from strategy through deployment without relying on subcontractors."
  },
  {
    question: "What certifications and expertise does the Iseyon Analytics team hold?",
    answer: "The Iseyon Analytics team holds certifications across Snowflake, Databricks, Power BI, Palantir Foundry, AWS, Microsoft Azure, and Google Cloud Platform (GCP). Our consultants are certified practitioners in the primary platforms we implement, ensuring clients typically receive expert-level delivery on every engagement. In addition, the team generally maintains active certifications as vendor programmes evolve, so clients can be confident that guidance reflects current platform capabilities."
  },
  {
    question: "How experienced is the Iseyon Analytics team in enterprise BI delivery?",
    answer: "Iseyon Analytics founders collectively have 30+ years of enterprise analytics experience. CEO Chandan Pandey has typically led multi-million-dollar BI transformation programmes serving Fortune 500 clients. CTO Kayel Nelson brings deep cloud-native architecture expertise. Furthermore, COO Walter Reis has built enterprise BI ecosystems on Tableau, Power BI, SQL Server, and Snowflake for Fortune 500 organisations. According to Harvard Business Review, organisations that engage consultants with demonstrated enterprise-scale delivery experience generally achieve better outcomes than those relying on vendors without comparable track records."
  },
  {
    question: "What industries does the Iseyon Analytics team specialise in?",
    answer: "The Iseyon Analytics team has deep expertise across financial services, retail and eCommerce, healthcare, manufacturing, and the public sector. Our consultants have delivered analytics solutions in all major verticals, generally adapting BI and AI strategies to each industry's unique data challenges and compliance requirements. However, our methodology is typically platform-agnostic, allowing us to recommend the most appropriate technology for each context rather than defaulting to a single vendor stack."
  },
  {
    question: "How can I connect with the Iseyon Analytics team?",
    answer: "You can connect with the Iseyon Analytics team through our contact page at iseyon.com/contact, or by reaching out via LinkedIn. Additionally, our founders are generally available for speaking engagements, workshops, and enterprise discovery sessions. Therefore, whether you are looking for a strategic advisory conversation or a detailed technical scoping session, we can typically accommodate your preferred format."
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

