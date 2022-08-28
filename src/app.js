import addTask from "./module/addTask.js";
import getTasks from "./module/getTasks.js";
import removeTask from "./module/removeTask.js";

window.addEventListener("DOMContentLoaded", getTasks);

document.querySelector("#add-task").addEventListener("click", addTask);


document.querySelector('.list').addEventListener('click', (event) => {
  if (event.target.dataset.action === 'delete') {
    const parent = event.target.closest('.task-card')
    parent.remove()
    removeTask(parent.id)

    console.log(parent.id)
  }
})

