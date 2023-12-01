const API_KEY = "d85cf7db2ea4f6b3786070447cb8aed0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You are currently located at ", lat, " latitude and ", lon, " longitude");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
            temp.innerText = data.main.temp + "°";
        });
}
function onGeoError(){
    alert("Can't find you. Unable to provide weather information.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);