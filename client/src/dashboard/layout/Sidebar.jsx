import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import newsportal from '../../assets/images/newsportal.png'
import { FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";


const Sidebar = () => {
    const {pathname} = useLocation()
  return (
    <div className='w-[250px] h-screen fixed top-0 left-0 bg-[#283046]'>
          <div className='h-[70px] flex justify-center items-center'>
             <Link to='/'>
                <img className='w-[190px] h-[35px]' src={newsportal} alt="images" />
             </Link>
          </div>
          <ul className='px-3 flex flex-col gap-y-1 font-medium'>
              <li>
                <Link to='/dashboard/admin' className={`px-3 py-2 hover:shadow-lg hover:shadow-teal-500/20 w-full rounded-sm flex gap-2 justify-start items-center text-[#d0d2d6] hover:bg-teal-500 hover:text-white ${pathname === '/dashboard/admin' ? 'bg-teal-500 text-white': ''}`}>
                <span className='text-xl'><AiFillDashboard/></span>
                <span className='capitalize'>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to='/dashboard/news' className={`px-3 py-2 hover:shadow-lg hover:shadow-teal-500/20 w-full rounded-sm flex gap-2 justify-start items-center text-[#d0d2d6] hover:bg-teal-500 hover:text-white ${pathname === '/dashboard/news' ? 'bg-teal-500 text-white': ''}`}>
                <span className='text-xl'><BiNews/></span>
                <span className='capitalize'>News</span>
                </Link>
              </li>
              <li>
                <Link to='/dashboard/add/writer' className={`px-3 py-2 hover:shadow-lg hover:shadow-teal-500/20 w-full rounded-sm flex gap-2 justify-start items-center text-[#d0d2d6] hover:bg-teal-500 hover:text-white ${pathname === '/dashboard/add/writer' ? 'bg-teal-500 text-white': ''}`}>
                <span className='text-xl'><AiOutlinePlus/></span>
                <span>Add Writer</span>
                </Link>
              </li>
              <li>
                <Link to='/dashboard/writers' className={`px-3 py-2 hover:shadow-lg hover:shadow-teal-500/20 w-full rounded-sm flex gap-2 justify-start items-center text-[#d0d2d6] hover:bg-teal-500 hover:text-white ${pathname === '/dashboard/writers' ? 'bg-teal-500 text-white': ''}`}>
                <span className='text-xl'><FiUsers/></span>
                <span>Writers</span>
                </Link>
              </li>
              <li>
                <Link to='/dashboard/profile' className={`px-3 py-2 hover:shadow-lg hover:shadow-teal-500/20 w-full rounded-sm flex gap-2 justify-start items-center text-[#d0d2d6] hover:bg-teal-500 hover:text-white ${pathname === '/dashboard/profile' ? 'bg-teal-500 text-white': ''}`}>
                <span className='text-xl'><CgProfile/></span>
                <span>Profile</span>
                </Link>
              </li>
          </ul>
    </div>
  )
}

export default Sidebar