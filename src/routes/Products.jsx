import { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from './ProductCard'

export default function Products() {
  const [data, setData] = useState(null)

  async function getAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    console.log(data)
    setData(data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

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
