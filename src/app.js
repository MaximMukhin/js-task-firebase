import getInput from "./module/getInput.js";

const tasks = [];

const btnGetInput = document.querySelector("#get-input");
// const inputText = document.querySelector("#input-text");
const renderList = document.querySelector("#render-list");

const renderText = () => {
  const textInput = getInput();
  tasks.push({ text: textInput, boolean: false });
  //  inputText.innerHTML = textInput;
  const input = document.querySelector("#input-task");
  input.value = "";
  console.log(tasks);
  renderListTask();
};

btnGetInput.addEventListener("click", renderText);

const renderListTask = () => {
  let outHtml = "";
  tasks.forEach((el) => {
    outHtml += `
<div>

  <div>${el.text}</div>
  <div>
    <input type="checkbox">
    <button>Удалить</button>
  </div>

</div>

    `;
  });
  renderList.innerHTML = outHtml;
};


