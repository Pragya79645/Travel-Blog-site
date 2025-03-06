"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ImagesSliderDemo } from "@/components/background"

import { TypewriterEffectSmoothDemo } from "@/components/typewritereffect"
import { VelocityHero } from "@/components/scroll"
import { FeaturesSectionDemo } from "@/components/features"


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Refs for sections to track active section
  const homeRef = useRef(null)
  const destinationsRef = useRef(null)
  const travelTipsRef = useRef(null)
  const contactRef = useRef(null)

  // Check if sections are in view
  const homeInView = useInView(homeRef, { amount: 0.5 })
  const destinationsInView = useInView(destinationsRef, { amount: 0.5 })
  const travelTipsInView = useInView(travelTipsRef, { amount: 0.5 })
  const contactInView = useInView(contactRef, { amount: 0.5 })

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection("home")
    else if (destinationsInView) setActiveSection("destinations")
    else if (travelTipsInView) setActiveSection("travel-tips")
    else if (contactInView) setActiveSection("contact")
  }, [homeInView, destinationsInView, travelTipsInView, contactInView])

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
              NOMAD
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {[
              { name: "Home", id: "home" },
              { name: "Destinations", id: "destinations" },
              { name: "Travel Tips", id: "travel-tips" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm uppercase tracking-widest hover:text-teal-400 transition-colors ${
                  activeSection === item.id ? "text-teal-400" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 w-10 h-10 relative focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center space-y-8">
              {[
                { name: "Home", id: "home" },
                { name: "Destinations", id: "destinations" },
                { name: "Travel Tips", id: "travel-tips" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.id}`}
                    className="text-2xl font-light tracking-widest hover:text-teal-400 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" ref={homeRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
         <div><ImagesSliderDemo /></div>
      
        </div>

        <div className="container mx-auto px-6 z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="text-5xl md:text-7xl font-bold leading-tight gradient-text bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
<TypewriterEffectSmoothDemo />
                </div>
               
               
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden md:block"
            >
             
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Destinations Section */}
   <div><FeaturesSectionDemo /></div>

      {/* Travel Tips Section */}
      <section id="travel-tips" ref={travelTipsRef} className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Travel landscape"
            fill
            className="object-cover brightness-25"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-teal-400 uppercase bg-teal-400/10 rounded-full mb-4"
            >
              Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Travel Wisdom
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Expert advice and insider tips to enhance your travel experiences and make every journey memorable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
          
         
            ].map((tip, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">

                  <div>
                   
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" ref={contactRef} className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-emerald-900/70"></div>
            <div className="absolute inset-0">
              <div className="h-full w-full">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    fill="none"
                    stroke="rgba(79, 209, 197, 0.2)"
                    strokeWidth="0.5"
                    d="M0,0 Q50,50 100,0 V100 Q50,50 0,100 Z"
                  />
                  <path
                    fill="none"
                    stroke="rgba(79, 209, 197, 0.1)"
                    strokeWidth="0.5"
                    d="M0,0 Q50,30 100,0 V100 Q50,70 0,100 Z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative p-10 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Travel Community</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  Subscribe to our newsletter for exclusive travel guides, insider tips, and special offers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-full bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <motion.button
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-medium transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold tracking-tighter">
                <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">
                  NOMAD
                </span>
              </Link>
              <p className="mt-4 text-gray-400">
                Inspiring your next adventure with authentic travel stories and guides.
              </p>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-300 font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Travel Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Travel Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Photography
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-300 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-300 font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 text-gray-400 hover:border-teal-500 hover:text-teal-400 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} NOMAD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

