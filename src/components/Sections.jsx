import { useState } from 'react'
import {
  companies,
  faqs,
  features,
  integrations,
  metrics,
  pricing,
  problems,
  steps,
  testimonials,
} from '../data/siteData.js'
import DashboardMockup from './DashboardMockup.jsx'
import FeatureMockup from './FeatureMockups.jsx'
import Icon from './Icons.jsx'

function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-header section-header-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="announcement"><span><Icon name="sparkle" size={13} /></span> Meet your team&apos;s AI project copilot <Icon name="arrowRight" size={14} /></div>
          <h1>Turn conversations into <span>action.</span> Automatically.</h1>
          <p>FlowPilot uses AI to turn messages, meeting notes, and ideas into organized tasks so your team always knows what to do next.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#features">Explore the concept <Icon name="arrowRight" size={18} /></a>
            <a className="button button-secondary" href="#how-it-works"><span className="play-icon"><Icon name="play" size={15} /></span> See how it works</a>
          </div>
          <div className="microcopy"><Icon name="check" size={14} /> Frontend-only portfolio build <span>·</span> No signup or payment flow</div>
        </div>
        <div className="hero-visual"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><DashboardMockup /></div>
      </div>
    </section>
  )
}

export function SocialProof() {
  return (
    <section className="social-proof" aria-label="Fictional brand placeholders">
      <div className="container"><p>Fictional company marks created for this concept</p><div className="company-row">{companies.map((company, index) => <span key={company} className={`company company-${index}`}>{index === 0 && <i>◆</i>}{index === 1 && <i>◈</i>}{index === 2 && <i>V</i>}{index === 3 && <i>☁</i>}{index === 4 && <i>✦</i>}{index === 5 && <i>●</i>}{company}</span>)}</div><small className="section-note">Brand names are placeholders. No client relationships are implied.</small></div>
    </section>
  )
}

