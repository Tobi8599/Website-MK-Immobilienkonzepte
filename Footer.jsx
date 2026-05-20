import { motion } from 'framer-motion'
import { MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Über uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Warum MK', href: '#why' },
  { label: 'Ablauf', href: '#process' },
  { label: 'Vorher / Nachher', href: '#beforeafter' },
  { label: 'Referenzen', href: '#references' },
  { label: 'Kontakt', href: '#contact' },
]

const legalLinks = [
  { label: 'Impressum', href: '#impressum' },
  { label: 'Datenschutz', href: '#datenschutz' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800/60 relative">
      {/* Top accent */}
      <div className="absolute left-0 top-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand column */}
          <div>
            <button onClick={scrollTop} className="flex flex-col leading-none mb-6 group">
              <span className="heading-display text-3xl text-gold-400 group-hover:text-gold-300 transition-colors">MK</span>
              <span className="font-sans text-[9px] tracking-[0.25em] text-charcoal-500 uppercase font-light mt-0.5">
                Immobilienkonzepte
              </span>
            </button>

            <p className="font-sans font-light text-charcoal-500 text-[13px] leading-relaxed max-w-xs mb-8">
              Gezielte Immobilien-Aufwertung für höhere Verkaufspreise, bessere Vermietbarkeit und nachhaltige Wertsteigerung. Region Siegen & Umgebung.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/4915901234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 border border-charcoal-800 hover:border-[#25D366]/50 flex items-center justify-center transition-all group"
              >
                <MessageCircle size={13} className="text-charcoal-600 group-hover:text-[#25D366] transition-colors" />
              </a>
              <a
                href="https://instagram.com/mk.immobilienkonzepte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-charcoal-800 hover:border-pink-500/40 flex items-center justify-center transition-all group"
              >
                <Instagram size={13} className="text-charcoal-600 group-hover:text-pink-400 transition-colors" />
              </a>
              <a
                href="mailto:info@mk-immobilienkonzepte.de"
                aria-label="E-Mail"
                className="w-8 h-8 border border-charcoal-800 hover:border-gold-500/40 flex items-center justify-center transition-all group"
              >
                <Mail size={13} className="text-charcoal-600 group-hover:text-gold-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal-600 mb-6">
              Navigation
            </div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-[13px] text-charcoal-500 hover:text-gold-400 transition-colors text-left tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-charcoal-600 mb-6">
              Kontakt
            </div>
            <div className="space-y-4 font-sans text-[13px] text-charcoal-500 leading-relaxed">
              <div>
                <div className="text-charcoal-600 text-[10px] uppercase tracking-widest mb-1">Telefon</div>
                <a href="tel:+491590123456" className="hover:text-gold-400 transition-colors">
                  +49 159 0123456
                </a>
              </div>
              <div>
                <div className="text-charcoal-600 text-[10px] uppercase tracking-widest mb-1">E-Mail</div>
                <a href="mailto:info@mk-immobilienkonzepte.de" className="hover:text-gold-400 transition-colors">
                  info@mk-immobilienkonzepte.de
                </a>
              </div>
              <div>
                <div className="text-charcoal-600 text-[10px] uppercase tracking-widest mb-1">Region</div>
                <span>Siegen & Umgebung</span>
              </div>
              <div>
                <div className="text-charcoal-600 text-[10px] uppercase tracking-widest mb-1">Gegründet von</div>
                <span>Tobias Mroß & Jonas Krupp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-800/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[11px] text-charcoal-700 hover:text-charcoal-400 transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="font-sans text-[11px] text-charcoal-700 tracking-wide order-last sm:order-none">
            © {new Date().getFullYear()} MK Immobilienkonzepte. Alle Rechte vorbehalten.
          </p>

          <button
            onClick={scrollTop}
            className="w-8 h-8 border border-charcoal-800 hover:border-gold-500/40 flex items-center justify-center text-charcoal-600 hover:text-gold-400 transition-all"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
