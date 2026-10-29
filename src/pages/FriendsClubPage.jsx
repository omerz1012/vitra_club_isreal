import { useState } from 'react'
import { Link } from 'react-router-dom'
import Linkify from '../components/Linkify'
import './FriendsClubPage.css'

const deals = [
  {
    title: '🚙 אוטו פוינט – 10% הנחה על כל חלקי החילוף באתר',
    image: '/friend_deal_otopoint.jpeg',
    code: 'sgv4x4il',
    description: `🚙 לחברי מועדון SUZUKI GRAND VITARA ISRAEL 4X4

אוטו פוינט מעניקה לכם 10% הנחה על כל חלקי החילוף באתר.
קוד קופון: sgv4x4il
מזינים את הקוד בסל ומקבלים את ההנחה מיד.

🛒 https://otopoint.co.il

ההנחה לא חלה על שמני מנוע, שמני גיר ונוזלי קירור.
ההנחה חלה ברכישה באתר בלבד ולא בחנות`,
  },
]

export default function FriendsClubPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const copyCode = (index, code) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="friends-club-page" dir="rtl">
      <div className="friends-club-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🤝 כרטיס חבר מועדון</h1>
        <p>הטבות ומבצעים בלעדיים לחברי המועדון</p>
      </div>

      <div className="friends-club-container">
        {deals.length === 0 ? (
          <p className="friends-club-empty">אין מבצעי מועדון כרגע</p>
        ) : (
          <div className="friends-club-list">
            {deals.map((d, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`friends-club-card${isOpen ? ' open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <img src={d.image} alt={d.title} className="friends-club-image" />
                  <div className="friends-club-title-row">
                    <h2 className="friends-club-title">{d.title}</h2>
                    {d.code && (
                      <button
                        className="friends-club-code-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyCode(i, d.code)
                        }}
                      >
                        <span className="friends-club-code-text">{d.code}</span>
                        <span className="friends-club-copy-label">{copiedIndex === i ? '✓ הועתק' : 'העתק קוד'}</span>
                      </button>
                    )}
                  </div>
                  {isOpen && (
                    <p className="friends-club-description">
                      <Linkify text={d.description} />
                      {d.note && <><br /><br /><strong>{d.note}</strong></>}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
