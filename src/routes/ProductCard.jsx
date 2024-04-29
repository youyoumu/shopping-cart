import { Link } from 'react-router-dom'

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating
}) {
  return (
    <div className="card w-72 h-96 bg-base-100 shadow-xl">
      <figure className="w-72 h-60 p-2">
        <img src={image} alt="Shoes" className="object-contain w-full h-full" />
      </figure>
      <div className="card-body">
        <Link to={`/products/${id}`} className="card-title truncate">
          {title}
        </Link>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-lg font-medium">${price}</p>
            <p className="text-sm">{`★${rating.rate} | ${rating.count}`}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
