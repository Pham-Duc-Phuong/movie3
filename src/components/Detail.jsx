import React from 'react'
import ListMovie from './dataMovie.json'
import { useParams, generatePath, useNavigate } from 'react-router-dom'
import { PATH } from '../constant/config'

const Detail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const detailMovie = ListMovie.find(a => a.maPhim === params.movieid * 1)
  console.log('detailMovie', detailMovie)
  return (
    <div className='bg-#170f23 h-screen'>
      <div className="translate-x-detailmovieX translate-y-detailmovieY flex items-center  w-detailmovie h-detailmovie bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover ml-24 mr-24 rounded-lg h-imageA" src={detailMovie.hinhAnh} alt='' />
        <div className="p-4 leading-normal h-imageA">
          <h5 className="text-36 font-bold text-gray-900 dark:text-white">{detailMovie.tenPhim}</h5>
          <div className="relative overflow-x-auto ">
            <table className="text-16 w-800 text-left text-gray-500 dark:text-gray-400 mb-24">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-10 pr-7 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Tên phim
                  </th>
                  <td className="px-6 py-4">
                    {detailMovie.tenPhim}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-10 pr-7 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ngày khởi chiếu
                  </th>
                  <td className="px-6 py-4">
                    {detailMovie.ngayKhoiChieu}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-10 pr-7 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mô tả
                  </th>
                  <td className="px-6 py-4">
                    {detailMovie.moTa}
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-10 pr-7 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Đánh giá
                  </th>
                  <td className="px-6 py-4">
                    {detailMovie.danhGia}/10
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='mb-24'>
              <button className="inline-flex items-center p-8 pl-14 pr-14 mr-28 text-20 font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                // onClick={() => {
                //   navigate('/list')
                // }}
              >
                Trailer
              </button>
              <button className="inline-flex items-center p-8 pl-17 pr-17 text-20 font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => {
                  const path = generatePath(PATH.booking, { bookingid: detailMovie.maPhim })
                  navigate(path)
                }}
              >
                Đặt vé
              </button>
            </div>
          </div>
          <a className="inline-flex cursor-pointer items-center mr-28 text-18 font-medium text-center text-black hover:underline focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              navigate('/list')
            }}
          >
            <i className="fa-solid fa-arrow-left pr-6"></i>Quay lại
          </a>
        </div>
      </div>
    </div >
  )
}

export default Detail