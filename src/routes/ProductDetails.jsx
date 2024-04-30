import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

export default function ProductDetails() {
  const product = useLoaderData()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex justify-center mt-8 mx-4">
      <div className="card sm:card-side bg-base-100 shadow-xl max-w-4xl items-center">
        <figure className="min-w-64 max-h-96 sm:ms-8 m-2">
          <img
            src={product.image}
            alt="Album"
            className="object-contain w-full h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end items-end">
            <div className="mr-4">
              <p className="text-lg font-medium">${product.price}</p>
              <p className="text-sm">{`★${product.rating.rate} | ${product.rating.count}`}</p>
            </div>
            <div className="join mr-4">
              <button
                className="btn btn-sm join-item border-solid border-slate-300"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1)
                }}
              >
                -
              </button>
              <div className="join-item min-w-8 border-solid border-slate-300 border flex justify-center items-center">
                {quantity}
              </div>
              <button
                id="quantity"
                className="btn btn-sm join-item border-solid border-slate-300"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
