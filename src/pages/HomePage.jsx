import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import HeroSection from '../componenets/HeroSection'
import About from '../componenets/About'
import Footer from '../componenets/common/Footer'
import EnquiryForm from '../componenets/common/EnquiryForm'
import HiringPartners from '../componenets/common/HiringPartners'
import CourseGrid from '../componenets/CourseGrid'
import Testimonial from '../componenets/common/Testimonail'
import FAQ from '../componenets/common/FAQ'
import Carousel from '../componenets/Carousel'

function HomePage() {
  return (
   <>
     <Topbar/>
     <Header/>
     <Carousel/>
     <HeroSection/>
     <About/>
     <CourseGrid/>
     <EnquiryForm/>
     <HiringPartners/>
     <Testimonial/>
     <FAQ/>
     <Footer/>
   </>
  )
}

export default HomePage