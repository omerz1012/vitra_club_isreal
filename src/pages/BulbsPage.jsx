import { Link } from 'react-router-dom'
import { useState } from 'react'
import './BulbsPage.css'

const models = {
  five: {
    label: '5 דלתות',
    sections: [
      {
        title: 'פנסים ותאורה קדמית',
        icon: '💡',
        bulbs: [
          { location: 'אור קצר (הלוגן)', spec: 'H7', voltage: '12V', watt: '55W' },
          { location: 'אור קצר (קסנון)', spec: 'D2S', voltage: '12V', watt: '35W' },
          { location: 'אור ארוך', spec: 'HB3', voltage: '12V', watt: '60W' },
          { location: 'ערפל קדמי', spec: 'H11', voltage: '12V', watt: '55W' },
          { location: 'פלאש קדמי', spec: 'WY 21W', voltage: '12V', watt: '21W' },
          { location: 'פלאש צדי', spec: 'WY 5W', voltage: '12V', watt: '5W' },
        ],
      },
      {
        title: 'תאורה אחורית',
        icon: '🔴',
        bulbs: [
          { location: 'בלם / אחורי', spec: 'W21/5W', voltage: '12V', watt: '21/5W' },
          { location: 'ערפל אחורי', spec: 'W21W', voltage: '12V', watt: '21W' },
          { location: 'בלם מרכזי', spec: 'W5W', voltage: '12V', watt: '5W' },
          { location: 'הילוך אחורי', spec: 'W21W', voltage: '12V', watt: '21W' },
          { location: 'פלאש אחורי', spec: 'WY 21W', voltage: '12V', watt: '21W' },
        ],
      },
      {
        title: 'תאורה פנימית ולוחית',
        icon: '🏠',
        bulbs: [
          { location: 'לוחית רישוי', spec: 'W5W', voltage: '12V', watt: '5W' },
          { location: 'תאורת דלת', spec: 'W5W', voltage: '12V', watt: '5W' },
          { location: 'תאורה פנימית', spec: 'W5W', voltage: '12V', watt: '8–10W' },
          { location: 'תא מטען', spec: 'W5W', voltage: '12V', watt: '5W' },
          { location: 'חניה', spec: 'W5W', voltage: '12V', watt: '5W' },
        ],
      },
    ],
  },
  three: {
    label: '3 דלתות',
    sections: [
      {
        title: 'פנסים ותאורה קדמית',
        icon: '💡',
        bulbs: [
          { location: 'פנס ראשי', spec: 'H4', voltage: '12V', watt: '55/60W' },
          { location: 'ערפל קדמי', spec: 'H11', voltage: '12V', watt: '55W' },
          { location: 'פלאש קדמי', spec: 'WY 21W', voltage: '12V', watt: '21W' },
          { location: 'פלאש צדי', spec: 'WY 5W', voltage: '12V', watt: '5W' },
        ],
      },
      {
        title: 'תאורה אחורית',
        icon: '🔴',
        bulbs: [
          { location: 'בלם / אחורי', spec: 'P21/5W', voltage: '12V', watt: '21/5W' },
          { location: 'ערפל אחורי', spec: 'P21W', voltage: '12V', watt: '21W' },
          { location: 'הילוך אחורי', spec: 'W16W', voltage: '12V', watt: '18W' },
          { location: 'בלם מרכזי', spec: 'W5W', voltage: '12V', watt: '5W' },
          { location: 'פלאש אחורי', spec: 'PY 21W', voltage: '12V', watt: '21W' },
        ],
      },
      {
        title: 'תאורה פנימית ולוחית',
        icon: '🏠',
        bulbs: [
          { location: 'חניה', spec: 'W5W', voltage: '12V', watt: '5W' },
          { location: 'לוחית רישוי', spec: 'W5W', voltage: '12V', watt: '5W' },
        ],
      },
    ],
  },
}

export default function BulbsPage() {
  const [activeModel, setActiveModel] = useState('five')
  const model = models[activeModel]

  return (
    <div className="bulbs-page" dir="rtl">
      <div className="bulbs-header">
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
          {model.sections.map((section) => (
            <div key={section.title} className="bulbs-section">
              <h2 className="bulbs-section-title">
                <span>{section.icon}</span> {section.title}
              </h2>
              <div className="bulbs-table-wrap">
                <table className="bulbs-table">
                  <thead>
                    <tr>
                      <th>ואט</th>
                      <th>מתח</th>
                      <th>מוצר / סוג</th>
                      <th>מיקום</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.bulbs.map((b) => (
                      <tr key={b.location}>
                        <td><span className="watt-badge">{b.watt}</span></td>
                        <td className="dim-cell">{b.voltage}</td>
                        <td><code className="spec-code">{b.spec}</code></td>
                        <td className="location-cell">{b.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
