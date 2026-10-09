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

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "text-xl py-2 text-gray-700"
  li.innerHTML = `<input type='checkbox' class='todo-box'/> <span class='todo-text'>${text}</span>`
  return li;
}

todoList.forEach((item) => {
  const todoItem = createTodoItem(item.text)

  todoListUl.appendChild(todoItem)
})


function deleteTodoItem(id) {
  todoList = todoList.filter((todoItem) => todoItem.id !== id)
}

function handleTodoClick() {
  const inputCheckBoxes = document.querySelectorAll('.todo-box')
  console.log(inputCheckBoxes)
  inputCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      console.log(checkbox, "clikced")
      const todoText = checkbox.nextElementSibling
      todoText.style.textDecoration = 'line-through'
      todoText.style.color = 'gray'
    })
  })
}


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

