const logininput = document.querySelector(".login-form input");
const loginbutton = document.querySelector(".login-form button");
const loginform = document.querySelector(".login-form");

function f_formsubmit(event){
    const name = logininput.value;
    event.preventDefault();
    console.log("hello", name);
}

loginform.addEventListener("submit", f_formsubmit);