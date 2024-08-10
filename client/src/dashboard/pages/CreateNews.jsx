import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdCloudUpload } from "react-icons/io";
import JoditEditor from 'jodit-react';
import Gallery from '../components/Gallery';

const CreateNews = () => {

    const [show, setShow] = useState(false)

  return (
    <div className='bg-[#283046] rounded-md'>
       <div className='flex justify-between items-center p-4'>
          <h2 className='text-xl font-medium text-white'>News</h2>
          <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-[#d0d2d6] hover:bg-purple-600 hover:text-white'      to='/dashboard/news'>News</Link> 
       </div>
       <div className='p-4'>
          <form>
             <div className='flex flex-col gap-y-2 mb-6'>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="title">Title</label>
                <input type="text" placeholder='news title' className='px-3 py-3 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='title' name='title'/>
             </div>
             <div className='mb-6'>
                <div>
                   <label htmlFor="img" className={`w-full h-[190px] rounded flex gap-2 justify-center items-center cursor-pointer border bordr-2 border-teal-500 border-dashed`}>
                      <div className='flex justify-center items-center flex-col gap-y-2 text-[#d0d2d6]'>
                         <span className='text-2xl'><IoMdCloudUpload /></span>
                          <span>Select Image</span>
                      </div>
                  </label>
                   <input type="file" name='img' id='img' className=' hidden' />
                </div>
             </div>
             <div className='flex flex-col gap-y-2 mb-6'>
                <div className='flex justify-start items-center gap-2 text-white'>
                    <h2>Description</h2>
                    <div onClick={()=>setShow(true)}>
                       <span className='text-2xl cursor-pointer'><IoMdCloudUpload /></span>
                    </div>
                </div>
                    <div>
                        <JoditEditor/>
                    </div>
             </div>
               <div className='mt-5'>
                  <button className='px-3 py-[6px] bg-teal-700 rounded-md text-[#d0d2d6] hover:bg-teal-600 hover:text-white'>Add News</button> 
               </div>
          </form>
       </div>
       {
        show && <Gallery setShow={setShow} images={[]}/>
       }
    </div>
  )
}

export default CreateNews