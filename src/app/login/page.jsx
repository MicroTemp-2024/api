"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div>
        <Navbar />
        <div className='container mt-auto'>
            <h3>Register Page</h3>
            <hr className='my-3' />
            <form action=''>
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                <button type='submit' className='bg-green-500 text-white p-2 rounded-md'>Sign In</button>
            </form>
            <hr className='my-3' />
            <p>Do not have an account? Go to <a className='text-blue-500 hover:underline' href='/register'>Sign Up</a></p>
        </div>
    </div>
  )
}

export default page