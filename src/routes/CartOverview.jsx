import CartProduct from './CartProduct'
import { useOutletContext } from 'react-router-dom'

export default function CartOverview() {
  const [cart, setCart] = useOutletContext()

  const CartProducts = Object.values(cart).map((product) => (
    <CartProduct key={product.id} product={product} />
  ))

  return (
    <>
      <h1>Cart Overview</h1>
      {CartProducts}
    </>
  )
}
