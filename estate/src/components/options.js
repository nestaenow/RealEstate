import React from 'react'

export const Options = ({ options }) => {

  return (
    <div className='options-list justify-between flex flex-row'>
        {options.map((option) => (
            <div className='box-content tablet:text-sm tablet:w-48 laptop:w-52 tablet:py-6 laptop:py-8 tablet:px-4 laptop:px-6 bg-white hover:drop-shadow-lg rounded-xl cursor-pointer'>
                <div className='flex flex-row items-center mb-3'>
                    <p className='text-white bg-primary tablet:px-2 laptop:px-3 tablet:py-1 laptop:py-2 tablet:mr-3 laptop:mr-4 rounded-lg tablet:text-xl laptop:text-2xl'>{ option.icon }</p>
                    <p className='text-darker font-bold tablet:text-md laptop:text-lg'>{ option.title }</p>
                </div>
                <div className='text-gray-400'>{ option.description }</div>
            </div>
        ))}
    </div>
  )
}