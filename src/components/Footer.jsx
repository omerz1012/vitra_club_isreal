import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>🚙</span>
              <div>
                <span className="footer-logo-main">גרנד ויטרה ישראל</span>
                <span className="footer-logo-sub">הקהילה הרשמית מאז 2016</span>
              </div>
            </div>
            <p>מאגר המידע המקיף ביותר לבעלי גרנד ויטרה בישראל — תחזוקה, שטח וקהילה.</p>
          </div>

          <div className="footer-links">
            <h4>ניווט מהיר</h4>
            <ul>
              <li><a href="#hero">בית</a></li>
              <li><a href="#stats">אודות</a></li>
              <li><a href="#database">מאגר מידע</a></li>
              <li><a href="#ai">חיפוש AI</a></li>
              <li><a href="#videos">סרטונים</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>עקבו אחרינו</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                📘
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                📸
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                📺
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                💬
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 קהילת גרנד ויטרה ישראל · כל הזכויות שמורות</span>
          <span>נבנה באהבה לקהילה 🇮🇱</span>
        </div>
      </div>
    </footer>
  )
}
