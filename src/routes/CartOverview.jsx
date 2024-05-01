import CartProduct from './CartProduct'
import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CartOverview() {
  const [cart, setCart] = useOutletContext()
  const [productsData, setProductsData] = useState([]) // [productData]

  useEffect(() => {
    const fetches = []
    Object.values(cart).forEach((product) => {
      const getProductData = async function () {
        const res = await fetch(
          `https://fakestoreapi.com/products/${product.id}`
        )
        const data = await res.json()
        return data
      }
      fetches.push(getProductData())
    })

    Promise.all(fetches).then((data) => {
      setProductsData(data)
    })
  }, [cart])

  if (productsData.length === 0) return <h1>Loading...</h1>

  const CartProducts = productsData.map((product) => (
    <CartProduct
      key={product.id}
      product={product}
      quantity={cart[product.id].quantity}
    />
  ))

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-4">Cart Overview</h1>
      <div className="mt-8 grid gap-4 mx-2">{CartProducts}</div>
    </div>
  )
}
