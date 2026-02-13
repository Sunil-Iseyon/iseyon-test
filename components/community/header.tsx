'use client';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
            Support for Communities
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-muted-foreground max-w-3xl mx-auto px-4">
            We are planning to participate in some local runs to support our community and take the chance to move.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-10 left-20 h-80 w-80 rounded-full bg-secondary blur-3xl" />
      </div>
    </header>
  );
}
