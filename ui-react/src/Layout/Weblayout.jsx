import React from 'react'
import Navbar from '../Components/Public/Navbar'
import Footer from '../Components/Public/Footer'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    
    
  )
}

export default Weblayout
