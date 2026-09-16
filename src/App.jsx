import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import {
  FAQ,
  Features,
  FinalCTA,
  Hero,
  HowItWorks,
  Integrations,
  Metrics,
  Pricing,
  ProblemSection,
  SocialProof,
  Testimonials,
} from './components/Sections.jsx'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <Integrations />
        <Metrics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
