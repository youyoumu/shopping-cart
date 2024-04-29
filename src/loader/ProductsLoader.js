export async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  console.log(data)
  return data
}

export async function getProductsByCategory({ params }) {
  console.log(params.categoryId)
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.categoryId}`
  )
  const data = await res.json()
  console.log(data)
  return data
}
