import { useState } from 'react'
import { Link } from 'react-router-dom'
import Linkify from '../components/Linkify'
import './FriendsClubPage.css'

const deals = [
  {
    title: '☀️🔥 מבצעי קיץ מטורפים לחברי המועדון! 🔥☀️',
    image: '/friend_deal.jpeg',
    description: `חברי SUZUKI GRAND VITARA 4X4 ISRAEL
הקיץ הזה דואגים לגרנד ויטרה שלכם כמו שצריך! 🚙💨

בשיתוף פעולה מיוחד עם רדיאטור רחובות 🤝🔧 הבאנו לכם מחירי קיץ מיוחדים לרכב

💥 סט רענון למערכת הקירור 💥
הסט כולל:
🔹 פקק רדיאטור מקורי
🔹 טרמוסטט מקורי
🔹 2 מיכלי נוזלי קירור ולוולין ירוק
💰 רק 299 ₪ כולל מע"מ!

רוצים גם התקנה? 🔧
🔥 סט + עבודה - רק 649 ₪ כולל מע"מ!

🔧 סט תושבות מנוע 2.0
💥 רק 1,250 ₪ כולל מע"מ!
⚠️ במלאי למבצע: 8 סטים בלבד!
על בסיס כל הקודם זוכה!

❄️ מילוי גז למזגן ❄️
כולל:
🔹 וואקום
🔹 שמן זרחני
💰 רק 250 ₪ כולל מע"מ!

🚨 שימו לב! 🚨
המבצעים בתוקף עד 30.9.26 או עד גמר המלאי, המוקדם מביניהם.

🔥 מחירי קיץ מיוחדים לחברי המועדון בלבד!
🔥 הכמויות מוגבלות!
🔥 אל תחכו לרגע האחרון!

📲 לפרטים ותיאום מול רדיאטור רחובות
וואטסאפ: 053-4244428
לא לשכוח להגיד שזה דרך מבצע המועדון

כתובת לאיסוף: משה יתום 6 רחובות

🚙💨 SUZUKI GRAND VITARA 4X4 ISRAEL
🤝 ממשיכים להביא לכם את ההטבות הכי שוות!`,
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
