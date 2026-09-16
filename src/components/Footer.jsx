import { footerLinks } from '../data/siteData.js'
import Icon from './Icons.jsx'
import { Logo } from './Navbar.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand"><Logo /><p>Turn conversations into action. Automatically.</p><span>Built for teams that want to move faster.</span></div>
        {footerLinks.map((column) => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href={link === 'Features' ? '#features' : link === 'Integrations' ? '#integrations' : link === 'Pricing' ? '#pricing' : '#top'} key={link}>{link}</a>)}</div>)}
      </div>
      <div className="container footer-bottom"><span>© 2026 FlowPilot Inc.</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Security</a></div><a className="back-top" href="#top" aria-label="Back to top"><Icon name="arrowDown" size={16} /></a></div>
    </footer>
  )
}
