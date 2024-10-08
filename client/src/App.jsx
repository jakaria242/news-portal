import React, { useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import MainLayout from './dashboard/layout/MainLayout';
import AdminIndex from './dashboard/pages/AdminIndex';
import Login from './dashboard/pages/Login';
import ProtectDashboard from './middleware/ProtectDashboard';
import ProtectRole from './middleware/ProtectRole';
import Unable from './dashboard/pages/Unable';
import AddWriter from './dashboard/pages/AddWriter';
import Writers from './dashboard/pages/Writers';
import News from './dashboard/pages/News';
import Profile from './dashboard/pages/Profile';
import WriterIndex from './dashboard/pages/WriterIndex';
import CreateNews from './dashboard/pages/CreateNews';
import storeContext from './contextApi/storeContext'


function App() {

  // const userInfo = {
  //   role : 'writer'
  // }
  const { store } = useContext(storeContext)


  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />} >
          <Route path='' element={<MainLayout />}>

              <Route path='' element={store.userInfo?.role === 'admin' ? <Navigate to='/dashboard/admin'/> : <Navigate to='/dashboard/writer'/>}/>
              <Route path='unable-access' element={<Unable/>}/>
              <Route path='news' element={<News/>}/>
              <Route path='profile' element={<Profile/>}/>

          // admin route protect start here ============ admin role defind ====
              <Route path='' element={<ProtectRole role='admin'/>} >
                <Route path='admin' element={<AdminIndex/>} />
                <Route path='add/writer' element={<AddWriter/>} />
                <Route path='writers' element={<Writers/>} />
            </Route>
            // admin route protect end here =========== admin role defind ====

          // writer route protect start here ============ writer role defind ====
              <Route path='' element={<ProtectRole role='writer'/>} >
                <Route path='writer' element={<WriterIndex/>} />
                <Route path='add/news' element={<CreateNews/>} />
            </Route>
            // writer route protect end here =========== writer role defind ====

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
