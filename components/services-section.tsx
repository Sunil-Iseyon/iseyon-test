"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Database,
  Code,
  Users,
  Cloud,
  LineChart,
  Server,
  ShieldCheck,
  Settings,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap = {
  BarChart3,
  Brain,
  Database,
  TrendingUp,
  Shield,
  Zap,
  Code,
  Users,
  Cloud,
  LineChart,
  Server,
  ShieldCheck,
  Settings,
  GitBranch,
};

interface Service {
  heading: string;
  homePageDescription?: string;
  homePageIcon?: string;
  image: string;
  category: string;
  _sys?: {
    filename: string;
  };
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="pt-20 snap-start snap-always min-h-screen bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16 px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-xs md:text-sm font-medium mb-4 backdrop-blur-sm border border-accent/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need for Data Success
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of AI-powered analytics and intelligence
            solutions tailored for modern businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.homePageIcon as keyof typeof iconMap] || BarChart3;
            const isPrimary = index % 2 === 0; // Alternating: sky, white, sky, white...
            const serviceSlug = service._sys?.filename || service.heading.toLowerCase().replace(/\s+/g, '-');
            const serviceUrl = `/services/${service.category}/${serviceSlug}`;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  group relative p-4 sm:p-6 md:p-8 rounded-bl-2xl sm:rounded-bl-3xl lg:rounded-bl-4xl rounded-tr-2xl sm:rounded-tr-3xl lg:rounded-tr-4xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden h-64 sm:h-72 md:h-80 lg:h-80
                  ${isPrimary 
                    ? 'bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600' 
                    : 'bg-gradient-to-br from-stone-50 via-sky-50/50 to-stone-100/80 border border-slate-200'
                  }
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.heading}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                </div>

                {/* Content */}
                <div className="relative z-10 transition-all duration-300 group-hover:blur-sm h-full flex flex-col">
                  {/* Icon */}
                  <div className={`
                    w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shrink-0
                    ${isPrimary ? 'bg-slate-800/90' : 'bg-slate-700/90'}
                  `}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4
                    ${isPrimary ? 'text-white' : 'text-slate-800'}
                  `}>
                    {service.heading}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-xs md:text-sm leading-relaxed grow
                    ${isPrimary ? 'text-white/90' : 'text-slate-600'}
                  `}>
                    {service.homePageDescription}
                  </p>
                </div>

                {/* Learn More Button - Shows on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                >
                  <Link href={serviceUrl}>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-white hover:bg-sky-600 text-sky-500 hover:text-white shadow-2xl text-sm md:text-base font-medium px-6 md:px-8 py-2 md:py-3"
                    >
                      Learn more
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
