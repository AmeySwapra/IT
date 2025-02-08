import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import PlacementPage from './pages/PlacementPage'
import AboutPage from './pages/AboutPage'
import CareerPage from './pages/CareerPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/placement' element={<PlacementPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/career' element={<CareerPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App