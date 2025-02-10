import React from 'react'
import Header from '../componenets/common/Header'
import Topbar from '../componenets/common/Topbar'
import DetailCourse from '../componenets/common/DetailCourse'
import EnquiryForm from '../componenets/common/EnquiryForm'
import Footer from '../componenets/common/Footer'
import EnrollmentSection from '../componenets/common/EnrollmentSection'

function DetailCoursePage() {
  return (
    <>
       <Topbar/>
       <Header/>
       <DetailCourse/>
       <EnrollmentSection/>
       <EnquiryForm/>
       <Footer/>
    </>
  )
}

export default DetailCoursePage