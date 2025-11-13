'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-nordic-accent/20 via-nordic-accent/30 to-nordic-accent/20 rounded-2xl blur-3xl -z-10" />

          <div className="relative bg-nordic-dark/80 backdrop-blur-sm border border-nordic-accent/50 rounded-2xl p-12 sm:p-16 glow-border">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 glow-text"
              animate={{
                textShadow: [
                  '0 0 10px rgba(0, 255, 209, 0.5)',
                  '0 0 20px rgba(0, 255, 209, 0.8)',
                  '0 0 10px rgba(0, 255, 209, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Ready to make your gym smarter?
            </motion.h2>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-nordic-accent text-nordic-dark font-medium rounded-lg hover:shadow-lg hover:shadow-nordic-accent/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

