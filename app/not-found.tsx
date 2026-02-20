'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className=" pt-34 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* Floating Sparkles */}
        <motion.div
          className="absolute -top-10 -right-10"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-8 h-8 text-primary/40" />
        </motion.div>

        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8 relative"
        >
          <motion.h1 
            className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary leading-none"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-base text-gray-500">
            Don't worry, let's get you back on track! 🚀
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-3.5 bg-white text-primary border-2 border-primary/30 rounded-xl font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </motion.div>

        {/* Popular Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm font-medium text-gray-600 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: '/', label: 'Home' },
              { href: '/blog', label: 'Blog' },
              { href: '/our-team', label: 'Our Team' },
              { href: '/our-vision', label: 'Vision' },
              { href: '/contact', label: 'Contact Us' },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="inline-block px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 hover:text-primary hover:border-primary rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
