import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {

  


  return (
    <div className='container'>
        <Navbar />

        {/* Render the current component */}
        <div id='main-container'>
          <Outlet/>
        </div>
         

        <Footer/>
    </div>
  )
}
