import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import MainLayout from './dashboard/layout/MainLayout';
import Admin from './dashboard/pages/Admin';
import Login from './dashboard/pages/Login';
import ProtectDashboard from './middleware/ProtectDashboard';
import ProtectRole from './middleware/ProtectRole';
import Unable from './dashboard/pages/Unable';
import AddWriter from './dashboard/pages/AddWriter';
import Writers from './dashboard/pages/Writers';
import News from './dashboard/pages/News';


function App() {


  return (
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />} >
          <Route path='' element={<MainLayout />}>
              <Route path='' element={<Navigate to='/dashboard/admin'/>}/>
              <Route path='unable-access' element={<Unable/>}/>
              <Route path='news' element={<News/>}/>

              <Route path='' element={<ProtectRole role='admin'/>} >
                <Route path='admin' element={<Admin/>} />
                <Route path='add/writer' element={<AddWriter/>} />
                <Route path='writers' element={<Writers/>} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
