import axios from "axios"


const apiClient = axios.create({
  baseURL: "https://dummyjson.com/products"
})
// GET all products
const res = await apiClient.get()
const productsData = res.data.products
console.log(productsData)

// GET single product
const getRes = await apiClient.get('/1')
const singleProduct = getRes.data
console.log(singleProduct)

// POST new product
const postRes = await apiClient.post('/add', {
  title: 'BMW Pencil'
})
const createdProduct = postRes.data
// console.log(createdProduct)

// PUT / UPDATE product
const putRes = await apiClient.put('/1', {
  title: 'iPhone Galaxy +1'
})
const updatedProduct = putRes.data
// console.log(updatedProduct)

// DELETE product
const deleteRes = await apiClient.delete('/1')
const deletedProduct = deleteRes.data
// console.log(deletedProduct)