import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  TrendingUp, Hammer, Layers, ChefHat, Wifi, Home, BarChart2, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Immobilien-Aufwertung',
    desc: 'Gezielte Maßnahmen, die den Marktwert Ihrer Immobilie messbar und nachhaltig steigern.',
  },
  {
    icon: Hammer,
    title: 'Renovierung & Modernisierung',
    desc: 'Hochwertige Umsetzung moderner Wohnkonzepte – von der Planung bis zur schlüsselfertigen Übergabe.',
  },
  {
    icon: Layers,
    title: 'Boden- & Wandgestaltung',
    desc: 'Premium-Materialien und zeitlose Designs, die Räume aufwerten und Käufer überzeugen.',
  },
  {
    icon: ChefHat,
    title: 'Küchen-Upgrades',
    desc: 'Moderne Küchenlösungen, die als echter Verkaufsmagnete wirken und den Wohlfühlfaktor maximieren.',
  },
  {
    icon: Wifi,
    title: 'Smart Home Integration',
    desc: 'Intelligente Gebäudetechnik für mehr Komfort, Effizienz und Attraktivität auf dem Markt.',
  },
  {
    icon: Home,
    title: 'Verkaufs- & Vermietungsvorbereitung',
    desc: 'Strategische Aufbereitung Ihrer Immobilie für maximale Erstvermittlungschancen.',
  },
  {
    icon: BarChart2,
    title: 'Beratung & Potenzialanalyse',
    desc: 'Fundierte Analyse des Aufwertungspotenzials mit klarem Maßnahmenplan und ROI-Einschätzung.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500" />
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
            <span className="section-label">Leistungen</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="heading-display text-5xl md:text-6xl text-white mb-6">
            Was wir für Sie tun.
          </h2>
          <p className="font-sans font-light text-charcoal-300 max-w-xl mx-auto leading-relaxed">
            Jede Leistung ist auf eines ausgerichtet: den Wert Ihrer Immobilie zu maximieren.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass-card glass-card-hover p-8 group cursor-default"
              >
                <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center mb-6 group-hover:border-gold-400/60 group-hover:bg-gold-500/10 transition-all duration-400">
                  <Icon size={18} className="text-gold-500 group-hover:text-gold-300 transition-colors" />
                </div>
                <h3 className="font-sans font-medium text-white text-sm tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="font-sans font-light text-charcoal-400 text-[13px] leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-gold-500/0 group-hover:text-gold-400 transition-all duration-300 text-xs tracking-widest uppercase">
                  <span>Mehr erfahren</span>
                  <ArrowRight size={12} />
                </div>
              </motion.div>
            )
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: services.length * 0.1 }}
            className="md:col-span-2 lg:col-span-1 relative overflow-hidden group cursor-pointer"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-gold-900/10 border border-gold-500/20 group-hover:border-gold-400/50 transition-colors duration-400" />
            <div className="relative p-8 h-full flex flex-col justify-between min-h-[200px]">
              <div className="w-10 h-10 border border-gold-500/50 flex items-center justify-center">
                <ArrowRight size={18} className="text-gold-400" />
              </div>
              <div>
                <h3 className="heading-display text-3xl text-gold-300 mb-3">Ihr Projekt starten?</h3>
                <p className="font-sans font-light text-charcoal-300 text-sm">
                  Kostenlose Erstberatung & Potenzialanalyse anfragen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
