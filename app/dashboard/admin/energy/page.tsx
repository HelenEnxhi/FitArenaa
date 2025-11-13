'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingDown, DollarSign } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const energyData = [
  { day: 'Mon', usage: 1250, cost: 95 },
  { day: 'Tue', usage: 1320, cost: 100 },
  { day: 'Wed', usage: 1180, cost: 90 },
  { day: 'Thu', usage: 1400, cost: 105 },
  { day: 'Fri', usage: 1280, cost: 97 },
  { day: 'Sat', usage: 1150, cost: 87 },
  { day: 'Sun', usage: 1100, cost: 85 },
]

export default function EnergyPage() {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">Energy Dashboard</h1>
      </motion.div>

      <div className="px-6 py-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
          >
            <Zap className="w-5 h-5 text-yellow-400 mb-2" />
            <p className="text-xs font-light text-gray-400 mb-1">This Week</p>
            <p className="text-xl font-light text-nordic-white">1,280 kWh</p>
            <p className="text-xs text-green-400 mt-1">-12% vs last week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
          >
            <DollarSign className="w-5 h-5 text-green-400 mb-2" />
            <p className="text-xs font-light text-gray-400 mb-1">Cost Savings</p>
            <p className="text-xl font-light text-nordic-white">€659</p>
            <p className="text-xs text-nordic-accent mt-1">This month</p>
          </motion.div>
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-green-400" />
            Weekly Energy Usage
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00FFD1" opacity={0.1} />
              <XAxis dataKey="day" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0E0E0E',
                  border: '1px solid #00FFD1',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                }}
              />
              <Area
                type="monotone"
                dataKey="usage"
                stroke="#00FFD1"
                fill="#00FFD1"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="cost"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-nordic-dark/80 border border-green-500/30 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-3">AI Recommendations</h3>
          <ul className="space-y-2 text-sm text-gray-300 font-light">
            <li>• Schedule equipment maintenance during off-peak hours</li>
            <li>• Optimize HVAC settings based on occupancy patterns</li>
            <li>• Consider installing LED lighting upgrades (projected 15% savings)</li>
          </ul>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  )
}

