'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react'
import type { NavigationGroup } from '@/lib/tina-queries'

interface HeaderProps {
  servicesMenu: NavigationGroup[];
}

export function Header({ servicesMenu }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  // Helper function to get link styles
  const getLinkStyles = () => {
    return (isLandingPage && !isScrolled)
      ? ' hover:text-black/80' 
      : 'text-foreground hover:text-primary'
  }

  // Helper function to get button styles
  const getButtonStyles = () => {
    return `flex items-center gap-1 font-medium transition-all duration-300 ${getLinkStyles()}`
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const insightsSubmenu = [
    { label: 'Business Intelligence', href: '/insights/business-intelligence' },
    { label: 'Internal Applications', href: '/insights/internal-applications' },
    { label: 'Support for Communities', href: '/insights/support-communities' }
  ]

  return (
    <header className={` fixed top-0 z-50 w-full transition-all duration-700 ease-in-out bg-white ${
      (isLandingPage && !isScrolled)
        ? '' 
        : 'shadow-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl text-primary z-10 shrink-0">
          <img src="/iseyon-logo.png" alt="Iseyon Analytics Logo" className="h-12 md:h-16 w-32 md:w-45" />
        </Link>

        {/* Desktop Menu - Center with Glass Effect */}
        <div className={`hidden text-black lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2 px-6 xl:px-8 py-2 md:py-3 rounded-full transition-all duration-700 ease-in-out ${
          (isLandingPage && !isScrolled)
            ? 'text-black' 
            : 'bg-transparent border-0 shadow-none backdrop-blur-none'
        }`}>
          {/* Services Mega Menu Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              setOpenDropdown('services')
              setHoveredGroup(servicesMenu[0]?.group || null)
            }}
            onMouseLeave={() => {
              setOpenDropdown(null)
              setHoveredGroup(null)
            }}
          >
            <button className={getButtonStyles()}>
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openDropdown === 'services' && (
                <motion.div
                  className="absolute top-full pt-2 left-0 z-50"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                >
                  <div className="bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="flex">
                      {/* Left Panel - Groups */}
                      <div className="w-56 bg-slate-50 border-r border-slate-200 p-2">
                        {servicesMenu.map((section) => (
                          <div 
                            key={section.group}
                            onMouseEnter={() => setHoveredGroup(section.group)}
                            className="relative"
                          >
                            <div className={`font-semibold text-sm px-4 py-3 cursor-pointer transition-all rounded-md ${
                              hoveredGroup === section.group 
                                ? 'bg-white text-primary shadow-sm' 
                                : 'text-slate-700 hover:bg-white/50'
                            }`}>
                              {section.group}
                              {section.items.length > 0 && (
                                <ChevronRight className={`w-4 h-4 inline ml-auto float-right transition-transform ${
                                  hoveredGroup === section.group ? 'translate-x-1' : ''
                                }`} />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Right Panel - Leaf Items */}
                      <div className="relative w-80">
                        <AnimatePresence mode="wait">
                          {hoveredGroup && (
                            <motion.div
                              key={hoveredGroup}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ 
                                duration: 0.3,
                                ease: "easeInOut"
                              }}
                              className='p-4 min-h-[200px]'
                            >
                              <h3 className="font-bold text-base text-slate-800 mb-4 pb-2 border-b border-slate-200">
                                {hoveredGroup}
                              </h3>
                              <div className="space-y-1">
                                {servicesMenu.find(s => s.group === hoveredGroup)?.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                          
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/vision" 
            className={`font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block ${getLinkStyles()}`}
            onMouseEnter={() => {
              setOpenDropdown(null)
              setHoveredGroup(null)
            }}
          >
            Our Vision
          </Link>

          <Link 
            href="/team" 
            className={`font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block ${getLinkStyles()}`}
            onMouseEnter={() => {
              setOpenDropdown(null)
              setHoveredGroup(null)
            }}
          >
            Our Team
          </Link>

          {/* Insights Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              setOpenDropdown('insights')
              setHoveredGroup(null)
            }}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={getButtonStyles()}>
              Insights
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {openDropdown === 'insights' && (
                <motion.div
                  className="absolute top-full pt-2 w-56 z-50"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-2">
                    {insightsSubmenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/blog" 
            className={`font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block ${getLinkStyles()}`}
            onMouseEnter={() => {
              setOpenDropdown(null)
              setHoveredGroup(null)
            }}
          >
            Blog
          </Link>
        </div>

        {/* Contact Button - Right */}
        <div className="hidden md:block z-10 flex-shrink-0">
          <Link
            href="/contact"
            className="px-4 md:px-8 py-3 font-semibold bg-sky-600 text-primary-foreground rounded-sm  hover:rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 z-50 ${(isLandingPage && !isScrolled) ? 'text-slate-900' : 'text-foreground'}`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => toggleDropdown('services')}
                className="w-full flex items-center justify-between px-3 py-2 text-foreground hover:bg-muted rounded"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 pl-4"
                  >
                    {servicesMenu.map((section) => (
                      <div key={section.group}>
                        <button
                          onClick={() => setOpenMobileGroup(openMobileGroup === section.group ? null : section.group)}
                          className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded"
                        >
                          {section.group}
                          {section.items.length > 0 && (
                            <ChevronDown className={`w-3 h-3 transition-transform ${openMobileGroup === section.group ? 'rotate-180' : ''}`} />
                          )}
                        </button>
                        <AnimatePresence>
                          {openMobileGroup === section.group && section.items.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-1 pl-4 mt-1"
                            >
                              {section.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-2 text-xs text-foreground hover:bg-muted rounded"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/vision"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-foreground hover:bg-muted hover:translate-x-1 transition-transform rounded"
              >
                Our Vision
              </Link>

              <Link
                href="/team"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-foreground hover:bg-muted hover:translate-x-1 transition-transform rounded"
              >
                Our Team
              </Link>

              <button
                onClick={() => toggleDropdown('insights')}
                className="w-full flex items-center justify-between px-3 py-2 text-foreground hover:bg-muted rounded"
              >
                Insights
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'insights' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'insights' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 pl-4"
                  >
                    {insightsSubmenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-foreground hover:bg-muted hover:translate-x-1 transition-transform rounded"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-3 py-2 bg-primary text-primary-foreground rounded text-center font-medium hover:bg-primary/90"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
