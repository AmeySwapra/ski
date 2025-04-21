import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ClientPage from './pages/ClientPage'
import InfrastructurePage from './pages/InfrastructurePage'
import VideoPage from './pages/VideoPage'
import ContactPage from './pages/ContactPage'
import ServicePage from './pages/ServicePage'
import ImagePage from './pages/ImagePage'

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/clients' element={<ClientPage/>} />
            <Route path='/infrastructure' element={<InfrastructurePage/>} />
            <Route path='/gallery-videos' element={<VideoPage/>} />
            <Route path='/contact-us' element={<ContactPage/>} />
            <Route path='/services' element={<ServicePage/>} />
            <Route path='/gallery-images' element={<ImagePage/>} />
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App