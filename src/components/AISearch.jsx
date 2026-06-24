import { useState } from 'react'
import './AISearch.css'

const suggestions = [
  'איזה שמן מנוע מומלץ לגרנד ויטרה 2.0?',
  'מתי צריך להחליף את רצועת התזמון?',
  'מהו לחץ האוויר המומלץ לצמיגים?',
  'איך מוסיפים ציוד שטח לגרנד ויטרה?',
]

export default function AISearch() {
  const [query, setQuery] = useState('')

  return (
    <section className="ai-section" id="ai">
      <div className="container">
        <div className="ai-wrapper">
          <div className="ai-badge">✨ AI-Powered</div>
          <h2 className="section-title">חיפוש <span>חכם</span></h2>
          <p className="section-subtitle">שאלו כל שאלה על הגרנד ויטרה שלכם וקבלו תשובה מדויקת מהמאגר</p>

          <div className="ai-search-box">
            <div className="ai-search-input">
              <span className="ai-search-icon">🔍</span>
              <input
                type="text"
                placeholder="שאל שאלה על הרכב שלך..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                dir="rtl"
              />
              <button className="ai-search-btn">חפש</button>
            </div>
          </div>

          <div className="ai-suggestions">
            <span className="suggestions-label">שאלות נפוצות:</span>
            {suggestions.map((s, i) => (
              <button key={i} className="suggestion-chip" onClick={() => setQuery(s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="ai-notebook-link">
            <a href="#" className="btn-secondary">
              🤖 פתחו את ה-AI Notebook לתשובות מפורטות
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
