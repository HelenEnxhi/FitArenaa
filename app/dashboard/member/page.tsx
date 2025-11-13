'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/context/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  Calendar, 
  Activity, 
  Users, 
  TrendingUp, 
  Video, 
  Bell,
  MessageSquare,
  Target,
  Zap
} from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import AIChatModal from '@/mobile/components/AIChatModal'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const weeklyData = [
  { day: 'Mon', visits: 1, calories: 450 },
  { day: 'Tue', visits: 0, calories: 0 },
  { day: 'Wed', visits: 1, calories: 520 },
  { day: 'Thu', visits: 1, calories: 380 },
  { day: 'Fri', visits: 0, calories: 0 },
  { day: 'Sat', visits: 1, calories: 600 },
  { day: 'Sun', visits: 0, calories: 0 },
]

export default function MemberDashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const [aiChatOpen, setAiChatOpen] = useState(false)
  const [crowdLevel, setCrowdLevel] = useState<'quiet' | 'moderate' | 'busy'>('moderate')

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }, [user, router])

  if (!user) return null

  const stats = [
    { label: 'This Week', value: '4 visits', icon: Calendar, color: 'text-nordic-accent' },
    { label: 'Total Calories', value: '1,950 kcal', icon: Activity, color: 'text-green-400' },
    { label: 'Active Streak', value: '3 days', icon: Zap, color: 'text-yellow-400' },
    { label: 'Progress', value: '+12%', icon: TrendingUp, color: 'text-nordic-accent' },
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
            <h1 className="text-2xl font-extralight">Welcome back,</h1>
            <p className="text-nordic-accent font-light">{user.name}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setAiChatOpen(true)}
              className="p-2 rounded-lg bg-nordic-accent/10 hover:bg-nordic-accent/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-nordic-accent" />
            </button>
            <button className="p-2 rounded-lg bg-nordic-accent/10 hover:bg-nordic-accent/20 transition-colors relative">
              <Bell className="w-5 h-5 text-nordic-accent" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </div>

        {/* Live Crowd Level */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-light text-gray-400">Live Gym Status</span>
            <Users className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              crowdLevel === 'quiet' ? 'bg-green-400' : crowdLevel === 'moderate' ? 'bg-yellow-400' : 'bg-red-400'
            } animate-pulse`} />
            <span className="text-lg font-light capitalize">{crowdLevel}</span>
            <span className="text-xs text-gray-500 ml-auto">
              {crowdLevel === 'quiet' ? 'Few people' : crowdLevel === 'moderate' ? 'Some activity' : 'Very busy'}
            </span>
          </div>
        </motion.div>
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

      {/* Progress Chart */}
      <div className="px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <h3 className="text-lg font-light mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-nordic-accent" />
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={weeklyData}>
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
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#00FFD1"
                strokeWidth={2}
                dot={{ fill: '#00FFD1', r: 4 }}
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
            onClick={() => router.push('/dashboard/member/classes')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <Calendar className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Book Class</p>
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/member/progress')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <Target className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Track Progress</p>
          </motion.button>
          <motion.button
            onClick={() => router.push('/dashboard/member/videos')}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <Video className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">Watch Videos</p>
          </motion.button>
          <motion.button
            onClick={() => setAiChatOpen(true)}
            whileTap={{ scale: 0.95 }}
            className="bg-nordic-accent/10 border border-nordic-accent/30 rounded-xl p-4 text-left hover:bg-nordic-accent/20 transition-colors"
          >
            <MessageSquare className="w-6 h-6 text-nordic-accent mb-2" />
            <p className="font-light text-sm">AI Fitness Buddy</p>
          </motion.button>
        </div>
      </div>

      <BottomNav />
      <AIChatModal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} role="member" />
    </div>
  )
}

