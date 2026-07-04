import { Link } from 'react-router-dom'
import './OilsPage.css'

const fluids = [
  {
    icon: '🛢️',
    title: 'שמן מנוע',
    capacity: '4.8L',
    spec: 'SAE 10W-40 חצי סינתטי / 5W-40 סינתטי מלא (C3/API SN/SM)',
    products: ['Castrol TXT 10W-40', 'Super Sint Plus 10W-40', 'Dalkol Ultra 10W-50'],
    mopar: '—',
  },
  {
    icon: '⚙️',
    title: 'שמן גיר ידני',
    capacity: '1.5L',
    spec: 'API GL-4 (SAE 75W-90)',
    products: ['Paz Synt Gear 75W/90', 'Sunol 75W/90', 'ESSO GEAR OIL GP 75W-90'],
    mopar: '05010320AA',
  },
  {
    icon: '🔄',
    title: 'שמן גיר אוטומטי',
    capacity: '2.5L',
    spec: 'SUZUKI ATF 3317 / MOBIL ATF 3309',
    products: ['לפי המלצת יצרן'],
    mopar: 'לפי יצרן',
  },
  {
    icon: '🏎️',
    title: 'שמן גשר קדמי / אחורי',
    capacity: '0.95L / 0.8L',
    spec: 'API GL-5 (SAE 80W-90)',
    products: ['Pazrex 80W-90HD', 'Sunolgear 4090', 'ESSO GEAR OIL GX 80W-90'],
    mopar: '04874468',
  },
  {
    icon: '🌡️',
    title: 'נוזל קירור',
    capacity: '7.3L',
    spec: 'Ethylene Glycol Antifreeze — 50% מדולל במים מזוקקים (LLC / SLLC)',
    products: ['Pazcol 6', 'Radiator Fluid 33', 'Dalkol Coolant'],
    mopar: '04267020AB',
    note: 'הצבע (כחול, ירוק וכד׳) הוא לצורכי זיהוי בלבד ואינו משפיע על התאימות. אין לערבב סוגים שונים.',
  },
  {
    icon: '🛑',
    title: 'נוזל בלמים',
    capacity: 'לפי הצורך',
    spec: 'SAE J1703 או DOT-3',
    products: ['DOT-3 Brake Fluid'],
    mopar: '04318080',
  },
  {
    icon: '🔧',
    title: 'נוזל הגה כוח',
    capacity: 'לפי הצורך',
    spec: 'DEXRON-II / III / IIE',
    products: ['DEXRON-IIE/III variants'],
    mopar: '015010125AA',
  },
]

export default function OilsPage() {
  return (
    <div className="oils-page" dir="rtl">
      <div className="oils-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
        <h1>🛢️ מפרט שמנים ונוזלים</h1>
        <p>סוגי שמנים ונוזלים מומלצים לכל מערכת בגרנד ויטרה</p>
      </div>

      <div className="oils-container">
        <div className="oils-note">
          ⚠️ יש לבדוק מפלסים כשהרכב על משטח ישר. יש לעמוד בכמויות המדויקות ובדרישות המפרט.
        </div>

        <div className="oils-grid">
          {fluids.map((fluid) => (
            <div key={fluid.title} className="oil-card">
              <div className="oil-card-header">
                <span className="oil-icon">{fluid.icon}</span>
                <div>
                  <h3>{fluid.title}</h3>
                  <span className="oil-capacity">נפח: {fluid.capacity}</span>
                </div>
              </div>

              <div className="oil-spec">
                <span className="oil-label">מפרט</span>
                <p>{fluid.spec}</p>
              </div>

              <div className="oil-products">
                <span className="oil-label">מוצרים מומלצים</span>
                <ul>
                  {fluid.products.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              {fluid.mopar && fluid.mopar !== '—' && (
                <div className="oil-mopar">
                  <span className="oil-label">קוד MOPAR</span>
                  <code>{fluid.mopar}</code>
                </div>
              )}

              {fluid.note && (
                <div className="oil-note-inline">⚠️ {fluid.note}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
