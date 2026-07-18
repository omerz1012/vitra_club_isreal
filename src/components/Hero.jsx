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
        <div className="hero-badge">הקהילה הרשמית מאז 2016</div>
        <h1>
          קהילת בעלי<br />
          <span>גרנד ויטרה 2006-2015</span><br />
          בישראל
        </h1>
        <p>
          מאגר המידע המקיף ביותר לבעלי גרנד ויטרה בישראל.<br />
          טיפולים, חלקים, מדריכי DIY, וקהילה תומכת.
        </p>
      </div>

      <div className="hero-scroll">
        <span>↓</span>
      </div>
    </section>
  )
}
