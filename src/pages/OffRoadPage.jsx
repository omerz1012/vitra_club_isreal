import './OffRoadPage.css'

const tracks = [
  { title: 'נחל גוברין למאחז משלט, דרך חורבת בית לויה, קבר שייח עלי ומערות חזן.', url: 'http://off-road.io/track/6200615921516544' },
  { title: 'מלטרון דרך נווה אילן, עין לימון וסיום בשער הגיא', url: 'http://off-road.io/track/4984898623897600' },
  { title: 'עמק האלה לבית גוברין', url: 'http://off-road.io/track/6145620568440832' },
  { title: 'מצפור שער הגיא עד מאגר מסילת ציון', url: 'http://off-road.io/track/4940383186845696' },
  { title: 'נחל דולב לחירבת חנות', url: 'http://off-road.io/track/5214096560226304' },
  { title: 'טיול מועדון סוכות 2025 סוזוקי גרנד ויטרה', url: 'http://off-road.io/track/5598125490962432' },
  { title: 'הר חורשן, עין השופט, אליקים, מערת הפעמון, יער עופר.', url: 'http://off-road.io/track/6426854797606912' },
  { title: 'טיול מועדון סוכות 2024', url: 'https://off-road.io/track/4743839721455616' },
  { title: 'מאגר עורבים לבריכת רם', url: 'https://off-road.io/track/4685345281277952' },
]

export default function OffRoadPage() {
  return (
    <div className="offroad-page" dir="rtl">
      <div className="offroad-header">
        <h1>🗺️ מסלולי שטח</h1>
        <p>מסלולים מומלצים לנסיעות שטח בישראל</p>
      </div>

      <div className="offroad-container">
        <div className="offroad-list">
          {tracks.map((t, i) => (
            <a key={i} href={t.url} target="_blank" rel="noopener noreferrer" className="offroad-card">
              <h3>{t.title}</h3>
              <span className="offroad-link">🔗 פתח מסלול</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
