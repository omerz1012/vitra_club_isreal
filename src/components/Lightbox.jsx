import { useCallback, useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ photos, index, onClose, onIndexChange }) {
  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + photos.length) % photos.length)
  }, [index, photos.length, onIndexChange])

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % photos.length)
  }, [index, photos.length, onIndexChange])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, goNext, goPrev])

  const photo = photos[index]
  if (!photo) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="סגור">×</button>

      <button
        className="lightbox-nav lightbox-nav-prev"
        onClick={(e) => { e.stopPropagation(); goPrev() }}
        aria-label="הקודם"
      >
        ‹
      </button>

      <img
        src={photo.url}
        alt={photo.name}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="lightbox-nav lightbox-nav-next"
        onClick={(e) => { e.stopPropagation(); goNext() }}
        aria-label="הבא"
      >
        ›
      </button>

      <div className="lightbox-counter">{index + 1} / {photos.length}</div>
    </div>
  )
}
