"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { set } from 'mongoose'

function page() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    {/* for re-check data input */}
    // console.log(name, email, password, confirmPassword)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // check if all fields are filled
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields')
            return
        }

        // check if password and confirm password match
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        try {
            // sniper to api register method POST
            const res = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })

            // check if register success
            if (res.ok) {
                const form = e.target;
                setError('');
                form.reset();
            } else {
                console.log('user registered failed')
            }

        } catch(error) {
            console.log("Error during registration : ", error)
        }
    }

  return (
    <div>
        <Navbar />
        <div className='container mt-auto'>
            <h3>Register Page</h3>
            <hr className='my-3' />
            <form onSubmit={handleSubmit} action=''>

                {error && (<div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md my-2'>{error}</div>)}

                <input onChange={(e) => setName(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your name' />
                <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                <input onChange={(e) => setConfirmPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                <button type='submit' className='bg-green-500 text-white p-2 rounded-md'>Sign Up</button>
            </form>
            <hr className='my-3' />
            <p>Already have an account? Go to <a className='text-blue-500 hover:underline' href='/login'>Sign In</a></p>
        </div>
    </div>
  )
}

export default page