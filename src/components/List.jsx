import React, { useEffect, useState } from 'react'
import ListData from './dataMovie.json'
import { generatePath, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { PATH } from '../constant/config.js'
import cn from 'classnames'
import { useQueryParams } from '../hooks/useQueryParams'
const List = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState()
  const [queryParams, setQueryParams] = useQueryParams()
  console.log('queryParams', queryParams)
  const movieSearch = ListData.filter(a => a.tenPhim.toLowerCase().includes(searchParams.get('nameMovie')?.toLowerCase()))
  console.log('movieSearch', movieSearch)
  return (
    <div>
      <form noValidate >
        <div className="flex my-25 items-end mx-50">
          <input type="search" id="default-search" className="block w-full p-4 pl-10 py-10 rounded-l-lg text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " placeholder="Tìm kiếm phim"
            required
            value={inputValue || ''}
            onChange={(event) => {
              setInputValue(event.target.value)
            }}
          />
          <button type="button" className="text-white text-20 p-6 px-14 rounded-r-lg bg-purple-800 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={() => {
              setQueryParams({
                nameMovie: inputValue || undefined
              })
            }}
          >Search</button>
        </div>
      </form>
      <div className={cn("grid grid-flow-row grid-cols-5 gap-50 mx-50 mb-50", { 'h-screen': movieSearch?.length < 6 && movieSearch?.length > 0 })}>
        {
          (movieSearch?.length ? movieSearch : ListData).map(a => {
            return (
              <div key={a.maPhim} className=''>
                <div className="max-w-80 bg-white border border-transparent rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href=""
                    onClick={() => {
                      const path = generatePath(PATH.detail, { movieid: a.maPhim })
                      navigate(path)
                    }}
                  >
                    <img className="rounded-t-lg h-image w-full " src={a.hinhAnh} alt='' />
                  </a>
                  <div className="p-5">
                    <a href=""
                      onClick={() => {
                        const path = generatePath(PATH.detail, { movieid: a.maPhim })
                        navigate(path)
                      }}
                    >
                      <h5 className="mb-2 truncate text-18 font-bold tracking-tight text-gray-900 dark:text-white h-title">{a.tenPhim}</h5>
                    </a>
                    <div className='flex justify-between'>
                      <button className="inline-flex items-center p-8 pl-14 pr-14 text-18 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          const path = generatePath(PATH.detail, { movieid: a.maPhim })
                          navigate(path)
                        }}
                      >
                        Chi tiết
                      </button>
                      <button className="inline-flex items-center p-8 pl-17 pr-17 text-18 font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={() => {
                          const path = generatePath(PATH.booking, { bookingid: a.maPhim })
                          navigate(path)
                        }}
                      >
                        Đặt vé
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List