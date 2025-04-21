import React from 'react'
import { AiFillDashboard, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { ImProfile } from 'react-icons/im'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const menuItems = [
        { 
          id: 0,
          name: 'Dashboard',
          path: '/dashboard/admin',
          icon: <AiFillDashboard /> 
        },
        {
          id: 1,
          name: 'News', 
          path: '/dashboard/news',
          icon: <BiNews /> 
        },
        { 
          id: 3,   
          name: 'Add writer',
          path: '/dashboard/add-writer', 
          icon: <AiOutlinePlus /> 
        },
        { 
          id: 4,   
          name: 'Writers',
          path: '/dashboard/writers', 
          icon: <FiUsers /> 
        },
        { 
          id: 5,   
          name: 'Profile',
          path: '/dashboard/profile', 
          icon: <ImProfile /> 
        },
 
        { 
          id: 6,   
          name: 'Logout',
          path: '/logout', 
        //   icon: , 
        },
      ]


  return (
    <div className='w-[250px] h-screen bg-sideBar left-0 right-0 fixed'>
        <div className='h-[70px] flex justify-center items-center'>
            {/* <Link to="/">
            <img className='w-[190px] h-[35px]' src="" alt="" />
            </Link> */}
            <h1 className='text-3xl font-bold uppercase m-4 text-white'>NEWS PORTAL</h1>
        </div>
        <ul className='px-3 flex flex-col gap-y-1 text-xl font-medium text-white'>

        {
            menuItems.map((item)=>(
                <li key={item.id}>
                <Link to={item.path} className={`px-3 py-2 hover:bg-white hover:text-navText rounded-sm flex gap-x-2 justify-start items-center transition-all duration-400`}>
                 <span className='text-xl'>{item.icon ?? item.icon}</span>
                 <span>{item.name}</span>
                </Link>
              </li>
            ))
        }

        </ul>
    </div>
  )
}

export default Sidebar