import { useState, useEffect } from 'react'

export default function CartProduct({ product }) {
  const [productData, setProductData] = useState()

  useEffect(() => {
    async function getProductData() {
      const res = await fetch(`https://fakestoreapi.com/products/${product.id}`)
      const data = await res.json()
      setProductData(data)
      console.log(data)
    }
    getProductData()
  }, [product])

  if (!productData) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>{productData.title}</h1>
      <p>{productData.price}</p>
      <p>{product.quantity}</p>
    </div>
  )
}
