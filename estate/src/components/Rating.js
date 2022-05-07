import React from 'react'
import { GoPrimitiveDot } from "react-icons/go"
import { HiStar } from "react-icons/hi"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export const Rating = ({ratings}) => {
  return (
    <div className='flex flex-row justify-around'>
        {ratings.map((rating) => (
            <div className='box-content w-5/12 flex flex-row py-5 pl-8 bg-white hover:drop-shadow-md rounded-lg text-sm'>
                <div className='text-6xl mr-6 text-gray-300'>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </div>
                <div className='text-gray-400 font-medium my-5 mr-8'>
                    <p className='mb-2'>{rating.description}</p>
                    <div className='flex flex-row items-center mb-1'>
                        <p className='text-dark font-semibold'>{rating.author}</p>
                        <p className='text-xs text-darker px-2'><GoPrimitiveDot/></p>
                        <p className='text-light'>{rating.position}</p>
                    </div>
                    <div className='flex flex-row text-primary text-lg'>
                        <HiStar/>
                        <HiStar/>
                        <HiStar/>
                        <HiStar/>
                        <HiStar/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
