// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        
          <img className='h-96' src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg?w=740&t=st=1681226050~exp=1681226650~hmac=20a0d42cd5e21b884d4dd0a7853e8a6c953c07d17637577e3c00a4450286ca3c"  alt="" />
       
        <div className='max-w-md text-center'>
          <p className='text-xl text-red-500 md:text-xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-6 py-3 text-xl rounded-lg bg-violet-500 text-white'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ErrorPage;