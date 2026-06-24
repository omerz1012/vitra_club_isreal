import { Link } from 'react-router-dom'
import './Videos.css'

const videos = [
  {
    title: 'נסיעת שטח - גרנד ויטרה',
    id: 'eZbcYH9nM7c',
    category: 'טיולים',
  },
  {
    title: 'הסבר על הרכב - גרנד ויטרה',
    id: '03iLQhNhn50',
    category: 'הסבר רכב',
  },
]

export default function Videos() {
  return (
    <section className="videos-section" id="videos">
      <div className="container">
        <h2 className="section-title">סרטוני <span>הדרכה</span></h2>
        <p className="section-subtitle">מדריכים מקצועיים, טיפים מהשטח ותיעוד אירועי הקהילה</p>

        <div className="videos-grid">
          {videos.map((v, i) => (
            <a
              key={i}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noreferrer"
              className="video-card"
            >
              <div className="video-thumb">
                <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
                <div className="video-play">▶</div>
                <span className="video-category">{v.category}</span>
              </div>
              <div className="video-info">
                <h3>{v.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="videos-cta">
          <Link to="/videos" className="btn-secondary">
            עוד סרטונים →
          </Link>
        </div>
      </div>
    </section>
  )
}
