import React from 'react'
import { GiNetworkBars } from 'react-icons/gi'
import { IoIosWifi } from 'react-icons/io'
import { IoBatteryFull } from 'react-icons/io5'
  
const Header = () => {
  return (
    <div className=' h-[44px] flex justify-between items-center'>
      <div className='time font-semibold'> 9:41</div>

      <div className='HeadUIcons  flex gap-2 text-xl'>
        <GiNetworkBars />
        <IoIosWifi />
        <IoBatteryFull />
      </div>
    </div>
  )
}

export default Header
