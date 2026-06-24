import './Gallery.css'

const photos = [
  { emoji: '🏔️', bg: 'linear-gradient(135deg,#1a3a2a,#2d5a3d)', caption: 'גלבוע 2024', label: 'נסיעת שטח' },
  { emoji: '🚙', bg: 'linear-gradient(135deg,#1e2d1e,#3a5c2e)', caption: 'מדבר יהודה', label: 'שטח פתוח' },
  { emoji: '❄️', bg: 'linear-gradient(135deg,#1a2535,#2a4060)', caption: 'חרמון החורף', label: 'נסיעה בשלג' },
  { emoji: '🌄', bg: 'linear-gradient(135deg,#2a1a0e,#5c3a1e)', caption: 'שיירת הנגב', label: 'שיירה בנגב' },
  { emoji: '🔧', bg: 'linear-gradient(135deg,#1a1a2e,#2e2e4e)', caption: 'כינוס חברים', label: 'מפגש קהילה' },
  { emoji: '🌊', bg: 'linear-gradient(135deg,#0e2a3a,#1e5070)', caption: 'נסיעת חוף', label: 'שטח חופי' },
]

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">גלריית <span>הקהילה</span></h2>
        <p className="section-subtitle">תמונות מאירועים, נסיעות שטח ומפגשי חברים</p>

        <div className="gallery-grid">
          {photos.map((p, i) => (
            <div key={i} className="gallery-item gallery-placeholder" style={{ background: p.bg }}>
              <div className="gallery-placeholder-inner">
                <span className="gallery-emoji">{p.emoji}</span>
                <span className="gallery-label">{p.label}</span>
              </div>
              <div className="gallery-caption">{p.caption}</div>
            </div>
          ))}
        </div>

        <p className="gallery-note">📸 תמונות הקהילה יועלו בקרוב — שלחו תמונות מהנסיעות שלכם!</p>
      </div>
    </section>
  )
}
