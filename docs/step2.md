# Step 2

Create 3 file

1. `/components/Navbar.jsx`

~~~javaScript
// app/components/Navbar.jsx
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='bg-[#333] text-white p-5'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <Link href="/">
                            Micro API
                        </Link>
                    </div>
                    <ul className='flex'>
                        <li><Link className='mx-3' href="/register">Sign Up</Link></li>
                        <li><Link className='mx-3' href="/login">Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
~~~

2. `register/page.jsx`

~~~javaScript
// app/register/page.jsx
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

                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="text" placeholder='Enter your name' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="email" placeholder='Enter your email' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                <input className='block bg-gray-300 p-2 my-2 rounded-md' type="password" placeholder='Enter your password' />
                
                <button type='submit' className='bg-green-500 text-white p-2 rounded-md'>Sign Up</button>

            </form>

            <hr className='my-3' />

            <p>Already have an account? Go to <a className='text-blue-500 hover:underline' href='/login'>Sign In</a></p>

        </div>
    </div>
  )
}

export default page
~~~

3. `login/page.jsx`

~~~javaScript
// app/login/page.jsx
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
~~~

[Next Step >>](step3.md)
