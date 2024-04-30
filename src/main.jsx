import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Index from './routes/Index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Products from './routes/Products'
import {
  getProducts,
  getProductsByCategory,
  getProductsById
} from './loader/ProductsLoader'
import Home from './routes/Home'
import ProductDetails from './routes/ProductDetails'
import CartOverview from './routes/CartOverview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />,
        loader: getProducts
      },
      {
        path: 'products/category/:categoryId',
        element: <Products />,
        loader: getProductsByCategory
      },
      {
        path: 'products/:productId',
        element: <ProductDetails />,
        loader: getProductsById
      },
      {
        path: 'cart',
        element: <CartOverview />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
