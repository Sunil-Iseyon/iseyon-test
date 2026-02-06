'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Cog, Database, Activity, Layers, ArrowLeft, Check, Zap } from 'lucide-react'

export default function InternalApplicationsPage() {
  const features = [
    {
      icon: Cog,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline internal processes with intelligent workflow engines.'
    },
    {
      icon: Database,
      title: 'Data Management Systems',
      description: 'Centralized data management platforms that enable seamless collaboration across departments.'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of internal operations, system health, and team performance.'
    },
    {
      icon: Layers,
      title: 'Custom Integrations',
      description: 'Connect all your internal tools and systems into one unified, intelligent platform.'
    }
  ]

  const stats = [
    { value: '75%', label: 'Reduction in Manual Tasks' },
    { value: '3x', label: 'Faster Processes' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '50%', label: 'Cost Savings' }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Minimal Style */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automate Your Internal Operations
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8 max-w-2xl">
              Build and deploy intelligent applications that automate workflows, improve collaboration, and boost team productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-semibold hover:bg-primary/5 transition-all"
              >
                Talk to Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful Internal Tools
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Build custom applications that perfectly fit your organization's unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-border hover:border-accent transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/insights/workflow-automation.jpg"
                alt="Workflow Automation"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6">
                <Zap className="w-4 h-4" />
                Streamlined Operations
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Transform Your Internal Operations
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                Our internal applications platform helps you automate workflows, centralize data management, and boost team productivity. Say goodbye to manual processes and hello to intelligent automation.
              </p>
              <div className="space-y-4">
                {['Reduce manual data entry by 75%', 'Automate approval workflows', 'Real-time collaboration tools', 'Seamless system integrations'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empower Your Team
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Transform your internal operations with applications designed for your specific needs.
            </p>
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/90 transition-all shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
