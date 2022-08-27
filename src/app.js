import addTask from "./module/addTask.js";
import getTasks from "./module/getTasks.js";

window.addEventListener("DOMContentLoaded", getTasks);

document.querySelector("#add-task").addEventListener("click", addTask);