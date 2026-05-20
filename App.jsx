import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyMK from './components/WhyMK'
import Process from './components/Process'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-charcoal-950 text-charcoal-100 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyMK />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
