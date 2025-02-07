import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import HeroSection from '../componenets/HeroSection'
import About from '../componenets/About'
import Footer from '../componenets/common/Footer'

function HomePage() {
  return (
   <>
     <Topbar/>
     <Header/>
     <HeroSection/>
     <About/>
     <Footer/>
   </>
  )
}

export default HomePage