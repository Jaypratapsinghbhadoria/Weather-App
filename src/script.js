const inputbox = document.querySelector(".search")
let searchbtn = document.querySelector(".fa-magnifying-glass");
const weatherimg = document.querySelector(".cloud")
const temperature = document.querySelector("#degree")
 const description = document.querySelector("#city")
const humidity = document.querySelector("#humid")
const windspeed = document.querySelector("#wind")
const weather_state = document.querySelector("#state")
const error = document.querySelector(".oops")
const weather_body = document.querySelector(".weather_body")

async function checkWeather(city) {
    const api_key = 64a50d98c543deaa3972d08a76c4a050;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod ===`404`) {
        error.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    error.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = city.charAt(0).toUpperCase()+city.slice(1);
    weather_state.innerHTML = weather_data.weather[0].main;
    let data = weather_data.weather[0].main;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windspeed.innerHTML = `${weather_data.wind.speed}km/h`;
    console.log(weather_data);
    // if(weather_data.weather[0].description=="light rain"){
    //     weatherimg.src = "light_rain.png";
    // }
    switch(data){
        case "light rain":
            weatherimg.src = "./128/day_rain.png";
            break;
        case "Rain":
            weatherimg.src = "./128/rain.png";
            break;
        case "Snow":
            weatherimg.src = "./128/snow.png";
            break;
        case "Clear":
            weatherimg.src = "./128/day_clear.png";
            break;
        case "mist":
            weatherimg.src = "./128/mist.png";
            break;
        case "overcast clouds":
            weatherimg.src = "./128/overcast.png";
            break;
        case "broken clouds":
            weatherimg.src = "./128/day_partial_cloud.png";
            break;
        case "Clouds":
            weatherimg.src = "./128/angry_clouds.png";
            break;

    }
}

searchbtn.addEventListener("click", () => {
    const city = inputbox.value;
    checkWeather(city);
});

// searchbtn.addEventListener("click" , function(){
//     document.body.style.backgroundColor = "blue";
// });
