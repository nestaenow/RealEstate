import React from 'react'

export const FeaturedProp = () => {
  return (
    <div className='relative box-content w-72 h-80 rounded-lg'>
        <div className='z-0'>
            <img src="./images/1.jpg" alt="living room with kitchen in the background" srcset="" className='rounded-t-lg'/>
        </div>
        <div className='text-white bg-primary px-4 py-1 text-xs rounded absolute top-3 left-3 z-10'>FEATURED</div>
        <div className='text-white bg-darker  px-4 py-1 text-xs rounded absolute top-3 right-3 z-10'>FOR SALE</div>
        <div>
            <img src="" alt="" srcset="" />
        </div>
    </div>
  )
}
