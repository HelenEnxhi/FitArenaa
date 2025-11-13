'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const analyticsData = [
  { metric: 'Attendance', value: 87 },
  { metric: 'Engagement', value: 92 },
  { metric: 'Retention', value: 94 },
  { metric: 'Satisfaction', value: 89 },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">Wellness Analytics</h1>
      </motion.div>

      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4 mb-6"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-nordic-accent" />
            Member Metrics
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00FFD1" opacity={0.1} />
              <XAxis dataKey="metric" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0E0E0E',
                  border: '1px solid #00FFD1',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                }}
              />
              <Bar dataKey="value" fill="#00FFD1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  )
}

