import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

export const FeaturedProp = () => {
  return (
    <div className='relative box-content w-72 h-80 rounded-lg'>
        <div className='z-0 m-0 w-fit'>
            <img className='rounded-t-lg' src="./images/1.jpg" alt="living room with kitchen in the background" srcset=""/>
        </div>
        <div className='text-white bg-primary px-4 py-1 text-xs rounded absolute top-3 left-3 z-10'>FEATURED</div>
        <div className='text-white bg-darker  px-4 py-1 text-xs rounded absolute top-3 right-3 z-10'>FOR SALE</div>
        <img className='rounded-full border-4 border-white absolute w-10 h-10 bottom-28 right-3 z-10' src="./images/p3.jpg" alt="white girl with black hair" srcset=""/>
        <div className='px-3 pt-4'>
            <h1 className='text-dark text-sm font-bold'>Lilys' Apartment</h1>
            <h2 className='text-gray-400 text-xs'>120 m<sup>2</sup> Chavchavadze Ave. 21</h2>
        </div>
        <div className='flex flex-row text-gray-400'>
            <div>
                <FontAwesomeIcon icon={faBed}/>
                <p>3 Beds</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faBed}/>
                <p>2 Baths</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faBed}/>
                <p>1 Garage</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faBed}/>
                <p>12th floor</p>
            </div>
        </div>
    </div>
  )
}
