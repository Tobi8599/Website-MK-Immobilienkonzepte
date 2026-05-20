import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Briefcase, Zap, Award, Users, Eye } from 'lucide-react'

const usps = [
  {
    icon: Target,
    title: 'Fokus auf Wertsteigerung',
    desc: 'Keine Standard-Renovierung. Jede Maßnahme wird auf maximale Wirkung am Markt ausgerichtet.',
  },
  {
    icon: Briefcase,
    title: 'Immobilienverständnis & Handwerk',
    desc: 'Wir kombinieren Marktkenntnis mit handwerklicher Exzellenz – einzigartig in der Region.',
  },
  {
    icon: Zap,
    title: 'Moderne Lösungen',
    desc: 'Effiziente Prozesse, aktuelle Materialien und zukunftsfähige Technologien für Ihre Immobilie.',
  },
  {
    icon: Award,
    title: 'Hochwertige Umsetzung',
    desc: 'Nur Premium-Materialien und geprüfte Handwerker für ein Ergebnis, das überzeugt.',
  },
  {
    icon: Users,
    title: 'Professionelle Projektbegleitung',
    desc: 'Transparente Kommunikation und persönliche Ansprechpartner vom ersten Tag bis zur Übergabe.',
  },
  {
    icon: Eye,
    title: 'Moderne Immobilienoptik',
    desc: 'Wir schaffen Räume, die emotional berühren und sofortige Kaufentscheidungen auslösen.',
  },
]

export default function WhyMK() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why" ref={ref} className="py-32 bg-charcoal-950 relative">
      {/* Gold accent strip */}
      <div className="absolute left-0 top-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Title block */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold-500" />
                <span className="section-label">Warum MK?</span>
              </div>

              <h2 className="heading-display text-5xl md:text-6xl text-white mb-8 leading-tight">
                Der Unterschied,<br />
                den Sie{' '}
                <em className="text-gradient-gold not-italic">spüren.</em>
              </h2>

              <p className="font-sans font-light text-charcoal-300 leading-relaxed max-w-md">
                Wir sind kein Handwerksbetrieb. Wir sind strategische Partner, die Immobilien mit System und Marktverstand aufwerten.
              </p>

              {/* Gold divider */}
              <div className="mt-12 w-16 h-px bg-gold-500" />

              {/* Quote */}
              <blockquote className="mt-8 pl-6 border-l border-gold-500/30">
                <p className="heading-display text-xl text-charcoal-200 italic leading-relaxed">
                  „Jede Immobilie hat ungenutztes Potenzial. Wir heben es."
                </p>
                <footer className="mt-3 font-sans text-xs text-charcoal-500 tracking-widest uppercase">
                  — Tobias Mroß, Gründer
                </footer>
              </blockquote>
            </motion.div>
          </div>

          {/* Right: USP list */}
          <div className="space-y-4">
            {usps.map((usp, i) => {
              const Icon = usp.icon
              return (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="glass-card glass-card-hover flex gap-5 p-6 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-400/50 transition-all">
                    <Icon size={16} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-white text-sm mb-2 tracking-wide">
                      {usp.title}
                    </h3>
                    <p className="font-sans font-light text-charcoal-400 text-[13px] leading-relaxed">
                      {usp.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-px gold-line" />
    </section>
  )
}
