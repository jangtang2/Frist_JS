const weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
};
const apikey="52f4316c47965df58a8fd86aa31fb8cf";

function geo_ok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const w_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

    fetch(w_url)
    .then((response) => response.json())
    .then((data) => {
        const weather_info = document.querySelector("#weather i");
        const city_info = document.querySelector("#weather span");
        const Icon = (data.weather[0].icon).substr(0,2);
        city_info.innerText = data.name; 
        //weather_info.innerText = data.weather[0].main;
        weather_info.className = weatherIcon[Icon];
    });
}
function geo_error(){
    alert("Please allow to check your location!");
}
navigator.geolocation.getCurrentPosition(geo_ok, geo_error);


