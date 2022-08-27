import getTasks from "./getTasks.js";
import {Task} from "./task.js";

let input = document.querySelector("#input-task");
const button = document.querySelector("#add-task");

input.addEventListener("input", () => {
  console.log(input.value.length);
  if (input.value.length > 4) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
});

const addTask = async () => {
  button.setAttribute("disabled", true);
  const textInput = input.value;
  const task = {
    text: textInput,
    completed: false,
    date: new Date().toJSON(),
  };

  if (textInput) {
    await Task.create(task);
    await getTasks();
  }

  input.value = "";

  console.log(task);
};

export default addTask;
