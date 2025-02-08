import React from 'react'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import Gallery from '../componenets/Gallery'
import EnquiryForm from '../componenets/common/EnquiryForm'
import Footer from '../componenets/common/Footer'

function GalleryPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <Gallery/>
      <EnquiryForm/>
      <Footer/>
    </>
  )
}

export default GalleryPage