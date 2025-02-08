import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import Contact from '../componenets/Contact'
import Footer from '../componenets/common/Footer'
import EnquiryForm from '../componenets/common/EnquiryForm'

function ContactPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Contact/>
      <EnquiryForm/>
      <Footer/>
    </>
  )
}

export default ContactPage