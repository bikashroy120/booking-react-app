import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'


const Layout = () => {
  return (
    <div className='lg:px-16 px-5 flex flex-col'>
        <Navber/>
        <Outlet/>
    </div>
  )
}

export default Layout