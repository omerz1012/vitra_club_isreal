import { useNavigate } from 'react-router-dom'
import { news } from '../data/news'
import Linkify from './Linkify'
import './LatestNews.css'

export default function LatestNews() {
  const navigate = useNavigate()

  if (news.length === 0) return null

  return (
    <section className="latest-news-section" id="news">
      <div className="container">
        <h2 className="section-title">חדשות <span>המועדון</span></h2>

        <div className="latest-news-list">
          {news.slice(0, 2).map((n, i) => (
            <div key={i} className="latest-news-card" onClick={() => navigate(n.linkTo || '/news')}>
              {n.image && <img src={n.image} alt={n.title} className="latest-news-image" />}
              <div className="latest-news-body">
                <div className="latest-news-title-row">
                  <h3>{n.title}</h3>
                  {n.date && <span className="latest-news-date">{n.date}</span>}
                </div>
                <p><Linkify text={n.description} /></p>
              </div>
            </div>
          ))}
        </div>

        <button className="latest-news-more" onClick={() => navigate('/news')}>
          עוד חדשות ←
        </button>
      </div>
    </section>
  )
}
