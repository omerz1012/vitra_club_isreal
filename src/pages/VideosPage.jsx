import './VideosPage.css'

const categories = [
  {
    name: 'טיולים',
    videos: [
      { id: 'eZbcYH9nM7c', title: 'טיול מועדון חוצה דרום סוזוקי גרנד ויטרה - חלק ראשון מעלה יאיר' },
    ],
  },
  {
    name: 'הסבר על הרכב',
    videos: [
      { id: '03iLQhNhn50', title: 'סרטון הסברה על מכלולי הרכב עם המכונאי טל צופי' },
      { id: 'SAKQCsD8Roc', title: 'כמה אוויר להוריד בשטח' },
      { id: 'Vhzzl7kUwaA', title: 'מערכת טראקשן - בקרת משיכה' },
      { id: 'joLBAsEqpy0', title: 'גרנד ויטרה עם נעילה אחורית' },
    ],
  },
  {
    name: 'עשה זאת בעצמך - טיפולים לרכב DIY',
    videos: [
      { id: 'MFjxIiBePr0', title: 'ליטוש פנסים לרכב' },
      { id: 'zP9YpCt1rC4', title: 'חיתוך טמבון' },
      { id: '3jlMcnTMb5I', title: 'החלפת צלחות ורפידות' },
      { id: '3j1ai4hA5hM', title: 'החלפת מוטות מקשרים' },
      { id: 'XTyI8g9BZDc', title: 'החלפת פילטר שמן מנוע 2.4' },
      { id: 'H8eHUnI4U_Y', title: 'החלפת נאבה' },
    ],
  },
]

export default function VideosPage() {
  return (
    <div className="videos-page">
      <div className="videos-page-header">
        <h1>סרטוני <span>גרנד ויטרה</span></h1>
        <p>כל הסרטונים מחולקים לפי קטגוריות</p>
      </div>

      <div className="container">
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
