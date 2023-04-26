const apikey="52f4316c47965df58a8fd86aa31fb8cf";

function geo_ok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const w_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

    fetch(w_url)
    .then((response) => response.json())
    .then((data) => {
        const weather_info = document.querySelector("#weather span:first-child");
        const city_info = document.querySelector("#weather span:last-child");
        city_info.innerText = data.name; 
        weather_info.innerText = data.weather[0].main;
    });
}
function geo_error(){
    alert("Please allow to check your location!");
}
navigator.geolocation.getCurrentPosition(geo_ok, geo_error);


