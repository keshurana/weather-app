
// Fetch api data here...
const form = document.querySelector("form");
const input = document.querySelector("#city");
const btn = document.querySelector("#btn");
const weatherImg = document.querySelector("#img");
const temperature = document.querySelector(".temperature");
const status = document.querySelector(".status");
const cityName = document.querySelector(".city");
const heading = document.querySelector(".heading");
const showError = document.querySelector(".location-not-found");

async function getWeather(city) {
  const apiKey = "360f1a8c208a4fa380882405231309";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await fetch(`${apiUrl}`);
  if (response.status === 400) {
    showError.style.display = "block";
    heading.style.display = "none";
    return;
  }
  const data = await response.json();
  heading.style.display = "flex";
  showError.style.display = "none";
  temperature.innerHTML = `${Math.round(data.current.temp_c)} °C`;
  console.log(data.current.temp_c);
  cityName.innerHTML = data.location.name;
  console.log(data.location.name);
  status.innerHTML = data.current.condition.text;
  console.log(data.current.condition.text);

  switch (data.current.condition.text) {
    
    case "Partly cloudy":
      weatherImg.src = "./image/cloud.png";
      break;
    case "Cloudy":
      weatherImg.src = "./image/cloud.png";
      break;
    case "Sunny":
      weatherImg.src = "./image/clear.png";
      break;
    case "Clear":
      weatherImg.src = "./image/clear.png";
      break;
    case "Rain":
      weatherImg.src = "./image/rain.png";
      break;
    case "Moderate rain":
      weatherImg.src = "./image/rain.png";
      break;
    case "Patchy rain possible":
      weatherImg.src = "./image/rain.png";
      break;
    case "Patchy light rain":
      weatherImg.src = "./image/snow.png";
      break;
    case "Patchy light rain with thunder":
      weatherImg.src = "./image/snow.png";
      break;
    case "Light rain":
      weatherImg.src = "./image/snow.png";
      break;
    case "Light rain shower":
      weatherImg.src = "./image/snow.png";
      break;
    case "Moderate or heavy rain shower":
      weatherImg.src = "./image/rain.png";
      break;
    case "Moderate or heavy rain with thunder":
      weatherImg.src = "./image/snow.png";
      break;
    case "Overcast":
      weatherImg.src = "./image/rain.png";
      break;
    case "Mist":
      weatherImg.src = "./image/mist.png";
      break;
    case "Snow":
      weatherImg.src = "./image/snow.png";
      break;
    case "Thundery outbreaks possible":
      weatherImg.src = "./image/snow.png";
      break;
  }
}

form.addEventListener("submit", (e) => {
  getWeather(input.value);
  e.preventDefault();
});


// date and time code here....
const currrentDate = new Date();
const today = currrentDate.getDate().toString().padStart(2, "0");
const month = currrentDate.getMonth();
const monthsOfYear = [
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
const monthName = monthsOfYear[month];
const year = currrentDate.getFullYear();
document.querySelector(".calenderMonth").innerHTML = monthName;
document.querySelector(".calenderYear").innerHTML = year;
document.querySelector(".calenderDay").innerHTML = today;

const timer = setInterval(() => {
  const currentDate = new Date();
  const option = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedTime = currentDate.toLocaleTimeString(undefined, option);
  document.querySelector(".time").innerHTML = formattedTime;
}, 1000);

const now = new Date();
const day = now.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = daysOfWeek[day];
document.querySelector(".day").innerHTML = dayName;
