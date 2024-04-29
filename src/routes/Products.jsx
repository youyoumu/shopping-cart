import ProductCard from './ProductCard'
import { useLoaderData } from 'react-router-dom'

export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  console.log(data)
  return data
}

export default function Products() {
  const data = useLoaderData()

  if (!data) return <h1>Loading...</h1>

  const ProductCards = data.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))

  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductCards}
      </div>
    </div>
  )
}
