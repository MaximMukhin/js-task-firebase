const getTasks = () => {
  return fetch("https://js-task-firebase-default-rtdb.firebaseio.com/task.json")
    .then((response) => response.json())
    .then((data) => {
      const tasks = Object.entries(data);
      const newTasks = tasks.map((el) => {
        return { id: el[0], ...el[1] };
      });
      console.log(newTasks);
      let html = "";

      newTasks.forEach((el) => {
        html += `
        <div class="flex-wrapper">
          <div>
            <div>      
            ${new Date(el.date).toLocaleDateString()}
            ${new Date(el.date).toLocaleTimeString()}
            </div>
            <div>${el.text}</div>
          </div>
          <div style="display: flex; align-items: center;">
            <input 
            class="form-check-input" 
            type="checkbox" 
            id="checkboxNoLabel" 
            value="" aria-label="..."
            >
            <button 
            type="button" 
            type="button" class="btn btn-outline-danger"
            style="margin-left: 8px"
            >
            Удалить
            </button>
          </div>
        </div>
        `;
      });
      const list = document.querySelector("#list");
      list.innerHTML = html;
    });
};

export default getTasks;



