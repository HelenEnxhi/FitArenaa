'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Plus } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extralight">Class Schedule</h1>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-nordic-accent/10 rounded-lg hover:bg-nordic-accent/20 transition-colors"
          >
            <Plus className="w-5 h-5 text-nordic-accent" />
          </motion.button>
        </div>
      </motion.div>

      <div className="px-6 py-6">
        <div className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-6 text-center">
          <Calendar className="w-12 h-12 text-nordic-accent/50 mx-auto mb-4" />
          <p className="text-gray-400 font-light">
            AI-powered class scheduling coming soon. Connect your calendar to get started.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

