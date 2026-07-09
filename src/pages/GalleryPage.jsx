import { Link } from 'react-router-dom'
import { useGalleryList } from '../hooks/useDriveGallery'
import './GalleryPage.css'
import '../components/Gallery.css'

export default function GalleryPage() {
  const { status, galleries } = useGalleryList()

  return (
    <div className="gallery-page" dir="rtl">
      <div className="gallery-page-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>גלריית הקהילה</h1>
      </div>

      <div className="container">
        {status === 'loading' && <p className="gallery-note">טוען אלבומים…</p>}
        {status === 'error' && (
          <p className="gallery-note gallery-error">
            לא ניתן לטעון את הגלריה כרגע. נסו שוב מאוחר יותר.
          </p>
        )}
        {status === 'success' && galleries.length === 0 && (
          <p className="gallery-note">עדיין אין אלבומים בגלריה.</p>
        )}
        {status === 'success' && galleries.length > 0 && (
          <div className="gallery-grid">
            {galleries.map((g) => (
              <Link key={g.id} to={`/gallery/${g.id}`} className="gallery-item">
                {g.coverUrl ? (
                  <img src={g.coverUrl} alt={g.name} loading="lazy" />
                ) : (
                  <div className="gallery-item-empty" />
                )}
                <div className="gallery-caption">{g.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
