'use client';

import { motion } from 'framer-motion';

const activities = [
  {
    date: 'September 18, 2025',
    title: '5K Run / 3K Walk - Norwescap Food Bank',
    description: 'Proceeds from the event are donated to Norwescap Food Bank, which provides two million pounds of food each year to local food pantries, shelters, and childcare and senior centers in Northwest New Jersey.',
    icon: '🏃',
  },
  {
    date: 'October 29, 2025',
    title: '5K Run / 3K Walk - Jersey Shore Rescue Mission',
    description: 'Through community support, the Jersey Shore Rescue Mission provides 31,000+ meals, 12,000+ nights of shelter, $57,000+ worth of goods through various programs, and helps up to 26 men at a time transform their lives in the Life Change Program.',
    icon: '🏃',
  },
  {
    date: 'May 7, 2026',
    title: '5K Run - Donut Chase',
    description: 'The beneficiary for this event is Metavivor. A portion of our proceeds and all donations will go directly to Metavivor for investing in research for metastatic breast cancer, as in breast cancer that has spread to bones, brain, or other vital organs.',
    icon: '🍩',
  },
  {
    date: 'July 9, 2026',
    title: '5K Run - We Want Ice Cream!',
    description: 'A portion of our proceeds and all donations will go for investing in research for metastatic breast cancer, as in breast cancer that has spread to bones, brain, or other vital organs.',
    icon: '🍦',
  },
  {
    date: 'September 17, 2026',
    title: '5K Run / 3K Walk - Norwescap Food Bank',
    description: 'Proceeds from the event are donated to Norwescap Food Bank, which provides two million pounds of food each year to local food pantries, shelters, and childcare and senior centers in Northwest New Jersey.',
    icon: '🏃',
  },
];

export function Timeline() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Community Timeline</h2>
        <p className="mt-2 text-muted-foreground">Join us in supporting our community through these amazing events</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary sm:left-6 lg:left-12" />

        {/* Timeline items */}
        <div className="space-y-8 pl-6 sm:pl-20 lg:pl-24">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-1 flex h-12 w-12 items-center justify-center rounded-full bg-background ring-4 ring-primary sm:-left-[81px] lg:-left-[101px]">
                <span className="text-xl">{activity.icon}</span>
              </div>

              {/* Content card */}
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <time className="text-sm font-semibold text-primary">{activity.date}</time>
                <h3 className="mt-2 text-xl font-bold text-foreground">{activity.title}</h3>
                <p className="mt-3 text-muted-foreground">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
