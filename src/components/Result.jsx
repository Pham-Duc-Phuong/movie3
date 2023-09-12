import React from 'react'
import { useParams } from 'react-router-dom'
import dataMovie from './dataMovie.json'
import { useDispatch, useSelector } from 'react-redux'
import { Movie3Actions } from '../store/Movie3/slice'
const Result = () => {
  const params = useParams()
  const detailMovie = dataMovie.find(a => a.maPhim === params.bookingid * 1)
  const { booking, booked } = useSelector(state => state.Movie3)
  const dispatch = useDispatch()
  return (
    <div className='py-20 mr-20'>
      <div className='grid grid-cols-2c'>
        <img className='h-48' src={detailMovie.hinhAnh} alt="" />
        <table className="text-14 w-full text-left text-gray-500 dark:text-gray-400 mb-24 h-48">
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
      <div>
        <div className="relative ">
          <table className="w-full text-left text-gray-500 dark:text-gray-400 h-result">
            <thead className="text-16 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ghế
                </th>
                <th scope="col" className="px-6 py-3">
                  Giá
                </th>
                <th scope="col" className="px-6 py-3">
                  Hủy
                </th>
              </tr>
            </thead>
            <tbody>
              {
                booking.map(a => {
                  return (
                    <tr key={a.soGhe} className="bg-white border-b text-14 dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {a.soGhe}
                      </th>
                      <td className="px-6 py-4">
                        {a.gia}
                      </td>
                      <td className="px-6 py-4 ">
                        <span className="border border-solid border-red-600 bg-red-600 text-white font-600 p-4 px-10 rounded-md cursor-pointer"
                        onClick={()=> {
                          dispatch(Movie3Actions.bookChair(a))
                        }}
                        >X</span>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <table className="w-full text-left text-gray-500 dark:text-gray-400">
          <thead className="text-16 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='flex justify-between'>
              <th scope="col" className="px-6 py-3">
                Tổng tiền
              </th>
              <th scope="col" className="px-6 py-3 mr-20">
                {booking.reduce((total, a) => {
                  return(total += a.gia)
                },0)}
              </th>
              <th scope="col" className="px-6 py-3 mr-70">
                <span className="text-14 border border-solid border-green-600 bg-green-600 text-white font-600 p-4 px-10 rounded-md cursor-pointer"
                onClick={() => {
                  dispatch(Movie3Actions.bookedChair())
                }}
                >Thanh toán</span>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Result