import React from 'react'
import run from '../../../public/run.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Getburn = () => {
  return (
    <>
      <div className='  relative h-[80vh]  border-2  border-white'>
        <div className='absolute  right-0   top-4 '>
          <Link
            to='/getBurn'
           className=' underline text-blue-400 text-lg'
            href='#'
          >
            skip
          </Link>
        </div>

        <div className='image mt-20  '>
          <img src={run} alt='' />
        </div>
        <div className='heading   mt-16'>
          <h1 className=' font-bold text-[#2C2B2B] text-2xl'>
            Track Your Goal
          </h1>
          <p className='text-lg mt-3'>
            Don’t worry if you have trouble determining your goals, We can help
            you determine your goals and track your goals
          </p>
        </div>
        <div className=' absolute right-0 mt-10 w-[60px] h-[60px] bg-blue-400 flex justify-center items-center  rounded-full text-white font-bold text-4xl'>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  )
}

export default Getburn
