const todo_form = document.getElementById("todo-form");
const todo_input = todo_form.querySelector("input");
const todo_list = document.getElementById("todo-list");

let todomem=[];

function painttodo(newtodo){
    const li = document.createElement("li");
    li.id=newtodo.id
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText= newtodo.text;
    li.appendChild(span);
    button.innerText="❌";
    li.appendChild(button);
    button.addEventListener("click", deletetodo);
    todo_list.appendChild(li);
}
function todosubmit(event){
    event.preventDefault();
    const newtodo = todo_input.value;
    todo_input.value = "";
    const newtodo_OBJ={
        text:newtodo,
        id:Date.now()
    }
    todomem.push(newtodo_OBJ);
    painttodo(newtodo_OBJ);
    savetodo(newtodo);
}
function deletetodo(event){
    const parent =event.target.parentElement;
    parent.remove();
    todomem = todomem.filter((todo) => todo.id != parseInt(parent.id));
    savetodo();
}
function todo_filter(item_id, delete_id){return item_id != delete_id}
function savetodo(){
    localStorage.setItem("todos", JSON.stringify(todomem));
}

todo_form.addEventListener("submit", todosubmit);
const saved_todos = localStorage.getItem("todos");

if(saved_todos != null){
    const parsedtodo = JSON.parse(saved_todos);
    todomem = parsedtodo;
    parsedtodo.forEach(painttodo);
}