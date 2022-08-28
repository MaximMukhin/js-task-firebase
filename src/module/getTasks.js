const getTasks = () => {
  return fetch("https://js-task-firebase-default-rtdb.firebaseio.com/task.json")
    .then((response) => response.json())
    .then((data) => {
      const tasks = Object.entries(data);
      const newTasks = tasks.map((el) => {
        return {id: el[0], ...el[1]};
      });
      renderList(newTasks);
    })
    .catch(e => {
      console.log('Список пуст')
      list.innerHTML = `
      <div class="alert alert-warning" role="alert">
      Список задач пуст!
      </div>
      `;
    })
};

const renderList = (arr) => {
  let html = "";

  if (arr.length) {
    arr.forEach(({id, completed, date, text}) => {
      html += `
      <div class="task-card" id="${id}">
        <div>
          <div>  
          Дата cоздания:    
          ${new Date(date).toLocaleDateString()}
          ${new Date(date).toLocaleTimeString()}
          </div>
          <br>
          <div>${text}</div>
        </div>
        <div style="display: flex; align-items: center;">
          <input 
          class="form-check-input" 
          type="checkbox" 
          id="checkboxNoLabel" 
          value="" aria-label="..."
          ${completed && "checked"}
          >
          <button 
          id="remove-task"
          data-action="delete"
          type="button" 
          class="btn btn-outline-danger"
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
  } else {
    list.innerHTML = `
      <div class="alert alert-warning" role="alert">
      Список задач пуст!
      </div>
      `;
  }
};

export default getTasks;



