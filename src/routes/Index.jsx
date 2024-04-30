import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

export default function Index() {
  const [cart, setCart] = useState({
    1: { id: 1, quantity: 2 },
    2: { id: 2, quantity: 5 }
  })

  return (
    <>
      <div>
        <div className="navbar bg-primary text-primary-content">
          <div className="flex-1 gap-2 items-center flex">
            <Link to="/" className="text-2xl font-bold mx-4">
              Shopping Cart
            </Link>
            <Link to="/products">Products</Link>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button">
                Category
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
              >
                <li>
                  <Link to="/products/category/jewelery">Jewelery</Link>
                </li>
                <li>
                  <Link to="/products/category/electronics">Electronics</Link>
                </li>
                <li>
                  <Link to="/products/category/men's clothing">
                    {`Men's Clothing`}
                  </Link>
                </li>
                <li>
                  <Link to="/products/category/women's clothing">
                    {`Women's Clothing`}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {Object.keys(cart).length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body text-base-content">
                  <span className="font-bold text-lg">
                    {`${Object.keys(cart).length} items`}
                  </span>
                  <div className="card-actions">
                    <Link to="/cart" className="btn btn-primary">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end text-base-content">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={[cart, setCart]} />
    </>
  )
}
