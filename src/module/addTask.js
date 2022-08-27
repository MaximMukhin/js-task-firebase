import getInput from "./getInput.js";
import getTasks from "./getTasks.js";
import { Task } from "./task.js";

const addTask = async () => {
  let input = document.querySelector("#input-task");
  const textInput = getInput(input);
  const task = {
    text: textInput,
    completed: false,
    date: new Date().toJSON(),
  };

  await Task.create(task);
  await getTasks();

  input.value = "";
  console.log(task);
};

export default addTask;
