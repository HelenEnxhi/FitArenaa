'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, AlertCircle } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">AI Insights</h1>
      </motion.div>

      <div className="px-6 py-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-5 h-5 text-nordic-accent" />
            <h3 className="font-light">Predictive Analytics</h3>
          </div>
          <p className="text-gray-400 text-sm font-light mb-4">
            AI predicts a 94% retention rate for next month. Member engagement is above average.
          </p>
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <TrendingUp className="w-4 h-4" />
            Positive trend
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-nordic-dark/80 border border-yellow-500/30 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            <h3 className="font-light">Churn Risk Alert</h3>
          </div>
          <p className="text-gray-400 text-sm font-light mb-4">
            7 members show high churn risk. Consider engagement campaigns to retain them.
          </p>
          <button className="text-nordic-accent text-sm hover:underline">
            View Details
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-nordic-accent" />
            <h3 className="font-light">Resource Optimization</h3>
          </div>
          <p className="text-gray-400 text-sm font-light mb-4">
            Peak hours are 7-9 AM and 5-7 PM. Consider adding more classes during these times.
          </p>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  )
}

