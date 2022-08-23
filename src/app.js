import getInput from "./module/getInput.js";
import getTasks from "./module/getTasks.js";
import renderListTask from "./module/renderListTask.js";

const tasks = [];

function Task(task) {
  (this.task = task), (this.boolean = false), (this.date = new Date().toJSON());
}

const buttonAddTask = document.querySelector("#add-task");
let input = document.querySelector("#input-task");

const renderText = () => {
  const textInput = getInput(input);
  tasks.push({ text: textInput, boolean: false });

  input.value = "";
  console.log(tasks);
  renderListTask(tasks);
};

buttonAddTask.addEventListener("click", renderText);

getTasks().then((data) => {
  const tasks = Object.entries(data);
  let html = "";

  tasks.forEach((el) => {
    console.log([el[0], el[1]]);
    html += `
    <div class="flex-wrapper">
      <div>
        <div>      
        ${new Date(el[1].date).toLocaleDateString()}
        ${new Date(el[1].date).toLocaleTimeString()}
        </div>
        <div>${el[1].text}</div>
      </div>
      <div style="display: flex; align-items: center;">
        <input 
        class="form-check-input" 
        type="checkbox" 
        id="checkboxNoLabel" 
        value="" aria-label="..."
        >
        <button 
        type="button" 
        class="btn btn-outline-secondary"
        style="margin-left: 8px"
        >
        Удалить
        </button>
      </div>
    </div>
    `;
  });
  const list = document.querySelector("#list");
  list.innerHTML = html;
});
