import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Über uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Ablauf', href: '#process' },
  { label: 'Smart Home', href: '#smarthome' },
  { label: 'Referenzen', href: '#references' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-gold-500/10 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-none group"
          >
            <span className="heading-display text-2xl text-gold-400 group-hover:text-gold-300 transition-colors">MK</span>
            <span className="font-sans text-[9px] tracking-[0.25em] text-charcoal-300 uppercase font-light">Immobilienkonzepte</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-xs tracking-[0.12em] uppercase text-charcoal-300 hover:text-gold-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary"
            >
              <span>Anfragen</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-charcoal-100 hover:text-gold-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-charcoal-950 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-800">
              <span className="heading-display text-2xl text-gold-400">MK</span>
              <button onClick={() => setMenuOpen(false)} className="text-charcoal-300 hover:text-gold-400">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left heading-display text-4xl text-charcoal-100 hover:text-gold-400 transition-colors border-b border-charcoal-800 pb-5"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary w-full justify-center"
              >
                <span>Kostenlose Einschätzung</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
