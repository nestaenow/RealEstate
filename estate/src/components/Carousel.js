import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { BsCircleFill } from "react-icons/bs";

export const Carousel = () => {
  return (
    <div className='flex flex-row justify-center items-center text-primary my-12'>
        <p className='mx-2 text-xs'><BsCircleFill/></p>
        <p className='mx-2 text-xs'><BsCircleFill/></p>
        <p className='mx-2 text-md'><FontAwesomeIcon icon={faCircle}/></p>
        <p className='mx-2 text-xs'><BsCircleFill/></p>
        <p className='mx-2 text-xs'><BsCircleFill/></p>
    </div>
  )
}
