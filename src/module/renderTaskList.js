const renderTaskList = (coll) => {
    coll.forEach((task) => {
        return `
  <div class="mui--text-black-54"> Создана:
  ${new Date(task.date).toLocaleDateString()}
  ${new Date(task.date).toLocaleTimeString()}
  </div>
  <div>${task.text} <input type="checkbox" ></input></div>
  <br>
  `;
    })
};

export default renderTaskList;