import { useState, useEffect } from 'react'

export default function CartProduct({ product }) {
  const [productData, setProductData] = useState()

  useEffect(() => {
    async function getProductData() {
      const res = await fetch(`https://fakestoreapi.com/products/${product.id}`)
      const data = await res.json()
      setProductData(data)
    }
    getProductData()
  }, [product])

  if (!productData) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="min-w-20 max-w-24 p-2">
          <img src={productData.image} alt={productData.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productData.title}</h2>
          <div>
            <p className="text-lg font-medium">${productData.price}</p>
          </div>
          <div className="join mr-4">
            <button className="btn btn-sm join-item border-solid border-slate-300">
              -
            </button>
            <div className="join-item min-w-8 border-solid border-slate-300 border flex justify-center items-center">
              {product.quantity}
            </div>
            <button
              id="quantity"
              className="btn btn-sm join-item border-solid border-slate-300"
            >
              +
            </button>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  )
}
