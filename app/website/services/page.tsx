'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { User, Users, Utensils, BarChart3, Heart, Laptop } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: User,
      title: 'Personal Training',
      desc: 'Customized programs with expert trainers tailored to your goals and fitness level.',
      features: ['One-on-one sessions', 'Custom workout plans', 'Goal-oriented programming', 'Progress tracking'],
    },
    {
      icon: Users,
      title: 'Group Classes',
      desc: 'HIIT, mobility, strength, conditioning, and more. Classes for every fitness level.',
      features: ['HIIT Training', 'Mobility Classes', 'Strength Training', 'Conditioning Workouts'],
    },
    {
      icon: Utensils,
      title: 'Nutrition Coaching',
      desc: 'Meal planning, diet optimization, and body goal support from certified nutritionists.',
      features: ['Meal planning', 'Diet optimization', 'Body goal support', 'Nutrition consultations'],
    },
    {
      icon: BarChart3,
      title: 'Body Composition Scanning',
      desc: 'Accurate measurements for progress tracking with advanced body composition analysis.',
      features: ['Body fat analysis', 'Muscle mass tracking', 'Progress reports', 'Regular scans'],
    },
    {
      icon: Heart,
      title: 'Recovery & Rehabilitation',
      desc: 'Mobility programs, stretching routines, injury prevention, and recovery protocols.',
      features: ['Mobility programs', 'Stretching routines', 'Injury prevention', 'Recovery protocols'],
    },
    {
      icon: Laptop,
      title: 'Online Coaching',
      desc: 'Train from anywhere with our digital platform. Virtual sessions and remote guidance.',
      features: ['Virtual training sessions', 'Remote coaching', 'Digital workout plans', 'Online support'],
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
              <Link href="/website/services" className="text-arena-yellow font-light">Services</Link>
              <Link href="/website/membership" className="text-white hover:text-arena-yellow transition-colors font-light">Membership</Link>
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
              <span className="text-white">Our</span>{' '}
              <span className="text-arena-yellow">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Comprehensive fitness solutions designed to help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
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
                  <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 font-light mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm font-light">
                        <span className="text-arena-yellow">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-arena-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 font-light mb-8">
              Choose a membership plan that includes the services you need
            </p>
            <Link
              href="/website/membership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all text-lg"
            >
              View Membership Options
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

