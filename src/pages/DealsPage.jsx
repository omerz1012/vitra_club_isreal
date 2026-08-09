import { useState } from 'react'
import { Link } from 'react-router-dom'
import Linkify from '../components/Linkify'
import './DealsPage.css'

const deals = [
  {
    title: '🔥 מבצע מטורף לחברי המועדון! 🔥',
    image: '/מבצע_מצבר.jpeg',
    description: `זה הזמן להתחדש במצבר איכותי במחיר שלא רואים כל יום!

⚡ מצבר יואסה פריקה עמוקה 80Ah

- זרם התנעה: 600A
- שנה אחריות מלאה
- חיבורים כפולים - חיבורים ייעודיים למצבר, ובנוסף חיבורים נפרדים לצרכנים נוספים (מקרר, מדחס, תאורה, ממיר וכדומה), ללא צורך להעמיס על קוטבי המצבר.

💥 רק 550 ש"ח!
_________

⚡ מצבר וולטה 80Ah

- זרם התנעה: 640A
- שנה אחריות
💥 רק 550 ש"ח!

✅ ניתן לקבל את המצבר בנקודות חלוקה ברחבי הארץ (בתיאום מראש).

📍 כתובת: הבנאי 6 עפולה
📞 טלפון: 04-8811438 0506012070 אילן

❗ חשוב לציין שהגעתם דרך מבצע המועדון כדי ליהנות מהמחיר המיוחד.

🚙 אל תפספסו! מחיר מטורף על מצברים איכותיים - הזדמנות מעולה לחברי המועדון בלבד!`,
  },
]

export default function DealsPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const copyCode = (index, code) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="deals-page" dir="rtl">
      <div className="deals-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🏷️ מבצעים</h1>
        <p>מבצעים בלעדיים לחברי המועדון</p>
      </div>

      <div className="deals-container">
        {deals.length === 0 ? (
          <p className="deals-empty">אין מבצעי מועדון כרגע</p>
        ) : (
          <div className="deals-list">
            {deals.map((d, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`deal-card${isOpen ? ' open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <img src={d.image} alt={d.title} className="deal-image" />
                  <div className="deal-title-row">
                    <h2 className="deal-title">{d.title}</h2>
                    {d.code && (
                      <button
                        className="deal-code-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyCode(i, d.code)
                        }}
                      >
                        <span className="deal-code-text">{d.code}</span>
                        <span className="deal-copy-label">{copiedIndex === i ? '✓ הועתק' : 'העתק קוד'}</span>
                      </button>
                    )}
                  </div>
                  {isOpen && (
                    <p className="deal-description">
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
