'use client'

import { servicesContent, type ServiceCategory } from '@/lib/service-content-data'
import { use } from 'react'
import { Header } from '@/components/header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ServicePage({
    params,
}: {
    params: Promise<{ category: string; service: string }>
}) {
    const { category, service } = use(params)
    const content = servicesContent[category as ServiceCategory]?.[service]

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center max-w-7xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-foreground/70">
                        The requested service page does not exist.
                        <br />
                        <span className="text-sm">Category: {category}, Service: {service}</span>
                    </p>
                </div>
            </div>
        )
    }

    // Get all services in the same category for related services
    const allServicesInCategory = servicesContent[category as ServiceCategory]
    const relatedServices = Object.entries(allServicesInCategory || {})
        .filter(([key]) => key !== service)
        .slice(0, 3)

    return (
        <main className="min-h-screen bg-white ">
            <div className='px-12 flex flex-col mx-auto'>
                <section className="pt-32 pb-20 max-w-7xl flex flex-col mx-auto">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Link */}
                        {content.backLink && (
                            <Link
                                href={content.backLink}
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                {content.backLinkText}
                            </Link>
                        )}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-center lg:text-left">

                            {/* Text */}
                            <div className="flex flex-col justify-center items-center lg:items-start max-w-xl">

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                                >
                                    {content.title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-sm md:text-lg text-gray-600 mb-12"
                                >
                                    {content.description}
                                </motion.p>

                            </div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-full lg:w-[500px] h-[240px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src={content.heroImage}
                                    alt={content.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                        </div>


                    </div>
                </section>

                {/* Rich Text Content Section */}
                {content.contentSections && content.contentSections.length > 0 && (
                    <section className="py-2 ">
                        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                            <div className=" p-8 md:p-12 lg:p-16">
                                <div className="prose prose-lg max-w-none">
                                    {content.contentSections.map((section, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="mb-12 last:mb-0"
                                        > 
                                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                                                {section.heading}
                                            </h2>
                                            <div className="space-y-5">
                                                {section.paragraphs.map((paragraph, pIndex) => (
                                                    <p
                                                        key={pIndex}
                                                        className="text-lg text-gray-700 leading-relaxed"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Services Section */}
                {relatedServices.length > 0 && (
                    <section className="py-20 ">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                                    Related Services
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                                    Explore other solutions that complement this service
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedServices.map(([serviceKey, serviceContent], index) => (
                                    <motion.div
                                        key={serviceKey}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={`/services/${category}/${serviceKey}`}
                                            className="group block h-full"
                                        >
                                            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:border-primary/50">
                                                {/* Service Image */}
                                                <div className="relative h-56 overflow-hidden">
                                                    <Image
                                                        src={serviceContent.heroImage}
                                                        alt={serviceContent.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                {/* Service Content */}
                                                <div className="p-6 flex-1 flex flex-col">
                                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                        {serviceContent.title}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                                                        {serviceContent.description}
                                                    </p>
                                                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
                                                        Learn More
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-accent">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            {content.bottomCtaTitle || 'Ready to Transform Your Business?'}
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {content.bottomCtaDescription || "Let's discuss how our solutions can drive your success"}
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary rounded-xl font-bold text-lg hover:bg-white/95 transition-all shadow-2xl transform hover:-translate-y-1 hover:shadow-3xl"
                        >
                            {content.bottomCtaButtonText || 'Get Started Today'}
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
