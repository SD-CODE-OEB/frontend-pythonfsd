console.log("hello")
//body
// const body = document.doctype;
// console.log(body)
// const button = document.getElementById('btn')
// console.log(button.textContent)
// button.textContent = "dom change"
// console.log(button.textContent)
// const ptag = document.querySelector('p')
// console.log(ptag)
// const ptags = document.querySelectorAll('p')
// console.log(ptags)

// const liItems = document.querySelectorAll('.li-item')
// console.log(liItems)

// // for (let i = 0; i < liItems.length; i++) {
// //   liItems[i].textContent = `List Item ${i}`
// // }

// liItems.forEach((value, idx, arr) => {
//   value.textContent = `List Item ${idx}`
//   console.log(value.style)
//   value.style.backgroundColor = "#000"
//   value.style.fontSize = "24px"
//   value.style.color = "white"
// });






// console.log(`string ${liItems}`)



const data = {
  "cars": [
    { "name": "maruti", model: "swift" },
    { "name": "benz", model: "s300" },
    { "name": "bmw", model: "X9" }
  ],
  "bikes": [
    { "name": "hero", model: "splender" },
    { "name": "honda", model: "shine" },
    { "name": "yamaha", model: "r15" }
  ]
}

const carsList = document.getElementById('cars')
const bikesList = document.getElementById('bikes')



data.cars.map((car, index) => {
  console.log(`${car.name}:${car.model}`)
  let li = document.createElement('li');
  li.className = 'li-car-item';
  li.textContent = `${car.name}:${car.model}`
  carsList.appendChild(li)
})

