import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'

const projects = [
  {
    label: 'Wohnzimmer',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    after:  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&auto=format',
  },
  {
    label: 'Küche',
    before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format',
    after:  'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80&auto=format',
  },
  {
    label: 'Schlafzimmer',
    before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80&auto=format',
    after:  'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80&auto=format',
  },
]

function Slider({ before, after }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => { dragging.current = true; updatePos(e.clientX) }
  const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX) }
  const onMouseUp   = () => { dragging.current = false }
  const onTouchMove = (e) => updatePos(e.touches[0].clientX)

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden aspect-[16/10] cursor-col-resize"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updatePos(e.touches[0].clientX)}
    >
      {/* After image (full) */}
      <img src={after} alt="Nachher" className="absolute inset-0 w-full h-full object-cover" draggable="false" />

      {/* Before image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Vorher" className="absolute inset-0 w-full h-full object-cover" style={{ minWidth: `${10000 / pos}%` }} draggable="false" />
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-px bg-gold-400 shadow-[0_0_12px_rgba(201,168,76,0.6)]" style={{ left: `${pos}%` }} />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shadow-xl z-10"
        style={{ left: `${pos}%` }}
      >
        <MoveHorizontal size={16} className="text-charcoal-950" />
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-charcoal-950/70 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-charcoal-300 font-mono">
        Vorher
      </div>
      <div className="absolute bottom-4 right-4 bg-charcoal-950/70 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-gold-400 font-mono">
        Nachher
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section id="beforeafter" ref={ref} className="py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label">Vorher / Nachher</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="heading-display text-5xl md:text-6xl text-white mb-5">
            Der Unterschied ist{' '}
            <em className="text-gradient-gold not-italic">sichtbar.</em>
          </h2>
          <p className="font-sans font-light text-charcoal-300 max-w-xl mx-auto leading-relaxed">
            Ziehen Sie den Regler und erleben Sie die Transformation. Echte Projekte — echte Wirkung.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8"
        >
          {projects.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-sans transition-all duration-300 ${
                active === i
                  ? 'bg-gold-500 text-charcoal-950 font-medium'
                  : 'border border-charcoal-700 text-charcoal-400 hover:border-gold-500/50 hover:text-gold-400'
              }`}
            >
              {p.label}
            </button>
          ))}
        </motion.div>

        {/* Slider */}
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto border border-charcoal-800"
        >
          <Slider before={projects[active].before} after={projects[active].after} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 font-sans text-xs text-charcoal-600 tracking-wider"
        >
          ← Regler ziehen zum Vergleichen →
        </motion.p>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-px gold-line" />
    </section>
  )
}
