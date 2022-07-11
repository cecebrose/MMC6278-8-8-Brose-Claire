var form = document.querySelector("form");
var section = document.getElementById("weather");
var input = document.getElementById("weather-search");
var api_key = "5375209b9131baec10badd8a3dc57e54";
form.onsubmit = (e) => {
    console.log("submitting");
    e.preventDefault();
    let query = input.value;
    console.log(query);
    input.value = "";
    section.innerHTML = "";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=" + api_key + "&q=" + query;
fetch(apiUrl)
  .then((response) => {
      console.log(response);
      return response.json();
  })
  .then((data) => {
    console.log(data)
    if ((data.cod && data.cod !== 200) || data.data) {
        locationNotFound();
        return;
    };
   renderCity(data);
});
};

function locationNotFound() {
    console.log("calling not found");
    var h2 = document.createElement("h2");
    h2.textContent = "Location Not Found";
    section.replaceChildren(h2);
};
function renderCity(city) {
    console.log("rendering: ", section);
    let name = document.createElement("h2");
    name.innerHTML = city.name + "," + city.sys.country;

 var mapLink = document.createElement("a");
 mapLink.textContent = "Click to view map";
 mapLink.target ="__BLANK";
 mapLink.href ="https://www.google.com/maps/search/?api=1&query=" +
    city.coord.lat +
    "," +
    city.coord.lon;

 var conditionIcon = document.createElement("img");
 conditionIcon.src =
   "https://openweathermap.org/img/wn/" + city.weather[0].icon + "@2x.png";

 var description = document.createElement("p");
 description.innerHTML = city.weather[0].description;
 var currentTemp = document.createElement("p");
 currentTemp.innerHTML = "Current temp: " + city.main.temp + "&deg; F";

 var feelsLike = document.createElement("p");
 feelsLike.innerHTML = "Feels like: " + city.main.feels_like + "&deg; F";

 var date = new Date(city.dt * 1000);
 let timeString = date.toLocaleString("en-US", {
     hour: "numeric",
     minute: "2-digit",
 });

 var currentTime = document.createElement("p");
 currentTime.innerHTML = timeString;
 section.replaceChildren(
     name,
     mapLink,
     conditionIcon,
     description,
     currentTemp,
     feelsLike,
     currentTime,
 )};

 



