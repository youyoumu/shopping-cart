export default function ProductCard({
  title,
  price,
  description,
  category,
  image,
  rating
}) {
  return (
    <div className="card w-72 h-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="object-contain w-72 h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">{title}</h2>
        <div className="flex items-end">
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
