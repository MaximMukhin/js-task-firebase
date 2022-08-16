export class Task {
  static create(task) {
    return fetch(
      "https://js-task-firebase-default-rtdb.firebaseio.com/task.json",
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
        console.log(task)
        return task;
      })
      .then(Task.renderTaskList);
  }



  static renderTaskList(coll) {
    const task = coll;
    const html = task.length
      ? task.map(renderOneTask).join("")
      : `<div class="mui--text-headline">Нет задач</div>`;

    const list = document.querySelector("#render-list");
    list.innerHTML = html;
  }
}

function renderOneTask(task) {
  return `
  <div class="mui--text-black-54"> Создана:
  ${new Date(task.date).toLocaleDateString()}
  ${new Date(task.date).toLocaleTimeString()}
  </div>
  <div>${task.text} <input type="checkbox" /></div>
  <br>
  `;
}
