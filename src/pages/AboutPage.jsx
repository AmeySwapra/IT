import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import AboutSection from '../componenets/common/AboutSection'
import Footer from '../componenets/common/Footer'
import Counter from '../componenets/common/Counter'
import EnquiryForm from '../componenets/common/EnquiryForm'
import HiringPartners from '../componenets/common/HiringPartners'
import Testimonial from '../componenets/common/Testimonail'
import FAQ from '../componenets/common/FAQ'

function AboutPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <AboutSection/>
      <Counter/>
      <EnquiryForm/>
      <HiringPartners/>
      <Testimonial/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default AboutPage