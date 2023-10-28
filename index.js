let now = new Date();
let monthIndex = now.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
let h3 = document.querySelector("h3");
h3.innerHTML = `${months[monthIndex]} ${date}, ${hours}:${minutes}`;




let input = document.querySelector("#search-button");
function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
  let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
  let units = "metric";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}&units=${units}`;
  axios.get(api).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function currentPlace() {
  let location = navigator.geolocation.getCurrentPosition(showPosition);
}

function showTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  let cityTemp = document.querySelector("h2");
  cityTemp.innerHTML = `${temperature} °C`;
}
let newPosition = document.querySelector("button");
newPosition.addEventListener("click", currentPlace);








