'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We collect personal information such as name, email address, and usage data to improve our services.'
  },
  {
    title: 'How We Use Your Information',
    content:
      'Your information is used to provide, maintain, and improve our services, communicate updates, and ensure security.'
  },
  {
    title: 'Cookies',
    content:
      'We use cookies to enhance user experience and analyze website traffic.'
  },
  {
    title: 'Data Protection',
    content:
      'We implement industry-standard security measures to protect your data.'
  },
  {
    title: 'Third-Party Services',
    content:
      'We may use third-party tools that collect information to help us operate our website.'
  },
  {
    title: 'Your Rights',
    content:
      'You have the right to access, update, or delete your personal data.'
  },
  {
    title: 'Contact Us',
    content:
      'If you have any questions about this Privacy Policy, please contact us.'
  }
]

export default function PrivacyPolicyPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" max-w-4xl mx-auto px-6 py-20 pt-24 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Privacy Policy
      </motion.h1>

      <p className="text-gray-500 mb-12">
        Last updated: February 2026
      </p>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              {section.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  )
}
