let searchBtn = document.getElementById("searchBtn");
let today = new Date();
let apiKey = "da8210ca591e6c503f687e21d47ead5b";
let apiKey2 = "dc6e179cb0618d51ccd91e501035eb2d";

// Collecting longitude & latitude

function geoCoor() {
  let cityName = document.getElementById("input").value;
  let geoApi =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=1&appid=da8210ca591e6c503f687e21d47ead5b";
  var lon = "";
  var lat = "";

  fetch(geoApi)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      lat = data[0].lat;
      lon = data[0].lon;
      // console.log(data);
      let weatherApi =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=hourly,minutely,alerts&units=imperial&appid=" +
        apiKey;
      return fetch(weatherApi);
    })
    .then(function (weatherData) {
      return weatherData.json();
    })
    .then(function (findData) {
      console.log(findData);
    });
}
// Display current weather

function displayWeather() {
  let cityName = document.getElementById("input").value;

  Date= today.
}

// Event listener to call function

search.addEventListener("click", geoCoor);
