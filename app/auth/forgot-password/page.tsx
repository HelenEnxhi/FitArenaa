'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Mail, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate sending reset email
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSent(true)
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

        {!isSent ? (
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-3xl font-extralight mb-2">Reset password</h1>
              <p className="text-gray-400 font-light">
                Enter your email and we'll send you a reset link
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-light text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl text-nordic-white placeholder-gray-500 focus:outline-none focus:border-nordic-accent/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="w-full bg-nordic-accent text-nordic-dark py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-nordic-accent/50 transition-all"
              >
                Send reset link
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>

            {/* Back to Login */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/auth/login"
                className="flex items-center justify-center gap-2 text-gray-400 hover:text-nordic-accent transition-colors font-light"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to sign in
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-nordic-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-nordic-accent" />
            </div>
            <h2 className="text-2xl font-extralight mb-2">Check your email</h2>
            <p className="text-gray-400 font-light mb-8">
              We've sent a password reset link to {email}
            </p>
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 text-nordic-accent hover:underline font-light"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to sign in
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

