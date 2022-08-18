import getInput from "./module/getInput.js";

const btnGetInput = document.querySelector("#get-input");
const inputText = document.querySelector("#input-text");

const renderText = () => {
  const textInput = getInput();
  inputText.innerHTML = textInput;
};



btnGetInput.addEventListener("click", renderText);
