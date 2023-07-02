import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './Component/Provider/ThemeProvider.jsx'
import { router } from './Component/Routes/Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider><RouterProvider router={router} /></ThemeProvider>
  </React.StrictMode>,
)
