'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Dumbbell, Users, Calendar, Clock, Star, TrendingUp } from 'lucide-react'

export default function WebsiteHome() {
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
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-arena-dark via-arena-dark to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Level up your fitness.</span>
              <br />
              <span className="text-arena-yellow">Welcome to FitArena.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Premium gym experience in Espoo — high-performance training, expert coaches, and a community built for results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/website/membership"
                className="px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-arena-yellow/50 transition-all"
              >
                Become a Member
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/website/contact"
                className="px-8 py-4 border-2 border-arena-yellow text-arena-yellow rounded-lg font-medium text-lg hover:bg-arena-yellow/10 transition-all"
              >
                Book a Free Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why FitArena Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-arena-yellow">Why</span> <span className="text-white">FitArena</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: 'Strength in Every Rep',
                desc: 'Elite equipment, modern spaces, and everything you need to perform.',
              },
              {
                icon: Users,
                title: 'Expert Coaches',
                desc: 'Certified trainers ready to guide your journey.',
              },
              {
                icon: Calendar,
                title: 'Classes for Every Level',
                desc: 'HIIT, mobility, strength, cardio, and more.',
              },
              {
                icon: Star,
                title: 'Open & Accessible',
                desc: 'Designed for everyone — beginners to advanced athletes.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-arena-dark/50 border border-arena-yellow/20 rounded-xl p-6 hover:border-arena-yellow/50 transition-colors"
                >
                  <Icon className="w-12 h-12 text-arena-yellow mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 font-light">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-arena-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-arena-yellow">Our</span> <span className="text-white">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              'Personal Training',
              'Group Classes',
              'Nutritional Guidance',
              'Body Composition Analysis',
              'Rehabilitation + Recovery',
              'Online Coaching',
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-arena-yellow/20 rounded-xl p-6 hover:border-arena-yellow/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-arena-yellow mb-2">{service}</h3>
                <p className="text-gray-400 text-sm font-light">Professional guidance for your fitness journey</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/website/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-arena-yellow text-arena-yellow rounded-lg font-medium hover:bg-arena-yellow/10 transition-all"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gym Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-arena-yellow">Premium</span> <span className="text-white">Gym Facilities</span>
              </h2>
              <p className="text-gray-300 text-lg font-light mb-6 leading-relaxed">
                Full access to free weights, machines, cardio, turf area, functional zone, and more.
              </p>
              <Link
                href="/website/gym"
                className="inline-flex items-center gap-2 px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all"
              >
                See the Gym
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-arena-dark border border-arena-yellow/20 rounded-xl p-8 h-96 flex items-center justify-center"
            >
              <p className="text-gray-400 text-center">Gym Image Placeholder</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-arena-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <Clock className="w-16 h-16 text-arena-yellow mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8 text-white">Opening Hours</h2>
          <div className="bg-black border border-arena-yellow/20 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-arena-yellow font-semibold mb-2">Mon–Fri</p>
                <p className="text-gray-300 text-xl">06:00–22:00</p>
              </div>
              <div>
                <p className="text-arena-yellow font-semibold mb-2">Sat–Sun</p>
                <p className="text-gray-300 text-xl">08:00–20:00</p>
              </div>
            </div>
          </div>
          <Link
            href="/website/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all"
          >
            Visit Us
          </Link>
        </div>
      </section>

      {/* Membership Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Membership Highlights</h2>
          <p className="text-xl text-gray-300 font-light mb-8">
            Transparent pricing. No hidden fees. Flexible options for everyone.
          </p>
          <Link
            href="/website/membership"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-arena-yellow text-arena-yellow rounded-lg font-medium hover:bg-arena-yellow/10 transition-all"
          >
            View Membership Options
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-arena-dark">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-arena-yellow">Meet</span> <span className="text-white">Our Trainers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-arena-yellow/20 rounded-xl overflow-hidden hover:border-arena-yellow/50 transition-colors"
              >
                <div className="h-64 bg-arena-dark flex items-center justify-center">
                  <p className="text-gray-400">Trainer Photo</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-arena-yellow mb-2">Trainer Name</h3>
                  <p className="text-gray-400 text-sm font-light">Expert coach specializing in strength training</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/website/trainers"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-arena-yellow text-arena-yellow rounded-lg font-medium hover:bg-arena-yellow/10 transition-all"
            >
              See All Trainers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investor CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <TrendingUp className="w-16 h-16 text-arena-yellow mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 text-white">Join the growth of Finland's next fitness brand</h2>
          <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            FitArena is expanding. Investors can partner with us in scaling operations.
          </p>
          <Link
            href="/website/investors"
            className="inline-flex items-center gap-2 px-8 py-4 bg-arena-yellow text-arena-dark rounded-lg font-medium hover:shadow-lg hover:shadow-arena-yellow/50 transition-all"
          >
            Investor Page
            <ArrowRight className="w-5 h-5" />
          </Link>
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

