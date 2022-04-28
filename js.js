const todoInput = document.querySelector(".todo-input");
const addTodo = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");

let todoItems = [];

document.addEventListener("DOMContentLoaded", getTodoList); 
addTodo.addEventListener("click", addTodoItem); 
todoList.addEventListener("click", deleteAndCheck); 


function addTodoItem() {
    if (todoInput.value.trim() !== "") {
        saveData();
        todoInput.value = "";

    } else {
        alert("Field must not be blank");
        todoInput.value = "";
    }
    todoList.innerHTML = "" 
    display(); 
}

function display() {
    for (let i = 0; i < todoItems.length; i++) { 
        let newlyAddedTodo = document.createElement("li"); 
        newlyAddedTodo.innerHTML = [todoItems[i]]; 
        todoList.appendChild(newlyAddedTodo); 


        const done = document.createElement("button");
        done.classList.add("check"); 
        done.innerHTML = "Done"; 

        const del = document.createElement("button");
        del.classList.add("remove"); 
        del.innerHTML = "Delete"; 


        newlyAddedTodo.appendChild(done);
        newlyAddedTodo.appendChild(del);
    }
}

function deleteAndCheck(e) {
    item = e.target;

    if (item.classList[0] === "check") {
        item.parentElement.classList.toggle("checked")
    }
    if (item.classList[0] === "remove") {
        item.parentElement.remove();


        todoIndex = item.parentElement.firstChild.data;
        todoItems.splice(todoItems.indexOf(todoIndex), 1);
        localStorage.setItem("todo-list", JSON.stringify(todoItems));
    }
}

function saveData() {
    todoItems.push(todoInput.value);
    localStorage.setItem("todo-list", JSON.stringify(todoItems));
}

function getTodoList() {
    console.log("working");
    if (localStorage.getItem("todo-list") === null) {
        todoItems = [];
    } else {
        todoItems = JSON.parse(localStorage.getItem("todo-list"));
    }
    console.log("still working");
    display();
}
