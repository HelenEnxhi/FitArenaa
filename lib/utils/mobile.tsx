'use client'

import { ReactNode } from 'react'

export function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto">
      {children}
    </div>
  )
}

export function SafeArea({ children }: { children: ReactNode }) {
  return (
    <div className="safe-area pb-20">
      {children}
    </div>
  )
}

