import { Task } from "./task";
import isValid from "./module/isValid";
import "./styles.css";

const form = document.getElementById("form");
const input = form.querySelector("#task-input");
const btnAddTask = form.querySelector("#btn-add-task");

window.addEventListener("load", Task.renderTaskList);

const addTask = (event) => {
  event.preventDefault();

  if (isValid(input.value)) {
    const task = {
      text: input.value.trim(),
      boolean: false,
      date: new Date().toJSON(),
    };

    btnAddTask.disabled = true;
    //Async
    Task.create(task).then(() => {
      setTimeout(() => {
        input.value = "";
        input.className = "";
      }, 500);
    });
  }
};

btnAddTask.addEventListener("click", addTask);
input.addEventListener("input", () => {
  btnAddTask.disabled = !isValid(input.value);
});
