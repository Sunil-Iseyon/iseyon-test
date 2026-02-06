'use client'

import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { NewProject } from '@/components/new-project'
import { TestimonialsSection } from '@/components/testimonials-section'
import { BannerSection } from '@/components/banner-section'
import { PartnersSlider } from '@/components/partners-slider'

export default function Home() {
  return (
    <main className="min-h-screen bg-white snap-y snap-proximity">
      <Hero />
      <ServicesSection />
      <NewProject />
      <TestimonialsSection />
      <BannerSection />
      <PartnersSlider />
    </main>
  )
}
