import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import PlacementPage from './pages/PlacementPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/placement' element={<PlacementPage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App