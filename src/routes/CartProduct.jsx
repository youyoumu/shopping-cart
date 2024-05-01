export default function CartProduct({ product, quantity }) {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="min-w-20 max-w-24 p-2">
          <img src={product.image} alt={product.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <div>
            <p className="text-lg font-medium">${product.price}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="join mr-4">
              <button className="btn btn-sm join-item border-solid border-slate-300">
                -
              </button>
              <div className="join-item min-w-8 border-solid border-slate-300 border flex justify-center items-center">
                {quantity}
              </div>
              <button
                id="quantity"
                className="btn btn-sm join-item border-solid border-slate-300"
              >
                +
              </button>
            </div>
            <div className="text-lg font-semibold">{`$${
              quantity * product.price
            }`}</div>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  )
}
