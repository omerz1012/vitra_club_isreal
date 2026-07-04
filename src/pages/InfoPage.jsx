import { Link } from 'react-router-dom'
import InfoDatabase from '../components/InfoDatabase'
import './InfoPage.css'

export default function InfoPage() {
  return (
    <div className="info-page" dir="rtl">
      <div className="info-page-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>מאגר המידע</h1>
      </div>
      <InfoDatabase />
    </div>
  )
}
