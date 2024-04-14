import React from 'react'
import Input from '../components/Inpute'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
const Signin = () => {
  return (
    <div className=''>
      <div className='mt-10'>
        <form action='' className='flex flex-col justify-between  gap-32'>
          <div>
            <h3 className='text-3xl font-bold'>Welcome Back</h3>
            <div className='flex  flex-col  mt-5 gap-5 w-full'>
              {/* <input
                type='text'
                className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                placeholder='Email'
              /> */}
              <Input
                label='Password :'
                placeholder='email'
                className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                // {...register('title', { required: true })}
              />
              <Input
                label='Password :'
                placeholder='Password'
                className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                // {...register('title', { required: true })}
              />

              <p className='text-gray-300 underline'>
                <Link>Forgot your password?</Link>
              </p>
            </div>
          </div>
          <div className='mt-20'>
            <Button
              type='submit'
              bgColor={'bg-blue-500'}
              className='w-full mt-14'
            >
              {'Sign In'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
