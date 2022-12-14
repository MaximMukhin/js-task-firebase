import addTask from "./module/addTask.js";
import getTasks from "./module/getTasks.js";
import removeTask from "./module/removeTask.js";
import taskReadySwitch from "./module/taskReadySwitch.js";

window.addEventListener("DOMContentLoaded", getTasks);

document.querySelector("#add-task").addEventListener("click", addTask);

document.querySelector(".list").addEventListener("click", (event) => {
  if (event.target.dataset.action === "delete") {
    const parent = event.target.closest(".task-card");
    parent.remove();
    removeTask(parent.id);

    console.log(parent.id);
  }
});

document.querySelector(".list").addEventListener("click", (event) => {
  if (event.target.dataset.action === "completed") {
    const parent = event.target.closest(".task-card");
    const taskTitle = parent.querySelector(".task-title");
    const input = parent.querySelector(".form-check-input");
    const id = parent.id;

    if (input.checked) {
      console.log("true");
      taskReadySwitch(id, { completed: true });
      taskTitle.classList.add("task-title--done");
    } else {
      console.log("false");
      taskReadySwitch(id, { completed: false });
      taskTitle.classList.toggle("task-title--done");
    }
    //console.log(input.checked)

    console.log(id);
  }
});

