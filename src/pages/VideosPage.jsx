import { Link } from 'react-router-dom'
import './VideosPage.css'

const categories = [
  {
    name: 'טיולים',
    videos: [
      { id: 'eZbcYH9nM7c', title: 'נסיעת שטח - גרנד ויטרה' },
    ],
  },
  {
    name: 'הסבר רכב',
    videos: [
      { id: '03iLQhNhn50', title: 'הסבר על הרכב - גרנד ויטרה' },
      { id: 'joLBAsEqpy0', title: 'הסבר על הרכב - חלק ב' },
      { id: 'Vhzzl7kUwaA', title: 'הסבר על הרכב - חלק ג' },
    ],
  },
]

export default function VideosPage() {
  return (
    <div className="videos-page">
      <div className="container">
        <div className="videos-page-header">
          <Link to="/" className="back-link">← חזרה לעמוד הבית</Link>
          <h1>סרטוני <span>גרנד ויטרה</span></h1>
          <p>כל הסרטונים מחולקים לפי קטגוריות</p>
        </div>

        {categories.map((cat) => (
          <div key={cat.name} className="video-category-section">
            <h2 className="category-heading">{cat.name}</h2>
            <div className="videos-page-grid">
              {cat.videos.map((v) => (
                <a
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="video-card"
                >
                  <div className="video-thumb">
                    <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
                    <div className="video-play">▶</div>
                  </div>
                  <div className="video-info">
                    <h3>{v.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
