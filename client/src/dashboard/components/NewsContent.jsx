import React from 'react'
import natural from '../../assets/images/natural.jpg'
import { Link } from 'react-router-dom'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NewsContent = () => {
  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name="" id="" className='px-3 py-2 rounded-md outline-0  border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6] bg-[#283046]'>
                <option value="">---select type---</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>
            <input type="text" placeholder='search news' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]'/>
        </div>
        <div className='relative overflow-x-auto py-4 px-2'>
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
                    <tr className='bg-[#283046] bordre-b text-[#d0d2d6]'>
                        <td className='px-6 py-4'>1</td>
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
                                <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit/></Link>
                                <div className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash/></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex items-center justify-end px-10 gap-x-3 text-[#d0d2d6] py-3'>
            <div className='flex gap-x-3 justify-center items-center'>
                <p className='px-4 py-3 font-semibold text-sm'>News par page</p>
                <select className='px-3 py-2 rounded-md outline-0 bg-[#283046] border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]'>
                   <option value="5">5</option>
                   <option value="5">10</option>
                   <option value="15">15</option>
                   <option value="25">20</option>
                   <option value="25">25</option>
                </select>
            </div>
            <p className='px-6 py-3 font-semibold text-sm'>1/22 - of 5</p>
            <div className='flex items-center gap-x-3'>
                <IoIosArrowBack className='w-5 h-5 cursor-pointer'/>
                <IoIosArrowForward className='w-5 h-5 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default NewsContent