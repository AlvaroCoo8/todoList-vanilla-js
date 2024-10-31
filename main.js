import './style.css'

const initialize = () => {

  const body = document.querySelector("body")
  const divs = document.querySelectorAll("div")
  const divContainer = divs[0]
  const divSearch = divs[1]
  const btnAdd = document.querySelector("button")
  const divEmpty = divs[2]
  const divTaskCount = divs[3]
  
  divContainer.classList.add("container")
  divSearch.classList.add("search")
  btnAdd.classList.add("btn-add")
  divEmpty.classList.add("empty")
  divTaskCount.classList.add("task-count")

} 

document.addEventListener("DOMContentLoaded", () => initialize())