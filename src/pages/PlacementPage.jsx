import React from 'react'
import Footer from '../componenets/common/Footer'
import Topbar from '../componenets/common/Topbar'
import Header from '../componenets/common/Header'
import PlacedStudents from '../componenets/common/PlacedStudents'
import EnquiryForm from '../componenets/common/EnquiryForm'
function PlacementPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PlacedStudents/>
      <EnquiryForm/>
      <Footer/>
    </>
  )
}

export default PlacementPage