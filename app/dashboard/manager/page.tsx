'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/context/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  MessageSquare,
  BarChart3,
  Clock,
  Target
} from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import AIChatModal from '@/mobile/components/AIChatModal'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const attendanceData = [
  { day: 'Mon', attendance: 45, capacity: 50 },
  { day: 'Tue', attendance: 52, capacity: 50 },
  { day: 'Wed', attendance: 48, capacity: 50 },
  { day: 'Thu', attendance: 55, capacity: 50 },
  { day: 'Fri', attendance: 43, capacity: 50 },
  { day: 'Sat', attendance: 38, capacity: 50 },
  { day: 'Sun', attendance: 32, capacity: 50 },
]

const memberEngagement = [
  { month: 'Jan', active: 120, churned: 5 },
  { month: 'Feb', active: 135, churned: 3 },
  { month: 'Mar', active: 145, churned: 4 },
  { month: 'Apr', active: 152, churned: 2 },
]

export default function ManagerDashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [aiChatOpen, setAiChatOpen] = useState(false)

  useEffect(() => {
    if (!user || user.role !== 'manager') {
      router.push('/auth/login')
    }
  }, [user, router])

  if (!user || user.role !== 'manager') return null

  const stats = [
    { label: 'Active Members', value: '152', icon: Users, color: 'text-nordic-accent' },
    { label: 'Today\'s Classes', value: '8', icon: Calendar, color: 'text-blue-400' },
    { label: 'Attendance Rate', value: '87%', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Avg. Session', value: '52 min', icon: Clock, color: 'text-yellow-400' },
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
            <h1 className="text-2xl font-extralight">Manager Dashboard</h1>
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

      {/* Attendance Chart */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-nordic-accent" />
            Weekly Attendance
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={attendanceData}>
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
              <Bar dataKey="attendance" fill="#00FFD1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Member Engagement */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-nordic-accent" />
            Member Engagement
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={memberEngagement}>
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
              <Line
                type="monotone"
                dataKey="active"
                stroke="#00FFD1"
                strokeWidth={2}
                dot={{ fill: '#00FFD1', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="churned"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ fill: '#ef4444', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-light mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            onClick={() => router.push('/dashboard/manager/schedule')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <Calendar className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Schedule Classes</p>
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/manager/analytics')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <BarChart3 className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">View Analytics</p>
          </motion.button>
        </div>
      </div>

      <BottomNav />
      <AIChatModal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} role="manager" />
    </div>
  )
}

