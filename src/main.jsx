import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './routes/Index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Products, { loader as productsLoader } from './routes/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader
      },
      {
        path: 'products/category/:categoryId',
        element: <Products />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
