import CartProduct from './CartProduct'
import { useOutletContext } from 'react-router-dom'

export default function CartOverview() {
  const [cart, setCart] = useOutletContext()

  const CartProducts = Object.values(cart).map((product) => (
    <CartProduct key={product.id} product={product} />
  ))

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mt-4">Cart Overview</h1>
      <div className="mt-8 grid gap-4 mx-2">{CartProducts}</div>
    </div>
  )
}
