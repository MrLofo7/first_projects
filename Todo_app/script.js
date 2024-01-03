

let todoList = [];

// Check local storage for existing todo list
const storedTodoList = localStorage.getItem('todoList');
if (storedTodoList) {
    todoList = JSON.parse(storedTodoList);
}

renderTodoList();

function renderTodoList() {
    const todoListContainer = document.querySelector('.js-todo-list');
    todoListContainer.innerHTML = '';

    if (todoList.length === 0) {
        todoListContainer.innerHTML = '<p>No tasks added yet.</p>';
    } else {
        todoList.forEach((todoObject, index) => {
            const { name, dueDate } = todoObject;
            const todoItemHTML = createTodoItemHTML(name, dueDate, index);
            todoListContainer.innerHTML += todoItemHTML;
        });
    }
}

function createTodoItemHTML(name, dueDate, index) {
    return `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button data-index="${index}" class="delete-button">Delete</button>`;
}

function addTask() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    if (name && dueDate) {
        todoList.push({ name, dueDate });
        inputElement.value = '';
        updateLocalStorage();
        renderTodoList();
    } else {
        alert('Please enter both name and due date.');
    }
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function handleOnKeyDown(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

document.querySelector('.js-todo-list').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        const index = event.target.dataset.index;
        todoList.splice(index, 1);
        updateLocalStorage();
        renderTodoList();
    }
});



