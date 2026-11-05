// const productsData = fetch('https://dummyjson.com/products')

//   .then(res => (res.json())).then(res => (res.products))

//   .catch(err => console.log(err))

//async await 

// GET all products
const res = await fetch('https://dummyjson.com/products')
const data = await res.json()
const productsData = data.products
console.log(productsData)

// GET single product
const getRes = await fetch('https://dummyjson.com/products/1', {
  method: 'GET'
})
const singleProduct = await getRes.json()
console.log(singleProduct)

// POST new product
const postRes = await fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "title": 'BMW Pencil',
  })
})
if (postRes.ok) {

  const Postdata = postRes.json()
  console.log(Postdata)
} else {
  throw Error(`Your api call is failed to due status code : ${postRes.status}`)
}
// const createdProduct = await postRes.json()
// console.log(createdProduct)

// PUT / UPDATE product
const putRes = await fetch('https://dummyjson.com/products/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
// const updatedProduct = await putRes.json()
// console.log(updatedProduct)

// DELETE product
const deleteRes = await fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
// const deletedProduct = await deleteRes.json()
// console.log(deletedProduct)





export default productsData;


export async function add() {
  throw Error('this is an error message')
}

