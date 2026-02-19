'use client';

import { motion } from 'framer-motion';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
}

export function Timeline({ events }: { events: TimelineEvent[] }) {
  const iconMap: Record<string, string> = {
    'September 18, 2025': '🏃',
    'October 29, 2025': '🏃',
    'May 7, 2026': '🍩',
    'July 9, 2026': '🍦',
    'September 17, 2026': '🏃',
  };

  return (
    <section>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Community Timeline</h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">Join us in supporting our community through these amazing events</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary sm:left-6 lg:left-12" />

        {/* Timeline items - newest first */}
        <div className="space-y-8 pl-6 sm:pl-20 lg:pl-24">
          {[...events].reverse().map((event, index) => (
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
                <span className="text-xl">{iconMap[event.year] || '🏃'}</span>
              </div>

              {/* Content card */}
              <div className="rounded-lg bg-card p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <time className="text-xs sm:text-sm font-semibold text-primary">{event.year}</time>
                <h3 className="mt-2 text-base sm:text-lg md:text-xl font-bold text-foreground">{event.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
