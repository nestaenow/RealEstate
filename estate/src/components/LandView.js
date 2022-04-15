import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faHouse } from '@fortawesome/free-solid-svg-icons'

export const LandView = () => {
  return (
      <div>
        <div className=''>
            <div>
                <img src='./images/Estately.png' alt="" srcset="" className='rounded-xl' height={400} width={'100%'}/>
            </div>
            <div className='absolute bottom-44 ml-32'>
                <div className='text-darker font-bold text-6xl mb-5'>
                    Find your next <span className='text-primary'>perfect</span><br/> place with ease
                </div>
                <div className='text-gray-400 text-lg mb-14'>
                    Estately will help you find your home fast, easy and comfortable. <br/>
                    Our expert support are always available. Let's Start now!
                </div>
                <div className='text-primary text-2xl mb-28'>
                    <div className=' mb-3'>
                        <FontAwesomeIcon icon={faSackDollar} />
                        <span className='text-dark font-bold text-base mx-2'>$20,5M</span>
                        <span className='text-gray-400 text-sm'>Earned throught property transactions</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHouse} />
                        <span className='text-dark font-bold text-base mx-2'>19k +</span>
                        <span className='text-gray-400 text-sm'>Earned throught property transactions</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='relative justify-between bg-white flex flex-row rounded-r-xl mx-20 p-10 bottom-20 drop-shadow-xl'>
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
  )
}
