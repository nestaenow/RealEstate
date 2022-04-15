import React from 'react'

export const Options = ({ options }) => {

  return (
    <div className='options-list justify-between flex flex-row'>
        {options.map((option) => (
            <div className='box-content w-52 py-8 px-6 bg-white hover:drop-shadow-lg rounded-xl cursor-pointer'>
                <div className='flex flex-row items-center mb-3'>
                    <p className='text-white bg-primary px-3 py-2 mr-4 rounded-lg text-2xl'>{ option.icon }</p>
                    <p className='text-darker font-bold text-lg'>{ option.title }</p>
                </div>
                <div className='text-gray-400'>{ option.description }</div>
            </div>
        ))}
    </div>
  )
}