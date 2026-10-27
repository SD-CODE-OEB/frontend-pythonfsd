import { Trash } from 'lucide-static'
import { todoListUl } from './todolist';

export default function createTodoLi(todoItem) {
  const li = document.createElement("li");
  li.className = "todo-item text-xl py-2 flex items-center gap-3";
  li.dataset.id = todoItem.id;
  
  const isChecked = Boolean(todoItem.completed);
  const textDecor = isChecked ? "line-through text-gray-500" : "";

  li.innerHTML = `
    <input type='checkbox' class='todo-box cursor-pointer' ${isChecked ? "checked" : ""}/> 
    <span class='todo-text ${textDecor}' id='todo-text-${todoItem.id}'>${todoItem.text}</span> 
    <button type="button" class="delete-btn bg-red-100 sm:hover:bg-red-200 text-red-700 min-h-[44px] px-3 py-1 rounded cursor-pointer">
      delete
    </button>
  `;
  return li;
}