'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-nordic-dark flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h2 className="text-2xl font-extralight mb-4">Something went wrong!</h2>
        <p className="text-gray-400 font-light mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-nordic-accent text-nordic-dark rounded-lg font-medium hover:shadow-lg hover:shadow-nordic-accent/50 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

