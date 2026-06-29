import { useParams } from 'react-router-dom'
import './DrawingDetailPage.css'

const titleBySlug = {
  'water-system-2-0': 'רכיבי מערכת מים 2.0',
  'throttle-cooling-pipes-2-0': 'צינורות קירור מצערת מנוע 2.0',
  'valve-cover-gasket-2-0': 'אטם מכסה שסתומים 2.0',
  'gearbox-parts-2-0': 'תיבת הילוכים \\ גיר - מקט"ים לרענון גיר 2.0',
  'cooling-system-2-4': 'מערכת קירור מנוע 2.4',
  'throttle-cooling-pipes-2-4': 'צינורות קירור מצערת מנוע 2.4',
  'valve-cover-gasket-2-4': 'אטם מכסה שסתומים 2.4',
  'recommended-lifts': 'הגבהות מומלצות',
  'steering-oil-systems': 'מערכות שמן הגהה',
  'roof-rack-bar': 'פס גגון',
  'accessories-belt': 'רצועת אביזרים',
}

const waterSystemParts = [
  { number: '01550-0612A', name: 'BOLT', ref: 38, qty: 3 },
  { number: '09408-00243', name: 'CLIP', ref: 37, qty: 2 },
  { number: '09401-21405', name: 'CLIP', ref: 36, qty: 2 },
  { number: '09401-21405', name: 'CLIP', ref: 35, qty: 2 },
  { number: '17889-77EA1', name: 'O RING', ref: 34, qty: 1 },
  { number: '17880-65J00', name: 'PIPE, HTR OUTLET', ref: 33, qty: 1 },
  { number: '17827-65J00', name: 'HOSE, HTR OUTLET', ref: 32, qty: 1 },
  { number: '17871-65J00', name: 'HOSE, HTR INLET', ref: 31, qty: 1 },
  { number: '08316-1006A', name: 'NUT', ref: 30, qty: 1 },
  { number: '02162-0612A', name: 'SCREW', ref: 29, qty: 2 },
  { number: '01550-0820A', name: 'BOLT', ref: 28, qty: 2 },
  { number: '01550-0620A', name: 'BOLT', ref: 27, qty: 2 },
  { number: '01550-0612A', name: 'BOLT', ref: 26, qty: 2 },
  { number: '01421-0620A', name: 'STUD BOLT', ref: 25, qty: 2 },
  { number: '09401-35403', name: 'CLIP', ref: 24, qty: 2 },
  { number: '09401-35403', name: 'CLIP', ref: 23, qty: 4 },
  { number: '09401-21410', name: 'CLIP', ref: 22, qty: 1 },
  { number: '09280-34005', name: 'O RING', ref: 21, qty: 1 },
  { number: '09116-06172', name: 'BOLT (6X30)', ref: 20, qty: 1 },
  { number: '09103-10310', name: 'BOLT (10X20)', ref: 19, qty: 1 },
  { number: '17915-65J00', name: 'BRACKET', ref: 18, qty: 1 },
  { number: '17920-65J00', name: 'CAP', ref: 17, qty: 1 },
  { number: '17910-65J00', name: 'NECK ASSY', ref: 16, qty: 1 },
  { number: '17859-65J00', name: 'HOSE, WTR BYPASS', ref: 15, qty: 1 },
  { number: '17852-65J00', name: 'HOSE, WTR BYPASS NO.2', ref: 14, qty: 1 },
  { number: '17851-65J00', name: 'HOSE, RDTR OUTLET', ref: 13, qty: 1 },
  { number: '17842-65J00', name: 'HOSE, RDTR INLET NO.2', ref: 12, qty: 1 },
  { number: '17841-65J00', name: 'HOSE, RDTR INLET', ref: 11, qty: 1 },
  { number: '17590-65J00', name: 'PIPE, WTR BYPASS', ref: 10, qty: 1 },
  { number: '17580-65J00', name: 'PIPE, WTR OUTLET', ref: 9, qty: 1 },
  { number: '17579-77EA0', name: 'GASKET', ref: 8, qty: 1 },
  { number: '17579-65J00', name: 'CAP, WATER OUTLET', ref: 7, qty: 1 },
  { number: '13878-65J00', name: 'CUSHION', ref: 6, qty: 1 },
  { number: '13868-65J00', name: 'COLLAR', ref: 5, qty: 1 },
  { number: '01550-0620A', name: 'BOLT', ref: 4, qty: 2 },
  { number: '17670-65J00', name: 'THERMOSTAT (82C)', ref: 3, qty: 1 },
  { number: '17560-77EA0', name: 'CAP, THERMOSTAT', ref: 2, qty: 1 },
  { number: '13650-73H00', name: 'SENSOR, WATER TEMP', ref: 1, qty: 1 },
]

