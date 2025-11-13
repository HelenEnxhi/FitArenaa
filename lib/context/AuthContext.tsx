'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, AuthContextType, UserRole } from '../types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('fitarenaa_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call - replace with actual authentication
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user based on email (for demo purposes)
    const role = email.includes('admin') ? 'admin' : email.includes('manager') ? 'manager' : 'member'
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      role,
      gymId: 'gym-1',
      plan: 'growth' as const,
    }
    
    setUser(mockUser)
    localStorage.setItem('fitarenaa_user', JSON.stringify(mockUser))
    setIsLoading(false)
  }

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
      gymId: 'gym-1',
      plan: 'starter' as const,
    }
    
    setUser(newUser)
    localStorage.setItem('fitarenaa_user', JSON.stringify(newUser))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('fitarenaa_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

