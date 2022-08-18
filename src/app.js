import clg from "./module/clg.js";

clg();
const input = document.querySelector("#input-task");
const btnGetInput = document.querySelector("#get-input");

const getInput = () => {
  console.log("Работает");
};

btnGetInput.addEventListener("click", getInput);