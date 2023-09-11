import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../constant/config'
import './styles.scss'

const SideBar = () => {
  return (
    <div className='bg-#221a2d h-screen w-sidebar fixed'>
      <NavLink to={PATH.list}><h1 className='font-700 text-4xl pl-24 py-24 bg-gradient-to-r from-green-400 to-blue-500'>CINEMA</h1></NavLink>
      <div className='SideBar grid grid-cols-1 text-white pt-14 font-500 text-18 '>
        <NavLink to={PATH.list}>Danh sách phim</NavLink>
        <NavLink to={PATH.lichchieu}>Lịch chiếu</NavLink>
        <NavLink to={PATH.event}>Sự kiện</NavLink>
        <NavLink to={PATH.position}>Hệ thống rạp chiếu</NavLink>
      </div>
    </div>
  )
}

export default SideBar