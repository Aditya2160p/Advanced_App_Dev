import React from 'react'
import AdminNavbar from '../Components/Admin/AdminNavbar'
import Footer from '../Components/Public/Footer'
import AdminSidebar from '../Components/Admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <>
                    <AdminNavbar />
    <div className='m-0 p-0 flex flex-row h-[75vh] w-[100vw] overflow-hidden'>
                <AdminSidebar/>
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