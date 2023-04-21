const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_list = document.getElementById("todo-list");

const todomem=[];

function painttodo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.appendChild(span);
    li.appendChild(button);
    span.innerText= newtodo;
    button.innerText="❌";
    button.addEventListener("click", deletetodo);
    todo_list.appendChild(li);
}
function todosubmit(event){
    event.preventDefault();
    const newtodo = todo_input.value;
    todo_input.value = "";
    todomem.push(newtodo);
    painttodo(newtodo);
    savetodo(newtodo);
}
function deletetodo(event){
    const parent =event.target.parentElement;
    parent.remove();
}
function savetodo(){
    localStorage.setItem("todos", JSON.stringify(todomem));
}

todo_form.addEventListener("submit", todosubmit);
const saved_todos = localStorage.getItem("todos");
if(saved_todos){
    const parsedtodo = JSON.parse(saved_todos);
}