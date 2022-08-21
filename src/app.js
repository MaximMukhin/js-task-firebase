import getInput from "./module/getInput.js";
import getTasks from "./module/getTasks.js";
import renderListTask from "./module/renderListTask.js";

const tasks = [];

function Task(task) {
  (this.task = task), (this.boolean = false), (this.date = new Date().toJSON());
}

const task1 = new Task("привет");

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

getTasks().then((data) => {
  const tasks = Object.entries(data);
  tasks.forEach((el) => {
    console.log([el[0], el[1]]);
  });
});
