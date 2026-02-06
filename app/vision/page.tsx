'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Target, Eye, Heart, Lightbulb, Shield, Users, Rocket, Globe } from 'lucide-react'

export default function VisionPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and data analytics.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency and maintain the highest ethical standards.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We deliver world-class solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your success is our success, and we\'re committed to your growth.'
    }
  ]

  const visionPoints = [
    {
      icon: Globe,
      text: 'Extract actionable insights from any data source in real-time'
    },
    {
      icon: Target,
      text: 'Predict market trends and customer behavior with unprecedented accuracy'
    },
    {
      icon: Rocket,
      text: 'Automate complex business processes with intelligent systems'
    },
    {
      icon: Users,
      text: 'Make decisions with confidence backed by comprehensive data analysis'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      {/* <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Eye className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Vision</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses worldwide with the transformative power of artificial intelligence and data-driven insights
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="pb-24 pt-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col lg:flex-row lg:items-center  gap-12 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Vision, Leadership, Consistency
              </h2>
              <h3 className="text-2xl md:text-2xl font-semibold text-gray-500 mb-6 leading-tight">
                Closing the gap between business leaders and technology professionals
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                To assist in the integration of Business Intelligence solutions, our organization fosters collaborative relationships with companies of all sizes around the world. Our exceptional value for our customers distinguishes us from the competition. iSeyon offers a lean industrialized delivery model to help our clients achieve their objectives.
              </p>
              <div className="flex gap-20 justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-foreground/60">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">99%</div>
                  <div className="text-sm text-foreground/60">Satisfaction</div>
                </div>
              </div>
            </motion.div>

     
          </div>
        </div>
      </section>

      {/* Vision 2026 Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <Rocket className="w-4 h-4" />
              Looking Forward
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Vision for 2026 and Beyond
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We envision a future where artificial intelligence and advanced analytics are seamlessly integrated into every aspect of business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed pt-2">{point.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              <Heart className="w-4 h-4" />
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Core Values</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-border hover:border-primary transition-all group"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-5 bg-gradient-to-r from-primary via-primary/95 to-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Commitment to You
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
              We're committed to providing continuous innovation, unwavering support, and solutions that evolve with your business. Together, we're building the future of intelligent business analytics.
            </p>
            {/* <motion.a
              href="/request-demo"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Us on This Journey
              <Rocket className="w-5 h-5" />
            </motion.a> */}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
