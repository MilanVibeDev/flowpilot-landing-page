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
            <a className="button button-primary" href="#pricing">Start for free <Icon name="arrowRight" size={18} /></a>
            <a className="button button-secondary" href="#how-it-works"><span className="play-icon"><Icon name="play" size={15} /></span> Watch demo</a>
          </div>
          <div className="microcopy"><Icon name="check" size={14} /> No credit card required <span>·</span> Free 14-day trial</div>
          <div className="hero-rating"><div className="avatar-stack"><span>EC</span><span>DK</span><span>SM</span><span>+</span></div><div><strong>★★★★★</strong><small>4.8/5 from 2,400+ teams</small></div></div>
        </div>
        <div className="hero-visual"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><DashboardMockup /></div>
      </div>
    </section>
  )
}

export function SocialProof() {
  return (
    <section className="social-proof" aria-label="Customers">
      <div className="container"><p>Used by 2,400+ productive teams</p><div className="company-row">{companies.map((company, index) => <span key={company} className={`company company-${index}`}>{index === 0 && <i>◆</i>}{index === 1 && <i>◈</i>}{index === 2 && <i>V</i>}{index === 3 && <i>☁</i>}{index === 4 && <i>✦</i>}{index === 5 && <i>●</i>}{company}</span>)}</div></div>
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
      <div className="container integration-grid"><div className="integration-copy"><span className="eyebrow">INTEGRATIONS</span><h2>Works with the tools you already use</h2><p>Connect your team&apos;s favorite apps and let FlowPilot keep everything in sync.</p><a className="text-link" href="#pricing">View all integrations <Icon name="arrowRight" size={16} /></a></div><div className="integration-list">{integrations.map((integration) => <div className="integration-card" key={integration.name}><span style={{ color: integration.color }}><Icon name={integration.icon} size={23} /></span><strong>{integration.name}</strong><small><Icon name="check" size={13} /> Connected</small></div>)}</div></div>
    </section>
  )
}

export function Metrics() {
  return <section className="metrics-section"><div className="container metrics-grid">{metrics.map((metric) => <div className="metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></section>
}

export function Testimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container"><SectionHeader eyebrow="CUSTOMER STORIES" title="Teams move faster with FlowPilot" description="Join thousands of teams spending less time managing work—and more time doing it." /><div className="testimonial-grid">{testimonials.map((testimonial) => <figure className="testimonial-card" key={testimonial.name}><div className="quote-mark">“</div><blockquote>{testimonial.quote}</blockquote><figcaption><span className={`testimonial-avatar ${testimonial.tone}`}>{testimonial.initials}</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span></figcaption></figure>)}</div></div>
    </section>
  )
}

export function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container"><SectionHeader eyebrow="SIMPLE PRICING" title="Start free. Scale when you're ready." description="All plans include a 14-day Pro trial. No credit card required." /><div className="pricing-grid">{pricing.map((plan) => <article className={`pricing-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular-badge"><Icon name="sparkle" size={13} /> Most Popular</span>}<div className="plan-heading"><h3>{plan.name}</h3><p>{plan.description}</p></div><div className="plan-price"><strong>{plan.price}</strong>{plan.suffix && <span>{plan.suffix}</span>}</div><a className={`button ${plan.featured ? 'button-primary' : 'button-secondary'}`} href="#final-cta">{plan.action} <Icon name="arrowRight" size={16} /></a><div className="plan-divider" /><ul>{plan.features.map((feature) => <li key={feature}><span><Icon name="check" size={14} /></span>{feature}</li>)}</ul></article>)}</div><p className="pricing-note">Need a custom plan for a larger team? <a href="#footer">Talk to our team →</a></p></div>
    </section>
  )
}

function AccordionItem({ item, isOpen, onToggle, index }) {
  return <div className={`faq-item ${isOpen ? 'is-open' : ''}`}><h3><button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={onToggle}><span>{item.question}</span><Icon name="chevronDown" size={19} /></button></h3><div className="faq-answer" id={`faq-panel-${index}`} role="region"><div><p>{item.answer}</p></div></div></div>
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section faq-section"><div className="container faq-layout"><div className="faq-copy"><span className="eyebrow">FAQ</span><h2>Questions, answered.</h2><p>Everything you need to know before putting your work on autopilot.</p><small>Still have questions? <a href="#footer">Talk to us →</a></small></div><div className="faq-list">{faqs.map((faq, index) => <AccordionItem key={faq.question} item={faq} index={index} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? -1 : index)} />)}</div></div></section>
  )
}

export function FinalCTA() {
  return <section className="final-cta-section" id="final-cta"><div className="cta-grid-lines" /><div className="container final-cta-content"><span className="cta-icon"><Icon name="sparkle" size={24} /></span><h2>Spend less time organizing work.</h2><p>Let FlowPilot handle the busywork while your team focuses on getting things done.</p><a className="button button-light" href="#pricing">Start your free trial <Icon name="arrowRight" size={18} /></a><small><Icon name="check" size={13} /> No credit card required.</small></div></section>
}
