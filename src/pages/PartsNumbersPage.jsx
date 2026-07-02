import './PartsNumbersPage.css'

const parts = [
  { product: 'מותחן', sku20: '1754077E10', sku24: '1754054L00' },
  { product: 'משאבת מים', sku20: '1740077817', sku24: '1740078894' },
  { product: 'תושבת מנוע 2X', sku20: '1161065J03', sku24: '1161078K02' },
  { product: 'תושבת גיר', sku20: '1171065J00', sku24: '' },
  { product: 'גלגל טרק', sku20: '1753077E00', sku24: '1753078K01' },
  { product: 'ברך רדיאטור', sku20: '1791065J00', sku24: '' },
  { product: 'מיסב החלקה דומה', sku20: '4174165J00, 4174178K00', sku24: '' },
  { product: 'נורות קדמיות', sku20: 'D2S רגל H7', sku24: '' },
  { product: 'מדיד שמן', sku20: '16910-80J00', sku24: '16910-69G01' },
  { product: 'חיישן VVT', sku20: '16550-51KA0', sku24: '' },
  { product: 'פלאגים אירידיום', sku20: 'IFR5J11', sku24: 'SILFR6A11' },
]

const weatherstripLinks = [
  { name: 'דלת שמאל אחורית', sku: '83841-65J00', url: 'https://burjauto.com/buy/8384165J00' },
  { name: 'דלת ימין אחורית', sku: '83831-65J00', url: 'https://burjauto.com/buy/8383165J00' },
  { name: 'דלת שמאל קדמית', sku: '83821-65J00', url: 'https://burjauto.com/buy/8382165J00' },
  { name: 'דלת ימין קדמית', sku: '83811-65J00', url: 'https://burjauto.com/buy/8381165J00' },
]

const weatherstripDiagramUrl = 'https://partsouq.com/en/catalog/genuine/unit?c=SUZUKI201905&ssd=%24%2AKwETJzYmEm9SFGpiFlEbHUtff3hmFxgVFAYpGlJUZ3BkaG5mNDMjZWVpcnJ0dWw2MRR-UFRQYWp0ZDIiLmAUcRYREhcQQU9TX0lKR0ZFTkE4QFIXFxRYT0RfZUkIHEhOZ2xyYW1xPDdedxAXFBEVHhxBAAAAAL5TDzI%3D%24&vid=0&cid=&uid=27015&q=JSAJTDA4V00205999'

const weatherstripTables = [
  {
    title: 'דלתות אחוריות JB420W-4 E22|253 - 253 - REAR DOOR',
    rows: [
      { desc: 'WEATHERSTRIP, RR DOOR LOWER', code: '19', sku: '83749-65J00' },
      { desc: 'WEATHERSTRIP, DOOR INNER LH', code: '18', sku: '83738-78K00' },
      { desc: 'WEATHERSTRIP, DOOR DUST LH', code: '31', sku: '84672-65J04' },
      { desc: 'WEATHERSTRIP, DOOR DUST RH', code: '30', sku: '84662-65J04' },
      { desc: 'WEATHERSTRIP, DOOR OPENING LH', code: '29', sku: '84671-65J00' },
      { desc: 'WEATHERSTRIP, DOOR OPENING RH', code: '28', sku: '84661-65J00' },
      { desc: 'WEATHERSTRIP, RR DOOR LOWER', code: '15', sku: '83739-65J00' },
      { desc: 'WEATHERSTRIP, DOOR INNER RH', code: '14', sku: '83738-78K00' },
    ],
  },
  {
    title: 'חלונות אחוריים JB420W-4 E22|254 - 254 - REAR DOOR REGULATOR',
    rows: [
      { desc: 'WEATHERSTRIP, PARTITION LH פנימי', code: '18', sku: '84675-65J00' },
      { desc: 'WEATHERSTRIP, PARTITION RH פנימי', code: '17', sku: '84665-65J00' },
      { desc: 'WEATHERSTRIP, RR DOOR OUT RH חיצוני', code: '6', sku: '83831-65J00' },
      { desc: 'WEATHERSTRIP, RR DOOR OUT LH חיצוני', code: '7', sku: '83841-65J00' },
    ],
  },
  {
    title: 'דלתות קדמיות JB420W-4 E22|250 - 250 - FRONT DOOR PANEL (LHD)',
    rows: [
      { desc: 'WEATHERSTRIP, DOOR INNER LH', code: '19', sku: '83729-65J00' },
      { desc: 'WEATHERSTRIP, FR DOOR LOWER', code: '18', sku: '83718-78K00' },
      { desc: 'WEATHERSTRIP, DOOR OPENING LH', code: '30', sku: '84651-65J00' },
      { desc: 'WEATHERSTRIP, DOOR OPENING RH', code: '29', sku: '84641-65J00' },
      { desc: 'WEATHERSTRIP, DOOR INNER RH', code: '15', sku: '83719-65J00' },
      { desc: 'WEATHERSTRIP, FR DOOR LOWER', code: '14', sku: '83718-78K00' },
    ],
  },
  {
    title: 'חלונות קדמיים JB420W-4 E22|251 - 251 - FRONT DOOR REGULATOR',
    rows: [
      { desc: 'WEATHERSTRIP, FR DOOR OUT LH', code: '7', sku: '83821-65J00' },
      { desc: 'WEATHERSTRIP, FR DOOR OUT RH', code: '6', sku: '83811-65J00' },
    ],
  },
  {
    title: 'מגיני מים \\ בוץ JB420W-4 E22|246 - 246 - SPLASH GUARD',
    rows: [
      { desc: 'WEATHERSTRIP, FR DOOR SPLASH', code: '18', sku: '77582-65J10' },
      { desc: 'WEATHERSTRIP, RR DOOR SPLASH', code: '28', sku: '77592-65J10' },
      { desc: 'WEATHERSTRIP, RR DOOR SPLASH', code: '23', sku: '77592-65J10' },
      { desc: 'WEATHERSTRIP, FR DOOR SPLASH', code: '13', sku: '77582-65J10' },
    ],
  },
  {
    title: 'בין דלתות JB420W-4 E22|245A - 245A - GARNISH (LHD:W/ROOFRAIL)',
    rows: [
      { desc: 'WEATHERSTRIP, RR DR CTR PLR LH', code: '39', sku: '84655-65J00' },
      { desc: 'WEATHERSTRIP, RR DR CTR PLR RH', code: '38', sku: '84645-65J00' },
    ],
  },
  {
    title: 'בין דלות JB420W-4 E22|245 - 245 - GARNISH (LHD:N/ROOFRAIL)',
    rows: [
      { desc: 'WEATHERSTRIP, RR DR CTR PLR LH', code: '32', sku: '84655-65J00' },
      { desc: 'WEATHERSTRIP, RR DR CTR PLR RH', code: '31', sku: '84645-65J00' },
    ],
  },
  {
    title: 'חלון גג JB420W-4 E22|249 - 249 - SLIDING ROOF (W/SUNROOF)',
    rows: [
      { desc: 'WEATHERSTRIP, SLIDING ROOF', code: '3', sku: '78715-65J00' },
    ],
  },
  {
    title: 'דלת תא מטען JB420W-4 E22|256A - 256A - BACK DOOR PANEL (SEE NOTE)',
    rows: [
      { desc: 'WEATHERSTRIP, OPENING', code: '27', sku: '84681-65J10' },
    ],
  },
]

