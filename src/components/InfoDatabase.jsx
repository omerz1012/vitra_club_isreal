import { useNavigate } from 'react-router-dom'
import './InfoDatabase.css'

const categories = [
  { icon: '🔧', title: 'לוח טיפולים', desc: 'תוכנית טיפולים מפורטת לפי קילומטראז', route: '/maintenance' },
  { icon: '🛢️', title: 'מפרט שמנים', desc: 'סוגי שמנים מומלצים לכל מערכת ברכב', route: '/information/oils' },
  { icon: '📐', title: 'שרטוטים טכניים', desc: 'תרשימים ושרטוטים של מערכות הרכב', route: '/information/drawing' },
  { icon: '🔩', title: 'מק"טים לחלקים', desc: 'מספרי קטלוג לחלפים מקוריים וחלופיים', route: '/information/parts-numbers' },
  { icon: '💡', title: 'נורות ותאורה', desc: 'מפרט נורות לכל תפקוד ברכב', route: '/information/bulbs' },
  { icon: '📻', title: 'תדרי רדיו', desc: 'תדרים לתקשורת בשטח בין נסיעות שיירה', route: '/information/radio-frequencies' },
  { icon: '🛠️', title: 'מדריכי DIY', desc: 'מדריכים לתיקונים ושיפורים עצמיים', route: '/information/diy' },
  { icon: '🏪', title: 'ספקי חלקים', desc: 'רשימת ספקים מומלצים בכל הארץ', route: '/information/sites-parts' },
  { icon: '📋', title: 'בתי עסק', desc: 'גרז\'ים ובתי עסק מומלצים לגרנד ויטרה', route: '/information/recommended-businesses' },
  { icon: '⭐', title: 'בעלי עסקים מומלצים', desc: 'עסקים של חברי המועדון — שירותים בין חברים', route: '/information/club-businesses' },
  { icon: '🎟️', title: 'קודי קופון', desc: 'הנחות בלעדיות לחברי המועדון', route: '/information/coupons' },
  { icon: '🗺️', title: 'מסלולי שטח', desc: 'מסלולים מומלצים לנסיעות שטח בישראל', route: '/information/off-road' },
  { icon: '🎬', title: 'סרטונים', desc: 'סרטונים נבחרים מהקהילה ועל הרכב', route: '/videos' },
  { icon: '📖', title: 'שאל את החוברת האינטארקטיבי', desc: 'שאל שאלות וקבל תשובות מהחוברת האינטראקטיבית של הקהילה', url: 'https://notebooklm.google.com/notebook/9696a696-65f0-4db1-91de-d671880ca7b4' },
]

export default function InfoDatabase() {
  const navigate = useNavigate()

  const handleCardClick = (e, cat) => {
    if (cat.url) {
      e.preventDefault()
      window.open(cat.url, '_blank', 'noopener,noreferrer')
    } else if (cat.route) {
      e.preventDefault()
      navigate(cat.route)
    }
  }

  return (
    <section className="database-section" id="database">
      <div className="container">
        <h2 className="section-title">מאגר <span>המידע</span></h2>
        <p className="section-subtitle">14 קטגוריות של מידע מקצועי ומקיף לבעלי גרנד ויטרה</p>

        <div className="db-grid">
          {categories.map((cat, i) => (
            <a key={i} href={cat.route || cat.url || '#'} className="db-card" onClick={(e) => handleCardClick(e, cat)}>
              <div className="db-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <span className="db-arrow">←</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
