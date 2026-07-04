import { Link } from 'react-router-dom'
import './DiyPage.css'

const sections = [
  {
    title: 'ספר מכונאים למנוע 2.4',
    links: [{ label: 'charm.li/Suzuki', url: 'https://charm.li/Suzuki/' }],
  },
  {
    title: 'סרטון הסברה על מכלולי הרכב',
    links: [{ label: 'סרטון מכלולי הרכב עם המכונאי טל צופי', url: 'https://www.youtube.com/watch?v=03iLQhNhn50' }],
  },
  {
    title: 'רכישה וייבוא חלקי חילוף מחו"ל',
    links: [{ label: 'מדריך וידאו – רכישה וייבוא חלקי חילוף מחו"ל (כנופיה)', url: 'https://www.youtube.com/watch?v=Jo_y8n2XAsU' }],
  },
  {
    title: 'שדרוג קומפרסור והוספת חיישן לחץ',
    links: [{ label: 'מדריך שדרוג קומפרסור', url: 'https://understood-animal-519.notion.site/1e1bd159c34d800989d2f8cb04e7253a?pvs=25' }],
  },
  {
    title: 'סרטונים בעברית',
    links: [
      { label: 'החלפת שמן הגה', url: 'https://www.youtube.com/watch?v=4VYfJPYkmIQ' },
      { label: 'טיפול קטן לרכב – שמן+פילטר, פילטר מזגן ונוזל בלמים', url: 'https://www.youtube.com/watch?v=omTn5mR1MbI' },
      { label: 'החלפת בלמים', url: 'https://www.youtube.com/watch?v=83T0DcCtKuk' },
      { label: 'מתיחת בלם יד', url: 'https://www.youtube.com/watch?v=E3bvjVOdwl8' },
      { label: 'החלפת מיסבי החלקה', url: 'https://www.youtube.com/watch?v=O70xogw5jtE' },
      { label: 'מדפי מזגן נוסעים', url: 'https://youtu.be/9514cCkE56Q' },
      { label: 'תושבות מנוע', url: 'https://youtu.be/WWa3JElt5Rs' },
      { label: 'תושבת גיר', url: 'https://youtu.be/vFjXVc95Ik8' },
      { label: 'מוט מייצב', url: 'https://youtu.be/3j1ai4hA5hM' },
      { label: 'אטם מכסה שסתומים', url: 'https://youtu.be/cYIkCxcJfwE' },
      { label: 'החלפת מחזיר שמן צירייה', url: 'https://youtu.be/eGj0IlsTV_M' },
      { label: 'החלפת תפוחי הגה', url: 'https://youtu.be/W4bAkbUowx0' },
      { label: 'החלפת מיכל שמן הגה', url: 'https://youtu.be/ocrECBDFC20' },
      { label: 'החלפת אטם EGR', url: 'https://youtu.be/mLYNcUNZ3mk' },
      { label: 'התקנת קיט הגבהה', url: 'https://youtu.be/PgdBq-kjbto' },
      { label: 'החלפת משולשים', url: 'https://youtu.be/_0IQWLlz4u4' },
      { label: 'פירוק וניקוי מזרקים', url: 'https://youtu.be/9DuioA0v1AM' },
    ],
  },
  {
    title: 'סרטונים בשפות אחרות',
    links: [
      { label: 'החלפת גומי מעצור בדלת', url: 'https://youtu.be/e8v5O1ByM0E' },
      { label: 'פירוק והרכבת משענת יד', url: 'https://www.youtube.com/watch?v=gh8U8THCQnQ' },
      { label: 'פירוק והחלפת נורות פנים', url: 'https://youtu.be/5UPegwsSYic' },
      { label: 'פירוק דשבורד', url: 'https://youtu.be/U44RctLXPEQ' },
    ],
  },
  {
    title: 'מדריכים בכתב',
    links: [
      { label: 'מתיחת בלם יד (דגמים עם דיסק בגלגלים האחוריים)', url: 'https://understood-animal-519.notion.site/16ebd159c34d809dbcf5df74238e32a6?pvs=25' },
      { label: 'SERVICE ESP', url: 'https://understood-animal-519.notion.site/SERVICE-ESP-16ebd159c34d803285d2f02090ad76f3?pvs=25' },
      { label: 'AUTO מהבהב בבקר מזגן', url: 'https://understood-animal-519.notion.site/AUTO-16ebd159c34d80389e68fc461f6b3491?pvs=25' },
      { label: 'ידית הילוכים לא זזה / לא מגיבה', url: 'https://understood-animal-519.notion.site/16ebd159c34d80c5bfbefcec9e37a8c0?pvs=25' },
      { label: 'לוחית רישוי אמריקאית – מדריך התקנה והחלפה מישראלית', url: 'https://understood-animal-519.notion.site/1a6bd159c34d80e19bddeff020f8c79d?pvs=25' },
    ],
  },
  {
    title: 'פיוזים',
    links: [
      { label: 'טבלת פיוזים אינטראקטיבית', url: 'https://www.startmycar.com/suzuki/grand-vitara/info/fusebox/2008/gen-g3' },
      { label: 'שרטוטי פיוזים וממסרים בכל שלושת התיבות', url: 'https://car-box.info/suzuki/vitara/grand-2005-2014.html' },
    ],
  },
  {
    title: 'קישורים נוספים',
    links: [
      { label: 'החלפת נורת קסנון', url: 'https://understood-animal-519.notion.site/250bd159c34d8069a713ef7f0c4994ad?pvs=25' },
      { label: 'נקודות חילוץ (אוזני חילוץ)', url: 'https://understood-animal-519.notion.site/2cbbd159c34d80489a27c114362449bd?pvs=25' },
    ],
  },
]

const sourceUrl = 'https://understood-animal-519.notion.site/DIY-16dbd159c34d80209ee0e5b4e58e34e1?pvs=25'

export default function DiyPage() {
  return (
    <div className="diy-page" dir="rtl">
      <div className="diy-header">
        <Link to="/info" className="back-btn">→ חזרה למאגר המידע</Link>
        <h1>🛠️ מדריכי DIY</h1>
        <p>מדריכים לתיקונים ושיפורים עצמיים — גרנד ויטרה</p>
      </div>

      <div className="diy-container">
        {sections.map((s) => (
          <div key={s.title} className="diy-section">
            <h2 className="diy-section-title">{s.title}</h2>
            <ul className="diy-links">
              {s.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label} ←</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="diy-section">
          <h2 className="diy-section-title">לוח שעונים</h2>
          <div className="diy-image-wrap">
            <img src="/control_board.webp" alt="לוח שעונים - נוריות אזהרה ותצוגה" className="diy-image" />
          </div>
        </div>

        <div className="diy-section">
          <h2 className="diy-section-title">קריאת פלאגים / מצתים</h2>
          <ul className="diy-links diy-notes">
            <li>*החלפת פלאג מתבצעת עם בוקסה 16 מגנטית</li>
          </ul>
          <div className="diy-image-wrap">
            <img src="/plug_chart.webp" alt="טבלת אבחון פלאגים / מצתים NGK" className="diy-image" />
          </div>
        </div>

        <p className="diy-source">
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">לצפייה בדף המקורי ב-Notion (כולל תמונות) ←</a>
        </p>
      </div>
    </div>
  )
}
