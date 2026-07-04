import { Link } from 'react-router-dom'
import './MaintenancePage.css'

const conditionCodes = [
  { code: 'A', desc: 'נהיגה מרובה של נסיעות קצרות' },
  { code: 'B', desc: 'נהיגה בשטח קשה ו/או דרכים בוציות' },
  { code: 'C', desc: 'נהיגה בדרכים מאובקות' },
  { code: 'D', desc: 'נהיגה במזג אוויר קר במיוחד או על דרכים עם מלח' },
  { code: 'E', desc: 'נסיעות קצרות תכופות במזג אוויר קר מאוד' },
  { code: 'F', desc: 'שימוש בדלק מועשר בעופרת' },
  { code: 'G', desc: 'לא בשימוש' },
  { code: 'H', desc: 'גרירת נגרר (אם הרכב מותאם לכך)' },
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
        <Link to="/" className="back-btn">→ חזרה לדף הבית</Link>
        <h1>🧰 לוח טיפולים ותחזוקה</h1>
        <p>מועדון גרנד ויטרה ישראל — מבוסס על המלצות יצרן לנסיעה בתנאים קשים</p>
      </div>

      <div className="maintenance-container">

        {/* How to read */}
        <section className="m-section">
          <h2 className="m-section-title">איך לקרוא את לוח התחזוקה</h2>
          <div className="how-to-grid">
            <div className="how-to-card">
              <div className="how-to-icon">1️⃣</div>
              <div>
                <h3>סיווג הקודים</h3>
                <p>כל משימת תחזוקה מקושרת לקודים של תנאי נהיגה קשים שמתאימים לה. למשל, קוד B אומר שהמשימה נדרשת אם אתה נוהג בשטח בוצי.</p>
              </div>
            </div>
            <div className="how-to-card">
              <div className="how-to-icon">2️⃣</div>
              <div>
                <h3>משימות תחזוקה</h3>
                <p>מוצגות בטבלה תחת שם הרכיב או הפעולה הנדרשת.</p>
              </div>
            </div>
            <div className="how-to-card">
              <div className="how-to-icon">3️⃣</div>
              <div>
                <h3>מרווחי תחזוקה</h3>
                <p>הזמן או הקילומטרים שצריך לעבור בין תחזוקות, תלוי איזה מגיע קודם.</p>
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
          <h2 className="m-section-title">מקרא לקודים בתנאי נהיגה קשים</h2>
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

        {/* Full maintenance board */}
        <section className="m-section">
          <h2 className="m-section-title">לוח התחזוקה המלא</h2>
          <div className="board-image-wrap">
            <img src="/mainatance_board_1.png" alt="לוח תחזוקה בתנאי נהיגה קשים - טבלה 1" className="board-image" />
          </div>
          <div className="board-image-wrap">
            <img src="/mainatance_board_2.png" alt="לוח תחזוקה בתנאי נהיגה קשים - טבלה 2" className="board-image" />
          </div>
        </section>

        {/* Driving Scenarios */}
        <section className="m-section">
          <h2 className="m-section-title">דוגמאות לתחזוקה לפי תנאי נהיגה קשים</h2>
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
