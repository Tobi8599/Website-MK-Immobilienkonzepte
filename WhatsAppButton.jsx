import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setTooltip(true), 800)
      return () => clearTimeout(t)
    }
  }, [visible])

  const handleClick = () => {
    window.open(
      'https://wa.me/4915901234567?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20kostenlose%20Einsch%C3%A4tzung%20meiner%20Immobilie.',
      '_blank'
    )
  }

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex items-center gap-3 bg-charcoal-800 border border-charcoal-700 px-4 py-3 shadow-2xl max-w-[220px]"
              >
                <div className="flex-1">
                  <p className="font-sans text-xs text-charcoal-100 leading-snug">
                    Kostenlose Beratung via WhatsApp
                  </p>
                </div>
                <button
                  onClick={() => setTooltip(false)}
                  className="text-charcoal-600 hover:text-charcoal-300 flex-shrink-0"
                >
                  <X size={12} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20c45e] transition-colors flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.35)] relative"
            aria-label="WhatsApp Kontakt"
          >
            <MessageCircle size={24} className="text-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
