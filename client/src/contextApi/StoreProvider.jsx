import React, { useReducer } from 'react'
import storeReducer from './storeReducer'
import storeContext from './storeContext'
import deCodeToken from '../utils/deCodeToken'

const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(storeReducer,{
        userInfo : deCodeToken(localStorage.getItem('newsToken')),
        token : localStorage.getItem('newsToken') || ''
    })
  return <storeContext.Provider value={{store, dispatch}}>
           { children }
         </storeContext.Provider>
}

export default StoreProvider