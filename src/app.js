import {Task} from "./module/task";
import isValid from "./module/isValid";
import "./styles.css";
import getTasks from "./module/getTasks";
import {authWithEmailPassword, getAuthForm} from "./module/auth";

const form = document.getElementById("form");
const input = form.querySelector("#task-input");
const btnAddTask = form.querySelector("#btn-add-task");
const modalLogin = document.getElementById('modal-login')


const openModal = () => {
    createModal('Авторизация', getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit', authFromHandler, {once: true})

}

const authFromHandler = (event) => {
    event.preventDefault()

    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authWithEmailPassword(email, password)
        .then(Task.fetch)
        .then(renderModalAfterAuth)
}

const renderModalAfterAuth = (content) => {
console.log(content)
}

const createModal = (title, content) => {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    const html = `
  <h1>${title}</h1>
  <div class="modal-content">${content}</div>
  `
    modal.innerHTML = `  
  <h1>${title}</h1>
  <div class="modal-content">${content}</div>
`
    mui.overlay('on', modal)
}

modalLogin.addEventListener('click', openModal)


window.addEventListener("load", Task.renderTaskList);

const addTask = (event) => {
    event.preventDefault();

    if (isValid(input.value)) {
        const task = {
            text: input.value.trim(),
            boolean: false,
            date: new Date().toJSON(),
        };

        btnAddTask.disabled = true;
        //Async
        Task.create(task).then(() => {
            setTimeout(() => {
                input.value = "";
                input.className = "";
            }, 500);
        });
    }
};

btnAddTask.addEventListener("click", addTask);
input.addEventListener("input", () => {
    btnAddTask.disabled = !isValid(input.value);
});

getTasks().then((tasks) => Task.renderTaskList(tasks))
const fetchToConsole = document.querySelector("#fetch-to-console");


const getTasksBtn = () => {
    getTasks().then((data) => console.log(data))
};

fetchToConsole.addEventListener("click", getTasksBtn);