import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Luxuriöse Immobilie"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/30" />

      {/* Decorative gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 z-20 w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label">Region Siegen & Umgebung</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="heading-display text-6xl md:text-7xl lg:text-8xl text-white mb-8"
          >
            Wir steigern den{' '}
            <em className="text-gradient-gold not-italic">Wert</em>
            <br />
            Ihrer Immobilie.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="font-sans font-light text-lg md:text-xl text-charcoal-200 max-w-xl leading-relaxed mb-12"
          >
            Gezielte Immobilien-Aufwertung für höhere Verkaufspreise,
            bessere Vermietbarkeit und nachhaltige Wertsteigerung.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary"
            >
              <span>Kostenlose Einschätzung anfragen</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => handleNav('#services')}
              className="btn-secondary"
            >
              <span>Unsere Leistungen</span>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-20 flex flex-wrap gap-x-12 gap-y-6"
          >
            {[
              { value: '50+', label: 'Projekte abgeschlossen' },
              { value: '15%', label: 'Ø Wertsteigerung' },
              { value: '100%', label: 'Kundenzufriedenheit' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="heading-display text-4xl text-gold-400">{stat.value}</span>
                <span className="font-sans text-xs text-charcoal-400 tracking-wide mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => handleNav('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-charcoal-400 hover:text-gold-400 transition-colors group"
      >
        <span className="section-label text-[9px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  )
}
