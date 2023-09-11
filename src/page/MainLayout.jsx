import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='grid grid-cols-2a relative'>
      <div className=''>
        <SideBar />
      </div>
      <div className='bg-#170f23'>
        <Outlet />
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout