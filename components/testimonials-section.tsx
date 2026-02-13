'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Testimonial {
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <Card className="h-full border border-slate-200 hover:border-primary bg-white hover:shadow-lg transition-all duration-300 rounded-2xl">
      <CardContent className="p-6 md:p-8 flex flex-col h-full">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4 md:mb-6">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8 grow">
          "{testimonial.content}"
        </p>

        {/* Divider */}
        <div className="w-8 h-1 bg-gradient-to-r from-primary to-indigo-400 rounded-full mb-4 md:mb-6" />

        {/* Author */}
        <div className="flex items-center gap-3 md:gap-4">
          <Avatar className="w-10 h-10 md:w-12 md:h-12 border-2 border-cyan-100">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-primary text-white font-semibold text-sm md:text-base">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-slate-900 text-sm md:text-base">{testimonial.name}</h3>
            <p className="text-xs md:text-sm text-slate-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-xs md:text-sm font-medium mb-4 backdrop-blur-sm border border-accent/20">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Hear from our clients about their transformative experiences with our solutions
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-[90%] pl-2 md:pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {renderTestimonialCard(testimonial, index)}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative left-0 translate-x-0" />
              <CarouselNext className="relative right-0 translate-x-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.08)' }}
              className="group"
            >
              {renderTestimonialCard(testimonial, index)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
