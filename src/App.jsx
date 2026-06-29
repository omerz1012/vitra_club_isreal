import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import InfoDatabase from './components/InfoDatabase'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import Footer from './components/Footer'
import MaintenancePage from './pages/MaintenancePage'
import OilsPage from './pages/OilsPage'
import BulbsPage from './pages/BulbsPage'
import SitesPartsPage from './pages/SitesPartsPage'
import RadioPage from './pages/RadioPage'
import BusinessesPage from './pages/BusinessesPage'
import ClubBusinessesPage from './pages/ClubBusinessesPage'
import CouponsPage from './pages/CouponsPage'
import VideosPage from './pages/VideosPage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import InfoPage from './pages/InfoPage'
import TakanonPage from './pages/TakanonPage'
import DrawingPage from './pages/DrawingPage'
import DrawingDetailPage from './pages/DrawingDetailPage'

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <InfoDatabase />
        <Videos />
        <Gallery />
        {/* <Partners /> */}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/information/oils" element={<OilsPage />} />
        <Route path="/information/bulbs" element={<BulbsPage />} />
        <Route path="/information/sites-parts" element={<SitesPartsPage />} />
        <Route path="/information/radio-frequencies" element={<RadioPage />} />
        <Route path="/information/recommended-businesses" element={<BusinessesPage />} />
        <Route path="/information/club-businesses" element={<ClubBusinessesPage />} />
        <Route path="/information/coupons" element={<CouponsPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/takanon" element={<TakanonPage />} />
        <Route path="/information/drawing" element={<DrawingPage />} />
        <Route path="/information/drawing/:slug" element={<DrawingDetailPage />} />
      </Routes>
    </>
  )
}
