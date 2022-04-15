import React from 'react'
import { LandView } from '../components/LandView'
import { Navbar } from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <div className='mx-8'>
        <Navbar/>
        <LandView/>

        {/* options section */}
        <div>
            <div className='flex flex-row items-center'>
                <p className='text-white bg-primary px-3 py-2 rounded-lg text-2xl'><FontAwesomeIcon icon={faShieldHalved} /></p>
                <p className=''>Best Quality Gaurantee</p>
            </div>
            <div>If you buy or rent a house with us you are gauranteed with the best quality</div>
        </div>
    </div>
  )
}
