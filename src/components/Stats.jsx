import { useEffect, useRef, useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import JoinModal from './JoinModal'
import './Stats.css'

function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1800
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString('he-IL')}</span>
}

const platforms = [
  {
    icon: <FaFacebook />,
    name: 'פייסבוק',
    count: 6383,
    label: 'חברים בקבוצה',
    color: '#1877f2',
    href: 'https://www.facebook.com/share/g/1PKeizgd1F/',
    cta: 'הצטרפו לקבוצה',
  },
  {
    icon: <FaInstagram />,
    name: 'אינסטגרם',
    count: 1577,
    label: 'עוקבים',
    color: '#e1306c',
    href: 'https://www.instagram.com/gv4x4_israel_team?igsh=aWpyZWJ4czZ2cTA0',
    cta: 'עקבו אחרינו',
  },
  {
    icon: <FaWhatsapp />,
    name: 'וואטסאפ',
    count: 1049,
    label: 'חברי קבוצה',
    color: '#25d366',
    href: 'https://whatsapp.com',
    cta: 'הצטרפו לקבוצה',
    openJoinModal: true,
  },
]

export default function Stats() {
  const [joinModalOpen, setJoinModalOpen] = useState(false)

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <h2 className="section-title">הקהילה שלנו</h2>
        <p className="section-subtitle">מעל 7,500 בעלי גרנד ויטרה בפלטפורמות השונות</p>

        <div className="stats-grid">
          {platforms.map(p => (
            <div className="stat-card" key={p.name} style={{ '--accent': p.color }}>
              <div className="stat-icon">{p.icon}</div>
              <div className="stat-number">
                <Counter target={p.count} />+
              </div>
              <div className="stat-label">{p.label}</div>
              <div className="stat-platform">{p.name}</div>
              {p.openJoinModal ? (
                <a
                  href="#join"
                  className="stat-cta"
                  onClick={(e) => { e.preventDefault(); setJoinModalOpen(true) }}
                >
                  {p.cta} →
                </a>
              ) : (
                <a href={p.href} target="_blank" rel="noreferrer" className="stat-cta">
                  {p.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {joinModalOpen && <JoinModal onClose={() => setJoinModalOpen(false)} />}
    </section>
  )
}
