import React from 'react'
import { useState } from 'react'
import { LandView } from '../components/LandView'
import { Navbar } from '../components/Navbar'
import { Options } from '../components/Options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faPaperPlane, faLock, faFileInvoiceDollar, faClock, faSuitcase, faCalendarCheck, } from '@fortawesome/free-solid-svg-icons'
import { FeaturedProp } from '../components/FeaturedProp'
import { Carousel } from '../components/Carousel'
import { Rating } from '../components/Rating'

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
        {propertyImage: './images/3.jpg', propAlt: "living room with kitchen in the background", owner: './images/p4.jpg', propName: "Jay's Apartment", perimeter: 90, propLocation: 'Rustaveli Ave. 2', numBeds: 1, numBaths: 1, numGarage: 1, numFloor: 2, price: '$70,000'},
    ])

    const [ratings, ] = useState([
        {description: "Having to get services like buying a house just by visiting a website and booking an appointment wasn't quite a thing for me. But, now Estately change my point of view concerning Real Estates.", author: 'Arthuro Guevara', position: 'Client'},
        {description: 'I always have hard times working with real estate agencies, but with estately whole process was easy, smooth and quick! Agent Lucas is professional at what he does so its very comfortable working with him', author: 'Manuel Ramirez', position: 'Investor'}
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
        <div className='my-40 flex flex-row items-center justify-center static'>
            <div className='w-9/12 flex relative mb-96 '>
                
                <div className='drop-shadow-3xl w-6/12 absolute right-60 top-0 z-0'>
                    <img src="./images/f3.png" alt="building" srcset="" />
                </div>
                <div className='drop-shadow-3xl w-6/12 absolute right-0 top-20 z-20'>
                    <img src="./images/f2.png" alt="building" srcset="" />
                </div>
            
            </div>
            <div className='box-content w-96 h-fit p-5 ml-20'>
                <div>
                    <h2 className='text-primary text-lg font-normal'><span className='text-dark font-bold'>About</span> Our Company</h2>
                    <h1 className='text-darker text-2xl font-bold my-6'>We are Offering the Best Real Estate Deals</h1>
                    <p className='text-gray-400 text-sm my-2'>We have already sold more than 7,000 Houses and we are Still going at very good pace</p>
                </div>
                <div className='text-white flex flex-row text-xl justify-between my-10 box-content w-72'>
                    <p className='bg-primary py-3 px-4 rounded-lg cursor-pointer'><FontAwesomeIcon icon={faCalendarCheck} /></p>
                    <div className='bg-primary py-3 px-4 rounded-lg flex flex-row items-center cursor-pointer'><FontAwesomeIcon icon={faClock} /><p className='ml-2 text-sm'>24 H Consultant</p></div>
                    <p className='bg-primary py-3 px-4 rounded-lg cursor-pointer'><FontAwesomeIcon icon={faSuitcase} /></p>
                </div>
            </div>
        </div>
        <Rating ratings={ratings}/>
        <div>
            <img src="./images/f1.png" alt="Pixel light-blue world mad" srcset="" />
        </div>
    </div>
  )
}
