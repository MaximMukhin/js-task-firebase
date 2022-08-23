import getInput from "./module/getInput.js";
import getTasks from "./module/getTasks.js";
import renderListTask from "./module/renderListTask.js";
import { Task } from "./module/task.js";

getTasks();

const buttonAddTask = document.querySelector("#add-task");
let input = document.querySelector("#input-task");

const addTask = async () => {
  const textInput = getInput(input);
  const task = {
    text: textInput,
    boolean: false,
    date: new Date().toJSON(),
  };

  await Task.create(task);
  await getTasks();

  input.value = "";
  console.log(task);
};

buttonAddTask.addEventListener("click", addTask);



