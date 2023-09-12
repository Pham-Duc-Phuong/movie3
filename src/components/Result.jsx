import React from 'react'
import { useParams } from 'react-router-dom'
import dataMovie from './dataMovie.json'
const Result = () => {
  const params = useParams()
  console.log('params', params)
  const detailMovie = dataMovie.find(a => a.maPhim === params.bookingid * 1)
  return (
    <div className='py-20'>
      <div className='grid grid-cols-2c'>
        <img className='h-48' src={detailMovie.hinhAnh} alt="" />
        <table className="text-14 w-300 text-left text-gray-500 dark:text-gray-400 mb-24 h-48">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-10 pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Tên phim
              </th>
              <td className="px-6 py-4">
                {detailMovie.tenPhim}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-10 pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Rạp
              </th>
              <td className="px-6 py-4">
                Cinema Hùng Vương Plaza
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-10 pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Suất
              </th>
              <td className="px-6 py-4">
                09:30, 12/09/2023
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-10 pr-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Phòng chiếu
              </th>
              <td className="px-6 py-4">
                Cinema 5
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Result