import React from 'react'
import { FaImage } from "react-icons/fa6";


const Profile = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
      <div className='bg-[#283046]  p-6 gap-3 rounded flex justify-center items-center'>
        <div>
          <label htmlFor="img" className={`w-[150px] h-[150px] rounded flex gap-2 justify-center items-center cursor-pointer border bordr-2 border-teal-500 border-dashed`}>
            <div className='flex justify-center items-center flex-col gap-y-2 text-[#d0d2d6]'>
              <span className='text-2xl'><FaImage /></span>
              <span>Select Image</span>
            </div>
          </label>
          <input type="file" name='img' id='img' className=' hidden' />
        </div>
        <div className='text-[#d0d2d6] flex flex-col gap-y-1 justify-center items-start '>
            <span>Name : Jakaria Islam</span>
            <span>Email : jakaria.dev@gmail.com</span>
            <span>Category : Education</span>
        </div>
      </div>
      <div className='bg-[#283046] px-6 py-4 text-[#d0d2d6] rounded '>
           <h2 className='pb-3 text-center font-medium'>Change Password</h2>
           <form>
           <div className='grid grid-cols-1 gap-y-5 mb-3'>
           <div className='flex flex-col gap-y-2 '>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="old_password">Old Password</label>
                <input type="password" placeholder='old password' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='old_password' name='old_password'/>
           </div>
           <div className='flex flex-col gap-y-2 '>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="new_password">New Password</label>
                <input type="password" placeholder='new password' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='new_password' name='new_password'/>
           </div>
        </div>
        <div className='mt-5'>
        <button className='px-3 py-[6px] bg-teal-700 rounded-md text-[#d0d2d6] hover:bg-teal-600 hover:text-white'>Change Password</button> 
        </div>
           </form>
      </div>
    </div>
  )
}

export default Profile