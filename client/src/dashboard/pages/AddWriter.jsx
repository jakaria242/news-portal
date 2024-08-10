import React from 'react'
import { Link } from 'react-router-dom'

const AddWriter = () => {
  return (
    <div className='bg-[#283046] rounded-md'>
    <div className='flex justify-between items-center p-4'>
       <h2 className='text-xl font-medium text-white'>Add Writer</h2>
         <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-[#d0d2d6] hover:bg-purple-600 hover:text-white' to='/dashboard/writers'>Writers</Link> 
    </div>
    <div className='p-4'>
      <form> 
        <div className='grid grid-cols-2 gap-x-8 mb-3'>
           <div className='flex flex-col gap-y-2 '>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="name">Name</label>
                <input type="text" placeholder='name' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='name' name='name'/>
           </div>
           <div className='flex flex-col gap-y-2 '>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="category">Category</label>
                <select name='category' id='category' className='px-3 py-2 rounded-md outline-0 bg-[#283046] border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]'>
                  <option value="">---select category---</option>
                   <option value="education">Education</option>
                   <option value="health">Health</option>
                   <option value="tecnology">Tecnology</option>
                   <option value="international">International</option>
                   <option value="sports">Sports</option>
                   <option value="travel">Travel</option>
                </select>
           </div>
        </div>
        <div className='grid grid-cols-2 gap-x-8 mb-3'>
           <div className='flex flex-col gap-y-2 '>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="email">Email</label>
                <input type="email" placeholder='email' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='email' name='email'/>
           </div>
           <div className='flex flex-col gap-y-2 '>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="password">Password</label>
                <input type="password" placeholder='password' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='password' name='password'/>
           </div>
        </div>
        <div className='mt-5'>
        <button className='px-3 py-[6px] bg-teal-700 rounded-md text-[#d0d2d6] hover:bg-teal-600 hover:text-white'>Add Writer</button> 
        </div>
      </form>
    </div>
 </div>
  )
}

export default AddWriter