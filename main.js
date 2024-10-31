import "./style.css";

const task = [];

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
  createTask(input.value);

  task.push(input.value);

  pendingTask.style.display = task.length < 0 ? "block" : "none";
  numberTask.textContent = task.length;
  input.value = "";
};

const createTask = (name) => {
  const ulContainer = document.querySelector("ul");
  const li = document.createElement("li");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = name;
  button.className = "btn-delete";
  button.textContent = "X";

  p.appendChild(span);
  li.appendChild(p);
  li.appendChild(button);
  ulContainer.appendChild(li);
};

document.addEventListener("DOMContentLoaded", () => initialize());
