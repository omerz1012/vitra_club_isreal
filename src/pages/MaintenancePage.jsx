import { Link } from 'react-router-dom'
import './MaintenancePage.css'

const conditionCodes = [
  { code: 'A', desc: 'נסיעות קצרות מרובות' },
  { code: 'B', desc: 'נסיעה קשה בשטח / בוץ' },
  { code: 'C', desc: 'נסיעה בדרכים מאובקות' },
  { code: 'D', desc: 'קור קיצוני או כבישים עם מלח' },
  { code: 'E', desc: 'נסיעות קצרות תכופות בקור קיצוני' },
  { code: 'F', desc: 'שימוש בדלק עם עופרת' },
  { code: 'G', desc: 'לא רלוונטי' },
  { code: 'H', desc: 'גרירת נגרר (אם מצויד)' },
]

const notations = [
  { symbol: 'I', meaning: 'בדוק ותקן / החלף לפי הצורך' },
  { symbol: 'R', meaning: 'החלף או שנה' },
  { symbol: 'T', meaning: 'הדק למומנט הנדרש' },
  { symbol: '*1', meaning: 'בדיקה תכופה יותר בנסיעה מאובקת' },
  { symbol: '*2', meaning: 'ניקוי תכוף יותר אם זרימת מזגן פוחתת' },
]

const scenarios = [
  {
    title: 'נסיעה בדיונות',
    codes: 'B + C',
    icon: '🏜️',
    items: [
      { task: 'פילטר אוויר', action: 'I', interval: 'כל 2,500 ק"מ' },
      { task: 'פילטר אוויר', action: 'R', interval: 'כל 30,000 ק"מ או 24 חודש' },
      { task: 'בורגי / אומי מתלה', action: 'I + T', interval: 'כל 9,000 ק"מ או 12 חודש' },
      { task: 'ציריות', action: 'I', interval: 'כל 9,000 ק"מ או 12 חודש' },
    ],
  },
  {
    title: 'נסיעה בסלעים',
    codes: 'B + H',
    icon: '🪨',
    items: [
      { task: 'ציריות / מגני אבק', action: 'I', interval: 'כל 9,000 ק"מ או 12 חודש' },
      { task: 'בורגי / אומי מתלה', action: 'T', interval: 'כל 9,000 ק"מ או 12 חודש' },
      { task: 'שמן דיפרנציאל', action: 'R', interval: 'כל 30,000 ק"מ או 24 חודש' },
    ],
  },
  {
    title: 'נסיעה בבוץ ואבק',
    codes: 'B + C',
    icon: '🌧️',
    items: [
      { task: 'פילטר אוויר', action: 'I', interval: 'כל 2,500 ק"מ' },
      { task: 'תושבות מערכת פליטה', action: 'I', interval: 'כל 15,000 ק"מ או 12 חודש' },
      { task: 'גלגלים / מסבים', action: 'I', interval: 'כל 15,000 ק"מ או 12 חודש' },
    ],
  },
]

export default function MaintenancePage() {
  return (
    <div className="maintenance-page" dir="rtl">
      <div className="maintenance-header">
        <h1>🧰 לוח טיפולים ותחזוקה</h1>
        <p>מועדון גרנד ויטרה ישראל — מבוסס על המלצות יצרן לנסיעה בתנאים קשים</p>
      </div>

      <div className="maintenance-container">

        {/* How to read */}
        <section className="m-section">
          <h2 className="m-section-title">איך לקרוא את לוח התחזוקה</h2>
          <div className="how-to-grid">
            <div className="how-to-card">
              <div className="how-to-icon">🏷️</div>
              <div>
                <h3>סיווג הקודים</h3>
                <p>כל משימת תחזוקה מקושרת לקודים של תנאי נהיגה קשים שמתאימים לה. למשל, קוד B אומר שהמשימה נדרשת אם אתה נוהג בשטח בוצי.</p>
              </div>
            </div>
            <div className="how-to-card">
              <div className="how-to-icon">📋</div>
              <div>
                <h3>משימות תחזוקה</h3>
                <p>מוצגות בטבלה תחת מרווחי תחזוקה — הזמן או הקילומטרים שצריך לעבור בין תחזוקות, תלוי איזה מגיע קודם.</p>
              </div>
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="m-section">
          <h2 className="m-section-title">למי מיועד לוח התחזוקה?</h2>
          <div className="audience-card">
            <p className="audience-intro">לוח זה מיועד במיוחד לבעלי רכבים שעושים שטח באופן קבוע או נוהגים בתנאים קשים:</p>
            <ul className="audience-list">
              <li>🏜️ נהיגה בשטח (דרכים בוציות או חוליות)</li>
              <li>🚛 גרירה של נגרר</li>
              <li>💨 נסיעה קבועה בדרכים מאובקות</li>
              <li>🌡️ נסיעה במזג אוויר קיצוני (קר במיוחד או חם)</li>
            </ul>
          </div>
        </section>

        <div className="maintenance-note">
          ⚠️ המרווחים מחושבים לפי קילומטראז' או זמן — הגורם המוקדם קובע.
        </div>

        {/* Condition Codes */}
        <section className="m-section">
          <h2 className="m-section-title">קודי תנאי נסיעה קשים</h2>
          <div className="code-grid">
            {conditionCodes.map(({ code, desc }) => (
              <div key={code} className="code-card">
                <span className="code-badge">{code}</span>
                <span className="code-desc">{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Notation Legend */}
        <section className="m-section">
          <h2 className="m-section-title">סימוני פעולות</h2>
          <div className="notation-grid">
            {notations.map(({ symbol, meaning }) => (
              <div key={symbol} className="notation-card">
                <span className="notation-symbol">{symbol}</span>
                <span className="notation-meaning">{meaning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Driving Scenarios */}
        <section className="m-section">
          <h2 className="m-section-title">טיפולים לפי סוג שטח</h2>
          <div className="scenarios-grid">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="scenario-card">
                <div className="scenario-header">
                  <span className="scenario-icon">{scenario.icon}</span>
                  <div>
                    <h3>{scenario.title}</h3>
                    <span className="scenario-codes">קודים: {scenario.codes}</span>
                  </div>
                </div>
                <table className="scenario-table">
                  <thead>
                    <tr>
                      <th>פעולה</th>
                      <th>מרווח</th>
                      <th>רכיב</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scenario.items.map((item, i) => (
                      <tr key={i}>
                        <td><span className="action-badge">{item.action}</span></td>
                        <td className="interval-cell">{item.interval}</td>
                        <td>{item.task}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
