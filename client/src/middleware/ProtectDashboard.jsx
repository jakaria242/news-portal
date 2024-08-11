import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import storeContext from '../contextApi/storeContext'

const ProtectDashboard = () => {
 
    const userInfo = {
        role : 'writer'
      }
    const { store } = useContext(storeContext)

    if (store.userInfo) {
       return <Outlet/>

    }else{
        return <Navigate to='/login'/>
    }
}

export default ProtectDashboard