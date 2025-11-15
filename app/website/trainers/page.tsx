'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function TrainersPage() {
  const trainers = [
    {
      name: 'Mikko R.',
      specialty: 'Strength & Conditioning',
      bio: [
        'Certified Level 2 Coach',
        'Sports Physiology background',
        '10+ years experience',
      ],
    },
    {
      name: 'Sarah J.',
      specialty: 'HIIT & Cardio',
      bio: [
        'NSCA Certified Trainer',
        'Group fitness specialist',
        '8+ years experience',
      ],
    },
    {
      name: 'Emma W.',
      specialty: 'Yoga & Mobility',
      bio: [
        'RYT-500 Certified',
        'Rehabilitation focus',
        '12+ years experience',
      ],
    },
    {
      name: 'Alex K.',
      specialty: 'Powerlifting',
      bio: [
        'IPF Certified',
        'Competitive athlete',
        '7+ years experience',
      ],
    },
    {
      name: 'Lisa A.',
      specialty: 'Nutrition & Wellness',
      bio: [
        'Certified Nutritionist',
        'Holistic approach',
        '9+ years experience',
      ],
    },
    {
      name: 'Tom H.',
      specialty: 'Functional Training',
      bio: [
        'Functional Movement Specialist',
        'Athletic performance',
        '11+ years experience',
      ],
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
              <Link href="/website/trainers" className="text-arena-yellow font-light">Trainers</Link>
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
              <span className="text-white">Meet</span>{' '}
              <span className="text-arena-yellow">Our Experts</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              Certified trainers dedicated to helping you achieve your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-arena-dark border border-arena-yellow/20 rounded-xl overflow-hidden hover:border-arena-yellow/50 transition-colors"
              >
                <div className="h-64 bg-black flex items-center justify-center">
                  <p className="text-gray-500">Trainer Photo</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-arena-yellow">{trainer.name}</h3>
                  <p className="text-gray-300 font-semibold mb-4">{trainer.specialty}</p>
                  <ul className="space-y-2 mb-6">
                    {trainer.bio.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm font-light">
                        <span className="text-arena-yellow">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/website/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-arena-yellow/10 border border-arena-yellow/30 text-arena-yellow rounded-lg hover:bg-arena-yellow/20 transition-colors font-light text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Session
                  </Link>
                </div>
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

