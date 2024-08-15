import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdCloudUpload } from "react-icons/io";
import JoditEditor from 'jodit-react';
import Gallery from '../components/Gallery';
import axios from 'axios'
import storeContext from '../../contextApi/storeContext'
import toast from 'react-hot-toast'
// import { baseUrl } from '../../utils/baseUrl';

const CreateNews = () => {

    const [show, setShow] = useState(false)
    const editor = useRef(null)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const { store } = useContext(storeContext)

    const imgHandle = (e)=>{
      const { files } = e.target

      if (files.length > 0) {
          setImg(URL.createObjectURL(files[0]))
          setImage(files[0])
      }
    }
 
    const [loder, setLoder] = useState(false)
    const handleSubmit = async (e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('title', title)
      formData.append('description', description)
      formData.append('image', image)
      try {
         setLoder(true)
         const { data } = await axios.post(`'http://localhost:8000/api/add/news`, formData, {
            headers : {
               'Authorization' : `Bearer ${store.token}`
             }
         })
         setLoder(false)
         // console.log(data);
         toast.success(data.message)
      } catch (error) {
         toast.error(error.response.data.message)
         
      }
    }
    
    const [images, setImages] = useState([])

    const getImages = async () => {
       try {
         const { data } = await axios.get('http://localhost:8000/api/images', {
            headers : {
               'Authorization' : `Bearer ${store.token}`
             }
         })
         setImages(data.images)
         console.log(data.images);
         
       } catch (error) {
          console.log(error);
          
       }
    }

    useEffect(()=>{
      getImages()
    },[])

    const [imagesLoader, setImagesLoader] = useState(false)

    const imagesHandle = async (e)=> {
      const files = e.target.files
      try {
         const formData = new FormData()
         for (let i = 0; i < files.length; i++) {
             formData.append('images', files[i])

         }

         setImagesLoader(true)

         const { data } = await axios.post('http://localhost:8000/api/images/add', formData, {
            headers : {
               'Authorization' : `Bearer ${store.token}`
             }
         })
         setImagesLoader(false)
         setImages([...images, data.images])
         toast.success(data.message)

     } catch (error) {
         console.log(error)
         setImagesLoader(false)
         toast.error(error.response.data.message)
     }
    }

  return (
    <div className='bg-[#283046] rounded-md'>
       <div className='flex justify-between items-center p-4'>
          <h2 className='text-xl font-medium text-white'>News</h2>
          <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-[#d0d2d6] hover:bg-purple-600 hover:text-white'      to='/dashboard/news'>News</Link> 
       </div>
       <div className='p-4'>
          <form onSubmit={handleSubmit}> 
             <div className='flex flex-col gap-y-2 mb-6'>
                <label className='text-md font-medium text-[#d0d2d6]' htmlFor="title">Title</label>
                <input required value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='news title' className='px-3 py-3 rounded-md outline-0 bg-transparent border border-slate-700 focus:border-teal-500 h-10 text-[#d0d2d6]' id='title' name='title'/>
             </div>
             <div className='mb-6'>
                <div>
                   <label htmlFor="img" className={`w-full h-[300px] rounded flex gap-2 justify-center items-center cursor-pointer border bordr-2 border-teal-500 border-dashed`}>
                      {
                        img ?
                        <img src={img} className='w-full h-full object-cover' alt='image'/>
                        :
                         <div className='flex justify-center items-center flex-col gap-y-2 text-[#d0d2d6]'>
                             <span className='text-2xl'><IoMdCloudUpload /></span>
                             <span>Select Image</span>
                          </div>
                      }
                  </label>
                   <input required onChange={imgHandle} type="file" name='img' id='img' className=' hidden' />
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
                        <JoditEditor
                          ref={editor}
                          value={description}
                          tapIndex={1}
                          onBlur={value => setDescription(value)}
                          onChange={()=> {}}
                        />
                    </div>
             </div>
               <div className='mt-5'>
                  <button className='px-3 py-[6px] bg-teal-700 rounded-md text-[#d0d2d6] hover:bg-teal-600 hover:text-white'>{loder ? 'loding...': 'Add News'}</button> 
               </div>
          </form>
       </div>
       <input onChange={imagesHandle} type="file" multiple name='images' id='images' className=' hidden'/>
       {
        show && <Gallery setShow={setShow} images={images}/>
       }
    </div>
  )
}

export default CreateNews