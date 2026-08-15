import { useState } from 'react'
import { Link } from 'react-router-dom'
import Linkify from '../components/Linkify'
import './DealsPage.css'

const deals = [
  {
    title: '🚙🔥 מבצע צמיגים מטורף לחברי מועדון SUZUKI GRAND VITARA 4X4 ISRAEL! 🔥🚙',
    image: '/tire_deal.jpeg',
    description: `בשיתוף פעולה עם צמיגי פרונט יוסף, הכנו עבורכם מחירים מיוחדים לחברי המועדון בלבד! 💥

📍 מידה 225/65/17:

🛞 BF GOODRICH - סט ב-3,600 ₪ בלבד

🛞 TOYO - סט ב- 2,560  בלבד ₪

🛞 MAXXIS - סט  ב-2,680 ₪ בלבד

📍 מידה 225/70/16:

🛞 BF GOODRICH - סט ב-3,800 ₪ בלבד

🛞 TOYO - סט ב-2,400 ₪ בלבד

✅ כל המחירים כוללים מע"מ והתקנה!

📍 ניתן לבצע את ההתקנה באחד מהסניפים לבחירתכם:

🔹 אור יהודה

🔹 יהוד, רחוב אלטלף 9

📞 לתיאום התקנה והזמנות:

ברק - 054-6316044

⚠️ שימו לב - מדובר במחירים מיוחדים לחברי המועדון, אז אל תחכו לרגע האחרון!

תודה גדולה לצמיגי פרונט יוסף על שיתוף הפעולה וההטבה המיוחדת לחברי המועדון שלנו! ❤️`,
  },
  {
    title: '🔥🚙 מבצע מטורף לחברי מועדון SUZUKI GRAND VITARA 4X4 ISRAEL 🚙🔥',
    image: '/deal_wheel_car.jpeg',
    description: `הגיע הזמן לשדרג את הגרנד ויטרה עם כיסוי גלגל ודגל ממותגים בעיצוב המועדון 💪🔥

בשיתוף גליצ - כיסוי גלגל בעיצוב אישי, אנחנו מביאים לכם מחירים מיוחדים שלא תמצאו בחוץ! 😍

🎯 כיסוי גלגל עם לוגו המועדון - 399 ₪ בלבד!

🚩 דגל ממותג + מוט פיברגלס איכותי - 99 ₪ בלבד!

🚩 הדגל הממותג:

✔️ בד כפול ואיכותי במיוחד.
✔️ תפירה איכותית וחזקה.
✔️ לוגו המועדון מודפס משני הצדדים.
✔️ כולל מוט פיברגלס איכותי וחזק.
✔️ המוט מגיע ללא תושבת - יש לקבע אותו לרכב באמצעות תושבת מתאימה.

🛞 כיסוי הגלגל:

המבצע תקף אך ורק למידות:
🔹 225/70R16
🔹 225/65R17
🔹 245/70R16

⚠️ חשוב לדעת:
❌ לא ניתן לשנות את לוגו המועדון בכיסוי הגלגל או בדגל.
💰 שינויים או התאמות מיוחדות אפשריים בעלות נוספת ובתיאום מול בית העסק.

💳 המחירים כוללים מע"מ
📍הירדן 19, תל מונד.
🛻 ניתן לעשות משלוח עד לבית הלקוח בעלות 70 ש"ח.

🔥 המבצע לחברי המועדון בלבד! 🔥

📲 להזמנות ופרטים:
גלי - 052-2421392

לא לשכוח לציין שהגעתם דרך מבצע מועדון סוזוקי גרנד ויטרה.

אל תפספסו! 😎 🇮🇱🚙💨`,
  },
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
