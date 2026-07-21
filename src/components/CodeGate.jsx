import { useEffect, useState } from 'react'
import { PAGE_ACCESS_CODE } from '../lib/constants'
import './CodeGate.css'

const STORAGE_KEY = 'vitra_page_access_unlocked'

export default function CodeGate({ children }) {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(STORAGE_KEY) === 'true')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (unlocked) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prevOverflow }
  }, [unlocked])

  if (unlocked) return children

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim().toUpperCase() === PAGE_ACCESS_CODE.toUpperCase()) {
      localStorage.setItem(STORAGE_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  return (
    <div className="code-gate-overlay" dir="rtl">
      <form className="code-gate" onSubmit={handleSubmit}>
        <p className="code-gate-text">הדף מיועד לחברי מועדון בלבד</p>
        <p className="code-gate-subtext">הזן את קוד המועדון כדי להמשיך</p>
        <input
          className="code-gate-input"
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false) }}
          placeholder="קוד מועדון"
          autoFocus
        />
        {error && <p className="code-gate-error">קוד שגוי, נסה שוב</p>}
        <button className="code-gate-btn" type="submit">כניסה</button>
      </form>
    </div>
  )
}
