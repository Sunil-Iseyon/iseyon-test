'use client'

import { motion } from 'framer-motion'
import { Linkedin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Team from '@/public/team.png'
import member1 from '@/public/team/chandan.png'
import member2 from '@/public/team/kayel.png'
import member3 from '@/public/team/Walter.png'

export default function TeamPage() {
  const values = [
    {
      title: 'Learn:',
      description: 'To excel in our industry we always need to be learning. PeopleWorX staff are required to continually participate in continuing education and learning about the new strategies and compliance rules.'
    },
    {
      title: 'Educate.',
      description: 'Great customer service includes not only serving, but educating our Customers. PeopleWorX practices a policy of educating customers in all things HR.'
    },
    {
      title: 'Communicate.',
      description: 'Great relationships are built on great communication. We strive to communicate at the highest level with our Customers.'
    }
  ]

  const team = [
    {
      name: 'Chandan Pandey',
      role: 'Founder & CEO',
      image: member1,
      descp: "27+ years of experience across multiple IT operations, specializing in Business Intelligence. First hand experience with managing large onsite/offshore model teams and projects.",
      linkedin: "#"
    },
    {
      name: 'Kayel Nelson',
      role: 'Founder & COO',
      image:member2,
      descp: "15+ years of specialized knowledge on enterprise migrations to the cloud infrastructure, mobile deployments, and advanced applications architecture.",
      linkedin: "#"
    },
    {
      name: 'Walter Reis',
      role: 'Founder & CTO',
      image: member3,
      descp: "25+ years of diverse experience across companies. Extensive domain knowledge and solution expertise in business intelligence and analytics solution architectures.",
      linkedin: "#"
    },
  ]

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

  return (
    <main className="pt-30 bg-white">

      {/* Company Values Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Values Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Company Values</h1>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <p className="text-base text-foreground">
                      <span className="font-bold">{value.title}</span> {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link 
                  href="/request-demo"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Team Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative "
            >
              <div className="relative  w-full aspect-[4/3] flex items-center justify-center">
                {/* Indigo gradient oval background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[90%] rounded-[50%] bg-gradient-to-br from-indigo-500 via-indigo-400 to-indigo-300 opacity-30 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[85%] rounded-[50%] border-2 border-indigo-400/30" />
                
                {/* Team Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src={Team}
                    alt="Our Team"
                    width={600}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col"
              >
                <div className="relative bg-white h-120 w-82  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Member image container */}
                  <div className="relative w-full  overflow-hidden">
                    {/* Indigo gradient overlay on hover - starts from bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Member Image */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={200}
                      className="object-cover  group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* LinkedIn Icon - visible on hover */}
                    <a
                      href={member.linkedin}
                      className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500 z-20"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-6 h-6 text-primary" />
                    </a>

                    {/* Short description overlay - shows on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                      <p className="text-white text-sm leading-relaxed">
                        {member.descp}
                      </p>
                    </div>
                  </div>

                  {/* Member Info - Always visible */}
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-black mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-wide">{member.role}</p>
                    
                    {/* Description preview - visible by default, fades on hover */}
                    <p className="text-gray-600 text-sm mt-3 line-clamp-2 group-hover:opacity-0 transition-opacity duration-300">
                      {member.descp}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
