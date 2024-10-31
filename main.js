import './style.css'

const initialize = () => {

  const body = document.querySelector("body")
  const divs = document.querySelectorAll("div")
  const divContainer = divs[0]
  const divSearch = divs[1]
  const btnAdd = document.querySelector("button")
  const divLiContainer = divs[2]
  const divEmpty = divs[3]
  const divTaskCount = divs[4]
  
  divContainer.classList.add("container")
  divSearch.classList.add("search")
  btnAdd.classList.add("btn-add")
  divLiContainer.classList.add("li-container")
  divEmpty.classList.add("empty")
  divTaskCount.classList.add("task-count")

  btnAdd.addEventListener("click", addTask)

} 


const addTask = (event) => { 
  
  const input = document.querySelector("input")

  event.preventDefault() 
  createTask(input.value)
  input.value = ""
  
}

const createTask = (name) => {
 
  const ulContainer = document.querySelector("ul")
  const li = document.createElement("li")
  const p = document.createElement("p")
  const span = document.createElement("span")
  const button = document.createElement("button")

  span.textContent = name
  button.className = "btn-delete"
  button.textContent = "X"

  p.appendChild(span)
  li.appendChild(p)
  li.appendChild(button)
  ulContainer.appendChild(li)

}

document.addEventListener("DOMContentLoaded", () => initialize())