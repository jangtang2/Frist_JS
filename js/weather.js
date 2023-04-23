function geo_ok(position){
    console.log(position);
}
function geo_error(){
    alert("Please allow to check your location!");
}
navigator.geolocation.getCurrentPosition(geo_ok, geo_error);