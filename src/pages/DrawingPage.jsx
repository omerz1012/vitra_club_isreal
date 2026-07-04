import { Link } from 'react-router-dom'
import './DrawingPage.css'

const sections = [
  {
    title: 'מנוע 2.0',
    items: [
      { label: 'רכיבי מערכת מים 2.0', slug: 'water-system-2-0' },
      { label: 'צינורות קירור מצערת מנוע 2.0', slug: 'throttle-cooling-pipes-2-0' },
      { label: 'אטם מכסה שסתומים 2.0', slug: 'valve-cover-gasket-2-0' },
      { label: 'תיבת הילוכים \\ גיר - מקט"ים לרענון גיר 2.0', slug: 'gearbox-parts-2-0' },
    ],
  },
  {
    title: 'מנוע 2.4',
    items: [
      { label: 'מערכת קירור מנוע 2.4', slug: 'cooling-system-2-4' },
      { label: 'צינורות קירור מצערת מנוע 2.4', slug: 'throttle-cooling-pipes-2-4' },
      { label: 'אטם מכסה שסתומים 2.4', slug: 'valve-cover-gasket-2-4' },
    ],
  },
]

const standalone = [
  { label: 'הגבהות מומלצות', slug: 'recommended-lifts' },
  { label: 'מערכות שמן הגהה', slug: 'steering-oil-systems' },
  { label: 'פס גגון', slug: 'roof-rack-bar' },
  { label: 'רצועת אביזרים', slug: 'accessories-belt' },
]

export default function DrawingPage() {
  return (
    <div className="drawing-page" dir="rtl">
      <div className="drawing-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
        <h1>📐 שרטוטים טכניים</h1>
        <p>תרשימים ושרטוטים של מערכות הרכב</p>
      </div>

      <div className="drawing-container">
        {sections.map((section) => (
          <div key={section.title} className="drawing-section">
            <h2 className="drawing-section-title">{section.title}</h2>
            <div className="drawing-links">
              {section.items.map((item) => (
                <Link
                  key={item.slug}
                  to={`/information/drawing/${item.slug}`}
                  className="drawing-link-card"
                >
                  <span>{item.label}</span>
                  <span className="drawing-link-arrow">←</span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="drawing-section">
          <h2 className="drawing-section-title">נושאים נוספים</h2>
          <div className="drawing-links">
            {standalone.map((item) => (
              <Link
                key={item.slug}
                to={`/information/drawing/${item.slug}`}
                className="drawing-link-card"
              >
                <span>{item.label}</span>
                <span className="drawing-link-arrow">←</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
