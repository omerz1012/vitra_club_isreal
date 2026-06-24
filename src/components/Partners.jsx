import './Partners.css'

const partners = [
  { name: 'G-Road', emoji: '🏕️', desc: 'ציוד שטח וקמפינג' },
  { name: 'רדיאטור רחובות', emoji: '🔧', desc: 'שירות ותיקון רדיאטורים' },
  { name: 'פלדה ישיר', emoji: '⚙️', desc: 'חלפים וחלקי מתכת' },
  { name: 'זיל ישראל', emoji: '🛞', desc: 'ספק צמיגי שטח' },
]

export default function Partners() {
  return (
    <section className="partners-section" id="join">
      <div className="container">
        <h2 className="section-title">שותפים <span>עסקיים</span></h2>
        <p className="section-subtitle">עסקים מומלצים לחברי הקהילה</p>

        <div className="partners-grid">
          {partners.map((p, i) => (
            <div key={i} className="partner-card">
              <div className="partner-emoji">{p.emoji}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="join-banner">
          <div className="join-content">
            <h2>מוכנים להצטרף לקהילה?</h2>
            <p>הצטרפו לאלפי בעלי גרנד ויטרה בישראל וקבלו גישה למאגר המידע המלא</p>
            <div className="join-buttons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="btn-primary">
                📘 הצטרפו לפייסבוק
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="btn-whatsapp">
                💬 קבוצת וואטסאפ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
