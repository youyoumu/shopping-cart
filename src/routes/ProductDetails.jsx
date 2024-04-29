import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
  const product = useLoaderData()
  console.log(product)

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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
