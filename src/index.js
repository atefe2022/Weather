let DateElement = document.querySelector("#date");
let currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();

let cityElement = document.querySelector("#city");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

//function search(city) {
// event.preventDefault();
//  let cityElement = document.querySelector("#city");
//let cityInput = document.querySelector("#city-input");
// cityElement.innerHTML = cityInput.value;
// let apiKey = "06d50e1462f627ab4180c7826a219bce";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(displayWeather);
//}

function searchCity(city) {
  let apiKey = "06d50e1462f627ab4180c7826a219bce";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  //axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

let DayOfWeek = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[DayOfWeek];
DateElement.innerHTML = `${days[DayOfWeek]} ${hour}:${minute}`;
function formatDate(currentTime) {
  let hour = currentTime.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minute = currentTime.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
}

let temperatureElement = document.querySelector("#temperature");
let fahrenheitLink = document.querySelector("#fahrenheit-link");

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = 66;
}
fahrenheitLink.addEventListener("click", convertToFahrenheit);

//////

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
