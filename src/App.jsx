import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import ClientPage from './pages/ClientPage'
import InfrastructurePage from './pages/InfrastructurePage'
import VideoPage from './pages/VideoPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import ImagePage from './pages/ImagePage'
import AboutPage from './pages/AboutPage'
import Test from './pages/Test'
import VacuumProductPage from './pages/product-pages/VacuumProductPage'
import GlassVacuumLifterPage from './pages/product-pages/GlassVacuumLifterPage'
import IndustrialVacuumLifterPage from './pages/product-pages/IndustrialVacuumLifterPage'
import ElectricVacuumLifterPage from './pages/product-pages/ElectricVacuumLifterPage'
import MechanicalVacuumLifterPage from './pages/product-pages/MechanicalVacuumLifterPage'
import LoadVacuumLifterPage from './pages/product-pages/LoadVacuumLifterPage'
import ProductDetailsPage from './pages/product-pages/ProductDetailsPage'


const PageOverlay = ({ onComplete }) => (
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: '100%' }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    onAnimationComplete={onComplete}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f6a408',
      zIndex: 9999,
      pointerEvents: 'none',
    }}
  />
)

const AnimatedRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [nextPath, setNextPath] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)


  const handleNavigation = (path) => {
    if (path !== location.pathname) {
      setNextPath(path)
      setShowOverlay(true)
    }
  }


  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a')
      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault()
        const path = link.getAttribute('href')
        handleNavigation(path)
      }
    }
    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  }, [location])

 
  const handleOverlayComplete = () => {
    if (nextPath) {
      navigate(nextPath)             
      setShowOverlay(false)
      setNextPath(null)
    }
  }

  return (
    <>
      <AnimatePresence>
        {showOverlay && <PageOverlay onComplete={handleOverlayComplete} />}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/clients' element={<ClientPage />} />
          <Route path='/infrastructure' element={<InfrastructurePage />} />
          <Route path='/gallery-videos' element={<VideoPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/gallery-images' element={<ImagePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/blade-lifters-for-windmill' element={<Test />} />
          <Route path='/vacuum-lifters' element={<VacuumProductPage />} />
          <Route path='/glass-vacuum-lifter' element={<GlassVacuumLifterPage />} />
          <Route path='/industrial-vacuum-lifter' element={<IndustrialVacuumLifterPage />} />
          <Route path='/electric-vacuum-lifter' element={<ElectricVacuumLifterPage />} />
          <Route path='/mechanical-vacuum-lifter' element={<MechanicalVacuumLifterPage />} />
          <Route path='/load-vacuum-lifter' element={<LoadVacuumLifterPage />} />
          <Route path="/products/:productSlug" element={<ProductDetailsPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
