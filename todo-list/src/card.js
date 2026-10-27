const card = document.querySelector('.card');
const addToCartBtn = document.querySelector('.add-to-cart')
const wishlistBtn = document.querySelector('.wishlist')


card.addEventListener("click", function (e) {
  e.stopPropagation()
  console.log(e.target, "card cliked")
})

addToCartBtn.addEventListener("click", function (e) {
  e.stopPropagation()
  console.log(e.target, "add to cart cliked")
})

wishlistBtn.addEventListener("click", function (e) {
  e.stopPropagation()
  console.log(e.target, "wishlist cliked")
})

document.body.addEventListener("click", function (e) {
  console.log(e.target, "body cliked")
})