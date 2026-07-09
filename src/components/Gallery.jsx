import { Link } from 'react-router-dom'
import { useGalleryList } from '../hooks/useDriveGallery'
import './Gallery.css'

export default function Gallery() {
  const { status, galleries } = useGalleryList()
  const preview = galleries.slice(0, 6)

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">גלריית <span>הקהילה</span></h2>
        <p className="section-subtitle">תמונות מאירועים, נסיעות שטח ומפגשי חברים</p>

        {status === 'loading' && <p className="gallery-note">טוען תמונות…</p>}

        {status === 'error' && (
          <p className="gallery-note gallery-error">
            לא ניתן לטעון את הגלריה כרגע. נסו שוב מאוחר יותר.
          </p>
        )}

        {status === 'success' && preview.length === 0 && (
          <p className="gallery-note">עדיין אין תמונות בגלריה — בקרוב!</p>
        )}

        {status === 'success' && preview.length > 0 && (
          <>
            <div className="gallery-grid">
              {preview.map((g) => (
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
            <p className="gallery-note">
              <Link to="/gallery">לצפייה בכל האלבומים ←</Link>
            </p>
          </>
        )}
      </div>
    </section>
  )
}
