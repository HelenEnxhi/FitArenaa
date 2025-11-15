'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Star } from 'lucide-react'

export default function MembershipPage() {
  const memberships = [
    {
      name: 'Basic Membership',
      price: '€49',
      period: '/month',
      features: [
        'Gym Access',
        'Group Class Access',
        'Mobile App Login',
      ],
      popular: false,
    },
    {
      name: 'Pro Membership',
      price: '€79',
      period: '/month',
      subtitle: 'Everything in Basic +',
      features: [
        'Gym Access',
        'Group Class Access',
        'Mobile App Login',
        'Trainer Consultation',
        'Body Composition Scan Monthly',
      ],
      popular: true,
    },
    {
      name: 'Elite Membership',
      price: '€149',
      period: '/month',
      subtitle: 'Everything in Pro +',
      features: [
        'Gym Access',
        'Group Class Access',
        'Mobile App Login',
        'Trainer Consultation',
        'Body Composition Scan Monthly',
        'Weekly Personal Training',
        'Priority Booking',
      ],
      popular: false,
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
              <Link href="/website/membership" className="text-arena-yellow font-light">Membership</Link>
              <Link href="/website/trainers" className="text-white hover:text-arena-yellow transition-colors font-light">Trainers</Link>
              <Link href="/website/investors" className="text-white hover:text-arena-yellow transition-colors font-light">Investors</Link>
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
              <span className="text-white">Membership</span>{' '}
              <span className="text-arena-yellow">Options</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Transparent pricing. No hidden fees. Flexible options for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-arena-dark border rounded-xl p-8 relative ${
                  membership.popular
                    ? 'border-arena-yellow/50 border-2 shadow-lg shadow-arena-yellow/20'
                    : 'border-arena-yellow/20 hover:border-arena-yellow/50'
                } transition-colors`}
              >
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-arena-yellow text-arena-dark px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">{membership.name}</h3>
                {membership.subtitle && (
                  <p className="text-gray-400 text-sm mb-4">{membership.subtitle}</p>
                )}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-arena-yellow">{membership.price}</span>
                  <span className="text-gray-400 text-lg">{membership.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-arena-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/website/contact"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                    membership.popular
                      ? 'bg-arena-yellow text-arena-dark hover:shadow-lg hover:shadow-arena-yellow/50'
                      : 'bg-arena-yellow/10 border border-arena-yellow/30 text-arena-yellow hover:bg-arena-yellow/20'
                  }`}
                >
                  Get Your Membership
                </Link>
              </motion.div>
            ))}
          </div>
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

