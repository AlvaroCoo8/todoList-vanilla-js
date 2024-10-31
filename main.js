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

} 

document.addEventListener("DOMContentLoaded", () => initialize())