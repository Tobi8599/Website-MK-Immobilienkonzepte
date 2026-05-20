import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MessageCircle, Instagram, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+49 159 0123456',
    href: 'tel:+491590123456',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'info@mk-immobilienkonzepte.de',
    href: 'mailto:info@mk-immobilienkonzepte.de',
  },
  {
    icon: MapPin,
    label: 'Region',
    value: 'Siegen & Umgebung',
    href: null,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contact" ref={ref} className="py-32 bg-charcoal-950 relative">
      <div className="absolute left-0 top-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label">Kontakt</span>
          </div>
          <h2 className="heading-display text-5xl md:text-6xl text-white max-w-lg leading-tight">
            Sprechen wir über{' '}
            <em className="text-gradient-gold not-italic">Ihre Immobilie.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p className="font-sans font-light text-charcoal-300 leading-relaxed mb-12 max-w-sm">
              Schildern Sie uns Ihr Vorhaben — wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung zurück.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 border border-charcoal-800 group-hover:border-gold-500/40 flex items-center justify-center transition-colors flex-shrink-0">
                      <Icon size={14} className="text-gold-500" />
                    </div>
                    <div>
                      <div className="font-sans text-[10px] text-charcoal-600 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans text-sm text-charcoal-200 hover:text-gold-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-sans text-sm text-charcoal-200">{item.value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div>
              <div className="font-sans text-[10px] text-charcoal-600 uppercase tracking-widest mb-4">
                Social Media
              </div>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/4915901234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-charcoal-800 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 flex items-center justify-center transition-all group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={15} className="text-charcoal-400 group-hover:text-[#25D366] transition-colors" />
                </a>
                <a
                  href="https://instagram.com/mk.immobilienkonzepte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-charcoal-800 hover:border-pink-500/50 hover:bg-pink-500/10 flex items-center justify-center transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram size={15} className="text-charcoal-400 group-hover:text-pink-400 transition-colors" />
                </a>
                <a
                  href="mailto:info@mk-immobilienkonzepte.de"
                  className="w-10 h-10 border border-charcoal-800 hover:border-gold-500/50 hover:bg-gold-500/10 flex items-center justify-center transition-all group"
                  aria-label="E-Mail"
                >
                  <Mail size={15} className="text-charcoal-400 group-hover:text-gold-400 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 flex flex-col items-center text-center h-full justify-center min-h-[400px]"
              >
                <CheckCircle size={40} className="text-gold-400 mb-6" strokeWidth={1} />
                <h3 className="heading-display text-3xl text-white mb-3">Nachricht gesendet.</h3>
                <p className="font-sans font-light text-charcoal-400 text-sm leading-relaxed max-w-xs">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', message: '' }) }}
                  className="mt-8 font-sans text-xs text-charcoal-500 hover:text-gold-400 transition-colors tracking-widest uppercase"
                >
                  Neue Anfrage →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] text-charcoal-500 uppercase tracking-widest">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr Name"
                      className="bg-charcoal-900 border border-charcoal-800 focus:border-gold-500/50 outline-none px-4 py-3.5 font-sans text-sm text-charcoal-100 placeholder-charcoal-700 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] text-charcoal-500 uppercase tracking-widest">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Ihre Nummer"
                      className="bg-charcoal-900 border border-charcoal-800 focus:border-gold-500/50 outline-none px-4 py-3.5 font-sans text-sm text-charcoal-100 placeholder-charcoal-700 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] text-charcoal-500 uppercase tracking-widest">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="ihre@email.de"
                    className="bg-charcoal-900 border border-charcoal-800 focus:border-gold-500/50 outline-none px-4 py-3.5 font-sans text-sm text-charcoal-100 placeholder-charcoal-700 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] text-charcoal-500 uppercase tracking-widest">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihre Immobilie und Ihr Vorhaben..."
                    className="bg-charcoal-900 border border-charcoal-800 focus:border-gold-500/50 outline-none px-4 py-3.5 font-sans text-sm text-charcoal-100 placeholder-charcoal-700 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border border-charcoal-950/30 border-t-charcoal-950 rounded-full animate-spin" />
                      <span>Wird gesendet…</span>
                    </span>
                  ) : (
                    <>
                      <span>Kostenlose Einschätzung anfragen</span>
                      <Send size={13} />
                    </>
                  )}
                </button>

                <p className="font-sans text-[11px] text-charcoal-600 text-center mt-3">
                  Keine Weitergabe Ihrer Daten. Antwort innerhalb von 24h.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
