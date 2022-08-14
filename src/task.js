export class Task {
  static create(task) {
    return fetch(
      "https://js-authorization-aac72-default-rtdb.firebaseio.com/task.json",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        task.id = response.name;
        return task;
      })
      .then(addToLocalStorage)
      .then(Task.renderTaskList);
  }
  static renderTaskList() {
    const task = getTaskFromLocalStorage();
  }
}

function addToLocalStorage(task) {
  const allTask = getTaskFromLocalStorage();
  allTask.push(task);
  localStorage.setItem("task", JSON.stringify(allTask));
}

function getTaskFromLocalStorage() {
  return JSON.parse(localStorage.getItem("task") || "[]");
}