import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './DisclaimerModal.css'

export default function DisclaimerModal({ onApprove }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prevOverflow }
  }, [])

  return createPortal(
    <div className="disclaimer-modal-overlay">
      <div className="disclaimer-modal" dir="rtl">
        <p className="disclaimer-modal-text">המועדון מסיר כל אחריות</p>
        <p className="disclaimer-modal-subtext">
          המידע והמדריכים בדף זה מוצגים לצורך עזרה בלבד. כל שימוש בהם הינו באחריותך המלאה.
        </p>
        <button className="disclaimer-modal-btn" onClick={onApprove}>
          אני מאשר/ת
        </button>
      </div>
    </div>,
    document.body
  )
}
