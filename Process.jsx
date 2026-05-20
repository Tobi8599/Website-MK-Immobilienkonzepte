import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, FileText, Hammer, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Besichtigung & Analyse',
    desc: 'Wir analysieren Ihre Immobilie vor Ort: Zustand, Potenzial, Zielgruppe und realistische Wertsteigerungsmaßnahmen.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Individuelles Konzept',
    desc: 'Auf Basis der Analyse entwickeln wir ein maßgeschneidertes Aufwertungskonzept mit klarem Maßnahmenplan und Kostenkalkulation.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Umsetzung & Aufwertung',
    desc: 'Unsere geprüften Handwerker setzen das Konzept effizient und in Premium-Qualität um – Sie bleiben immer informiert.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Fertigstellung & Übergabe',
    desc: 'Abnahme, Qualitätsprüfung, Dokumentation – und Ihre Immobilie ist bereit für den Markt.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Background number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 heading-display text-[20rem] leading-none text-charcoal-800/30 select-none pointer-events-none">
        04
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label">Unser Ablauf</span>
          </div>
          <h2 className="heading-display text-5xl md:text-6xl text-white max-w-lg leading-tight">
            Von der Idee zur{' '}
            <em className="text-gradient-gold not-italic">Wertsteigerung.</em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              style={{ transformOrigin: 'left' }}
              className="h-full bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  className="relative group"
                >
                  {/* Step number & icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-10 h-10 flex items-center justify-center border border-gold-500/30 group-hover:border-gold-400 group-hover:bg-gold-500/10 transition-all duration-400 z-10 bg-charcoal-900">
                      <Icon size={16} className="text-gold-500" />
                    </div>
                    <span className="font-mono text-3xl font-light text-charcoal-700 group-hover:text-charcoal-600 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-sans font-medium text-white text-sm tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans font-light text-charcoal-400 text-[13px] leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Gold accent on hover */}
                  <div className="mt-6 w-0 h-px bg-gold-500 group-hover:w-8 transition-all duration-500" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
