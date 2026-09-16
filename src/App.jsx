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
      <aside className="concept-banner" aria-label="Project disclosure">
        <div className="container concept-banner-content">
          <strong>Fictional SaaS concept project</strong>
          <span>Designed and developed as a portfolio piece. All product content is illustrative.</span>
        </div>
      </aside>
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
