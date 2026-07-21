import { Link } from 'react-router-dom'
import './OffRoadPage.css'

const regions = [
  {
    key: 'center',
    label: 'מרכז',
    icon: '🏙️',
    tracks: [
      { title: 'נחל גוברין למאחז משלט, דרך חורבת בית לויה, קבר שייח עלי ומערות חזן.', url: 'http://off-road.io/track/6200615921516544' },
      { title: 'מלטרון דרך נווה אילן, עין לימון וסיום בשער הגיא', url: 'http://off-road.io/track/4984898623897600' },
      { title: 'עמק האלה לבית גוברין', url: 'http://off-road.io/track/6145620568440832' },
      { title: 'מצפור שער הגיא עד מאגר מסילת ציון', url: 'http://off-road.io/track/4940383186845696' },
      { title: 'נחל דולב לחירבת חנות', url: 'http://off-road.io/track/5214096560226304' },
      { title: 'מיער חרובית לתל צפית, מצפה משואה סיום בבית גוברין', url: 'http://off-road.io/track/6378959320907776' },
      { title: 'ממסילת ציון, דרך בורמה סיום בצובה', url: 'http://off-road.io/track/5804932567138304' },
    ],
  },
  {
    key: 'north',
    label: 'צפון',
    icon: '⛰️',
    tracks: [
      { title: 'טיול מועדון סוכות 2025 סוזוקי גרנד ויטרה', url: 'http://off-road.io/track/5598125490962432' },
      { title: 'הר חורשן, עין השופט, אליקים, מערת הפעמון, יער עופר.', url: 'http://off-road.io/track/6426854797606912' },
      { title: 'טיול מועדון סוכות 2024', url: 'https://off-road.io/track/4743839721455616' },
      { title: 'מאגר עורבים לבריכת רם', url: 'https://off-road.io/track/4685345281277952' },
    ],
  },
  {
    key: 'south',
    label: 'דרום',
    icon: '🏜️',
    tracks: [
      { title: 'ממצוקי דרגות למרסבא', url: 'http://off-road.io/track/6299654744178688' },
      { title: 'משדה בוקר למצפה רמון', url: 'http://off-road.io/track/6120584859353088' },
      { title: 'סובב מכתש רמון מעגלי', url: 'http://off-road.io/track/5398293737373696' },
      { title: 'נחל נקרות דרך הבשמים', url: 'http://off-road.io/track/5930524932308992' },
      { title: 'סכיני דימונה אתגרי', url: 'http://off-road.io/track/6268152730877952' },
    ],
  },
]

export default function OffRoadPage() {
  return (
    <div className="offroad-page" dir="rtl">
      <div className="offroad-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
        <h1>🗺️ מסלולי שטח</h1>
        <p>מסלולים מומלצים לנסיעות שטח בישראל</p>
      </div>

      <div className="offroad-container">
        {regions.map((region) => (
          <div key={region.key} className="offroad-region">
            <h2 className="offroad-region-title">
              <span>{region.icon}</span> {region.label}
            </h2>
            <div className="offroad-list">
              {region.tracks.map((t, i) => (
                <a key={i} href={t.url} target="_blank" rel="noopener noreferrer" className="offroad-card">
                  <h3>{t.title}</h3>
                  <span className="offroad-link">🔗 פתח מסלול</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
