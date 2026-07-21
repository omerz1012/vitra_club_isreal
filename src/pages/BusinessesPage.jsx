import { Link } from 'react-router-dom'
import './BusinessesPage.css'

const businesses = [
  {
    name: 'טל צופי',
    type: 'מוסך',
    location: 'דרך בן צבי 11, תל אביב',
    contact: 'טל | 053-5553071',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%93%D7%A8%D7%9A%20%D7%91%D7%9F%20%D7%A6%D7%91%D7%99%2011%2C%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91',
    website: 'https://share.google/uCFzwjztTRfio0QZY',
  },
  {
    name: 'רביע שירותי רכב',
    type: 'מוסך',
    location: 'כפר יאסיף',
    contact: 'רביע | 052-738-0445',
    maps: 'https://maps.app.goo.gl/5v2kBBaYMpNYyWT1A',
    website: 'https://share.google/8BGxWndvmzI0PZnCJ',
  },
  {
    name: 'רדיאטור רחובות',
    type: 'מוסך',
    location: 'משה יתום 6, רחובות',
    contact: '053-4244428 | 08-9461911',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%9E%D7%A9%D7%94%20%D7%99%D7%AA%D7%95%D7%9D%206%2C%20%D7%A8%D7%97%D7%95%D7%91%D7%95%D7%AA',
    website: 'https://share.google/A8n2QCs0YZrfLFHZn',
  },
  {
    name: 'סוזוקי עפולה',
    type: 'מוסך',
    location: 'החרמש 12, עפולה',
    contact: 'עביר | 054-7422611',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%9E%D7%A9%D7%94%20%D7%99%D7%AA%D7%95%D7%9D%206%2C%20%D7%A8%D7%97%D7%95%D7%91%D7%95%D7%AA',
    website: 'https://share.google/Km3tNGU1GvXotJ1wL',
  },
  {
    name: 'אוטופוינט',
    type: 'אביזרים לרכב',
    location: 'האומן 1, יבנה',
    contact: 'בר | 054-337-3883',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%94%D7%90%D7%95%D7%9E%D7%9F%201%2C%20%D7%99%D7%91%D7%A0%D7%94',
    website: 'https://www.otopoint.co.il',
  },
  {
    name: "ג'וזף",
    type: 'אביזרים לרכב',
    location: 'אלטלף 9, יהוד',
    contact: '050-8528483',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%90%D7%9C%D7%98%D7%9C%D7%A3%209%2C%20%D7%99%D7%94%D7%95%D7%93',
    website: 'https://joseph-car-shop.co.il',
  },
  {
    name: 'פירסטקאר',
    type: 'אביזרים לרכב',
    location: 'ברטעה',
    contact: 'עמאר | 054-285-5441',
    website: 'https://www.firstcar4x4.com',
  },
  {
    name: 'ENL ייבוא ושיווק',
    type: 'אביזרים לרכב',
    location: 'הברוש 27, פתחיה',
    contact: 'נתי, אלירן | 050-2106437 | 052-6781206',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%94%D7%91%D7%A8%D7%95%D7%A9%2027%2C%20%D7%A4%D7%AA%D7%97%D7%99%D7%94',
    website: 'https://www.enl4x4.co.il',
  },
  {
    name: 'צמיגי מוריס',
    type: "פנצ'ריות",
    location: 'צומת בית עובד',
    contact: 'גילי, אסף | 052-2891327 | 052-3490008',
    website: 'https://share.google/cmdm2BGfKknGtsX2X',
  },
  {
    name: 'צמיגי פרונט יוסף',
    type: "פנצ'ריה",
    location: 'אור יהודה- דרך לוד 5, יהוד- אלטלף 9',
    contact: '03-634-1015',
    note: 'כיוון סרן בודד - 300 | שני סרנים - 400 | לחברי המועדון | המחירים כוללים מע"מ',
    website: 'https://share.google/jaQ06v8gN9sk2zP75',
  },
  {
    name: 'פרונט אלשיך',
    type: 'פרונט',
    location: 'שדרות הרצל 6, רמלה',
    contact: 'נור | 054-4460309',
    note: 'לחברי מועדון, מחיר לסרן, ללא בורג כיוון - 200 ש"ח + מע"מ',
    website: 'https://share.google/mBtr1uXVGpCKnf2Ul',
  },
  {
    name: "פרונט ג'מאל טועמה",
    type: 'פרונט',
    location: 'שיש 9, עכו',
    contact: 'אדוארד | 050-2594832',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%A9%D7%93%D7%A8%D7%95%D7%AA%20%D7%94%D7%A8%D7%A6%D7%9C%206%2C%20%D7%A8%D7%9E%D7%9C%D7%94',
    website: 'https://share.google/rpTYTRfcjqgE4vg2Z',
  },
  {
    name: 'PRODX הנטר פרונט',
    type: 'מוסך ופרונט',
    location: 'מקלף 30, חיפה',
    contact: 'נתי, אביב | 054-5813-031 | 054-580-1991',
    maps: 'https://www.google.com/maps/search/?api=1&query=%D7%A9%D7%99%D7%A9%209%2C%20%D7%A2%D7%9B%D7%95',
    website: 'https://share.google/GDFrSVT3MkBZKUqOA',
  },
  {
    name: 'שטח אקסטרים',
    type: 'ציוד אביזרים וקמפינג',
    location: 'דרך העצמאות 16, יהוד',
    contact: 'דור | 054-5057868',
    maps: 'https://share.google/6e8LtkM6pDmuegZUa',
    website: 'https://extremeoffroad.co.il/',
    note: 'קוד קופון 10% על כל האתר: GVTEAM10 (בהצגת חבר מועדון)',
  },
  {
    name: 'Just Be',
    type: 'ייצור חלקים והגבהות',
    location: '',
    contact: 'בן עציון | 054-4964417',
    note: 'ייצור חלקים מחוזקים לרכב, קיטי הגבהה וחלומות במגירה',
  },
]

const typeColors = {
  'מוסך': '#4a9eff',
  'אביזרים לרכב': '#2ecc71',
  "פנצ'ריות": '#e67e22',
  "פנצ'ריה": '#e67e22',
  'פרונט': '#1abc9c',
  'מוסך ופרונט': '#3498db',
  'ציוד אביזרים וקמפינג': '#e63946',
  'ייצור חלקים והגבהות': '#f39c12',
}

export default function BusinessesPage() {
  return (
    <div className="biz-page" dir="rtl">
      <div className="biz-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
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
                <td className="name-cell">
                  {b.website
                    ? <a href={b.website} target="_blank" rel="noopener noreferrer" className="biz-name-link">{b.name}</a>
                    : b.name
                  }
                </td>
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
