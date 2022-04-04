// THE SELECTORS
const todoInput = document.querySelector(".todo-input");
const add = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");


// EVENT LISTENERS
add.addEventListener("click", addItem);
todoList.addEventListener("click",checkAndRemove);


// FUNCTIONS

// ADD ITEM FUNCTION
function addItem(e) {
        if(todoInput.value === "" || " "){ //if the fiels is BLANK DONT SUBMIT
            alert("Field must not be empty")
        }else{
             //CREATING LIST ELEMENT
             const todoItem = document.createElement("li");
             // SETTING THE INPUT ELEMENT TO THE TYPED VALUE
             todoItem.innerText = todoInput.value;
             // ADDING IT TO THE UL IN THE HTML
             todoList.appendChild(todoItem)
             
         
             // CREATING DONE BUTTONS
             const done = document.createElement("button");
             // SETTING ITS TEXT TO DONE
             done.innerText = ("done");
             // ADDING A CLASS OF DONE TO IT
             done.classList.add("done");
         
             // CREATING DELETE BUTTON
             const remove = document.createElement("button");
             // SETTING ITS TEXT TO REMOVE
             remove.innerText = ("remove");
             // ADDING A CLASS OF REMOVE TO IT
             remove.classList.add("remove");
         
             // ADD BOTH CREATED BUTTONS TO THE LIST
             todoItem.appendChild(done);
             todoItem.appendChild(remove);
         
             // RESET INPUT BUTTON AFTER EVERYTHING IS DONE
             todoInput.value = "";
             // }else{
             //     alert("Field must not be blank")
             // }
        }
       
    
}

// DONE AND DELETE FUNCTION
function checkAndRemove(e) {
    // TARGETTING THE CLICKED BUTTON
    const item = e.target;

    // IF DONE BUTTON WITH THE CLASS OF DONE GETS CLICKED TOGGLE THE CHECKED CLASS ON OR OFF
    if(item.classList[0] === "done"){
        item.parentElement.classList.toggle("checked") //This targets its parentElelment instead of itself
        // item.classList.add("checked");
    }

    // IF REMOVE BUTTON WITH THE CLASS OF REMOVE GETS CLICKED DELETE EVERYTHINGF
    if(item.classList[0] === "remove"){
        item.parentElement.remove();
    }
}


//first we need a text box and a button to add elements
// target the text box,get the values
// then we need to target the ul and create li or create a ul  if we want we generate with js
// 3. append it to the list
// create check and delete button and append it to the newly created li
// now make a func on created list to select either check or delte by using e.target and then targets its class by using e.target.classList[0] = "check-btn" (which means if the first class is check-btn)