export function ProblemSection() {
  return (
    <section className="section problem-section">
      <div className="container">
        <SectionHeader eyebrow="THE PROBLEM" title="Your team shouldn't spend hours organizing work." description="Great work starts in conversations. Too often, that's also where it gets lost." />
        <div className="problem-grid">
          {problems.map((problem, index) => <article className="problem-card" key={problem.title}><span className={`problem-icon problem-icon-${index}`}><Icon name={problem.icon} /></span><h3>{problem.title}</h3><p>{problem.text}</p></article>)}
        </div>
        <div className="transition-line"><span><Icon name="sparkle" size={16} /></span> FlowPilot handles the organization for you.</div>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <SectionHeader eyebrow="BUILT FOR FOCUS" title="Less organizing. More doing." description="FlowPilot turns the work hiding in your conversations into a clear, prioritized plan." />
        <div className="features-list">
          {features.map((feature, index) => <article className={`feature-row ${index % 2 ? 'feature-reverse' : ''}`} key={feature.title}><div className="feature-copy"><span className="feature-number">0{index + 1}</span><span className="eyebrow">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.description}</p><a href="#pricing">Explore this feature <Icon name="arrowRight" size={16} /></a></div><div className="feature-visual"><FeatureMockup type={feature.mockup} /></div></article>)}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <SectionHeader eyebrow="HOW IT WORKS" title="From conversation to completed task in seconds" description="No complicated setup. FlowPilot fits the way your team already works." />
        <div className="steps-grid">{steps.map((step) => <article className="step-card" key={step.number}><span>{step.number}</span><div className="step-icon"><Icon name={step.number === '01' ? 'layers' : step.number === '02' ? 'sparkle' : 'check'} /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        <div className="flow-visual">{[['Message', 'mail'], ['AI Analysis', 'sparkle'], ['Organized Task', 'layers'], ['Completed', 'check']].map(([label, icon], index) => <div className="flow-item" key={label}><span className={index === 3 ? 'is-complete' : ''}><Icon name={icon} /></span><strong>{label}</strong>{index < 3 && <i><Icon name="arrowRight" size={17} /></i>}</div>)}</div>
      </div>
    </section>
  )
}

export function Integrations() {
  return (
    <section className="section integrations-section" id="integrations">
      <div className="container integration-grid"><div className="integration-copy"><span className="eyebrow">INTEGRATION CONCEPTS</span><h2>Designed around familiar team tools</h2><p>These fictional integration concepts demonstrate product positioning and interface design. No live integrations are implemented.</p><a className="text-link" href="#how-it-works">Review the concept flow <Icon name="arrowRight" size={16} /></a></div><div className="integration-list">{integrations.map((integration) => <div className="integration-card" key={integration.name}><span style={{ color: integration.color }}><Icon name={integration.icon} size={23} /></span><strong>{integration.name}</strong><small><Icon name="sparkle" size={13} /> Concept</small></div>)}</div></div>
    </section>
  )
}

export function Metrics() {
  return <section className="metrics-section" aria-labelledby="metrics-title"><div className="container"><div className="metrics-heading"><span id="metrics-title">Illustrative dashboard metrics</span><p>Sample data created to demonstrate a SaaS metrics interface—not measured product results.</p></div><div className="metrics-grid">{metrics.map((metric) => <div className="metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div></section>
}

export function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container"><SectionHeader eyebrow="FICTIONAL TESTIMONIAL LAYOUT" title="Designed to make social proof easy to scan" description="Sample quotes and profiles created only to demonstrate the visual treatment of a SaaS testimonial section." /><div className="testimonial-grid">{testimonials.map((testimonial) => <figure className="testimonial-card" key={testimonial.name}><span className="sample-label">Sample quote · Fictional person</span><div className="quote-mark">“</div><blockquote>{testimonial.quote}</blockquote><figcaption><span className={`testimonial-avatar ${testimonial.tone}`}>{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span></figcaption></figure>)}</div></div>
    </section>
  )
}

export function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container"><SectionHeader eyebrow="ILLUSTRATIVE PRICING" title="A clear plan structure for a SaaS concept" description="These sample plans demonstrate pricing-page hierarchy and conversion design. Nothing is available for purchase." /><div className="pricing-grid">{pricing.map((plan) => <article className={`pricing-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular-badge"><Icon name="sparkle" size={13} /> Featured concept</span>}<div className="plan-heading"><h3>{plan.name}</h3><p>{plan.description}</p></div><div className="plan-price"><strong>{plan.price}</strong>{plan.suffix && <span>{plan.suffix}</span>}</div><span className={`button is-static ${plan.featured ? 'button-primary' : 'button-secondary'}`}>Illustrative plan</span><div className="plan-divider" /><ul>{plan.features.map((feature) => <li key={feature}><span><Icon name="check" size={14} /></span>{feature}</li>)}</ul></article>)}</div><p className="pricing-note">Portfolio UI example only · No account, checkout, or subscription flow is connected.</p></div>
    </section>
  )
}

function AccordionItem({ item, isOpen, onToggle, index }) {
  const buttonId = `faq-button-${index}`
  const panelId = `faq-panel-${index}`

  return <div className={`faq-item ${isOpen ? 'is-open' : ''}`}><h3><button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={onToggle}><span>{item.question}</span><Icon name="chevronDown" size={19} /></button></h3><div className="faq-answer" id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}><div><p>{item.answer}</p></div></div></div>
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section faq-section" id="faq"><div className="container faq-layout"><div className="faq-copy"><span className="eyebrow">FAQ</span><h2>Questions, answered.</h2><p>Clear context about what this portfolio concept does—and does not—include.</p></div><div className="faq-list">{faqs.map((faq, index) => <AccordionItem key={faq.question} item={faq} index={index} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />)}</div></div></section>
  )
}

export function FinalCTA() {
  return <section className="final-cta-section" id="final-cta"><div className="cta-grid-lines" /><div className="container final-cta-content"><span className="cta-icon"><Icon name="sparkle" size={24} /></span><h2>A product story designed to feel real.</h2><p>FlowPilot is a self-directed concept demonstrating conversion structure, responsive UI, accessibility, and product mockup design.</p><a className="button button-light" href="#features">Review the product concept <Icon name="arrowRight" size={18} /></a><small><Icon name="check" size={13} /> Fictional product · Frontend-only build</small></div></section>
}
