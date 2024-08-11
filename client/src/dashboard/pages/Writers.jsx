import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile.png'
import { FaEye } from 'react-icons/fa'
import axios from 'axios'
import storeContext from '../../contextApi/storeContext'

const Writers = () => {

  const { store } = useContext(storeContext)
  const [writers, setWriters] = useState([])

  const getWriter =async ()=>{
    try {
      const { data } = await axios.get('http://localhost:8000/api/news/writers',{
          headers : {
            'Authorization' : `Bearer ${store.token}`
          }
        })
        setWriters(data.writers)
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(()=>{
    getWriter()
  },[getWriter])

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
                   writers.map((w,i)=>( 
                      <tr key={i} className='bg-[#283046] bordre-b text-[#d0d2d6]'>
                      <td className='px-6 py-4'>{i+1}</td>
                      <td className='px-6 py-4'>{w.name}</td>
                      <td className='px-6 py-4 capitalize'>{w.category}</td>
                      <td className='px-6 py-4 capitalize'>{w.role}</td>
                      <td className='px-6 py-4'>
                          <img className='w-[40px] h-[40px] rounded-full object-cover' src={profile} alt="image" />
                      </td>
                      <td className='px-6 py-4'>{w.email}</td>
                      <td className='px-6 py-4'>
                          <div className='flex justify-start items-center gap-x-4 text-white'>
                              <Link to={`/dashboard/write/${w._id}`} className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
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