import { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Website types', href: '#website-types' },
  { label: 'Insights', href: '#insights' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a className="nav-brand" href="#top">
          <img src={logo} alt="Aakayanae" className="nav-logo" />
          <span>Aakayanae</span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary cut-corner-sm nav-cta">
            Get a free presence check
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
