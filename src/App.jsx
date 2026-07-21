import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import Stats from './components/Stats'
import InfoDatabase from './components/InfoDatabase'
import Videos from './components/Videos'
import Gallery from './components/Gallery'
import Partners from './components/Partners'
import Footer from './components/Footer'
import CodeGate from './components/CodeGate'
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
import GalleryDetailPage from './pages/GalleryDetailPage'
import InfoPage from './pages/InfoPage'
import TakanonPage from './pages/TakanonPage'
import DrawingPage from './pages/DrawingPage'
import OffRoadPage from './pages/OffRoadPage'
import DrawingDetailPage from './pages/DrawingDetailPage'
import PartsNumbersPage from './pages/PartsNumbersPage'
import DiyPage from './pages/DiyPage'
import DealsPage from './pages/DealsPage'

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
      <ScrollToTop />
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
        <Route path="/information/coupons" element={<CodeGate><CouponsPage /></CodeGate>} />
        <Route path="/information/off-road" element={<OffRoadPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:folderId" element={<GalleryDetailPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/takanon" element={<TakanonPage />} />
        <Route path="/information/drawing" element={<DrawingPage />} />
        <Route path="/information/drawing/:slug" element={<DrawingDetailPage />} />
        <Route path="/information/parts-numbers" element={<PartsNumbersPage />} />
        <Route path="/information/diy" element={<DiyPage />} />
        <Route path="/deals" element={<CodeGate><DealsPage /></CodeGate>} />
      </Routes>
      <Analytics />
    </>
  )
}
