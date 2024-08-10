import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile.png'
import { FaEye } from 'react-icons/fa'

const Writers = () => {
  return (
    <div className='bg-[#283046] rounded-md'>
    <div className='flex justify-between items-center p-4'>
       <h2 className='text-xl font-medium text-white'>Writers</h2>
         <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-[#d0d2d6] hover:bg-purple-600 hover:text-white'
          to='/dashboard/add/writer'>Add Writer</Link> 
    </div>
    <div className='relative overflow-x-auto p-4'>
            <table className='w-full text-sm taxt-[#d0d2d6] text-left'>
                <thead className='text-xs text-white uppercase bg-[#283046]'>
                    <tr>
                        <th className='px-6 py-3'>NO</th>
                        <th className='px-6 py-3'>Reporter Name</th>
                        <th className='px-6 py-3'>Category</th>
                        <th className='px-6 py-3'>Role</th>
                        <th className='px-6 py-3'>Image</th>
                        <th className='px-6 py-3'>Email</th>
                        <th className='px-6 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    [1,2,3,4,5].map((n,i)=>( 
                      <tr key={i} className='bg-[#283046] bordre-b text-[#d0d2d6]'>
                      <td className='px-6 py-4'>{i+1}</td>
                      <td className='px-6 py-4'>Jahidul Islam</td>
                      <td className='px-6 py-4'>Education</td>
                      <td className='px-6 py-4'>writer</td>
                      <td className='px-6 py-4'>
                          <img className='w-[40px] h-[40px] rounded-full object-cover' src={profile} alt="image" />
                      </td>
                      <td className='px-6 py-4'>jahidul123@gmail.com</td>
                      <td className='px-6 py-4'>
                          <div className='flex justify-start items-center gap-x-4 text-white'>
                              <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                          </div>
                      </td>
                  </tr>
                    ))
                  }
                </tbody>
            </table>
        </div>
 </div>
  )
}

export default Writers