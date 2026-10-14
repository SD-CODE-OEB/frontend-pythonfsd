import { Trash } from 'lucide-static'
import { todoListUl } from './todolist';

export default function createTodoLi(todoItem) {
  const li = document.createElement("li");
  li.className = "text-xl py-2 text-gray-700"
  li.innerHTML = `<input type='checkbox' class='todo-box'/> <span class='todo-text' id=${todoItem.id}>${todoItem.text}</span> <button id="delete-btn" class="bg-red-100 p-3 rounded-2xl cursor-pointer hover:bg-red-300">
      delete
    </button>`
  return li;
}