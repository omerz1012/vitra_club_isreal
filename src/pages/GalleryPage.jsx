import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'
import './GalleryPage.css'

export default function GalleryPage() {
  return (
    <div className="gallery-page" dir="rtl">
      <div className="gallery-page-header">
        <h1>גלריית הקהילה</h1>
      </div>
      <Gallery />
    </div>
  )
}
