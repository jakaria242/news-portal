import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router";
import MainLayout from './layout/MainLayout';




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/dashboard' element={<MainLayout />}>
        </Route>
    )
  );


  return (
    <RouterProvider router={router} />
  )
}

export default App
