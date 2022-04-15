import React from 'react'
import { useState } from 'react'
import { LandView } from '../components/LandView'
import { Navbar } from '../components/Navbar'
import { Options } from '../components/Options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faPaperPlane, faLock, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
    const [options, ] = useState([
        {title: 'Find Your Dream House', description: 'We provide various types of houses from the cheapest to Premium', icon: <FontAwesomeIcon icon={faPaperPlane}/>},
        {title: 'Best Quality Guarantee', description: 'If you buy or rent a house with us you are guaranteed with the best quality', icon: <FontAwesomeIcon icon={faShieldHalved}/>},
        {title: '100% Safe Transactions', description: 'Your transactions will always be kept safe and confidential no matter what', icon: <FontAwesomeIcon icon={faLock}/>},
        {title: 'Low Cost on Taxes', description: 'Buying or renting a house through our company you get discounts on taxes', icon: <FontAwesomeIcon icon={faFileInvoiceDollar}/>}
    ])
  return (
    <div className='mx-8 mb-8'>
        <Navbar/>
        <LandView/>
        <Options options={options}/>
    </div>
  )
}
