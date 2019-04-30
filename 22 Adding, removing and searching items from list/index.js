const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input.add");
const inputSearch = document.querySelector("input.search");

const toDoList = [];

const removeTask = e => {
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  renderList();
  taskNumber.textContent = listItems.length;
};

const addTask = e => {
  e.preventDefault();
  const titleTask = input.value;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `<button>Delete</button> ${titleTask}`;
  if (!titleTask) {
    alert("Add task!!!");
    return;
  }
  toDoList.push(task);
  renderList();
  input.value = "";
  taskNumber.textContent = listItems.length;
  task.querySelector("button").addEventListener("click", removeTask);
};
const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
};
const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  let tasks = toDoList;
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
};

inputSearch.addEventListener("input", searchTask);
form.addEventListener("submit", addTask);
