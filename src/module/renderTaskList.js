const renderTaskList = (arr) => {
  let html = "";

  if (arr.length) {
    arr.forEach(({id, completed, date, text}) => {
      html += `
      <div class="task-card" id="${id}">
        <div class="task-title">
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
          data-action="completed"
          value="" aria-label="..."
          ${completed && "checked"}
          >
          <button 
          id="remove-task"
          data-action="delete"
          type="button" 
          class="btn btn-danger"
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

export default renderTaskList;
