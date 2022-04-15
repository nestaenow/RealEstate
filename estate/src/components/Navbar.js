import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'

export const Navbar = () => {
  return (
    <div className='py-5 flex flex-row justify-between content-center text-lg'>
      <div className='flex flex-row items-center text-darker font-bold text-2xl'>
        <div><FontAwesomeIcon icon={faBuilding} /></div>
        <div className='pl-2'>Estately</div>
      </div>
      <div>
        <a href="/" className='px-5 text-gray-400 font-normal'>Home</a>
        <a href="/" className='px-5 text-gray-400 font-normal'>Our Properties</a>
        <a href="/" className='px-5 text-gray-400 font-normal'>Agents</a>
        <a href="/" className='px-5 text-gray-400 font-normal'>Blog</a>
        <a href="/" className='px-5 text-gray-400 font-normal'>Login/Sign Up</a>
        <button className='bg-primary text-white px-4 py-2 rounded-md'>
          Contact Us
        </button>
      </div>
    </div>
  )
}
