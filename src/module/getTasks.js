const getTasks = () => {
  return fetch("https://js-task-firebase-default-rtdb.firebaseio.com/task.json")
    .then((response) => response.json())
    .then((data) => {
      const dataToArray = Object.entries(data);
      // console.log("dataToArray", dataToArray);
      const tasksColl = dataToArray.map(newTask);
      // console.log("tasksColl", tasksColl);
      return tasksColl;
    });
};

const newTask = (task) => {
  return {
    id: task[0],
    text: task[1].text,
    date: task[1].date,
    boolean: task[1].boolean,
  };
};

export default getTasks;






// const tasksColl = dataToArray.map((el) => {
//   return {
//     id: el[0],
//     text: el[1].text,
//     date: el[1].date,
//     boolean: el[1].boolean,
//   };
// });