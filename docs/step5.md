# Step 5

Create file `/lib/mongodb.js`

~~~JavaScript
// root/lib/mongodb.js
import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        {/* Connect By $MONGODB_URI in .evn file */}
        await mongoose.connect(process.env.MONGODB_URI);
        {/* for success */}
        console.log("MongoDB connected");
    } catch (error) {
        {/* for error */}
        console.log(error);
    }
}

// import mongoose from "mongoose";
~~~

Create file `/models/user.js`

~~~JavaScript
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false,
        default: "user",
    },

},
    { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
~~~

Edit file `/src/app/api/register/route.js`

~~~JavaScript
import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongogb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        {/* + code step 5 */}
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({
            name,
            email,
            password: hashedPassword,
        });
        {/* end + code step 5 */}

        {/* remove 
        console.log("name", name),
        console.log("email", email),
        console.log("password", password)
        */}

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
~~~

Edit file `/src/app/register/page.jsx`

~~~JavaScript
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
    {/* + code step 5 */}
    const [success, setSuccess] = useState('')
    {/* end + code step 5 */}

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
                {/* + code step 5 */}
                setSuccess('User registered successfully');
                {/* end + code step 5 */}
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

                {/* + code step 5 */}
                {success && (<div className='bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md my-2'>{success}</div>)}
                {/* end + code step 5 */}

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
~~~

[Next Step >>](step6.md)
