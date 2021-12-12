let searchBtn = document.getElementById("searchBtn");
let today = new Date();
let apiKey = "da8210ca591e6c503f687e21d47ead5b";
let apiKey2 = "dc6e179cb0618d51ccd91e501035eb2d";

// Collecting longitude & latitude

function geoCoor(event, name) {
  let cityName = name || document.getElementById("input").value;
  let geoApi =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName +
    "&limit=1&appid=da8210ca591e6c503f687e21d47ead5b";
  var lon = "";
  var lat = "";

  // saveCity(cityName);
  // loadCityList();

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
      // console.log(findData);
      document.getElementById("cityName").textContent = cityName;
      document.getElementById("temp").textContent = findData.current.temp;
      document.getElementById("wind").textContent = findData.current.wind_speed;
      document.getElementById("hum").textContent = findData.current.humidity;
      document.getElementById("uv").textContent = findData.current.uvi;

      for (i = 1; i <= 5; i++) {
        var temp = document.getElementById("temp" + i);
        temp.textContent = findData.daily[i - 1].temp.eve;
        var icon = document.getElementById("img" + i);
        icon.value = findData.daily[i - 1].weather[0].icon;
        var wind = document.getElementById("wind" + i);
        wind.textContent = findData.daily[i - 1].wind_speed;
        var hum = document.getElementById("hum" + i);
        hum.textContent = findData.daily[i - 1].humidity;
      }

      // console.log(findData);
    });
}
// save city data

// function saveCity(city) {
//   let cityList = [];
//   if (localStorage.cityList) {
//     cityList = JSON.parse(localStorage.cityList);
//   }
//   cityList.push(city);
//   localStorage.setItem("cityList", cityList);
// }
// function loadCityList() {
//   var cityList = localStorage.getItem("cityList");
//   var cityLog = document.getElementById("cityLog");
//   while (cityLog.firstChild) {
//     cityLog.removeChild(cityLog.firstChild);
//   }
//   if (cityList) {
//     cityList = JSON.parse(cityList);
//     cityList.forEach(function (name) {
//       let listItem = document.createElement("li");
//       listItem.classList.add("list");
//       let cityButton = document.createElement("button");
//       cityButton.classList.add("citySearched");

//       cityButton.onclick = function () {
//         geoCoor(null, name);
//       };
//       listItem.appendChild(cityButton);
//       cityLog.appendChild(listItem);
//     });
//   }
// }
// Event listener to call function

search.addEventListener("click", geoCoor);
// loadCityList();
