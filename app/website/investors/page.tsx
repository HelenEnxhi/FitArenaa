'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Building2, Users, DollarSign, ArrowRight, Mail, Linkedin } from 'lucide-react'

export default function InvestorsPage() {
  const investmentAreas = [
    {
      icon: Building2,
      title: 'Expansion into new locations',
      desc: 'Scale FitArena across Finland with proven business model',
    },
    {
      icon: Users,
      title: 'Digital training platforms',
      desc: 'Develop and expand online coaching and virtual training capabilities',
    },
    {
      icon: DollarSign,
      title: 'High-demand PT programs',
      desc: 'Invest in personal training infrastructure and certified trainers',
    },
    {
      icon: TrendingUp,
      title: 'Athlete development partnerships',
      desc: 'Build relationships with sports teams and performance athletes',
    },
  ]

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
              <Link href="/website/investors" className="text-arena-yellow font-light">Investors</Link>
              <Link href="/website/contact" className="text-white hover:text-arena-yellow transition-colors font-light">Contact</Link>
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
              <span className="text-white">Why Invest in</span>
              <br />
              <span className="text-arena-yellow">FitArena?</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              FitArena is growing into one of Finland's most promising fitness brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Key Investment Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-arena-dark border border-arena-yellow/20 rounded-xl p-8 hover:border-arena-yellow/50 transition-colors"
                >
                  <Icon className="w-12 h-12 text-arena-yellow mb-4" />
                  <h3 className="text-2xl font-semibold mb-3 text-white">{area.title}</h3>
                  <p className="text-gray-300 font-light">{area.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-arena-dark">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Transparent Business Model',
                desc: 'Clear revenue structure and growth metrics',
              },
              {
                title: 'Scalable Revenue Structure',
                desc: 'Proven model ready for expansion',
              },
              {
                title: 'Strong Community Engagement',
                desc: 'Loyal member base and growing demand',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-arena-yellow/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-arena-yellow">{item.title}</h3>
                <p className="text-gray-400 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-arena-dark border border-arena-yellow/20 rounded-xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Interested in Investing?</h2>
            <p className="text-xl text-gray-300 font-light mb-8">
              Reach us directly for investment details and opportunities
            </p>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:info@fitarenaa.fi"
                className="inline-flex items-center gap-3 px-8 py-4 bg-arena-yellow/10 border border-arena-yellow/30 text-arena-yellow rounded-lg hover:bg-arena-yellow/20 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                info@fitarenaa.fi
              </a>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/company/fitarenaa-oy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-arena-yellow/10 border border-arena-yellow/30 text-arena-yellow rounded-lg hover:bg-arena-yellow/20 transition-colors font-medium"
                >
                  <Linkedin className="w-5 h-5" />
                  FitArena Oy on LinkedIn
                </a>
              </div>
            </div>
            <Link
              href="/website/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all"
            >
              Contact Us for Investment Details
              <ArrowRight className="w-5 h-5" />
            </Link>
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

