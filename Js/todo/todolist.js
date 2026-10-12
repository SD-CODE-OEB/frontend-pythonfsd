// A standard todo list array initialized with sample data
let todoList = [
  {
    id: 1,
    text: "Buy groceries",
    completed: false
  },
  {
    id: 2,
    text: "Finish JavaScript project",
    completed: true
  },
  {
    id: 3,
    text: "Walk the dog",
    completed: false
  }
];
const todoListUl = document.getElementById("task-list");
const addTaskBtn = document.getElementById('add-task-btn');
const CreateTodoForm = document.querySelector('.todo-form')

function createTodoLi(todoItem) {
  const li = document.createElement("li");
  li.className = "text-xl py-2 text-gray-700"
  li.innerHTML = `<input type='checkbox' class='todo-box'/> <span class='todo-text'>${todoItem.text}</span>`
  return li;
}
function showTodoList() {

  todoList.forEach((item) => {
    const todoItem = createTodoLi(item)
    todoListUl.appendChild(todoItem)
  })
}
showTodoList();


CreateTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formTodos = new FormData(event.target)
  const data = Object.fromEntries(formTodos.entries());
  const newTodoText = data['todo-input'];

  let newTodoItem = {
    id: todoList.length + 1,
    text: newTodoText,
    completed: false
  }

  todoList.push(newTodoItem)
  const createItem = createTodoLi(newTodoItem)
  todoListUl.appendChild(createItem)
  event.target.reset();

})





function handleTodoClick() {
  const inputCheckBoxes = document.querySelectorAll('.todo-box')
  console.log(inputCheckBoxes)
  inputCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      console.log(event.target.checked, "clikced")
      const todoText = checkbox.nextElementSibling
      if (event.target.checked) {

        todoText.style.textDecoration = 'line-through'
        todoText.style.color = 'gray'
      } else {
        todoText.style.textDecoration = 'none'
        todoText.style.color = 'black'
      }
    })
  })
}



addTaskBtn.addEventListener('click', (event) => {
  if (addTaskBtn.innerText.trim().toLocaleLowerCase() === "add todo") {
    CreateTodoForm.style.display = "flex"
    addTaskBtn.innerText = "Cancel"
  } else if (addTaskBtn.innerText.trim().toLocaleLowerCase() === "cancel") {
    CreateTodoForm.style.display = "none"
    addTaskBtn.innerText = "Add Todo"
  }
})





function updateTodo(id) {
  handleTodoClick()
  const todoItem = todoList.find((value) => value.id === id)
  if (todoItem.completed) {
    todoItem.completed = false
    return todoItem
  } else {
    todoItem.completed = true
    return todoItem
  }
}
console.log(updateTodo(2))

function deleteTodoItem(id) {
  todoList = todoList.filter((todoItem) => todoItem.id !== id)
}