'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/context/AuthContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Packages from '@/components/Packages'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    // Redirect to dashboard if logged in
    if (user) {
      const dashboardPath = user.role === 'admin' 
        ? '/dashboard/admin' 
        : user.role === 'manager' 
        ? '/dashboard/manager' 
        : '/dashboard/member'
      router.push(dashboardPath)
    }
  }, [user, router])

  // Show marketing site if not logged in
  if (user) return null

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Packages />
      <CTA />
      <Footer />
    </main>
  )
}

