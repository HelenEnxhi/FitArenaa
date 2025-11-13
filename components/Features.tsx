'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check } from 'lucide-react'

const features = {
  Admin: [
    'Full Dashboard',
    'AI Chat Assistant',
    'Energy Dashboard',
    'Benchmark Reports',
  ],
  Manager: [
    'Class Scheduling',
    'Live Crowd Levels',
    'Operational Metrics',
  ],
  Member: [
    'Personal Dashboard',
    'AI Fitness Buddy',
    'Class Booking',
    'Exercise Tracking',
  ],
}

export default function Features() {
  const [activeTab, setActiveTab] = useState<'Admin' | 'Manager' | 'Member'>(
    'Admin'
  )

  return (
    <section
      id="features"
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-4">
            Powerful Features for{' '}
            <span className="text-gradient">Every Role</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Tailored experiences for admins, managers, and members
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {(['Admin', 'Manager', 'Member'] as const).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-lg font-light text-lg transition-all duration-300 relative ${
                activeTab === tab
                  ? 'bg-nordic-accent/20 text-nordic-accent border border-nordic-accent/50'
                  : 'text-gray-400 border border-nordic-accent/20 hover:border-nordic-accent/40 hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-nordic-accent"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Feature Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-nordic-dark/50 backdrop-blur-sm border border-nordic-accent/20 rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl font-light mb-8 text-center text-nordic-accent">
              {activeTab} Features
            </h3>
            <ul className="space-y-4">
              {features[activeTab].map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="w-6 h-6 text-nordic-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg font-light">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

