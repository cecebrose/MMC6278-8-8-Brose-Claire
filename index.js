
function processForm(e) {
    if (e.preventDefault) e.preventDefault();
var input = document.getElementById('weather-search').value;
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(input) + '&units=imperial&appid=5375209b9131baec10badd8a3dc57e54';
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data));
    return false;
}


var doc = document.getElementById('weather-app');
var form = document.forms[0];
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

