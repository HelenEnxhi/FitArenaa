'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/context/AuthContext'
import { Eye, EyeOff, ArrowRight, Mail, Lock, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { UserRole } from '@/lib/types'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'member' as UserRole,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const { register, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    try {
      await register(formData.email, formData.password, formData.name, formData.role)
      const dashboardPath = formData.role === 'admin' ? '/dashboard/admin' : formData.role === 'manager' ? '/dashboard/manager' : '/dashboard/member'
      router.push(dashboardPath)
    } catch (err) {
      setError('Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto">
      <div className="flex-1 flex flex-col justify-center px-6 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/logo.png"
            alt="FitArenaa"
            width={180}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-extralight mb-2">Create account</h1>
          <p className="text-gray-400 font-light">Join FitArenaa today</p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-light text-gray-300 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full pl-12 pr-4 py-3 bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl text-nordic-white placeholder-gray-500 focus:outline-none focus:border-nordic-accent/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-light text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full pl-12 pr-4 py-3 bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl text-nordic-white placeholder-gray-500 focus:outline-none focus:border-nordic-accent/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-light text-gray-300 mb-2">
              I am a
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['member', 'manager', 'admin'] as UserRole[]).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData({ ...formData, role })}
                  className={`py-2 px-3 rounded-lg border transition-colors font-light text-sm capitalize ${
                    formData.role === role
                      ? 'bg-nordic-accent/20 border-nordic-accent text-nordic-accent'
                      : 'bg-nordic-dark/80 border-nordic-accent/20 text-gray-400 hover:border-nordic-accent/40'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-light text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full pl-12 pr-12 py-3 bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl text-nordic-white placeholder-gray-500 focus:outline-none focus:border-nordic-accent/50 transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-nordic-accent"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-light text-gray-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="w-full pl-12 pr-4 py-3 bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl text-nordic-white placeholder-gray-500 focus:outline-none focus:border-nordic-accent/50 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-nordic-accent text-nordic-dark py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-nordic-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              'Creating account...'
            ) : (
              <>
                Create account
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Login Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 font-light">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-nordic-accent hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

