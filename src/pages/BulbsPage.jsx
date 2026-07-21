import { Link } from 'react-router-dom'
import { useState } from 'react'
import './BulbsPage.css'

const models = {
  five: {
    label: '5 דלתות',
    bulbs: [
      { location: 'פנסים ראשיים - אור נמוך', spec: 'H7', voltage: '12V', watt: '55W', note: 'הלוגן' },
      { location: 'פנסים ראשיים - אור נמוך', spec: 'D2S', voltage: '12V', watt: '35W', note: 'קסנון' },
      { location: 'פנסים ראשיים - אור גבוה', spec: 'HB3', voltage: '12V', watt: '60W', note: '' },
      { location: 'פנסי ערפל קדמיים', spec: 'H11', voltage: '12V', watt: '55W', note: '' },
      { location: 'פנסי איתות', spec: 'WY 21W', voltage: '12V', watt: '21W', note: 'קדמיים/אחוריים' },
      { location: 'פנסי איתות צדדיים', spec: 'WY 5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'פנסי חניה', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'פנסי בלימה/פנסים אחוריים', spec: 'W21/5W', voltage: '12V', watt: '21/5W', note: '' },
      { location: 'תאורת לוחית רישוי', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'אור נסיעה לאחור', spec: 'W21W', voltage: '12V', watt: '21W', note: '' },
      { location: 'פנסי ערפל אחוריים', spec: 'W21W', voltage: '12V', watt: '21W', note: '' },
      { location: 'פנס בלימה מרכזי', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'תאורת דלתות', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'תאורה פנימית', spec: 'W5W', voltage: '12V', watt: '8W', note: 'מנורות קריאה' },
      { location: 'תאורה פנימית', spec: 'W5W', voltage: '12V', watt: '10W', note: 'אור מרכזי' },
      { location: 'תאורה פנימית', spec: 'W5W', voltage: '12V', watt: '10W', note: 'אור אחורי' },
      { location: 'תאור תא מטען', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
    ],
  },
  three: {
    label: '3 דלתות',
    bulbs: [
      { location: 'פנסי ראשיים', spec: 'H4', voltage: '12V', watt: '55/60W', note: '' },
      { location: 'פנסי ערפל קדמיים', spec: 'H11', voltage: '12V', watt: '55W', note: '' },
      { location: 'פנסי איתות קדמיים', spec: 'WY 21W', voltage: '12V', watt: '21W', note: '' },
      { location: 'פנסי איתות אחוריים', spec: 'PY 21W', voltage: '12V', watt: '21W', note: '' },
      { location: 'פנסי איתות צדדיים', spec: 'WY 5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'פנסי חניה', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'פנסי בלימה/פנסים אחוריים', spec: 'P21/5W', voltage: '12V', watt: '21/5W', note: '' },
      { location: 'תאורת לוחית רישוי', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'אור נסיעה לאחור', spec: 'W16W', voltage: '12V', watt: '18W', note: '' },
      { location: 'פנסי ערפל אחוריים', spec: 'P21W', voltage: '12V', watt: '21W', note: '' },
      { location: 'פנס בלימה מרכזי', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
      { location: 'תאורת דלתות', spec: '-', voltage: '12V', watt: '5W', note: '' },
      { location: 'תאורה פנימית', spec: '-', voltage: '12V', watt: '10W', note: '' },
      { location: 'תאור תא מטען', spec: 'W5W', voltage: '12V', watt: '5W', note: '' },
    ],
  },
}

export default function BulbsPage() {
  const [activeModel, setActiveModel] = useState('five')
  const model = models[activeModel]

  return (
    <div className="bulbs-page" dir="rtl">
      <div className="bulbs-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
        <h1>💡 נורות ותאורה</h1>
        <p>מפרט נורות לכל תפקוד ברכב — גרנד ויטרה</p>
      </div>

      <div className="bulbs-container">
        <div className="model-tabs">
          <button
            className={`model-tab${activeModel === 'five' ? ' active' : ''}`}
            onClick={() => setActiveModel('five')}
          >
            🚗 5 דלתות
          </button>
          <button
            className={`model-tab${activeModel === 'three' ? ' active' : ''}`}
            onClick={() => setActiveModel('three')}
          >
            🚙 3 דלתות
          </button>
        </div>

        <div className="bulbs-sections">
          <div className="bulbs-section">
            <h2 className="bulbs-section-title">
              <span>💡</span> טבלת נורות - דגם {model.label}
            </h2>
            <div className="bulbs-table-wrap">
              <table className="bulbs-table">
                <thead>
                  <tr>
                    <th>סוג התאורה</th>
                    <th>דגם הנורה</th>
                    <th>מתח</th>
                    <th>הספק</th>
                    <th>הערות</th>
                  </tr>
                </thead>
                <tbody>
                  {model.bulbs.map((b, i) => (
                    <tr key={`${b.location}-${b.spec}-${i}`}>
                      <td className="location-cell">{b.location}</td>
                      <td><code className="spec-code">{b.spec}</code></td>
                      <td className="dim-cell">{b.voltage}</td>
                      <td><span className="watt-badge">{b.watt}</span></td>
                      <td className="dim-cell">{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
