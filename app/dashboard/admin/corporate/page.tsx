'use client'

import { motion } from 'framer-motion'
import { Building2, Users, TrendingUp, FileText } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">Corporate Wellness</h1>
      </motion.div>

      <div className="px-6 py-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-5 h-5 text-nordic-accent" />
            <h3 className="font-light">Active Corporate Clients</h3>
          </div>
          <p className="text-3xl font-extralight text-nordic-white mb-2">12</p>
          <p className="text-sm text-gray-400 font-light">+2 this month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-blue-400" />
            <h3 className="font-light">Corporate Members</h3>
          </div>
          <p className="text-3xl font-extralight text-nordic-white mb-2">450</p>
          <p className="text-sm text-gray-400 font-light">Active employees</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="font-light">Engagement Rate</h3>
          </div>
          <p className="text-3xl font-extralight text-nordic-white mb-2">87%</p>
          <p className="text-sm text-gray-400 font-light">Corporate wellness participation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-nordic-accent" />
              <h3 className="font-light">Reports</h3>
            </div>
            <button className="text-sm text-nordic-accent hover:underline font-light">
              View All
            </button>
          </div>
          <p className="text-sm text-gray-400 font-light mb-4">
            Generate wellness reports for corporate clients. Track participation, engagement, and ROI.
          </p>
          <button className="w-full py-2 bg-nordic-accent/10 border border-nordic-accent/30 text-nordic-accent rounded-lg hover:bg-nordic-accent/20 transition-colors font-light text-sm">
            Generate Report
          </button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  )
}

