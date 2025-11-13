'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/context/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  TrendingUp, 
  Users, 
  Zap,
  DollarSign,
  MessageSquare,
  BarChart3,
  Target,
  Building2
} from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import AIChatModal from '@/mobile/components/AIChatModal'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const revenueData = [
  { month: 'Jan', revenue: 12500, members: 120 },
  { month: 'Feb', revenue: 13500, members: 135 },
  { month: 'Mar', revenue: 14800, members: 145 },
  { month: 'Apr', revenue: 16200, members: 152 },
]

const churnRiskData = [
  { name: 'Low Risk', value: 120, color: '#00FFD1' },
  { name: 'Medium Risk', value: 25, color: '#FFD700' },
  { name: 'High Risk', value: 7, color: '#ef4444' },
]

const energyData = [
  { day: 'Mon', usage: 1250, cost: 95 },
  { day: 'Tue', usage: 1320, cost: 100 },
  { day: 'Wed', usage: 1180, cost: 90 },
  { day: 'Thu', usage: 1400, cost: 105 },
  { day: 'Fri', usage: 1280, cost: 97 },
  { day: 'Sat', usage: 1150, cost: 87 },
  { day: 'Sun', usage: 1100, cost: 85 },
]

export default function AdminDashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [aiChatOpen, setAiChatOpen] = useState(false)

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/auth/login')
    }
  }, [user, router])

  if (!user || user.role !== 'admin') return null

  const stats = [
    { label: 'Total Revenue', value: '€16,200', icon: DollarSign, color: 'text-green-400' },
    { label: 'Active Members', value: '152', icon: Users, color: 'text-nordic-accent' },
    { label: 'Retention Rate', value: '94.2%', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Energy Savings', value: '-12%', icon: Zap, color: 'text-yellow-400' },
  ]

  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-extralight">Admin Overview</h1>
            <p className="text-nordic-accent font-light">{user.name}</p>
          </div>
          <button
            onClick={() => setAiChatOpen(true)}
            className="p-2 rounded-lg bg-nordic-accent/10 hover:bg-nordic-accent/20 transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-nordic-accent" />
          </button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="px-6 py-6 grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
            >
              <Icon className={`w-5 h-5 ${stat.color} mb-2`} />
              <p className="text-xs font-light text-gray-400 mb-1">{stat.label}</p>
              <p className="text-xl font-light text-nordic-white">{stat.value}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Revenue & Members Chart */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-nordic-accent" />
            Revenue & Growth
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00FFD1" opacity={0.1} />
              <XAxis dataKey="month" stroke="#666" fontSize={12} />
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
                dataKey="revenue"
                stroke="#00FFD1"
                fill="#00FFD1"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="members"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Churn Risk */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-nordic-accent" />
            Churn Risk Analysis
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={churnRiskData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {churnRiskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0E0E0E',
                  border: '1px solid #00FFD1',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Energy Dashboard Preview */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-light flex items-center gap-2">
              <Zap className="w-5 h-5 text-nordic-accent" />
              Energy Efficiency
            </h3>
            <motion.button
              onClick={() => router.push('/dashboard/admin/energy')}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-nordic-accent hover:underline"
            >
              View Details
            </motion.button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">This Week</span>
              <span className="text-nordic-accent">1,280 kWh</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Cost Savings</span>
              <span className="text-green-400">-12% vs last month</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-light mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            onClick={() => router.push('/dashboard/admin/insights')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <BarChart3 className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">AI Insights</p>
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/admin/energy')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <Zap className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Energy Dashboard</p>
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/admin/corporate')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <Building2 className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Corporate Wellness</p>
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/settings')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <BarChart3 className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Benchmark Reports</p>
          </motion.button>
        </div>
      </div>

      <BottomNav />
      <AIChatModal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} role="admin" />
    </div>
  )
}