const throttleCoolingPipes20Parts = [
  { number: '13491-65J00', name: 'HOSE, INLET NO.2', ref: 4, qty: 1 },
  { number: '09356-75141-600', name: 'HOSE, OUTLET NO.1', ref: 5, qty: 1 },
  { number: '13493-65J00', name: 'HOSE, INLET NO.1', ref: 6, qty: 1 },
  { number: '13494-65J00', name: 'HOSE, OUTLET NO.2', ref: 7, qty: 1 },
]

function PartsContent({ image, alt, parts }) {
  return (
    <>
      <div className="drawing-detail-image-wrap">
        <img src={image} alt={alt} className="drawing-detail-image" />
      </div>
      <div className="drawing-detail-table-wrap">
        <table className="parts-table">
          <thead>
            <tr>
              <th>מס׳ רכיב</th>
              <th>שם</th>
              <th>קוד</th>
              <th>כמות</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, i) => (
              <tr key={i}>
                <td>
                  <a
                    href={`https://partsouq.com/en/search/all?q=${part.number}&qty=1&view=table-once`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="part-number-link"
                  >
                    {part.number}
                  </a>
                </td>
                <td>{part.name}</td>
                <td className="part-ref">{part.ref}</td>
                <td className="part-qty">{part.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function WaterSystem20Content() {
  return <PartsContent image="/2-0_water_system.webp" alt="רכיבי מערכת מים 2.0" parts={waterSystemParts} />
}

function ThrottleCoolingPipes20Content() {
  return <PartsContent image="/2-0_cold_pipe.webp" alt="צינורות קירור מצערת מנוע 2.0" parts={throttleCoolingPipes20Parts} />
}

const valveCoverGasket20Parts = [
  { number: '11139-86500', name: 'SEAL', ref: 13, qty: 2 },
  { number: '11189-65J00', name: 'GASKET', ref: 19, qty: 1 },
  { number: '11179-81402', name: 'O RING', ref: 18, qty: 4 },
]

function ValveCoverGasket20Content() {
  return <PartsContent image="/valve-cover-gasket-2-0.webp" alt="אטם מכסה שסתומים 2.0" parts={valveCoverGasket20Parts} />
}

const gearboxParts20 = [
  { number: '22950-65J10', nameEn: 'GAUGE, OIL', nameHe: 'מדיד שמן', ref: 9, qty: 1, note: 'חובה לבדיקה/מילוי' },
  { number: '09280-10016', nameEn: 'O-RING', nameHe: 'טבעת O (למדיד)', ref: 8, qty: 1, note: 'אטימה לצינור המדיד' },
  { number: '24782-57B00', nameEn: 'GASKET, OIL PAN', nameHe: 'אטם קרטר', ref: 2, qty: 1, note: 'חובה בעת פתיחת קרטר' },
  { number: '24781-57B00', nameEn: 'GASKET, DRAIN PLUG', nameHe: 'אטם פקק שמן', ref: 6, qty: 1, note: 'מתחלף בכל החלפה' },
  { number: '24823-79C10', nameEn: 'PLUG, DRAIN', nameHe: 'פקק ריקון', ref: 5, qty: 1, note: 'להזמין ספייר אם חסר' },
  { number: '24745-57B00', nameEn: 'FILTER, OIL (Transmission)', nameHe: 'פילטר שמן גיר', ref: 4, qty: 1, note: 'מתחלף בכל טיפול גדול' },
]

const coolingSystem24Parts = [
  { number: '17910-65J00', name: 'NECK ASSY, WATER FILLER', ref: 15, qty: 1 },
  { number: '17910-78K00', name: 'NECK ASSY, WATER FILLER', ref: 15, qty: 1 },
  { number: '17920-54L00', name: 'CAP, RADIATOR (1.1)', ref: 16, qty: 1 },
  { number: '17920-75F00', name: 'CAP, RADIATOR (1.1)', ref: 16, qty: 1 },
  { number: '17841-78K00', name: 'HOSE, RADIATOR INLET', ref: 10, qty: 1 },
  { number: '09116-06172', name: 'BOLT (6X30)', ref: 18, qty: 1 },
  { number: '13877-65D00', name: 'COLLAR, FILLER NECK', ref: 17, qty: 1 },
  { number: '13878-65D00', name: 'BUSH, FILLER NECK', ref: 16, qty: 1 },
  { number: '02162-0612A', name: 'BOLT', ref: 14, qty: 1 },
  { number: '09403-34135', name: 'CLAMP', ref: 23, qty: 1 },
  { number: '17915-65J00', name: 'BRACKET', ref: 27, qty: 1 },
  { number: '09401-21405', name: 'CLIP', ref: 14, qty: 1 },
  { number: '09356-75141-600', name: 'HOSE (7.5X14.5X600)', ref: 14, qty: 1 },
  { number: '09401-35403', name: 'CLIP', ref: 22, qty: 1 },
  { number: '17842-64J00', name: 'HOSE, RADIATOR INLET NO.2', ref: 11, qty: 1 },
  { number: '17580-78K00', name: 'PIPE, WATER OUTLET', ref: 9, qty: 1 },
  { number: '09356-75141-600', name: 'HOSE (7.5X14.5X600)', ref: 13, qty: 1 },
  { number: '09280-34005', name: 'O RING (D:3.5,D3.7)', ref: 19, qty: 1 },
  { number: '17579-81K00', name: 'CAP, WATER OUTLET', ref: 21, qty: 1 },
  { number: '17871-78K00', name: 'HOSE, HEATER OUTLET', ref: 29, qty: 1 },
  { number: '17872-78K00', name: 'HOSE, HEATER OUTLET', ref: 30, qty: 1 },
  { number: '17851-78K00', name: 'HOSE, RADIATOR OUTLET', ref: 12, qty: 1 },
]

const throttleCoolingPipes24Parts = [
  { number: '13491-78K00', name: 'HOSE, THROT BODY INLET', ref: 5, qty: 1 },
  { number: '13492-78K00', name: 'HOSE, THROT BODY WATER', ref: 6, qty: 1 },
  { number: '13493-78K00', name: 'HOSE, WATER OUTLET NO.2', ref: 7, qty: 1 },
  { number: '09355-13207-600', name: 'HOSE (13X20X600)', ref: 16, qty: 1 },
]

function AccessoriesBeltContent() {
  return (
    <>
      <div className="drawing-detail-image-wrap">
        <img src="/accessories-belt-1.webp" alt="רצועת אביזרים 1" className="drawing-detail-image" />
      </div>
      <div className="drawing-detail-image-wrap" style={{ marginTop: '1.5rem' }}>
        <img src="/accessories-belt-2.webp" alt="רצועת אביזרים 2" className="drawing-detail-image" />
      </div>
    </>
  )
}

function RoofRackBarContent() {
  const parts = [
    { number: '78215.65J10.5PK', name: 'קדמי ימין' },
    { number: '78225.65J10.5PK', name: 'קדמי שמאל' },
    { number: '78216.65J10.5PK', name: 'אחורי ימין' },
    { number: '78226.65J10.5PK', name: 'אחורי שמאל' },
    { number: '78226.65J10.5PK', name: 'גומיה קדימה שמאל' },
    { number: '78215.65J10.5PK', name: 'גומיה קדימה ימין' },
    { number: '78216.65J10.5PK', name: 'גומיה אחורה ימין' },
    { number: '78226.65J10.5PK', name: 'גומיה אחורה שמאל' },
  ]
  return (
    <>
      <div className="drawing-detail-image-wrap">
        <img src="/roof.webp" alt="פס גגון" className="drawing-detail-image" />
      </div>
      <div className="drawing-detail-table-wrap">
        <table className="parts-table">
          <thead>
            <tr>
              <th>מק"ט</th>
              <th>מוצר</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, i) => (
              <tr key={i}>
                <td>
                  <a
                    href={`https://partsouq.com/en/search/all?q=${part.number}&qty=1&view=table-once`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="part-number-link"
                  >
                    {part.number}
                  </a>
                </td>
                <td>{part.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function SteeringOilSystemsContent() {
  const parts = [
    { number: '49140-65J00', name: 'TANK ASSY', ref: 8, engine24: true, engine20: true },
    { number: '49214-78K00', name: 'OIL HOSE', ref: 16, engine24: true, engine20: false, note: '2.4' },
    { number: '49214-65J00', name: 'OIL HOSE', ref: 16, engine24: false, engine20: true, note: '2.0' },
  ]
  return (
    <>
      <div className="drawing-detail-image-wrap">
        <img src="/steering-oil-systems.webp" alt="מערכות שמן הגה" className="drawing-detail-image" />
      </div>
      <div className="drawing-detail-table-wrap">
        <table className="parts-table">
          <thead>
            <tr>
              <th>מס׳ רכיב</th>
              <th>שם</th>
              <th>קוד</th>
              <th>2.4</th>
              <th>2.0</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, i) => (
              <tr key={i}>
                <td>
                  <a
                    href={`https://partsouq.com/en/search/all?q=${part.number}&qty=1&view=table-once`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="part-number-link"
                  >
                    {part.number}
                  </a>
                </td>
                <td>{part.name}</td>
                <td className="part-ref">{part.ref}</td>
                <td>{part.engine24 ? '✓' : '—'}</td>
                <td>{part.engine20 ? '✓' : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function RecommendedLiftsContent() {
  return (
    <>
      <div className="drawing-detail-image-wrap">
        <img src="/recommend_lift.webp" alt="הגבהות מומלצות" className="drawing-detail-image" />
      </div>
      <div className="drawing-detail-notes">
        <p><strong>מידות לפני הגבהה</strong></p>
        <p>46 מ"מ ממרכז גלגל לכנף</p>
        <p className="drawing-detail-disclaimer">החוק מתיר 50–51 ס"מ הגבהה חוקית</p>
      </div>
    </>
  )
}

const valveCoverGasket24Parts = [
  { number: '11189-78K10', name: 'GASKET, CYLINDER HEAD COVER', ref: 3, qty: 1 },
]

function ValveCoverGasket24Content() {
  return <PartsContent image="/valve-cover-gasket-2-4.png" alt="אטם מכסה שסתומים 2.4" parts={valveCoverGasket24Parts} />
}

function ThrottleCoolingPipes24Content() {
  return <PartsContent image="/2_4_cold_pipe.webp" alt="צינורות קירור מצערת מנוע 2.4" parts={throttleCoolingPipes24Parts} />
}

function CoolingSystem24Content() {
  return (
    <>
      <div className="drawing-detail-section-title">
        <a
          href="https://partsouq.com/en/catalog/genuine/unit?c=SUZUKI201905&ssd=%24%2AKwG3g5K88vXO7Pb-1OOym-_729zCs7yxsKKNvvbww9TAzMrCkJeHwcHN1tbQ0ciSlbDa9PD0xc7QwJaGisSw1bK1trOy6-b7--3u4-Lh6uWc5PaxsbT86-D7we2suOzqw8jWxcnVmJP607SzsLW3tLXpAAAAAKf77o8%3D%24&vid=0&cid=1011&uid=27266"
          target="_blank"
          rel="noopener noreferrer"
          className="drawing-detail-ext-link"
        >
          קישור לתרשימי פיצוץ של כל מערכת הקירור ←
        </a>
      </div>
      <PartsContent image="/2_4_water_system.webp" alt="מערכת קירור מנוע 2.4" parts={coolingSystem24Parts} />
    </>
  )
}

function GearboxParts20Content() {
  return (
    <>
      <div className="drawing-detail-section-title">
        <a
          href="https://partsouq.com/en/catalog/genuine/unit?c=SUZUKI201905&ssd=%24*KwF4TF10EAN0Ky0mFnxrfiA0FBMNfHN-f21CcTk_DBsPAwUNX1hIDg4CGRkfHgddWn8VOz87CgEfD1lJRX9_Gnt6enx-IyozNCIhLC0uJSpTKzl9fHozJC80DiJjdyMlDAcZCgYaVyg1HH18fHp7fHkhAAAAAJACqNo%3D%24&vid=0&cid=1522&uid=26100&q=JSAJTD54V60100072"
          target="_blank"
          rel="noopener noreferrer"
          className="drawing-detail-ext-link"
        >
          מעטפת הגיר ←
        </a>
      </div>

      <div className="drawing-detail-image-wrap">
        <img src="/gear-2-0.webp" alt="תיבת הילוכים גיר 2.0" className="drawing-detail-image" />
      </div>

      <div className="drawing-detail-table-wrap">
        <table className="parts-table parts-table--wide">
          <thead>
            <tr>
              <th>קוד</th>
              <th>מס׳ רכיב</th>
              <th>שם (EN)</th>
              <th>שם</th>
              <th>כמות</th>
              <th>הערות</th>
            </tr>
          </thead>
          <tbody>
            {gearboxParts20.map((part, i) => (
              <tr key={i}>
                <td className="part-ref">{part.ref}</td>
                <td>
                  <a
                    href={`https://partsouq.com/en/search/all?q=${part.number}&qty=1&view=table-once`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="part-number-link"
                  >
                    {part.number}
                  </a>
                </td>
                <td className="part-en">{part.nameEn}</td>
                <td>{part.nameHe}</td>
                <td className="part-qty">{part.qty}</td>
                <td className="part-note">{part.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="drawing-detail-notes">
        <p>לאוברול מלא ישנם אטמים פנימיים בתוך חלקי בית הגיר ראו:</p>
        <a href="https://partsouq.com/en/catalog/genuine/unit?c=SUZUKI201905&ssd=%24*KwG3g5K738y75OLp2bOkse_729zCs7yxsKKNvvbww9TAzMrCkJeHwcHN1tbQ0ciSlbDa9PD0xc7QwJaGirCw1bS1tbOx7OX8--3u4-Lh6uWc5Pays7f86-D7we2suOzqw8jWxcnVmOf607Kzs7W0s7buAAAAAObPkA4%3D%24&vid=0&cid=1522&uid=26098&q=JSAJTD54V60100072" target="_blank" rel="noopener noreferrer" className="drawing-detail-ext-link">קישור ראשון ←</a>
        <p>וגם</p>
        <a href="https://partsouq.com/en/catalog/genuine/unit?c=SUZUKI201905&ssd=%24*KwHY7P3UsKPUi42GttzL3oCUtLOt3NPe383i0ZmfrLuvo6Wt__jorq6iubm_vqf9-t-1m5-bqqG_r_np5d_futva2tzeg4qTlIKBjI2OhYrzi5nd3NiThI-UroLD14OFrKe5qqa694iVvN3c3Nrb3NmBAAAAALRsjkc%3D%24&vid=0&cid=1522&uid=26098&q=JSAJTD54V60100072" target="_blank" rel="noopener noreferrer" className="drawing-detail-ext-link">קישור שני ←</a>
        <p className="drawing-detail-disclaimer">ובכל מקרה זהו טיפול מורכב יותר בהתאם לבעיה בגיר לכן לא נתעמק בכל החלפים הרלוונטים ויש להיוועץ עם המוסך שלכם</p>
      </div>
    </>
  )
}

const contentBySlug = {
  'water-system-2-0': WaterSystem20Content,
  'throttle-cooling-pipes-2-0': ThrottleCoolingPipes20Content,
  'valve-cover-gasket-2-0': ValveCoverGasket20Content,
  'gearbox-parts-2-0': GearboxParts20Content,
  'cooling-system-2-4': CoolingSystem24Content,
  'throttle-cooling-pipes-2-4': ThrottleCoolingPipes24Content,
  'valve-cover-gasket-2-4': ValveCoverGasket24Content,
  'recommended-lifts': RecommendedLiftsContent,
  'steering-oil-systems': SteeringOilSystemsContent,
  'roof-rack-bar': RoofRackBarContent,
  'accessories-belt': AccessoriesBeltContent,
}

export default function DrawingDetailPage() {
  const { slug } = useParams()
  const title = titleBySlug[slug] || slug
  const ContentComponent = contentBySlug[slug]

  return (
    <div className="drawing-detail-page" dir="rtl">
      <div className="drawing-detail-header">
        <h1>{title}</h1>
      </div>
      <div className="drawing-detail-container">
        {ContentComponent ? <ContentComponent /> : (
          <p className="drawing-detail-placeholder">תוכן בקרוב...</p>
        )}
      </div>
    </div>
  )
}
