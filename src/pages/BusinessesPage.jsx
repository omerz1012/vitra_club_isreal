import { Link } from 'react-router-dom'
import './BusinessesPage.css'

const businesses = [
  {
    name: 'טל צופי',
    type: 'מוסך / מכונאי',
    location: 'בן צבי 11, תל אביב',
    contact: 'טל | 053-5553071',
    maps: 'https://maps.google.com/?q=בן+צבי+11+תל+אביב',
  },
  {
    name: 'רביע שירותי רכב',
    type: 'מוסך / מכונאי',
    location: 'כפר יאסיף',
    contact: 'רביע | 052-738-0445',
    maps: 'https://maps.google.com/?q=כפר+יאסיף',
  },
  {
    name: 'רדיאטור רחובות',
    type: 'מוסך / מכונאי',
    location: 'משה יתום 6, רחובות',
    contact: '053-4244428 | 08-9461911',
    maps: 'https://maps.google.com/?q=משה+יתום+6+רחובות',
  },
  {
    name: 'סוזוקי עפולה',
    type: 'מוסך / מכונאי',
    location: 'החרמש 12, עפולה',
    contact: 'אביר | 054-7422611',
    maps: 'https://maps.google.com/?q=החרמש+12+עפולה',
  },
  {
    name: 'מוסך אוטוקינג',
    type: 'פחחות, צבע ומוסך',
    location: 'דוגית 2, מישור אדומים',
    contact: 'מועז, אחמד | 052-2377545 | 053-3660019',
    maps: 'https://maps.google.com/?q=דוגית+2+מישור+אדומים',
  },
  {
    name: 'אוטופוינט',
    type: 'אביזרי רכב',
    location: 'האומן 1, יבנה',
    contact: 'בר | 054-337-3883',
    maps: 'https://maps.google.com/?q=האומן+1+יבנה',
  },
  {
    name: "ג'וזף",
    type: 'אביזרי רכב',
    location: 'אלטלף 9, יהוד',
    contact: '050-8528483',
    maps: 'https://maps.google.com/?q=אלטלף+9+יהוד',
  },
  {
    name: 'פירסטקאר',
    type: 'אביזרי רכב',
    location: 'ברטעה',
    contact: 'עמאר | 054-285-5441',
  },
  {
    name: 'ENL ייבוא ושיווק',
    type: 'אביזרי רכב',
    location: 'הברוש 27, פתח תקווה',
    contact: 'נטי, אלירון | 050-2106437 | 052-6781206',
    maps: 'https://maps.google.com/?q=הברוש+27+פתח+תקווה',
  },
  {
    name: 'צמיגי מוריס',
    type: 'צמיגים',
    location: 'צומת בית עובד',
    contact: 'גילי, אסף | 052-2891327 | 052-3490008',
  },
  {
    name: 'צמיגי פרונט יוסף',
    type: 'צמיגים',
    location: 'כביש לוד 5, יהוד-אלטלף 9',
    contact: '03-634-1015',
    note: 'ציר אחד 300₪ | שני צירים 400₪ | לחברי מועדון',
  },
  {
    name: 'פרונט אלשיך',
    type: 'פרונט (יישור גלגלים)',
    location: 'שדרות הרצל 6, רמלה',
    contact: 'נור | 054-4460309',
    note: 'חברי מועדון: 200₪ לציר + מע"מ',
    maps: 'https://maps.google.com/?q=הרצל+6+רמלה',
  },
  {
    name: "פרונט ג'מאל טועמה",
    type: 'פרונט (יישור גלגלים)',
    location: 'שיש 9, עכו',
    contact: 'אדוארד | 050-2594832',
    maps: 'https://maps.google.com/?q=שיש+9+עכו',
  },
  {
    name: 'הנטר פרונט',
    type: 'מוסך ופרונט',
    location: 'מקלף 30, חיפה',
    contact: 'נטי, אביב | 054-5813-031 | 054-580-1991',
  },
  {
    name: 'שטח אקסטרים',
    type: 'ציוד, אביזרים וקמפינג',
    location: 'דרך העצמאות 16, יהוד',
    contact: 'דור | 054-5057868',
    note: 'קוד קופון 10%: GVTEAM10 (להציג כרטיס חבר)',
  },
]

const typeColors = {
  'מוסך / מכונאי': '#4a9eff',
  'פחחות, צבע ומוסך': '#9b59b6',
  'אביזרי רכב': '#2ecc71',
  'צמיגים': '#e67e22',
  'פרונט (יישור גלגלים)': '#1abc9c',
  'מוסך ופרונט': '#3498db',
  'ציוד, אביזרים וקמפינג': '#e63946',
}

export default function BusinessesPage() {
  return (
    <div className="biz-page" dir="rtl">
      <div className="biz-header">
        <h1>📋 בתי עסק מומלצים</h1>
        <p>גרז'ים ובתי עסק מומלצים לגרנד ויטרה — מניסיון חברי הקהילה</p>
      </div>

      <div className="biz-container">
        <table className="biz-table">
          <thead>
            <tr>
              <th>#</th>
              <th>שם העסק</th>
              <th>סוג</th>
              <th>מיקום</th>
              <th>יצירת קשר</th>
              <th>מפה</th>
              <th>הערות</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b, i) => (
              <tr key={b.name}>
                <td className="num-cell">{i + 1}</td>
                <td className="name-cell">{b.name}</td>
                <td>
                  <span
                    className="type-badge"
                    style={{ background: (typeColors[b.type] || '#555') + '22', color: typeColors[b.type] || '#aaa', borderColor: (typeColors[b.type] || '#555') + '55' }}
                  >
                    {b.type}
                  </span>
                </td>
                <td className="loc-cell">{b.location}</td>
                <td className="contact-cell">
                  {b.contact.split('|').map((c, j) => (
                    <span key={j} className="contact-line">{c.trim()}</span>
                  ))}
                </td>
                <td className="map-cell">
                  {b.maps
                    ? <a href={b.maps} target="_blank" rel="noopener noreferrer" className="map-btn">📍 מפה</a>
                    : <span className="no-map">—</span>
                  }
                </td>
                <td className="note-cell">
                  {b.note ? <span className="note-text">⭐ {b.note}</span> : <span className="no-note">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
