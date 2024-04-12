import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const AppLaytout = () => {
  return (
    <>
      <div className=' px-5 w-full h-[90vh]'>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default AppLaytout
