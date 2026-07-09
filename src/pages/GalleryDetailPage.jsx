import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGalleryPhotos } from '../hooks/useDriveGallery'
import Lightbox from '../components/Lightbox'
import './GalleryDetailPage.css'

export default function GalleryDetailPage() {
  const { folderId } = useParams()
  const { status, photos } = useGalleryPhotos(folderId)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <div className="gallery-detail-page" dir="rtl">
      <div className="gallery-detail-header">
        <Link to="/gallery" className="back-btn">→ חזרה לגלריה</Link>
        <h1>אלבום תמונות</h1>
      </div>

      <div className="gallery-detail-container">
        {status === 'loading' && <p className="gallery-detail-placeholder">טוען תמונות…</p>}
        {status === 'error' && (
          <p className="gallery-detail-placeholder">
            לא ניתן לטעון את התמונות כרגע. נסו שוב מאוחר יותר.
          </p>
        )}
        {status === 'success' && photos.length === 0 && (
          <p className="gallery-detail-placeholder">אין תמונות באלבום זה.</p>
        )}
        {status === 'success' && photos.length > 0 && (
          <div className="gallery-detail-grid">
            {photos.map((p, i) => (
              <div
                key={p.id}
                className="gallery-detail-photo"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={p.url} alt={p.name} loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </div>
  )
}
