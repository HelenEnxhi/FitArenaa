'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Activity, Award } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const progressData = [
  { week: 'W1', weight: 85, workouts: 3 },
  { week: 'W2', weight: 84.5, workouts: 4 },
  { week: 'W3', weight: 84, workouts: 4 },
  { week: 'W4', weight: 83.5, workouts: 5 },
]

const exerciseData = [
  { exercise: 'Bench Press', sets: 3, reps: 10, weight: 70 },
  { exercise: 'Squats', sets: 4, reps: 12, weight: 80 },
  { exercise: 'Deadlift', sets: 3, reps: 8, weight: 100 },
]

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">My Progress</h1>
      </motion.div>

      {/* Stats */}
      <div className="px-6 py-6 grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <Target className="w-5 h-5 text-nordic-accent mb-2" />
          <p className="text-xs font-light text-gray-400 mb-1">Current Weight</p>
          <p className="text-xl font-light text-nordic-white">83.5 kg</p>
          <p className="text-xs text-green-400 mt-1">-1.5 kg this month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <Activity className="w-5 h-5 text-blue-400 mb-2" />
          <p className="text-xs font-light text-gray-400 mb-1">Workouts This Month</p>
          <p className="text-xl font-light text-nordic-white">16</p>
          <p className="text-xs text-nordic-accent mt-1">+3 from last month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <TrendingUp className="w-5 h-5 text-green-400 mb-2" />
          <p className="text-xs font-light text-gray-400 mb-1">Goals Achieved</p>
          <p className="text-xl font-light text-nordic-white">4/5</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
        >
          <Award className="w-5 h-5 text-yellow-400 mb-2" />
          <p className="text-xs font-light text-gray-400 mb-1">Streak</p>
          <p className="text-xl font-light text-nordic-white">3 days</p>
        </motion.div>
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
            Monthly Progress
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00FFD1" opacity={0.1} />
              <XAxis dataKey="week" stroke="#666" fontSize={12} />
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
                dataKey="weight"
                stroke="#00FFD1"
                strokeWidth={2}
                dot={{ fill: '#00FFD1', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Exercises */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-light mb-4">Recent Exercises</h3>
        <div className="space-y-3">
          {exerciseData.map((exercise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
            >
              <h4 className="font-light mb-2">{exercise.exercise}</h4>
              <div className="flex gap-4 text-sm text-gray-400">
                <span>{exercise.sets} sets</span>
                <span>{exercise.reps} reps</span>
                <span className="text-nordic-accent">{exercise.weight} kg</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

