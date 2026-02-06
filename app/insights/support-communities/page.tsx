'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/community/header';
import { Gallery } from '@/components/community/gallery';
import { Timeline } from '@/components/community/timeline';

export default function SupportCommunitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Timeline />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Gallery />
        </motion.div>
      </div>
    </main>
  );
}
