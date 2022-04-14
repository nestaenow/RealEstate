import React from 'react'

export const Button = (props) => {
  return (
    <button className='bg-primary text-white px-4 py-2 rounded-md'>
        {props.children}
    </button>
  )
}
