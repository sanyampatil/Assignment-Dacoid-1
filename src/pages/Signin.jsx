import React from 'react'

const Signin = () => {
  return (
    <div className=''>
      <div className='mt-10'>
        <form action=''>
          <div>
            <h3 className='text-3xl font-bold'>Welcome Back</h3>
            <div className='flex  flex-col  mt-5 gap-5 w-full'>
              <input
                type='text'
                className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                placeholder='Email'
              />

              <input
                type='text'
                className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                placeholder='Password'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
