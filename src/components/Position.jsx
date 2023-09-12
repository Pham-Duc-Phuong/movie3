import React from 'react'

const Position = () => {
  return (
    <div className='h-screen'>
      <div className='w-bookingX h-bookingY bg-white translate-x-bookingX translate-y-bookingY rounded-lg flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-700 text-center leading-normal '>Hệ thống rạp đang bảo trì</h1>
        <p className='text-4xl font-500 text-blue-700 text-center leading-normal my-50'>Khách hàng có thể xem phim trực tuyến tại <a className='underline text-red-500' target="_blank" href="https://vlxx.moe/"> phimmoi.net</a></p>
      </div>
    </div>
  )
}

export default Position