import { useState } from 'react'
import { Link } from 'react-router-dom'
import './DealsPage.css'

const deals = []

export default function DealsPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  const copyCode = (index, code) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="deals-page" dir="rtl">
      <div className="deals-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🏷️ מבצעים</h1>
        <p>מבצעים בלעדיים לחברי המועדון</p>
      </div>

      <div className="deals-container">
        {deals.length === 0 ? (
          <p className="deals-empty">אין מבצעי מועדון כרגע</p>
        ) : (
          <div className="deals-list">
            {deals.map((d, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`deal-card${isOpen ? ' open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <img src={d.image} alt={d.title} className="deal-image" />
                  <div className="deal-title-row">
                    <h2 className="deal-title">{d.title}</h2>
                    {d.code && (
                      <button
                        className="deal-code-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          copyCode(i, d.code)
                        }}
                      >
                        <span className="deal-code-text">{d.code}</span>
                        <span className="deal-copy-label">{copiedIndex === i ? '✓ הועתק' : 'העתק קוד'}</span>
                      </button>
                    )}
                  </div>
                  {isOpen && <p className="deal-description">{d.description}</p>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
