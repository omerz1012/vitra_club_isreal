import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CouponsPage.css'

const coupons = [
  {
    business: 'שטח אקסטרים',
    type: 'ציוד, אביזרים וקמפינג',
    image: '/שטח_אקסטרים_לוגו.png',
    website: 'https://extremeoffroad.co.il/',
    code: 'GVTEAM10',
    discount: '10%',
    description: 'הנחה של 10% על כל האתר',
    condition: 'בכפוף להצגת כרטיס חבר מועדון בלבד',
    location: 'דרך העצמאות 16, יהוד',
    contact: 'דור | 054-5057868',
  },
  {
    business: 'First Car 4X4',
    type: 'ציוד ואביזרים',
    image: '/first_car_logo.avif',
    website: 'https://www.firstcar4x4.com/',
    code: 'SUZUKIFC14',
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
        {coupon.image ? (
          <img className="coupon-logo" src={coupon.image} alt={coupon.business} />
        ) : (
          <div className="coupon-icon">{coupon.icon}</div>
        )}
        <div className="coupon-info">
          <h3>{coupon.business}</h3>
          <span className="coupon-type">{coupon.type}</span>
          {coupon.description && <p className="coupon-desc">{coupon.description}</p>}
          {coupon.website && (
            <p className="coupon-meta">
              🌐 <a href={coupon.website} target="_blank" rel="noopener noreferrer">{coupon.website}</a>
            </p>
          )}
          {coupon.location && <p className="coupon-meta">📍 {coupon.location}</p>}
          {coupon.contact && <p className="coupon-meta">📞 {coupon.contact}</p>}
        </div>
      </div>

      <div className="coupon-right">
        {coupon.discount && <div className="coupon-discount">{coupon.discount}</div>}
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
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
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
