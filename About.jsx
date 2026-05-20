import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80&auto=format'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-32 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={ABOUT_IMAGE}
                alt="Modernes Interior Design"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 max-w-[200px]"
            >
              <div className="heading-display text-5xl text-gold-400 leading-none">10+</div>
              <div className="font-sans text-xs text-charcoal-300 mt-2 leading-relaxed">Jahre Erfahrung in der Immobilien-Aufwertung</div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold-500/20" />
            <div className="absolute -top-2 -left-2 w-24 h-24 border border-gold-500/10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span className="section-label">Über uns</span>
            </div>

            <h2 className="heading-display text-5xl md:text-6xl text-white mb-8 leading-tight">
              Immobilien-<br />
              verständnis trifft{' '}
              <em className="text-gradient-gold not-italic">handwerkliche Exzellenz.</em>
            </h2>

            <div className="space-y-5 font-sans font-light text-charcoal-300 leading-relaxed text-[15px]">
              <p>
                MK Immobilienkonzepte verbindet modernes Immobilienverständnis mit hochwertiger handwerklicher Umsetzung. Unser Fokus liegt auf der gezielten Aufwertung von Immobilien mit Blick auf Rendite, Vermarktung und nachhaltige Wertsteigerung.
              </p>
              <p>
                Wir denken nicht wie ein klassischer Handwerksbetrieb – wir denken wie Immobilienexperten. Jede Maßnahme wird auf ihren Return on Investment geprüft und konsequent auf maximale Wirkung ausgerichtet.
              </p>
            </div>

            {/* Founders */}
            <div className="mt-10 pt-8 border-t border-charcoal-800">
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-sans text-xs tracking-[0.15em] uppercase text-gold-500 mb-1">Gegründet von</div>
                  <div className="heading-display text-2xl text-white">Tobias Mroß & Jonas Krupp</div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                'Rendite-Fokus',
                'Qualitätshandwerk',
                'Transparenz',
                'Ganzheitlich',
              ].map((val) => (
                <div key={val} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                  <span className="font-sans text-xs text-charcoal-300 tracking-wide">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
