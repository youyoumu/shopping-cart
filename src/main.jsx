import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './routes/Index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Products from './routes/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />
  },
  {
    path: 'products',
    element: <Products />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
