import React from 'react'
import { Button } from './Button'

export const Navbar = () => {
  return (
    <div className='py-5 flex flex-row justify-between'>
      <div>
        <p className='text-darker font-medium text-xl mx-4'>Estately</p>
      </div>
      <div className='mx-4'>
        <a href="/" className='px-3 text-gray-400'>Home</a>
        <a href="/" className='px-3 text-gray-400'>Our Properties</a>
        <a href="/" className='px-3 text-gray-400'>Agents</a>
        <a href="/" className='px-3 text-gray-400'>Blog</a>
        <a href="/" className='px-3 text-gray-400'>Login/Sign Up</a>
        <Button>
          Contact Us
        </Button>
        {/* <a href="/" className='px-3 text-gray-400'>Contact Us</a> */}
      </div>
    </div>
  )
}
