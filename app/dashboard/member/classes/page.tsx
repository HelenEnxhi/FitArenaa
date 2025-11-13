'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, Users, ChevronRight, Plus } from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'
import { useState } from 'react'

const classes = [
  {
    id: 1,
    name: 'Morning Yoga',
    trainer: 'Sarah Johnson',
    time: '07:00 - 08:00',
    date: 'Today',
    spots: 8,
    capacity: 15,
    type: 'yoga',
  },
  {
    id: 2,
    name: 'HIIT Training',
    trainer: 'Mike Chen',
    time: '12:00 - 13:00',
    date: 'Today',
    spots: 3,
    capacity: 20,
    type: 'cardio',
  },
  {
    id: 3,
    name: 'Strength Training',
    trainer: 'Emma Wilson',
    time: '18:00 - 19:30',
    date: 'Today',
    spots: 12,
    capacity: 20,
    type: 'strength',
  },
  {
    id: 4,
    name: 'Pilates Flow',
    trainer: 'Lisa Anderson',
    time: '09:00 - 10:00',
    date: 'Tomorrow',
    spots: 5,
    capacity: 12,
    type: 'pilates',
  },
]

export default function ClassesPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState('Today')

  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-extralight">Book Classes</h1>
        </div>
      </motion.div>

      {/* Classes List */}
      <div className="px-6 py-6 space-y-4">
        {classes.map((classItem, index) => (
          <motion.div
            key={classItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-light mb-1">{classItem.name}</h3>
                <p className="text-sm text-gray-400">{classItem.trainer}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-light ${
                classItem.spots < 5 ? 'bg-red-500/20 text-red-400' : 'bg-nordic-accent/20 text-nordic-accent'
              }`}>
                {classItem.spots} spots left
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {classItem.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {classItem.time}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {classItem.spots}/{classItem.capacity}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 bg-nordic-accent text-nordic-dark rounded-lg font-light hover:shadow-lg hover:shadow-nordic-accent/50 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

