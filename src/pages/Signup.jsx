import React from 'react'
import Input from '../components/Inpute'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Signup = () => {
  return (
    <>
      <div className=''>
        <div className='mt-10'>
          <form action=''>
            <div>
              <h3 className='text-3xl font-bold'>create an account</h3>
              <div className='flex  flex-col  mt-5 gap-5 w-full'>
                <Input
                  label='First Name'
                  placeholder='First Name'
                  className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                  // {...register('title', { required: true })}
                />

                <Input
                  label='Last Name'
                  placeholder='Last Name'
                  className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                  // {...register('title', { required: true })}
                />

                <Input
                  label='Email'
                  placeholder='Email'
                  className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                  // {...register('title', { required: true })}
                />

                <Input
                  label='Password'
                  placeholder='Password'
                  className=' w-full bg-gray-100 p-5 text-xl rounded-lg'
                  // {...register('title', { required: true })}
                />

                <div>
                  By proceeding, I agree to all{' '}
                  <span className='  underline text-blue-500 '>T&C</span> and{' '}
                  <span className='  underline text-blue-500 '>
                    Privacy Polic
                  </span>
                </div>
              </div>
              <Button
                type='submit'
                bgColor={'bg-blue-500'}
                className='w-full mt-14'
              >
                {'Create an Account'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