export default function PartsNumbersPage() {
  return (
    <div className="parts-numbers-page" dir="rtl">
      <div className="parts-numbers-header">
        <h1>🔩 מק"טים לחלקים</h1>
        <p>מספרי קטלוג לחלפים מקוריים וחלופיים — גרנד ויטרה</p>
      </div>

      <div className="parts-numbers-container">
        <div className="parts-numbers-section">
          <h2 className="parts-numbers-section-title">מקטים פופולריים</h2>
          <div className="parts-numbers-table-wrap">
            <table className="parts-numbers-table">
              <thead>
                <tr>
                  <th>מוצר</th>
                  <th>מק"ט 2.0</th>
                  <th>מק"ט 2.4</th>
                </tr>
              </thead>
              <tbody>
                {parts.map((p) => (
                  <tr key={p.product}>
                    <td className="product-cell">{p.product}</td>
                    <td><code className="sku-code">{p.sku20}</code></td>
                    <td>{p.sku24 && <code className="sku-code">{p.sku24}</code>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="parts-numbers-section">
          <h2 className="parts-numbers-section-title">גומיות איטום דלתות וחלונות</h2>
          <div className="weatherstrip-intro">
            <p className="weatherstrip-intro-text">מק"טים של גומיות חלונות חיצוניות וקישורים לקנייה:</p>
            <div className="weatherstrip-links">
              {weatherstripLinks.map((l) => (
                <div key={l.sku} className="weatherstrip-link-row">
                  <span className="weatherstrip-link-name">{l.name}</span>
                  <code className="sku-code">{l.sku}</code>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="weatherstrip-link-url">{l.url}</a>
                </div>
              ))}
            </div>
            <a href={weatherstripDiagramUrl} target="_blank" rel="noopener noreferrer" className="weatherstrip-diagram-link">
              📐 תרשים ושרטוט דלתות אחוריות
            </a>
          </div>

          {weatherstripTables.map((t) => (
            <div key={t.title} className="weatherstrip-subtable">
              <h3 className="weatherstrip-subtable-title">{t.title}</h3>
              <div className="parts-numbers-table-wrap">
                <table className="parts-numbers-table">
                  <thead>
                    <tr>
                      <th>תיאור פריט</th>
                      <th>קוד פריט</th>
                      <th>מק"ט</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r, i) => (
                      <tr key={i}>
                        <td className="product-cell">{r.desc}</td>
                        <td className="dim-cell">{r.code}</td>
                        <td><code className="sku-code">{r.sku}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="parts-numbers-section">
          <h2 className="parts-numbers-section-title">באנדים / בנדים</h2>
          <div className="parts-numbers-image-wrap">
            <img src="/1000419009.webp" alt="טבלת מידות באנדים / בנדים" className="parts-numbers-image" />
          </div>
        </div>
      </div>
    </div>
  )
}
