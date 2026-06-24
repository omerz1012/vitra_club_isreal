import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CouponsPage.css'

const coupons = [
  {
    business: 'שטח אקסטרים',
    type: 'ציוד, אביזרים וקמפינג',
    icon: '🏕️',
    code: 'GVTEAM10',
    discount: '10%',
    description: 'הנחה של 10% על כל האתר',
    condition: 'בכפוף להצגת כרטיס חבר מועדון בלבד',
    location: 'דרך העצמאות 16, יהוד',
    contact: 'דור | 054-5057868',
  },
]

function CouponCard({ coupon }) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(coupon.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="coupon-card">
      <div className="coupon-left">
        <div className="coupon-icon">{coupon.icon}</div>
        <div className="coupon-info">
          <h3>{coupon.business}</h3>
          <span className="coupon-type">{coupon.type}</span>
          <p className="coupon-desc">{coupon.description}</p>
          {coupon.location && <p className="coupon-meta">📍 {coupon.location}</p>}
          {coupon.contact && <p className="coupon-meta">📞 {coupon.contact}</p>}
        </div>
      </div>

      <div className="coupon-right">
        <div className="coupon-discount">{coupon.discount}</div>
        <button className="coupon-code-btn" onClick={copyCode}>
          <span className="code-text">{coupon.code}</span>
          <span className="copy-label">{copied ? '✓ הועתק' : 'העתק קוד'}</span>
        </button>
        {coupon.condition && (
          <p className="coupon-condition">⚠️ {coupon.condition}</p>
        )}
      </div>
    </div>
  )
}

export default function CouponsPage() {
  return (
    <div className="coupons-page" dir="rtl">
      <div className="coupons-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🎟️ קודי קופון</h1>
        <p>הנחות בלעדיות לחברי מועדון גרנד ויטרה ישראל</p>
      </div>

      <div className="coupons-container">
        <div className="coupons-note">
          ℹ️ ההנחות מיועדות לחברי המועדון בלבד. יש להציג כרטיס חבר בעת המימוש.
        </div>

        <div className="coupons-list">
          {coupons.map((c) => (
            <CouponCard key={c.code} coupon={c} />
          ))}
        </div>
      </div>
    </div>
  )
}
