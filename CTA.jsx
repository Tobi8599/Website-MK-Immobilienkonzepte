import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const CTA_IMAGE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/4915901234567?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20kostenlose%20Einsch%C3%A4tzung%20meiner%20Immobilie.', '_blank')
  }

  return (
    <section id="cta" ref={ref} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={CTA_IMAGE}
          alt="Premium Immobilie"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-charcoal-950/50" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 w-full h-px gold-line z-10" />
      <div className="absolute left-0 bottom-0 w-full h-px gold-line z-10" />

      {/* Gold vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold-500" />
              <span className="section-label">Jetzt starten</span>
            </div>

            <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
              Lassen Sie uns gemeinsam mehr aus{' '}
              <em className="text-gradient-gold not-italic">Ihrer Immobilie</em>{' '}
              machen.
            </h2>

            <p className="font-sans font-light text-charcoal-300 text-lg leading-relaxed mb-12 max-w-xl">
              Vereinbaren Sie jetzt Ihre kostenlose Erstberatung. Wir analysieren Ihre Immobilie, zeigen Ihnen das Potenzial und entwickeln ein maßgeschneidertes Konzept — unverbindlich und transparent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleContact} className="btn-primary">
                <span>Jetzt unverbindlich anfragen</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-300 font-sans text-sm tracking-[0.08em] uppercase"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                'Kostenlose Erstberatung',
                'Keine versteckten Kosten',
                'Verbindliche Kalkulation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold-500" />
                  <span className="font-sans text-xs text-charcoal-400 tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
