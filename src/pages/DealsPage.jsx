import { useState } from 'react'
import { Link } from 'react-router-dom'
import './DealsPage.css'

const deals = [
  {
    title: 'מבצעי צמיגים',
    image: '/מבצע_צמיגים.jpeg',
    description: `🔥 מבצע מטורף לחברי המועדון!🔥
בשיתוף צמיגי מוריס - בית עובד
הכנו עבורכם מחירים מיוחדים על צמיגים וג'אנטים! 🚙💨

📏 מידה 225/70R16
✅ טויו אופן קאנטרי - 2,630 ש"ח
✅ BFGoodrich KO3 - 3,990 ש"ח

📏 מידה 225/65R17
✅ מקסיס (RAZR) 2530 ש"ח
✅ BFGoodrich KO3 - 3750 ש"ח

📏 מידה 245/70R16
 ✅ מקסיס BigHorn - 2,750 ש"ח

🛞 ג'אנטים מחוזקים Dirty Life
✔️ קוטר: 16
✔️ אופסט: 0
✔️ רוחב: 8
💰 מחיר: רק 2,650 ש"ח

שימו לב ❤️ מלאי הגאנטים מצומצם ל 10 סטים בלבד במחיר הנ"ל.

המחיר המקורי - 3400 ש"ח.

📌 כל המחירים כוללים מע"מ והתקנה.
📌 המחירים מתייחסים לסט של 4 צמיגים או 4 ג'אנטים.
📌  מבצע ג'אנטים מוגבל לסט אחד לכל חבר מועדון.

📞 להזמנות: 052-3490008 אסף

⚠️ המבצע לזמן מוגבל וכפוף למלאי הקיים
אל תפספסו! 💪`,
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
                  {isOpen && <p className="deal-description">{d.description}</p>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
