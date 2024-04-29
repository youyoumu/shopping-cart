export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

export async function getProductsByCategory({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.categoryId}`
  )
  const data = await res.json()
  return data
}

export async function getProductsById({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  )
  const data = await res.json()
  return data
}
