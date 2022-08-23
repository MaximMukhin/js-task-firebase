const renderListTask = (tasks) => {
  const renderList = document.querySelector("#render-list");
  let outHtml = "";

  tasks.forEach((el) => {
    outHtml += `
<div class="flex-wrapper">
  <div>${el.text}</div>
  <div>
    <input type="checkbox">
    <button type="button" class="btn btn-outline-secondary">Удалить</button>
  </div>
</div>
    `;
  });
  renderList.innerHTML = outHtml;
};

export default renderListTask;
