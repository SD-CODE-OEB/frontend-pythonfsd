// A standard todo list array initialized with sample data
import todoList from './data.json';
import createTodoLi from './utility';
export const todoListUl = document.getElementById("task-list");
const addTaskBtn = document.getElementById('add-task-btn');
const CreateTodoForm = document.querySelector('.todo-form')


function showTodoList() {
  todoList.forEach((item) => {
    const todoItem = createTodoLi(item)
    todoListUl.appendChild(todoItem)
  })
}
showTodoList();
const deleteTaskBtns = document.querySelectorAll('#delete-btn')


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


deleteTaskBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener('click', (e) => {
    const taskItem = e.target.previousElementSibling
    const taskItemId = taskItem.id
    todoList = todoList.filter((todo) => todo.id !== taskItemId)
  })
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