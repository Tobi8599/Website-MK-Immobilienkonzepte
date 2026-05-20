import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael B.',
    role: 'Wohnungsverkäufer, Siegen',
    text: 'MK Immobilienkonzepte hat meine Wohnung innerhalb von drei Wochen komplett aufgewertet. Der Verkaufspreis lag am Ende 18% über meiner ursprünglichen Erwartung. Absolute Empfehlung.',
    rating: 5,
  },
  {
    name: 'Sandra K.',
    role: 'Vermieterin, Kreuztal',
    text: 'Endlich eine Firma, die wirklich mitdenkt. Das Team hat nicht einfach renoviert, sondern ein Konzept entwickelt, das meine Wohnung für die Zielgruppe optimiert hat. Innerhalb von zwei Tagen war sie vermietet.',
    rating: 5,
  },
  {
    name: 'Thomas H.',
    role: 'Immobilieninvestor, Region Siegen',
    text: 'Ich arbeite nun bei mehreren Projekten mit MK zusammen. Die Kombination aus Immobilienverständnis und handwerklicher Qualität ist einzigartig. Kein Vergleich zu klassischen Handwerksbetrieben.',
    rating: 5,
  },
  {
    name: 'Petra M.',
    role: 'Eigentümerin, Netphen',
    text: 'Was mich am meisten überzeugt hat: transparente Kommunikation, pünktliche Übergabe und ein Ergebnis, das wirklich Premium wirkt. Mein Haus hat sich in etwas völlig anderes verwandelt.',
    rating: 5,
  },
]

const stats = [
  { value: '50+', label: 'Projekte' },
  { value: '18%', label: 'Ø Wertsteigerung' },
  { value: '3 Wo.', label: 'Ø Projektlaufzeit' },
  { value: '100%', label: 'Weiterempfehlung' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="references" ref={ref} className="py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-gold-500"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label">Referenzen & Vertrauen</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="heading-display text-5xl md:text-6xl text-white mb-5">
            Was unsere Kunden sagen.
          </h2>
          <p className="font-sans font-light text-charcoal-300 max-w-md mx-auto leading-relaxed">
            Zufriedene Eigentümer aus Siegen und Umgebung – mit messbaren Ergebnissen.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal-800 mb-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-charcoal-900 flex flex-col items-center py-8">
              <span className="heading-display text-4xl md:text-5xl text-gold-400">{s.value}</span>
              <span className="font-sans text-xs text-charcoal-400 tracking-widest uppercase mt-2">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass-card p-10 md:p-14">
            {/* Quote icon */}
            <Quote
              size={40}
              className="absolute top-8 right-8 text-gold-500/10"
              strokeWidth={1}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={13} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="heading-display text-xl md:text-2xl text-charcoal-100 leading-relaxed italic mb-8">
                  „{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    <span className="heading-display text-lg text-gold-400">
                      {testimonials[current].name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-sans font-medium text-white text-sm">
                      {testimonials[current].name}
                    </div>
                    <div className="font-sans text-xs text-charcoal-500 tracking-wide">
                      {testimonials[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-charcoal-700 hover:border-gold-500 flex items-center justify-center text-charcoal-400 hover:text-gold-400 transition-all bg-charcoal-900"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-px transition-all duration-300 ${
                      i === current ? 'w-8 bg-gold-400' : 'w-4 bg-charcoal-700 hover:bg-charcoal-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 border border-charcoal-700 hover:border-gold-500 flex items-center justify-center text-charcoal-400 hover:text-gold-400 transition-all bg-charcoal-900"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Region note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 border border-charcoal-800 px-6 py-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="font-sans text-xs text-charcoal-400 tracking-[0.2em] uppercase">
              Tätig in der Region Siegen & Umgebung
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
