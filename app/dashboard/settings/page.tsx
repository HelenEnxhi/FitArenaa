'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/context/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  User, 
  CreditCard, 
  Bell,
  Shield,
  LogOut,
  ChevronRight,
  Check,
  Crown
} from 'lucide-react'
import BottomNav from '@/mobile/components/BottomNav'

const plans = [
  {
    name: 'Starter',
    subtitle: 'Essential AI',
    price: '€250-€500',
    period: 'per month',
    features: ['Smart Class Scheduling', 'Member Dashboard', 'AI Chat Assistant'],
    popular: false,
  },
  {
    name: 'Growth',
    subtitle: 'Predictive AI',
    price: '€490-€980',
    period: 'per month',
    features: ['AI Fitness Buddy', 'Session Planning', 'Wellness Analytics'],
    popular: true,
  },
  {
    name: 'Premium',
    subtitle: 'Full AI Suite',
    price: '€950-€1,900',
    period: 'per month',
    features: ['Energy Dashboard', 'Benchmark Reports', 'Corporate Wellness'],
    popular: false,
  },
]

export default function SettingsPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [notifications, setNotifications] = useState(true)

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }, [user, router])

  if (!user) return null

  const handleLogout = () => {
    logout()
    router.push('/auth/login')
  }

  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">Settings</h1>
      </motion.div>

      {/* Profile Section */}
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-nordic-accent/20 flex items-center justify-center">
              <User className="w-8 h-8 text-nordic-accent" />
            </div>
            <div>
              <h2 className="text-lg font-light">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
              <p className="text-xs text-nordic-accent capitalize mt-1">{user.role}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Current Plan */}
      {user.role === 'admin' && (
        <div className="px-6 mb-6">
          <h3 className="text-lg font-light mb-4">Current Plan</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <h4 className="text-lg font-light capitalize">{user.plan || 'Starter'}</h4>
                </div>
                <p className="text-sm text-gray-400">
                  {plans.find(p => p.name.toLowerCase() === user.plan)?.subtitle || 'Essential AI'}
                </p>
              </div>
              <button className="text-sm text-nordic-accent hover:underline font-light">
                Upgrade
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Upgrade Plan Section */}
      {user.role === 'admin' && (
        <div className="px-6 mb-6">
          <h3 className="text-lg font-light mb-4">Upgrade Plan</h3>
          <div className="space-y-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-nordic-dark/80 border rounded-xl p-4 ${
                  plan.popular
                    ? 'border-nordic-accent/50 glow-border'
                    : 'border-nordic-accent/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-xs bg-nordic-accent/20 text-nordic-accent px-2 py-1 rounded-full inline-block mb-2">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-light">{plan.name}</h4>
                    <p className="text-sm text-gray-400">{plan.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-nordic-accent font-light">{plan.price}</p>
                    <p className="text-xs text-gray-500">{plan.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-nordic-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 bg-nordic-accent/10 border border-nordic-accent/30 text-nordic-accent rounded-lg hover:bg-nordic-accent/20 transition-colors font-light text-sm">
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Settings Options */}
      <div className="px-6 mb-6">
        <h3 className="text-lg font-light mb-4">Preferences</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl overflow-hidden"
        >
          <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-nordic-accent/5 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-nordic-accent" />
              <span className="font-light">Notifications</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{notifications ? 'On' : 'Off'}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setNotifications(!notifications)
                }}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications ? 'bg-nordic-accent' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`block w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </button>

          <div className="border-t border-nordic-accent/20">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-nordic-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-nordic-accent" />
                <span className="font-light">Privacy & Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="border-t border-nordic-accent/20">
            <button className="w-full px-4 py-4 flex items-center justify-between hover:bg-nordic-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-nordic-accent" />
                <span className="font-light">Payment & Billing</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Logout */}
      <div className="px-6 mb-6">
        <motion.button
          onClick={handleLogout}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-500/10 border border-red-500/30 text-red-400 py-4 rounded-xl font-light flex items-center justify-center gap-2 hover:bg-red-500/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </motion.button>
      </div>

      <BottomNav />
    </div>
  )
}

