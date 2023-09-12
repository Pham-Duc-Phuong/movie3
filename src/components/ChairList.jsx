import React from 'react'
import { useNavigate } from 'react-router-dom'
import dataChair from './dataChair.json'
import Chair from './Chair'
import cn from 'classnames'
const ChairList = () => {
  const navigate = useNavigate()
  return (
    <div className='p-20'>
      <a className="inline-flex items-center text-16 font-medium text-center text-black hover:underline cursor-pointer"
        onClick={() => {
          navigate('/list')
        }}
      >
        <i className="fa-solid fa-arrow-left pr-6"></i><span>Quay lại</span>
      </a>
      <div className='bg-black text-white mx-50 ml-120 text-center font-700 text-24'><h4>Screen</h4></div>
      <div>
        {
          dataChair.map((a) => {
            return (
              <dir key={a.hang} className="flex justify-center items-center gap-20">
                <p className='w-30 h-30 pointer-events-none mt-8'>{a.hang}</p>
                {
                  a.danhSachGhe.map(b => {
                    return (
                      <Chair b={b} key={b.soGhe} classNames={cn({ 'border-none pointer-events-none': !a.hang })} />
                    )
                  })
                }
              </dir>
            )
          })
        }
      </div>
      <div className='flex justify-center items-center ml-50 mt-24'>
        <p className='border-solid border-black border h-40 w-40 text-center flex justify-center items-center pointer-events-none rounded-6 mr-10'>A1</p><p className='mr-50'>Ghế chưa đặt</p>
        <p className='border-solid border-black border h-40 w-40 text-center flex justify-center items-center text-white bg-red-600 pointer-events-none rounded-6 mr-10'>A1</p><p className='mr-50'>Ghế đang chọn</p>
        <p className='border-solid border-black border h-40 w-40 text-center flex justify-center items-center text-black line-through bg-gray-400 pointer-events-none rounded-6 mr-10'>A1</p><p>Ghế đã đặt</p>
      </div>
    </div>
  )
}

export default ChairList