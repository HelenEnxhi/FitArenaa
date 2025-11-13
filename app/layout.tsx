import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FitArenaa - AI-Powered Gym Intelligence Platform',
  description: 'Smarter scheduling, predictive analytics, and personalized member engagement — all in one platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

