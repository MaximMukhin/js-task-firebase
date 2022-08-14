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
        console.log(response);
      });
  }
}
