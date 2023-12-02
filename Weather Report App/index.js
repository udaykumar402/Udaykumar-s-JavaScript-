const apikey = "4bfb1f064548e3fda7d5d2d041283505";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

var card = document.querySelector(".card");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    // document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      //   card.style.backgroundColor = "#D3D3D3";
      //   card.style.backgroundImage =
      //     "url('https://community.adobe.com/legacyfs/online/1516782_Clouds.gif')";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      //   card.style.backgroundColor = "#87CEEB";
      //   card.style.backgroundImage =
      //     "url('https://media.istockphoto.com/id/482974538/photo/blue-sky-with-cloud.jpg?s=612x612&w=0&k=20&c=_V2RUCJmTj6G8ypV4x8420MkUji6YS6wTu3sq8BfWGY=')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      //   card.style.backgroundColor = "#696969";
      //   card.style.backgroundImage =
      //     "url('https://www.gifimages.pics/images/quotes/english/general/rain-love-gif-two-frogs-52650-208792.gif')";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      //   card.style.backgroundColor = "#ADD8E6";
      //   card.style.backgroundImage =
      //     "url('https://cdn.pixabay.com/animation/2023/03/05/12/05/12-05-54-62_512.gif')";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      //   card.style.backgroundColor = "#F5F5F5";
      //   card.style.backgroundImage = "url('https://i.gifer.com/GCuj.gif')";
    }

    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
