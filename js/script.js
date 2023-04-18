const logininput = document.querySelector(".login-form input");
const loginform = document.querySelector(".login-form");
const greeting = document.querySelector("#greeting");

function f_formsubmit(event){
    const name = logininput.value;
    event.preventDefault();
    loginform.classList.add("hidden");
    localStorage.setItem("username", name);
    showname(name);
}
function showname(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

const ls_username = localStorage.getItem("username");

if(ls_username==null){
    loginform.classList.remove("hidden");
    loginform.addEventListener("submit", f_formsubmit);
}
else{
    showname(ls_username);
}