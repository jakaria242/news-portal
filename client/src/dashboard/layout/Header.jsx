import React, { useContext } from 'react'
import profile from '../../assets/images/profile.png'
import storeContext from '../../contextApi/storeContext'

const Header = () => {
  const { store } = useContext(storeContext)
  // console.log(store);
  
  return (
    <div className='px-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
       <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-[#283046]'>
         <input type="text" placeholder='search' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]'/>
         <div className='mr-2'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end text-[#d2d0d6]'>
              <span>{store.userInfo?.name}</span>
              <span className=' capitalize'>{store.userInfo?.role}</span>
            </div>
            <img className='w-10 h-10 rounded-full' src={profile} alt="image" />
          </div>
         </div>
       </div>
    </div>
  )
}

export default Header