import { useState } from 'react'
import { navLinks } from '../data/siteData.js'
import Icon from './Icons.jsx'

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="FlowPilot home">
      <span className="logo-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span>FlowPilot</span>
    </a>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Main navigation">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
        <div className={`nav-menu ${isOpen ? 'is-open' : ''}`} id="main-menu">
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="button button-primary button-small" href="#pricing" onClick={closeMenu}>
              View pricing concept <Icon name="arrowRight" size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
