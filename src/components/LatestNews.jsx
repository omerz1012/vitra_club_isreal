import { useNavigate } from 'react-router-dom'
import { news } from '../data/news'
import Linkify from './Linkify'
import './LatestNews.css'

export default function LatestNews() {
  const navigate = useNavigate()

  if (news.length === 0) return null

  const latest = news[0]

  return (
    <section className="latest-news-section" id="news">
      <div className="container">
        <h2 className="section-title">חדשות <span>המועדון</span></h2>

        <div className="latest-news-card" onClick={() => navigate('/news')}>
          {latest.image && <img src={latest.image} alt={latest.title} className="latest-news-image" />}
          <div className="latest-news-body">
            <div className="latest-news-title-row">
              <h3>{latest.title}</h3>
              {latest.date && <span className="latest-news-date">{latest.date}</span>}
            </div>
            <p><Linkify text={latest.description} /></p>
          </div>
        </div>

        <button className="latest-news-more" onClick={() => navigate('/news')}>
          עוד חדשות ←
        </button>
      </div>
    </section>
  )
}
