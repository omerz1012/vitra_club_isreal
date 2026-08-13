import { useNavigate } from 'react-router-dom'
import './FriendsClubCta.css'

export default function FriendsClubCta() {
  const navigate = useNavigate()

  return (
    <div className="friends-club-cta-wrap">
      <button className="friends-club-cta-btn" onClick={() => navigate('/friends-club')} dir="ltr">
        <img src="/club_image.png" alt="כרטיס חבר מועדון" className="friends-club-cta-img" />
        <span className="friends-club-cta-text">כניסה לכרטיס חבר מועדון ←</span>
      </button>
    </div>
  )
}
