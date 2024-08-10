import React from 'react'
import natural from '../../assets/images/natural.jpg'
import { Link } from 'react-router-dom'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'

const Admin = () => {
  return (
    <div className='mt-2'>
      <div className='grid grid-cols-5 gap-5'>
        <div className='w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-[#283046]  text-[#d0d2d6]'>
           <span className='text-xl font-bold'>50</span>
           <span className='text-md'>Total News</span>
        </div>
        <div className='w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-[#283046]  text-[#d0d2d6]'>
           <span className='text-xl font-bold'>1</span>
           <span className='text-md'>Pending News</span>
        </div>
        <div className='w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-[#283046]  text-[#d0d2d6]'>
           <span className='text-xl font-bold'>22</span>
           <span className='text-md'>Active News</span>
        </div>
        <div className='w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-[#283046]  text-[#d0d2d6]'>
           <span className='text-xl font-bold'>0</span>
           <span className='text-md'>Deactive News</span>
        </div>
        <div className='w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-[#283046]  text-[#d0d2d6]'>
           <span className='text-xl font-bold'>8</span>
           <span className='text-md'>Writers</span>
        </div>
      </div>
      <div className='bg-[#283046] p-2 mt-5'>
        <div className='flex justify-between items-center px-4 py-2 pb-4 text-white'> 
          <h2>Recent News</h2>
          <Link>View all</Link>
        </div>
        <div className='relative overflow-x-auto p-4'>
            <table className='w-full text-sm taxt-[#d0d2d6] text-left'>
                <thead className='text-xs text-white uppercase bg-[#283046]'>
                    <tr>
                        <th className='px-6 py-3'>NO</th>
                        <th className='px-6 py-3'>Title</th>
                        <th className='px-6 py-3'>Image</th>
                        <th className='px-6 py-3'>Category</th>
                        <th className='px-6 py-3'>Description</th>
                        <th className='px-6 py-3'>Date</th>
                        <th className='px-6 py-3'>Status</th>
                        <th className='px-6 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    [1,2,3,4,5].map((n,i)=>( 
                      <tr key={i} className='bg-[#283046] bordre-b text-[#d0d2d6]'>
                      <td className='px-6 py-4'>{i+1}</td>
                      <td className='px-6 py-4'>Bangladesh Nal Be......</td>
                      <td className='px-6 py-4'>
                          <img className='w-[40px] h-[40px] object-cover' src={natural} alt="image" />
                      </td>
                      <td className='px-6 py-4'>Trabel</td>
                      <td className='px-6 py-4'>You all must have wa....</td>
                      <td className='px-6 py-4'>August 10, 2024</td>
                      <td className='px-6 py-4'>
                          <span className='px-2 py-[2px] bg-teal-800 text-white rounded-lg text-xs cursor-pointer'>active</span>
                      </td>
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
    </div>
  )
}

export default Admin