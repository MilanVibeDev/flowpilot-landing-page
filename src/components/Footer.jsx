import { footerLinks } from '../data/siteData.js'
import Icon from './Icons.jsx'
import { Logo } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo /><p>Turn conversations into action. Automatically.</p><span>Fictional SaaS concept project by MilanVibeDev.</span></div>
        {footerLinks.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom"><span>© 2026 MilanVibeDev · Portfolio concept</span><a className="back-top" href="#top" aria-label="Back to top"><Icon name="arrowDown" size={16} /></a></div>
    </footer>
  )
}
