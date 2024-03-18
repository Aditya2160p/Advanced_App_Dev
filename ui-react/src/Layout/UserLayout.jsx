import React from 'react'
import Navbar from '../Components/Public/Navbar'
import Footer from '../Components/Public/Footer'
import Sidebar from '../Components/User/Sidebar'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <>
                    <Navbar />
    <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <Sidebar />
                <div className=''>
                    <div className='w-[85vw]h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
                        <Footer/>
        </>
    
    
  )
}

export default Userlayout