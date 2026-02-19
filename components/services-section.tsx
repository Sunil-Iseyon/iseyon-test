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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="pt-10 md:pt-20 pb-10 md:pb-16 bg-white" id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
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

        {/* Mobile Carousel */}
        <div className="md:hidden px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => {
                const Icon = iconMap[service.homePageIcon as keyof typeof iconMap] || BarChart3;
                const isPrimary = index % 2 === 0;
                const serviceSlug = service._sys?.filename || service.heading.toLowerCase().replace(/\\s+/g, '-');
                const serviceUrl = `/services/${service.category}/${serviceSlug}`;
                
                return (
                  <CarouselItem key={index} className="basis-[85%] pl-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`
                        group relative p-4 items-center rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-lg  min-h-[240px] flex flex-col overflow-hidden
                        ${isPrimary 
                          ? 'bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600' 
                          : 'bg-gradient-to-br from-stone-50 via-sky-50/50 to-stone-100/80 border border-slate-200'
                        }
                      `}
                    >
                      {/* Blur overlay on tap/touch */}
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 active:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center mb-3 shrink-0
                          ${isPrimary ? 'bg-slate-800/90' : 'bg-slate-700/90'}
                        `}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className={`
                          text-base font-bold mb-2
                          ${isPrimary ? 'text-white' : 'text-slate-800'}
                        `}>
                          {service.heading}
                        </h3>

                        {/* Description */}
                        <p className={`
                          text-xs leading-relaxed mb-3 grow h-[60px]
                          ${isPrimary ? 'text-white/90' : 'text-slate-600'}
                        `}>
                          {service.homePageDescription}
                        </p>

                        {/* Learn More Button */}
                        <Link href={serviceUrl}>
                          <Button
                            variant="default"
                            size="sm"
                            className={`w-full shadow-md text-xs font-medium flex items-center justify-center gap-2 transition-all
                              ${isPrimary 
                                ? 'bg-white text-sky-500 hover:bg-transparent  hover:text-white ' 
                                : 'bg-sky-500 text-white hover:bg-transparent  hover:text-sky-500 border border-sky-500'
                              }
                            `}
                          >
                            <span>Learn more</span>
                            <span className="inline-block">→</span>
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {services.length > 1 && (
              <div className="flex justify-center gap-2 mt-7">
                <CarouselPrevious className="relative left-0 translate-x-0" />
                <CarouselNext className="relative right-0 translate-x-0" />
              </div>
            )}
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
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
                whileHover={{ scale: 1.02, y: -8 }}
                className={`
                  group relative rounded-bl-2xl rounded-tr-2xl p-6 md:p-8  transition-all duration-300 shadow-lg hover:shadow-2xl h-auto min-h-[280px] md:min-h-[320px] flex flex-col overflow-hidden
                  ${isPrimary 
                    ? 'bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600' 
                    : 'bg-gradient-to-br from-stone-50 via-sky-50/50 to-stone-100/80 border border-2 '
                  }
                `}
              >
                {/* Blur overlay on hover */}
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110
                    ${isPrimary ? 'bg-slate-800/90' : 'bg-slate-700/90'}
                  `}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-lg md:text-xl font-bold mb-3 md:mb-4
                    ${isPrimary ? 'text-white' : 'text-slate-800'}
                  `}>
                    {service.heading}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm leading-relaxed mb-4 grow 
                    ${isPrimary ? 'text-white/90' : 'text-slate-600'}
                  `}>
                    {service.homePageDescription}
                  </p>

                  {/* Learn More Button - shown on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link href={serviceUrl}>
                      <Button
                        variant="default"
                        size="lg"
                        className={`w-full shadow-lg text-sm md:text-base font-bold flex items-center justify-center gap-2 group/btn transition-all
                          ${isPrimary 
                            ? 'bg-white text-sky-500 hover:bg-transparent hover:border-white hover:text-white border border-white' 
                            : 'bg-sky-500 text-white hover:bg-white  hover:text-sky-500 border '
                          }
                        `}
                      >
                        <span>Learn more</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          →
                        </motion.span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
