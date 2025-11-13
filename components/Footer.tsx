'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative py-12 sm:py-16 border-t border-nordic-accent/20"
    >
      {/* Subtle glow divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nordic-accent/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-nordic-accent font-light mb-4">Contact</h3>
            <a
              href="mailto:hello@fitarenaa.com"
              className="flex items-center gap-2 text-gray-400 hover:text-nordic-accent transition-colors font-light"
            >
              <Mail className="w-4 h-4" />
              hello@fitarenaa.com
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-nordic-accent font-light mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nordic-accent transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-nordic-accent transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-end"
          >
            <p className="text-gray-500 text-sm font-light">
              © {currentYear} FitArenaa. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

