import React from 'react'
import { useState } from 'react'
import { LandView } from '../components/LandView'
import { Navbar } from '../components/Navbar'
import { Options } from '../components/Options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faPaperPlane, faLock, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { FeaturedProp } from '../components/FeaturedProp'

export const Home = () => {
    const [options, ] = useState([
        {title: 'Find Your Dream House', description: 'We provide various types of houses from the cheapest to Premium', icon: <FontAwesomeIcon icon={faPaperPlane}/>},
        {title: 'Best Quality Guarantee', description: 'If you buy or rent a house with us you are guaranteed with the best quality', icon: <FontAwesomeIcon icon={faShieldHalved}/>},
        {title: '100% Safe Transactions', description: 'Your transactions will always be kept safe and confidential no matter what', icon: <FontAwesomeIcon icon={faLock}/>},
        {title: 'Low Cost on Taxes', description: 'Buying or renting a house through our company you get discounts on taxes', icon: <FontAwesomeIcon icon={faFileInvoiceDollar}/>}
    ])

    const [properties, ] = useState([
        {propertyImage: "./images/1.jpg", propAlt: "living room with kitchen in the background", owner: "./images/p3.jpg", propName: "Lilys' Apartment", propLocation: '120 m<sup>2</sup> Chavchavadze Ave. 21', numBeds: 3, }
    ])

  return (
    <div className='mx-8 mb-8'>
        <Navbar/>
        <LandView/>
        <Options options={options}/>
        <div className='flex flex-col items-center justify-center my-24'>
            <div className='flex flex-col items-center justify-center my-5'>
                <h1 className='text-darker font-bold text-4xl mb-5'>Discover Our Featured Properties</h1>
                <h2 className='text-gray-400 text-lg font-medium'>Discover best deals for your future house</h2>
            </div>
            <div>
                <FeaturedProp/>
            </div>
            <div></div>
        </div>
    </div>
  )
}
