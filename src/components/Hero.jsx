import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <img
          src="/header.jpeg"
          alt="Grand Vitara off-road"
          className="hero-img"
        />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">🏆 הקהילה הרשמית מאז 2016</div>
        <h1>
          קהילת בעלי<br />
          <span>גרנד ויטרה</span><br />
          בישראל
        </h1>
        <p>
          מאגר המידע המקיף ביותר לבעלי גרנד ויטרה בישראל.<br />
          טיפולים, חלקים, מדריכי DIY, וקהילה תומכת.
        </p>
        <div className="hero-buttons">
          <a href="#join" className="btn-primary">הצטרפו למועדון</a>
          <a href="#database" className="btn-secondary">מאגר המידע</a>
        </div>

        <div className="hero-platforms">
          <a href="https://www.facebook.com/share/g/1PKeizgd1F/" target="_blank" rel="noreferrer" className="platform-pill">
            <span>📘</span> פייסבוק · 6,385
          </a>
          <a href="https://www.instagram.com/gv4x4_israel_team?igsh=aWpyZWJ4czZ2cTA0" target="_blank" rel="noreferrer" className="platform-pill">
            <span>📸</span> אינסטגרם · 1,180
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="platform-pill">
            <span>💬</span> וואטסאפ · 942
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>↓</span>
      </div>
    </section>
  )
}
