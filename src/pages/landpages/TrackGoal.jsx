import React from 'react'
import cycle from '../../../public/cycle.png'
import { MdKeyboardArrowRight } from 'react-icons/md'

const TrackGoal = () => {
  return (
    <>
      <div className='  relative h-[80vh]  border-2  border-white'>
        <div className='absolute  right-0   top-4 '>
          <a className=' underline text-blue-400 text-lg' href='/'>
            skip
          </a>
        </div>

        <div className='image  mt-28  '>
          <img className='h-[267px]' src={cycle} alt='' />
        </div>
        <div className='heading mt-28'>
          <h1 className=' font-bold text-[#2C2B2B] text-2xl'>Get Burn</h1>
          <p className='text-lg mt-3'>
            Let’s keep burning to achieve your goals, it hurts only temporarily,
            if you give up now you will be in pain foreve
          </p>
        </div>
        <div className=' absolute right-0 mt-10 w-[60px] h-[60px] bg-blue-400 flex justify-center items-center  rounded-full text-white font-bold text-4xl'>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  )
}

export default TrackGoal
