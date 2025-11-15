'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, MapPin, Linkedin, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-arena-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-arena-dark/95 backdrop-blur-md border-b border-arena-yellow/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/website" className="text-2xl font-bold">
              <span className="text-arena-yellow">FIT</span><span className="text-white">ARENA</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/website" className="text-white hover:text-arena-yellow transition-colors font-light">Home</Link>
              <Link href="/website/gym" className="text-white hover:text-arena-yellow transition-colors font-light">Gym</Link>
              <Link href="/website/services" className="text-white hover:text-arena-yellow transition-colors font-light">Services</Link>
              <Link href="/website/membership" className="text-white hover:text-arena-yellow transition-colors font-light">Membership</Link>
              <Link href="/website/trainers" className="text-white hover:text-arena-yellow transition-colors font-light">Trainers</Link>
              <Link href="/website/investors" className="text-white hover:text-arena-yellow transition-colors font-light">Investors</Link>
              <Link href="/website/contact" className="text-arena-yellow font-light">Contact</Link>
            </div>
            <Link
              href="/website/membership"
              className="px-6 py-2 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all"
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-arena-dark via-arena-dark to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-white">Contact</span>{' '}
              <span className="text-arena-yellow">FitArena</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Have questions? Looking to join? Want partnership info?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-arena-dark border border-arena-yellow/20 rounded-xl p-8"
            >
              <Mail className="w-12 h-12 text-arena-yellow mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Email</h3>
              <a
                href="mailto:info@fitarenaa.fi"
                className="text-arena-yellow hover:underline text-lg font-light"
              >
                info@fitarenaa.fi
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-arena-dark border border-arena-yellow/20 rounded-xl p-8"
            >
              <MapPin className="w-12 h-12 text-arena-yellow mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Location</h3>
              <p className="text-gray-300 text-lg font-light">Espoo, Finland</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-arena-dark border border-arena-yellow/20 rounded-xl p-8 text-center"
          >
            <Linkedin className="w-12 h-12 text-arena-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-white">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/company/fitarenaa-oy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arena-yellow hover:underline text-lg font-light"
            >
              FitArena Oy on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-arena-dark">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-arena-yellow/20 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 font-light mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-arena-dark border border-arena-yellow/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-arena-yellow/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-light mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-arena-dark border border-arena-yellow/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-arena-yellow/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-light mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-arena-dark border border-arena-yellow/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-arena-yellow/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-arena-yellow/30 bg-arena-dark py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-arena-yellow">FIT</span><span className="text-white">ARENA</span>
              </h3>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/website" className="text-gray-400 hover:text-arena-yellow transition-colors font-light">Home</Link></li>
                <li><Link href="/website/services" className="text-gray-400 hover:text-arena-yellow transition-colors font-light">Services</Link></li>
                <li><Link href="/website/membership" className="text-gray-400 hover:text-arena-yellow transition-colors font-light">Membership</Link></li>
                <li><Link href="/website/contact" className="text-gray-400 hover:text-arena-yellow transition-colors font-light">Contact</Link></li>
                <li><Link href="/website/investors" className="text-gray-400 hover:text-arena-yellow transition-colors font-light">Investor Relations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 font-light mb-2">
                Email: <a href="mailto:info@fitarenaa.fi" className="text-arena-yellow hover:underline">info@fitarenaa.fi</a>
              </p>
              <p className="text-gray-400 font-light">
                LinkedIn: <a href="https://www.linkedin.com/company/fitarenaa-oy" target="_blank" rel="noopener noreferrer" className="text-arena-yellow hover:underline">FitArena Oy</a>
              </p>
            </div>
          </div>
          <div className="border-t border-arena-yellow/20 pt-8 text-center">
            <p className="text-gray-400 font-light">© 2025 FitArena. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

