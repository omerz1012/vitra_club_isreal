import { Link } from 'react-router-dom'
import './RadioPage.css'

const americanFRS = [
  { ch: 1,  freq: '462.5625' },
  { ch: 2,  freq: '462.5875' },
  { ch: 3,  freq: '462.6125' },
  { ch: 4,  freq: '462.6375' },
  { ch: 5,  freq: '462.6625' },
  { ch: 6,  freq: '462.6875' },
  { ch: 7,  freq: '462.7125' },
  { ch: 8,  freq: '462.7375' },
  { ch: 9,  freq: '467.5625' },
  { ch: 10, freq: '467.5875' },
  { ch: 11, freq: '467.6125' },
  { ch: 12, freq: '467.6375' },
  { ch: 13, freq: '467.6625' },
  { ch: 14, freq: '467.6875' },
  { ch: 15, freq: '467.7125' },
]

const europeanFRS = [
  { ch: 1, freq: '446.00625' },
  { ch: 2, freq: '446.01875' },
  { ch: 3, freq: '446.03125' },
  { ch: 4, freq: '446.04375' },
  { ch: 5, freq: '446.05625' },
  { ch: 6, freq: '446.06875' },
  { ch: 7, freq: '446.08125' },
  { ch: 8, freq: '446.09375' },
]

const CLUB_FREQ = '446.660'

export default function RadioPage() {
  return (
    <div className="radio-page" dir="rtl">
      <div className="radio-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
        <h1>📻 תדרי רדיו</h1>
        <p>תדרים לתקשורת בשטח בין נסיעות שיירה — מועדון גרנד ויטרה ישראל</p>
      </div>

      <div className="radio-container">

        <div className="club-freq-card">
          <div className="club-freq-label">תדד מועדון</div>
          <div className="club-freq-value">{CLUB_FREQ}</div>
          <div className="club-freq-sub">Suzuki Grand Vitara Israel 4x4</div>
        </div>

        <div className="freq-tables">
          <div className="freq-table-wrap">
            <h2 className="freq-table-title">📡 תדרים אמריקאים FRS</h2>
            <table className="freq-table">
              <thead>
                <tr>
                  <th>ערוץ</th>
                  <th>תדר (MHz)</th>
                </tr>
              </thead>
              <tbody>
                {americanFRS.map((r) => (
                  <tr key={r.ch}>
                    <td><span className="ch-badge">{r.ch}</span></td>
                    <td className="freq-val">{r.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="freq-table-wrap">
            <h2 className="freq-table-title">📡 תדרים אירופאים FRS</h2>
            <table className="freq-table">
              <thead>
                <tr>
                  <th>ערוץ</th>
                  <th>תדר (MHz)</th>
                </tr>
              </thead>
              <tbody>
                {europeanFRS.map((r) => (
                  <tr key={r.ch}>
                    <td><span className="ch-badge">{r.ch}</span></td>
                    <td className="freq-val">{r.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
