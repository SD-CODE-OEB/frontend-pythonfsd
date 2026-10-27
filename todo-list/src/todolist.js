import initialTodoList from './data.json';
import createTodoLi from './utility';

export const todoListUl = document.getElementById("task-list");
const addTaskBtn = document.getElementById('add-task-btn');
const CreateTodoForm = document.querySelector('.todo-form');

let todoList = [...initialTodoList];


console.log(name)
showTodoList();

addTaskBtn.addEventListener('click', () => {
  const isAdding = addTaskBtn.innerText.trim().toLowerCase() === "add todo";
  if (isAdding) {
    CreateTodoForm.style.display = "flex";
    addTaskBtn.innerText = "Cancel";
  } else {
    CreateTodoForm.style.display = "none";
    addTaskBtn.innerText = "Add Todo";
  }
});

CreateTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formTodos = new FormData(event.target);
  const data = Object.fromEntries(formTodos.entries());
  const newTodoText = (data['todo-input'] || '').trim();

  if (!newTodoText) return;

  const newTodoItem = {
    id: Date.now(),
    text: newTodoText,
    completed: false
  };

  todoList.push(newTodoItem);
  const createItem = createTodoLi(newTodoItem);
  todoListUl.appendChild(createItem);
  event.target.reset();
  CreateTodoForm.style.display = "none";
  addTaskBtn.innerText = "Add Todo";
});

todoListUl.addEventListener('click', (event) => {
  console.log(`[Event Bubbling on UL] Clicked element: <${event.target.tagName.toLowerCase()}> | Handled at: <${event.currentTarget.tagName.toLowerCase()}>`);

  const deleteBtn = event.target.closest('.delete-btn');
  if (deleteBtn) {
    const li = deleteBtn.closest('li.todo-item');
    if (!li) return;

    const todoId = Number(li.dataset.id);
    const todo = todoList.find((item) => item.id === todoId);

    if (!todo) return;

    if (!todo.completed) {
      alert("Cannot delete this task! You can only delete tasks that are marked as completed.");
      return;
    }
    const confirmed = confirm(`Are you sure you want to delete "${todo.text}"?`);
    if (confirmed) {
      todoList = todoList.filter((item) => item.id !== todoId);
      li.remove();
      console.log(`[Delete Success] Todo id ${todoId} deleted.`);
    }
    return;
  }

  if (event.target.classList.contains('todo-box')) {
    const checkbox = event.target;
    const li = checkbox.closest('li.todo-item');
    const todoId = Number(li.dataset.id);
    const todo = todoList.find((item) => item.id === todoId);

    if (todo) {
      todo.completed = checkbox.checked;
      const textSpan = li.querySelector('.todo-text');
      if (textSpan) {
        if (todo.completed) {
          textSpan.classList.add('line-through', 'text-gray-500');
        } else {
          textSpan.classList.remove('line-through', 'text-gray-500');
        }
      }
      console.log(`[Status Changed] Todo "${todo.text}" completed: ${todo.completed}`);
    }
  }
});

document.addEventListener('click', (event) => {
  if (event.target.closest('#task-list')) {
    console.log(`[Event Bubbling on DOCUMENT] The click on <${event.target.tagName.toLowerCase()}> bubbled up to the document root.`);
  }
});
var name = "heloo"
const showTodoList = () => {
  todoListUl.innerHTML = "";
  todoList.forEach((item) => {
    const todoItem = createTodoLi(item);
    todoListUl.appendChild(todoItem);
  });
}