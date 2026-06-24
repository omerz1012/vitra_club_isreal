import { Link } from 'react-router-dom'
import './SitesPartsPage.css'

const suppliers = [
  {
    name: 'burjauto.com',
    url: 'https://burjauto.com',
    pros: ['מחירים טובים', 'שירות מהיר'],
    cons: ['בעיות מלאי', 'פריטים נושרים מהמשלוח ללא התראה'],
    rating: 3,
  },
  {
    name: 'amayama.com',
    url: 'https://amayama.com',
    pros: ['מחירים טובים', 'שירות לקוחות טוב'],
    cons: ['זמני אספקה ארוכים', 'משלוח דואר יפן לוקח כ־6 חודשים (אפשרות EMS זמינה)'],
    rating: 4,
  },
  {
    name: 'en.impex-jp.com',
    url: 'https://en.impex-jp.com',
    pros: ['מלאי גדול'],
    cons: ['שירות ירוד', 'עיכובים ארוכים בעיבוד', 'דמי משלוח מופיעים בסוף עם עמלות מפתיעות'],
    rating: 2,
  },
  {
    name: 'partsouq.com',
    url: 'https://partsouq.com',
    pros: ['שירות מהיר מאוד'],
    cons: ['משלוח נגבה על כל פריט בנפרד'],
    rating: 3,
  },
  {
    name: 'megazip.net',
    url: 'https://megazip.net',
    pros: ['שירות לקוחות טוב'],
    cons: ['מחירים גבוהים'],
    rating: 3,
  },
]

function Stars({ count }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

export default function SitesPartsPage() {
  return (
    <div className="sites-page" dir="rtl">
      <div className="sites-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🔩 ספקי חלקים</h1>
        <p>אתרי חלקים מומלצים לגרנד ויטרה — מניסיון חברי הקהילה</p>
      </div>

      <div className="sites-container">
        <div className="sites-note">
          ℹ️ המידע מבוסס על ניסיון חברי מועדון גרנד ויטרה ישראל. מחירים וזמינות משתנים — מומלץ להשוות בין האתרים לפני הזמנה.
        </div>

        <div className="suppliers-grid">
          {suppliers.map((s) => (
            <div key={s.name} className="supplier-card">
              <div className="supplier-header">
                <div>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="supplier-name">
                    🌐 {s.name}
                  </a>
                  <Stars count={s.rating} />
                </div>
              </div>

              <div className="supplier-body">
                <div className="pros-cons">
                  <div className="pros">
                    <span className="pros-label">✅ יתרונות</span>
                    <ul>
                      {s.pros.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                  <div className="cons">
                    <span className="cons-label">⚠️ חסרונות</span>
                    <ul>
                      {s.cons.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
