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