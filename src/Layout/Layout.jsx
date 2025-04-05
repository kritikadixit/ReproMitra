import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <> 
      <Navbar/>
      <div className="pt-16">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout