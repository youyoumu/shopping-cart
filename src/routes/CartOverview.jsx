import CartProduct from './CartProduct'
import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function CartOverview() {
  const [cart, setCart] = useOutletContext()
  const [productsData, setProductsData] = useState([])
  const [cartWithoutQuantity, setCartWithoutQuantity] = useState(
    Object.values(cart).map((product) => {
      return { id: product.id }
    })
  )

  useEffect(() => {
    setCartWithoutQuantity(
      Object.values(cart).map((product) => {
        return { id: product.id }
      })
    )
  }, [cart.length])

  useEffect(() => {
    const fetches = []
    cartWithoutQuantity.forEach((product) => {
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
  }, [cartWithoutQuantity])

  if (productsData.length === 0)
    return (
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    )

  const CartProducts = productsData.map((product) => (
    <CartProduct
      key={product.id}
      product={product}
      quantity={cart[product.id].quantity}
      cart={cart}
      setCart={setCart}
    />
  ))

  const totalPrice = () => {
    let totalPrice = 0
    productsData.forEach((product) => {
      totalPrice += product.price * cart[product.id].quantity
    })
    return totalPrice
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-4">Cart Overview</h1>
      <div className="mt-8 grid gap-4 mx-2">{CartProducts}</div>
      <div className="text-3xl font-bold text-end mt-8">
        Total: ${totalPrice()}
      </div>
      <div className="text-end mt-8">
        <button className="btn btn-primary btn-lg">Checkout</button>
      </div>
    </div>
  )
}
