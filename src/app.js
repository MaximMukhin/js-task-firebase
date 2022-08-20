import getInput from "./module/getInput.js";
import renderListTask from "./module/renderListTask.js";

const tasks = [];

const buttonGetInput = document.querySelector("#get-input");
let input = document.querySelector("#input-task");

const renderText = () => {
  const textInput = getInput(input);
  tasks.push({ text: textInput, boolean: false });

  input.value = "";
  console.log(tasks);
  renderListTask(tasks);
};

buttonGetInput.addEventListener("click", renderText);



