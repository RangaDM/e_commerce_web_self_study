import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import 'tailwindcss/tailwind.css'

const MainLayout = () => {
  return (
    <div className= "overflow-hidden w-screen h-screen">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout