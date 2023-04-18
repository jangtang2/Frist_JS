const clock = document.querySelector("#clock");
function getclock(){
    const date = new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getclock();
setInterval(getclock, 1000);