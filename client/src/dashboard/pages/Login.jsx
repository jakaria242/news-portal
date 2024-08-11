import React, { useState } from 'react'
import newsportal from '../../assets/images/newsportal.png'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import storeContext from '../../contextApi/storeContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    

   const navigate = useNavigate()
   const { dispatch } = useContext(storeContext)
   const [loder, setLoder] = useState(false)
   const [login, setLogin] = useState({
    email : '',
    password: ''
   })

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e)=> {
    e.preventDefault()
    try {
      setLoder(true)
       const { data } = await axios.post('http://localhost:8000/api/login', login)
       localStorage.setItem("newsToken", data.token)
       setLoder(false)
       toast.success(data.message)
       dispatch({
         type : 'login-successful',
         payload : {
          token : data.token
         }
       })
       navigate('/dashboard')
    } catch (error) {
      setLoder(false)
      toast.error(error.response.data.message)
    }
  }



  return (
    <div className='min-w-screen min-h-screen bg-slate-200 flex justify-center items-center'>
        <div className='w-[340px] text-slate-600 shadow-md'>
           <div className='bg-white h-full px-7 py-8 rounded-md'>
              <div className='w-full flex justify-center items-center'>
                <img className='w-[200px]' src={newsportal} alt="logo" />
              </div>
              <form onSubmit={handleSubmit}>
                  <div className='mt-8'>
                    <div className='flex flex-col gap-y-2 mb-4'>
                     <label className='text-md font-bold text-slate-800' htmlFor="email">Email</label>
                      <input onChange={inputHandle} value={login.email} type="email" placeholder='email' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-400 focus:border-blue-500 h-10 text-black font-medium' id='email' name='email'/>
                   </div>
                      <div className='flex flex-col gap-y-2 '>
                       <label className='text-md font-bold text-slate-800' htmlFor="password">Password</label>
                        <input onChange={inputHandle}  value={login.password} type="password" placeholder='password' className='px-3 py-2 rounded-md outline-0 bg-transparent border border-slate-400 focus:border-blue-500 h-10 text-black font-medium' id='password' name='password'/>
                      </div>
                      <div className='mt-5'>
                        <button disabled={loder} className='px-3 py-[6px] w-full bg-blue-700 rounded-md text-[#d0d2d6] hover:bg-blue-600 hover:text-white font-bold'>{loder ? "loding...." : "Login"}</button> 
                      </div>
                  </div>
              </form>
           </div>
        </div>
    </div>
  )
}

export default Login