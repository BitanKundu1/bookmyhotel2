import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
        <Link to='/'>
            <h1 className='text-black-500 font-extrabold h-9  text-2xl'>bookmyhotel</h1>
        </Link>
        <UserButton/>

    </div>
  )
}

export default Navbar