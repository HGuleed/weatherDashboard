let searchBtn = document.getElementById("searchBtn");
let today = new Date();
let apiKey = "da8210ca591e6c503f687e21d47ead5b";
let apiKey2 = "dc6e179cb0618d51ccd91e501035eb2d";
searchBtn.addEventListener("click", searchCity);

// Fetching Data from API

function searchCity() {
  //   debugger;
  let cityName = document.getElementById("cityInput").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=imperial";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          displayCurrent(data);
          fiveDay();
        });
      } else {
        alert("ERROR: No response from API");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to API");
      console.log(error);
    });
}
function fiveDay() {
  let cityName = document.getElementById("cityInput").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    cityName +
    "&appid=" +
    apiKey2;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
}
// Dynamically creating the data
function displayCurrent(weatherData) {
  let currentTemp = document.getElementById("temp");

  currentTemp.textContent = weatherData.main.temp;

  let currentWind = document.getElementById("wind");
  currentWind.textContent = weatherData.wind.speed;
}
