import React from 'react'
import { LandView } from '../components/LandView'
import { Navbar } from '../components/Navbar'

export const Home = () => {
  return (
    <div className='mx-6'>
        <Navbar/>
        <LandView/>
    </div>
  )
}
