import React from 'react'
import user from '../assets/images/user.png'

const Header = () => {
  return (
    <div className='px-4 w-[calc(100vw-250px)] fixed top-4 z-50'>
        <div className='w-full h-[60px] rounded-md bg-sideBar flex justify-between items-center p-4'>
          <input type="text"  placeholder='search' className='px-4 py-2 outline-none border border-white rounded-md text-dashboard'/>
          <div className='flex gap-x-2'>
              <div className='flex flex-col gap-y-[0.5px] justify-center items-end font-bold text-white capitalize'>
                 <span>Jakari islam</span>
                 <span>Admin</span> 
              </div>
              <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
              <img className='w-full] h-full object-cover' src={user} alt="user pic" />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Header