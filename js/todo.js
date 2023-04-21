const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_list = document.getElementById("todo-list");

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
    painttodo(newtodo);
}
function deletetodo(event){
    const parent =event.target.parentElement;
    parent.remove();
}

todo_form.addEventListener("submit", todosubmit);
