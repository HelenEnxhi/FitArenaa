import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-nordic-dark flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-extralight mb-4">404</h2>
        <p className="text-gray-400 font-light mb-6">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-nordic-accent text-nordic-dark rounded-lg font-medium hover:shadow-lg hover:shadow-nordic-accent/50 transition-all"
        >
          <Home className="w-5 h-5" />
          Go Home
        </Link>
      </div>
    </div>
  )
}

