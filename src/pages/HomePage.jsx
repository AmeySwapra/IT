import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import HeroSection from '../componenets/HeroSection'
import About from '../componenets/About'
import Footer from '../componenets/common/Footer'
import EnquiryForm from '../componenets/common/EnquiryForm'
import HiringPartners from '../componenets/common/HiringPartners'

function HomePage() {
  return (
   <>
     <Topbar/>
     <Header/>
     <HeroSection/>
     <About/>
     <EnquiryForm/>
     <HiringPartners/>
     <Footer/>
   </>
  )
}

export default HomePage