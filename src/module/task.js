export class Task {
  static create(task) {
    return fetch(
      "https://js-task-firebase-default-rtdb.firebaseio.com/task.json",
      {
        method: "POST",
        body: JSON.stringify(question),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        task.id = response.name;
        return task;
      });
  }
}
