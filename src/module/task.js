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
        return console.log(task);
      });
  }
}

// fetch('http://localhost:4000/articles', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: '',
//         content: '',
//     })
// })
//     .then((res) => res.json())
//         .then((data) => console.log(data))