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

  static fetch(token) {
      if (!token) {
          return Promise.resolve(`<p class="error">У вас нету прав</p>`)
      }
      return fetch(`https://js-task-firebase-default-rtdb.firebaseio.com/task.json?${token}`)
          .then(response => response.json())
          .then(response => {
              if (response.error) {
                  return `<p class="error">${response.error}</p>`
              }
              return response ? Object.keys(response).map(key => ({
                  ...response[key],
                      id: key
              })) : []
          })
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
