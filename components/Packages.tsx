'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    subtitle: 'Essential AI',
    focus: 'Core gym operations & engagement',
    price: 'from €250/mo',
    features: [
      'Smart Class Scheduling',
      'Member Dashboard',
      'AI Chat Assistant',
    ],
    glow: 'rgba(0, 255, 209, 0.2)',
  },
  {
    name: 'Growth',
    subtitle: 'Predictive AI',
    focus: 'Advanced member engagement, trainer support',
    price: 'from €490/mo',
    features: [
      'AI Fitness Buddy',
      'Session Planning',
      'Wellness Analytics',
    ],
    glow: 'rgba(0, 255, 209, 0.3)',
    popular: true,
  },
  {
    name: 'Premium',
    subtitle: 'Full AI Suite',
    focus: 'Enterprise AI management & insights',
    price: 'from €950/mo',
    features: [
      'Energy Dashboard',
      'Benchmark Reports',
      'Corporate Wellness',
    ],
    glow: 'rgba(0, 255, 209, 0.4)',
  },
]

const pricingTable = [
  { members: '0–200', starter: '€250', growth: '€490', premium: '€950' },
  { members: '201–450', starter: '€400', growth: '€785', premium: '€1,520' },
  { members: '451+', starter: '€500', growth: '€980', premium: '€1,900' },
]

export default function Packages() {
  return (
    <section
      id="packages"
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
            Choose Your <span className="text-gradient">AI Solution</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            Flexible pricing designed for gyms of all sizes
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`relative p-8 rounded-lg border border-nordic-accent/20 bg-nordic-dark/50 backdrop-blur-sm ${
                pkg.popular
                  ? 'border-nordic-accent/50 glow-border scale-105'
                  : 'hover:border-nordic-accent/40 transition-all duration-300'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-nordic-accent text-nordic-dark px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-light mb-1">{pkg.name}</h3>
                <p className="text-nordic-accent text-sm mb-2">
                  {pkg.subtitle}
                </p>
                <p className="text-gray-400 text-sm font-light mb-4">
                  {pkg.focus}
                </p>
                <div className="text-3xl font-light text-nordic-accent">
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-nordic-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-nordic-accent text-nordic-dark hover:shadow-lg hover:shadow-nordic-accent/50'
                    : 'border border-nordic-accent/50 text-nordic-accent hover:bg-nordic-accent/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Pricing Table */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-light text-center mb-8">
            Pricing by <span className="text-gradient">Gym Size</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-nordic-accent/30">
                  <th className="text-left py-4 px-4 font-light text-gray-400">
                    Members
                  </th>
                  <th className="text-center py-4 px-4 font-light text-gray-400">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-light text-gray-400">
                    Growth
                  </th>
                  <th className="text-center py-4 px-4 font-light text-gray-400">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-nordic-accent/10 hover:bg-nordic-accent/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-4 font-light">{row.members}</td>
                    <td className="py-4 px-4 text-center text-nordic-accent font-light">
                      {row.starter}
                    </td>
                    <td className="py-4 px-4 text-center text-nordic-accent font-light">
                      {row.growth}
                    </td>
                    <td className="py-4 px-4 text-center text-nordic-accent font-light">
                      {row.premium}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

