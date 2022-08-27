import addTask from "./module/addTask.js";
import getTasks from "./module/getTasks.js";
// import removeTask from "./module/removeTask.js";

window.addEventListener("DOMContentLoaded", getTasks);

document.querySelector("#add-task").addEventListener("click", addTask);

setTimeout(() => {
  document.querySelector('.list').addEventListener('click', (event) => {

    if (event.target.dataset.action === 'delete') {
      console.log('del')
      const parent = event.target.closest('.task-wrapper')
      console.log(parent)
    }
  })
}, 1000)
