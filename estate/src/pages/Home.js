import React from 'react'
import { useState } from 'react'
import { LandView } from '../components/LandView'
import { Navbar } from '../components/Navbar'
import { Options } from '../components/Options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faPaperPlane, faLock, faFileInvoiceDollar, faClock, faSuitcase, } from '@fortawesome/free-solid-svg-icons'
import { FeaturedProp } from '../components/FeaturedProp'
import { Carousel } from '../components/Carousel'

export const Home = () => {
    const [options, ] = useState([
        {title: 'Find Your Dream House', description: 'We provide various types of houses from the cheapest to Premium', icon: <FontAwesomeIcon icon={faPaperPlane}/>},
        {title: 'Best Quality Guarantee', description: 'If you buy or rent a house with us you are guaranteed with the best quality', icon: <FontAwesomeIcon icon={faShieldHalved}/>},
        {title: '100% Safe Transactions', description: 'Your transactions will always be kept safe and confidential no matter what', icon: <FontAwesomeIcon icon={faLock}/>},
        {title: 'Low Cost on Taxes', description: 'Buying or renting a house through our company you get discounts on taxes', icon: <FontAwesomeIcon icon={faFileInvoiceDollar}/>}
    ])

    const [properties, ] = useState([
        {propertyImage: './images/2.jpg', propAlt: "living room with large window", owner: './images/p3.jpg', propName: "Lilys' Apartment", perimeter: 120, propLocation: 'Chavchavadze Ave. 21', numBeds: 3, numBaths: 2, numGarage: 1, numFloor: 12, price: '$100,000'},
        {propertyImage: './images/4.jpg', propAlt: "perfectly lit white living room", owner: './images/p5.jpg', propName: "Your Lux House", perimeter: 160, propLocation: 'Chavchavadze Ave. 71', numBeds: 4, numBaths: 4, numGarage: 1, numFloor: 19, price: '$180,000'},
        {propertyImage: './images/1.jpg', propAlt: "living room with kitchen in the background", owner: './images/p2.jpg', propName: "Apartment At The Heart Of The City", perimeter: 90, propLocation: 'Rustaveli Ave. 2', numBeds: 1, numBaths: 1, numGarage: 1, numFloor: 2, price: '$70,000'},
        {propertyImage: './images/3.jpg', propAlt: "living room with kitchen in the background", owner: './images/p4.jpg', propName: "Lilys' Apartment", perimeter: 90, propLocation: 'Chavchavadze Ave. 21', numBeds: 1, numBaths: 1, numGarage: 1, numFloor: 2, price: '$70,000'},
    ])

  return (
    <div className='mx-8 mb-8'>
        <Navbar/>
        <LandView/>
        <Options options={options}/>
        <div className='flex flex-col my-24'>
            <div className='flex flex-col items-center justify-center mb-20'>
                <h1 className='text-darker font-bold text-4xl mb-5'>Discover Our Featured Properties</h1>
                <h2 className='text-gray-400 text-base font-medium'>Discover best deals for your future house</h2>
            </div>
            <FeaturedProp properties={properties}/>
            <Carousel/>
        </div>
        <div>
            <div></div>
            <div>
                <div></div>
                <div>
                    <p><FontAwesomeIcon icon={faClock} /></p>
                    <div className='text-white'><p>24 H Consultant</p></div>
                    <p><FontAwesomeIcon icon={faSuitcase} /></p>
                </div>
            </div>
        </div>
    </div>
  )
}
