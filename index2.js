let arr = [10, 50, 80, 90]
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
console.log(arr.map((value) => value * 2))


// splice(),slice(),shift(), unshift(), reverse(),

//sort((a,b)=> a- b)
//reduce((accumilator, currentValue)= > accumilator +currentValue, initialValue)
arr.reduce

const transactions = [
  { id: 1, name: "shoeb", amount: 500, status: 'completed' },
  { id: 2, name: "ganesh", amount: 200, status: 'pending' },
  { id: 3, name: "new", amount: 1500, status: 'completed' },
  { id: 4, name: "user4", amount: 300, status: 'failed' }
];
console.log(transactions.reduce((total, curr) => total + curr.amount, 0))

//problem : conditions handling


let completedTransactions = transactions.filter((transaction) => transaction.status === "completed").reduce((total, curr) => total + curr.amount, 0)
console.log(completedTransactions)
// let TotalCompletedTransactionsAmount = completedTransactions.reduce((total, curr) => total + curr.amount, 0)
// console.log(TotalCompletedTransactionsAmount)

const users = [
  {
    id: "usr_101",
    name: "Aria Stark",
    email: "aria@example.com",
    role: "admin",
    active: true,
    address: { city: "Winterfell", country: "Westeros", zip: "10001" },
    orders: [
      { orderId: "ord_1", total: 120.50, status: "delivered" },
      { orderId: "ord_2", total: 45.00, status: "delivered" }
    ],
    tags: ["premium", "early-adopter"]
  },
  {
    id: "usr_102",
    name: "Liam Chen",
    email: "liam.c@example.com",
    role: "customer",
    active: true,
    address: { city: "Toronto", country: "Canada", zip: "M5V 2T6" },
    orders: [
      { orderId: "ord_3", total: 210.00, status: "pending" }
    ],
    tags: ["newsletter-subscriber"]
  },
  {
    id: "usr_103",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    role: "customer",
    active: false,
    address: { city: "Madrid", country: "Spain", zip: "28001" },
    orders: [],
    tags: []
  },
  {
    id: "usr_104",
    name: "Devon Vance",
    email: "devon@example.com",
    role: "editor",
    active: true,
    address: { city: "Austin", country: "USA", zip: "78701" },
    orders: [
      { orderId: "ord_4", total: 15.99, status: "delivered" },
      { orderId: "ord_5", total: 89.00, status: "shipped" },
      { orderId: "ord_6", total: 130.00, status: "delivered" }
    ],
    tags: ["premium", "beta-tester"]
  },
  {
    id: "usr_105",
    name: "Zoya Patel",
    email: "zoya.p@example.com",
    role: "customer",
    active: true,
    address: { city: "London", country: "UK", zip: "EC1A 1BB" },
    orders: [
      { orderId: "ord_7", total: 340.00, status: "delivered" }
    ],
    tags: ["vip"]
  }
];

console.log(
  users.map((value) => ({ name: value.name, email: value.email, role: value.role }))
)