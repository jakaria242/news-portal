import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'


const MainLayout = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#161d31]'>
         <Sidebar/>
         <div className='ml-[250px] w-[calc(100vw-250px)] min-h-[vh]'>
            <Header/>
            <div className='p-4'>
              <div className='pt-[85px]'>
                 <Outlet/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MainLayout