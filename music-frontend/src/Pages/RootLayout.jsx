// import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'

// import Navbar from '../components/Navbar'


const RootLayout = () => {
  return (
    <>
      <div className="container">

        <Sidebar />

        <Outlet />

      </div>  

    </>
  )
}


export default RootLayout