'use client'

import { useState } from 'react'
import AIChatModal from '@/mobile/components/AIChatModal'
import BottomNav from '@/mobile/components/BottomNav'
import { motion } from 'framer-motion'
import { Bot, MessageSquare, Lightbulb } from 'lucide-react'

export default function AIPage() {
  const [aiChatOpen, setAiChatOpen] = useState(true)

  return (
    <div className="min-h-screen bg-nordic-dark flex flex-col max-w-md mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-nordic-dark/95 backdrop-blur-md border-b border-nordic-accent/20 px-6 py-4"
      >
        <h1 className="text-2xl font-extralight">AI Fitness Buddy</h1>
      </motion.div>

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-nordic-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bot className="w-12 h-12 text-nordic-accent" />
          </div>
          <h2 className="text-2xl font-extralight mb-4">Your AI Fitness Buddy</h2>
          <p className="text-gray-400 font-light mb-8 max-w-sm mx-auto">
            Get personalized workout recommendations, nutrition tips, and motivation from your AI fitness companion.
          </p>
          <motion.button
            onClick={() => setAiChatOpen(true)}
            whileTap={{ scale: 0.98 }}
            className="bg-nordic-accent text-nordic-dark py-4 px-8 rounded-xl font-medium flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-nordic-accent/50 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            Start Chat
          </motion.button>
        </motion.div>
      </div>

      <BottomNav />
      <AIChatModal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} role="member" />
    </div>
  )
}

