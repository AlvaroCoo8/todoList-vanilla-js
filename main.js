import "./style.css";

let task = [];
let taskId = 1;

const initialize = () => {
  const body = document.querySelector("body");
  const divs = document.querySelectorAll("div");
  const divContainer = divs[0];
  const divSearch = divs[1];
  const btnAdd = document.querySelector("button");
  const divLiContainer = divs[2];
  const divEmpty = divs[3];
  const divTaskCount = divs[4];

  divContainer.classList.add("container");
  divSearch.classList.add("search");
  btnAdd.classList.add("btn-add");
  divLiContainer.classList.add("li-container");
  divEmpty.classList.add("empty");
  divTaskCount.classList.add("task-count");

  btnAdd.addEventListener("click", addTask);
};

const addTask = (event) => {
  const input = document.querySelector("input");
  const pendingTask = document.querySelector(".empty");
  const divNumberTask = document.querySelector(".task-count");
  const numberTask = divNumberTask.querySelectorAll("span")[1];

  event.preventDefault();

  if (input.value == "") return;

  const newTask = { id: taskId++, name: input.value };
  createTask(newTask);
  task.push(newTask);

  pendingTask.style.display = task.length < 0 ? "block" : "none";
  numberTask.textContent = task.length;
  input.value = "";
};

const createTask = (task) => {
  const ulContainer = document.querySelector("ul");
  const li = document.createElement("li");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = task.name;
  button.className = "btn-delete";
  button.textContent = "X";

  button.addEventListener("click", () => deleteTask(task.id, li))

  p.appendChild(span);
  li.appendChild(p);
  li.appendChild(button);
  ulContainer.appendChild(li);
};

const deleteTask = (id, li) => {

  const pendingTask = document.querySelector(".empty");
  const divNumberTask = document.querySelector(".task-count");
  const numberTask = divNumberTask.querySelectorAll("span")[1];
  const ulContainer = document.querySelector("ul");
  ulContainer.removeChild(li);

  task = task.filter((t) => t.id !== id);
 
  pendingTask.style.display = task.length > 0 ? "none" : "block" ;
  numberTask.textContent = task.length;
};

document.addEventListener("DOMContentLoaded", () => initialize());
