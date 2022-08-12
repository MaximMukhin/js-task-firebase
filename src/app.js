import "./styles.css";

const form = document.getElementById("form");
const input = form.querySelector("#task-input");
const btnAddTask = form.querySelector("#btn-add-task");

const addTask = (event) => {
  event.preventDefault();

  console.log(input.value);
};

form.addEventListener("click", addTask);


console.log("app working");
