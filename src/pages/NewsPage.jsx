import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { news } from '../data/news'
import Linkify from '../components/Linkify'
import './NewsPage.css'

export default function NewsPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="news-page" dir="rtl">
      <div className="news-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>📰 חדשות</h1>
        <p>עדכונים והודעות מהמועדון</p>
      </div>

      <div className="news-container">
        {news.length === 0 ? (
          <p className="news-empty">אין חדשות כרגע</p>
        ) : (
          <div className="news-list">
            {news.map((n, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`news-card${isOpen ? ' open' : ''}`}
                  onClick={() => n.linkTo ? navigate(n.linkTo) : setOpenIndex(isOpen ? null : i)}
                >
                  {n.image && <img src={n.image} alt={n.title} className="news-image" />}
                  <div className="news-title-row">
                    <h2 className="news-title">{n.title}</h2>
                    {n.date && <span className="news-date">{n.date}</span>}
                  </div>
                  {isOpen && <p className="news-description"><Linkify text={n.description} /></p>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
