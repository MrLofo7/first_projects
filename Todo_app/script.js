
let todoList = [];

function addTask() { 
const inputElement =document.querySelector('.js-name-input');
const name = inputElement.value;
todoList.push(name);

console.log(todoList);

inputElement.value =''; //resets the textbox 
}

function handleOnKeyDown (event) {
if (event.key === 'Enter') {
    addTask();
}
}

function removeTask () {

}

