// TODOLIST TYPE 2 WITH ARRAY

// THE SELECTORS
const todoInput = document.querySelector(".todo-input");
const addTodo = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");

// CREATING EMPTY ARRAY TO STORE THE TODOS
let todoItems = [];

// EVENT LISTENERS 
addTodo.addEventListener("click",addTodoItem);// ADDS ITEM AND UPDATES ARRAY
todoList.addEventListener("click",deleteAndCheck);// DELETE ARRAY


// FUNCTIONS

// ADD ITEM FUNC
function addTodoItem(){
    if(todoInput.value.trim() !== ""){
        todoItems.push(todoInput.value);              
        // console.log(todoItems);     
        todoInput.value = "";   
    }
    todoList.innerHTML = "" // EMPTIES THE PREVIOUS DISPLAY IN THE HTML TO MAKE WAY FOR FRESH DISPLAY
    display(); //CALLS THE DISPLAY FUNCTION WHICH DISPLAYS TODOITEMS
}

// DISPLAY ARRAYS FUNC
function display(){
    for(let i = 0; i < todoItems.length; i++){ // LOOP THROUGH TO GENERATE ARRAY ELEMENTS
        let newlyAddedTodo = document.createElement("li");
        newlyAddedTodo.innerHTML = [todoItems[i]];
        todoList.appendChild(newlyAddedTodo);
    
        const done = document.createElement("button");
        done.classList.add("check")
        done.innerHTML = "done";
    
        const del = document.createElement("button");
        del.classList.add("remove");
        del.innerHTML = "delete";
    
        newlyAddedTodo.appendChild(done)
        newlyAddedTodo.appendChild(del);
    }
}

// DELET AND DONE FUNCTION 
function deleteAndCheck(e){
    element = e.target;
    if (element.classList[0] === "check") {
        element.parentElement.classList.toggle("checked")
        
    }
    if (element.classList[0] === "remove"){
        element.parentElement.remove();
        
        // THIS IS GETTING THE LI ELEMENT'S TEXT CONTENT,SO IF IT DISPLAYS HIT,IT WILL GET "HIT"
        todoIndex = element.parentElement.firstChild.data;

        todoItems.splice(todoItems.indexOf(todoIndex),1)
    }
} 