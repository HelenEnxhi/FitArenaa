'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, User } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface AIChatModalProps {
  isOpen: boolean
  onClose: () => void
  role?: 'admin' | 'manager' | 'member'
}

export default function AIChatModal({ isOpen, onClose, role = 'member' }: AIChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: role === 'member' 
        ? "Hey! I'm your AI Fitness Buddy. How can I help you today?"
        : role === 'manager'
        ? "Hello! I'm your operations assistant. What do you need help with?"
        : "Hello! I'm your AI insights assistant. How can I help optimize your gym today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand your question. This is a placeholder response. In production, this would connect to your AI backend.",
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 max-w-md mx-auto h-[80vh] bg-nordic-dark border-t border-nordic-accent/30 rounded-t-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-nordic-accent/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-nordic-accent/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-nordic-accent" />
                </div>
                <div>
                  <h3 className="text-nordic-white font-medium">
                    {role === 'member' ? 'AI Fitness Buddy' : role === 'manager' ? 'AI Assistant' : 'AI Insights'}
                  </h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-nordic-accent/10 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-nordic-accent/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-nordic-accent" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-nordic-accent text-nordic-dark'
                        : 'bg-nordic-dark/80 border border-nordic-accent/20 text-gray-200'
                    }`}
                  >
                    <p className="text-sm font-light">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-nordic-accent/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-nordic-accent" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-nordic-accent/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-nordic-dark/80 border border-nordic-accent/20 rounded-xl px-4 py-3 text-nordic-white placeholder-gray-500 focus:outline-none focus:border-nordic-accent/50"
                />
                <motion.button
                  onClick={handleSend}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-nordic-accent text-nordic-dark rounded-xl flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

