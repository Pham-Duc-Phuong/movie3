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
      <div>
        {
          dataChair.map((a) => {
            return (
              <dir key={a.hang} className="flex justify-center items-center gap-20">
                <p className='w-30 h-30 pointer-events-none'>{a.hang}</p>
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
    </div>
  )
}

export default ChairList