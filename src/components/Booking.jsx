import React from 'react'
import ChairList from './ChairList'
import Result from './Result'
const Booking = () => {
  return (
    <div className='h-screen'>
      
      <div className='grid grid-cols-2b w-bookingX h-bookingY bg-white translate-x-bookingX translate-y-bookingY rounded-lg'>
      <ChairList/>
      <Result/>
      </div>
    </div>
  )
}

export default Booking