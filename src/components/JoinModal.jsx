import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './JoinModal.css'

const WHATSAPP_LINK = 'https://chat.whatsapp.com/EPIdirmjk9LJn70j7nINOC?s=cl&p=a&ilr=0'

export default function JoinModal({ onClose }) {
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prevOverflow }
  }, [])

  return createPortal(
    <div className="join-modal-overlay" onClick={onClose}>
      <div className="join-modal" onClick={(e) => e.stopPropagation()}>
        <button className="join-modal-close" onClick={onClose} aria-label="סגירה">✕</button>

        <p className="join-modal-text">ההצטרפות לבעלי גרנד ויטרה 2006-2015 בלבד.</p>

        <label className="join-modal-checkbox">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
          <span>האם בבעלותך סוזוקי גרנד ויטרה 2006-2015 ?</span>
        </label>

        <a
          href={confirmed ? WHATSAPP_LINK : undefined}
          target="_blank"
          rel="noreferrer"
          className={`join-modal-btn${confirmed ? '' : ' disabled'}`}
          aria-disabled={!confirmed}
          onClick={(e) => { if (!confirmed) e.preventDefault() }}
        >
          הצטרפו לקבוצת הוואטסאפ
        </a>
      </div>
    </div>,
    document.body
  )
}
