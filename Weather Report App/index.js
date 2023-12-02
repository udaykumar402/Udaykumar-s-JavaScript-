// OpenWeatherMap API key and endpoint
const apikey = "4bfb1f064548e3fda7d5d2d041283505";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

// DOM elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

// Function to fetch and display weather information
async function checkweather(city) {
  // Fetch weather data from the OpenWeatherMap API
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  // Check if the city is not found (status code 404)
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    // Parse the JSON response
    var data = await response.json();
    console.log(data);

    // Update DOM elements with weather information
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

    // Set weather icon based on weather conditions
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    // Hide error message if weather data is successfully retrieved
    document.querySelector(".error").style.display = "none";
  }
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
  // Call the checkweather function with the value from the search input
  checkweather(searchBox.value);
});
