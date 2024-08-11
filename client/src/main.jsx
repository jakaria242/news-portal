import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import './index.css'
import StoreProvider from './contextApi/StoreProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <>
      <App />
      <Toaster/>
    </>
  </StoreProvider>,
)
