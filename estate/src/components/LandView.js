import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faHouse } from '@fortawesome/free-solid-svg-icons'

export const LandView = () => {
  return (
      <div>
        <div className='relative'>
            <div>
                <img src='./images/Estately.png' alt="" srcset="" className='rounded-xl' height={400} width={'100%'}/>
            </div>
            <div className='absolute bottom-5 ml-20'>
                <h1 className='text-darker font-bold text-xl tablet:text-4xl laptop:text-6xl  mb-3'>
                    Find your next <span className='text-primary'>perfect</span><br/> place with ease
                </h1>
                <div className='text-gray-400 text-sm mb-8'>
                    Estately will help you find your home fast, easy and comfortable. <br/>
                    Our expert support are always available. Let's Start now!
                </div>
                <div className='text-primary text-xl mb-32'>
                    <div className=' mb-1'>
                        <FontAwesomeIcon icon={faSackDollar} />
                        <span className='text-dark font-bold text-sm mx-2'>$20,5M</span>
                        <span className='text-gray-400 text-xs'>Earned throught property transactions</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouse} />
                        <span className='text-dark font-bold text-sm mx-2'>19k +</span>
                        <span className='text-gray-400 text-xs'>Earned throught property transactions</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative  flex flex-col mx-20 bottom-28'>
            <div className='flex flex-row bg-light box-content w-fit rounded-t-xl cursor-pointer'>
                <div className='px-16 py-4 font-semibold text-base text-gray-500 rounded-t-xl bg-white'>Rent</div>
                <div className='px-16 py-4 font-semibold text-base text-gray-500'>Buy</div>
                <div className='px-16 py-4 font-semibold text-base text-gray-500'>Co-Living</div>
            </div>
            <div className='sticky flex flex-row justify-between bg-white p-10 rounded-r-xl rounded-bl-xl  drop-shadow-xl'>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Location</div>
                    <div className='text-night font-bold text-xl'>Tbilisi</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Property Type</div>
                    <div className='text-night font-bold text-xl'>Private House</div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Property Size</div>
                    <div className='text-night font-bold text-xl'>120 m<sup>2</sup>- 150 m<sup>2</sup></div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-gray-400 mb-3'>Property Price Range</div>
                    <div className='text-night font-bold text-xl'>$85,000 - $98,000</div>
                </div>
                
                <button className='bg-primary text-white px-14 py-4 rounded-md'>
                    Search
                </button>
            </div>
        </div>
      </div>
  )
}
