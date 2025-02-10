import React from 'react'
import Header from '../componenets/common/Header'
import Topbar from '../componenets/common/Topbar'
import CourseGrid from '../componenets/CourseGrid'
import EnquiryForm from '../componenets/common/EnquiryForm'
import HiringPartners from '../componenets/common/HiringPartners'
import Footer from '../componenets/common/Footer'

function CoursesPage() {
  return (
     <>
       <Topbar/>
       <Header/>
       <CourseGrid/>
       <EnquiryForm/>
       <HiringPartners/>
       <Footer/>
     </>
  )
}

export default CoursesPage