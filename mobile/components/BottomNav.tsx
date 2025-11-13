'use client'

import { motion } from 'framer-motion'
import { Home, Calendar, BarChart3, Settings, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/context/AuthContext'

const memberNav = [
  { href: '/dashboard/member', icon: Home, label: 'Home' },
  { href: '/dashboard/member/classes', icon: Calendar, label: 'Classes' },
  { href: '/dashboard/member/progress', icon: BarChart3, label: 'Progress' },
  { href: '/dashboard/member/ai', icon: MessageSquare, label: 'AI Buddy' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

const managerNav = [
  { href: '/dashboard/manager', icon: Home, label: 'Dashboard' },
  { href: '/dashboard/manager/schedule', icon: Calendar, label: 'Schedule' },
  { href: '/dashboard/manager/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/dashboard/manager/ai', icon: MessageSquare, label: 'AI Assistant' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

const adminNav = [
  { href: '/dashboard/admin', icon: Home, label: 'Overview' },
  { href: '/dashboard/admin/insights', icon: BarChart3, label: 'AI Insights' },
  { href: '/dashboard/admin/energy', icon: BarChart3, label: 'Energy' },
  { href: '/dashboard/admin/ai', icon: MessageSquare, label: 'AI Chat' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

export default function BottomNav() {
  const pathname = usePathname()
  const { user } = useAuth()

  const navItems = user?.role === 'admin' 
    ? adminNav 
    : user?.role === 'manager' 
    ? managerNav 
    : memberNav

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-nordic-dark/95 backdrop-blur-lg border-t border-nordic-accent/20 z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          
          return (
            <Link key={item.href} href={item.href} className="flex-1 flex flex-col items-center justify-center relative">
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors ${
                  isActive ? 'text-nordic-accent' : 'text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5 mx-auto" />
                <span className="text-xs mt-1 font-light">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-nordic-accent rounded-full"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

