const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_list = document.getElementById("todo-list");

function painttodo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText= newtodo;
    todo_list.appendChild(li);
}
function todosubmit(event){
    event.preventDefault();
    const newtodo = todo_input.value;
    todo_input.value = "";
    painttodo(newtodo);
}

todo_form.addEventListener("submit", todosubmit);
