'use client'

import { motion } from 'framer-motion'

interface PrivacySection {
  title?: string
  content?: string
}

export function PrivacyPolicyClient({ sections }: { sections: PrivacySection[] }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 pt-24 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-500 mb-12"
      >
        Last updated: February 2026
      </motion.p>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
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
    </main>
  )
}
