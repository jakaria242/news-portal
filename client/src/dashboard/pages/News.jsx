import React from 'react'
import { Link } from 'react-router-dom'
import NewsContent from '../components/NewsContent'

const News = () => {

    const userInfo = {
        role : 'admin'
    }

  return (
    <div className='bg-[#283046] rounded-md'>
       <div className='flex justify-between items-center p-4'>
          <h2 className='text-xl font-medium text-white'>News</h2>
          {
            userInfo.role !== 'admin' && 
            <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-[#d0d2d6] hover:bg-purple-600 hover:text-white' to='/dashboard/news/create'>Create News</Link> 
          }
       </div>
       <NewsContent/>
    </div>
  )
}

export default News