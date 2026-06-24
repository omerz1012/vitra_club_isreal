import { Link } from 'react-router-dom'
import './ClubBusinessesPage.css'

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1_HzZhsbqQ741iu75BB6cT3yg_a7waqni9LBXqVkICPw/edit?usp=drivesdk'

export default function ClubBusinessesPage() {
  return (
    <div className="club-biz-page" dir="rtl">
      <div className="club-biz-header">
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🤝 עסקים של חברי המועדון</h1>
        <p>פלטפורמת קישור בין יזמי חברים לחברים המחפשים שירותים</p>
      </div>

      <div className="club-biz-container">

        <div className="disclaimer-card">
          <div className="disclaimer-icon">⚠️</div>
          <div className="disclaimer-body">
            <h2>כתב ויתור</h2>
            <p>
              המועדון מבהיר כי אין לו <strong>שום נגיעה או אחריות לשירותים</strong> המופיעים ברשימה,
              לרבות איכות, תמחור, אחריות או תלונות. הלוח משמש כנקודת חיבור בלבד בין יזמי חברים
              לחברים המחפשים שירותים.
            </p>
            <p className="disclaimer-rule">
              🚫 חברים מתבקשים שלא לפרסם תכנים הקשורים לשירותים בקבוצות המועדון — לא ביקורת ולא המלצות.
            </p>
          </div>
        </div>

        <div className="sheet-card">
          <div className="sheet-icon">📊</div>
          <div className="sheet-body">
            <h2>רשימת העסקים המלאה</h2>
            <p>הרשימה המלאה של עסקי חברי המועדון מנוהלת בגיליון Google Sheets ומתעדכנת באופן שוטף.</p>
            <a
              href={SHEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sheet-btn"
            >
              📋 פתח את רשימת העסקים
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
