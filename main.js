let apiKey = "dada269d2877c6f8b695868c3708edbe"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function checkWeather(x) {
    const response = await fetch(apiUrl + `&q=${x}` + `&appid=${apiKey}`);
    if (response.status === 404) {
        weatherImg.src = "";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("speed").innerHTML = "";
        document.getElementById("city").innerHTML = "ssss";
        document.getElementById("humidity").innerHTML = "";
    }
    
    var date =  await response.json();
    
    document.getElementById("city").innerHTML = date.name;
    document.getElementById("temp").innerHTML = `${Math.round(date.main.temp)}°c`;
    document.getElementById("humidity").innerHTML = `${date.main.humidity}%`;
    document.getElementById("speed").innerHTML = `${date.main.humidity} km\\h`;
    weatherImg = document.getElementById("weather_img");
    search = document.getElementById("search");
    enter = document.getElementById("enter");

    if (date.weather[0].main === "Clear") {
        weatherImg.src = "images/clear.png";
    } else if (date.weather[0].main === "Clouds") {
        weatherImg.src = "images/clouds.png"; 
    } else if (date.weather[0].main === "Drizzle") {
        weatherImg.src = "images/drizzle.png"; 
    } else if (date.weather[0].main === "Mist") {
        weatherImg.src = "images/mist.png"; 
    } else if (date.weather[0].main === "Rain") {
        weatherImg.src = "images/rain.png"; 
    } else {
        weatherImg.src = "images/snow.png";
    }
}

enter.onclick = () => {
    if (search.value === "") {
        weatherImg.src = "";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("speed").innerHTML = "";
        document.getElementById("city").innerHTML = "";
        document.getElementById("humidity").innerHTML = "";
    }
    checkWeather(search.value);
}
checkWeather("cairo");