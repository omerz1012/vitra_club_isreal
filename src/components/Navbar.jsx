import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'בית', href: '/' },
  { label: 'אודות', href: '/about' },
  { label: 'מאגר מידע', href: '/info' },
  { label: 'סרטונים', href: '/videos' },
  { label: 'גלריה', href: '/gallery' },
  { label: 'תקנון', href: '/takanon' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); navigate('/') }}>
          <img src="/logo.png" alt="לוגו" className="logo-icon" />
          <div className="logo-text">
            <div className="logo-top-row">
              <span className="logo-badge">מועדון רשמי</span>
              <span className="logo-main">Suzuki Grand Vitara 4x4 Israel</span>
            </div>
            <span className="logo-sub">קהילת בעלי הגרנד ויטרה בישראל</span>
          </div>
        </a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); navigate(l.href); setOpen(false) }}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#join" className="nav-cta" onClick={() => setOpen(false)}>הצטרפו</a>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="תפריט">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}
