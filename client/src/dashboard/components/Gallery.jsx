import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { IoMdCloudUpload } from "react-icons/io";

const Gallery = ({setShow, images}) => {
  return (
    <div className='w-screen h-screen fixed left-0 top-0 z-[9999]'>
       <div className='w-full h-full relative'>
        <div onClick={()=>setShow(false)} className='bg-gray-300 opacity-80 w-full h-full absolute top-0 left-0 z-[995]'></div>
        <div className='absolute bg-white w-[50%] p-3 rounded-sm h-[85vh] overflow-y-auto left-[50%] top-[50%] z-[999]   -translate-x-[50%] -translate-y-[50%]'>
           <div className='pb-3 flex justify-between items-center'>
               <h2 className='text-xl  font-medium'>Gallery</h2>
               <div onClick={()=>setShow(false)} className=' text-xl cursor-pointer'>
                   <AiOutlineClose/>
               </div>
           </div>
           <div>
             <label htmlFor="img" className={`w-full h-[190px] rounded flex gap-2 justify-center items-center cursor-pointer border  border-teal-500 border-dashed`}>
                <div className='flex justify-center items-center flex-col gap-y-2 text-slate-700 font-medium'>
                      <span className='text-2xl'><IoMdCloudUpload /></span>
                      <span>Select Image</span>
                </div>
                  </label>
                <input type="file" name='img' id='img' className=' hidden' />
            </div>
            <div className='grid grid-cols-4 gap-x-2'></div>
        </div>
       </div>
    </div> 
  )
}

export default Gallery