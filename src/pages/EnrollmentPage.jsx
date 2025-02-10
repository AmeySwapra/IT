import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import EnquiryForm from '../componenets/common/EnquiryForm'
import EnrollmentForm from '../componenets/EnrollmentForm'
import Footer from '../componenets/common/Footer'
function EnrollmentPage() {
  return (
    <>
       <Topbar/>
       <Header/>
       <EnrollmentForm/>
       <EnquiryForm/>
       <Footer/>
    </>
  )
}

export default EnrollmentPage