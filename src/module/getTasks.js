import renderTaskList from "./renderTaskList.js";
const getTasks = () => {
  return fetch("https://js-task-firebase-default-rtdb.firebaseio.com/task.json")
    .then((response) => response.json())
    .then((data) => {
      const tasks = Object.entries(data);
      const newTasks = tasks.map((el) => {
        return { id: el[0], ...el[1] };
      });
      renderTaskList(newTasks);
    })
    .catch((e) => {
      console.log("Список пуст");
      list.innerHTML = `
      <div class="alert alert-warning" role="alert">
      Список задач пуст!
      </div>
      `;
    });
};

export default getTasks;
