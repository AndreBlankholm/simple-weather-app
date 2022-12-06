var currentLocalEl = document.querySelector("#current-location-container");
var currentTempEl = document.querySelector("#current-temp-container");

var getWeatherData = function() {
 getGeoLocation();

};

var getGeoLocation = function() {
  window.navigator.geolocation.getCurrentPosition(function(response) {
    console.log(response);
    var lat = response.coords.latitude;
    var lon = response.coords.longitude;
    weatherData(lat, lon);
}, function(error) {
    alert(error);
});
};

var getDisplayDegrees = function (kalvinTemp) {
  var kavinToFahrenheitConversion = (kalvinTemp - 273.15) * 1.8 + 32;
  var displayDegrees = kavinToFahrenheitConversion.toFixed(1);
  return displayDegrees;
};

var updateUIElements = function (cityName, degrees) {
  currentLocalEl.textContent = "";
  currentLocalEl.textContent =
    "You are currently located in " +
    cityName +
    " and the current temp there is " +
    degrees +
    " degrees F.";
};

var weatherData = function (lat, lon) {
  
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0251118249ac618dd0a66cb0a818b7fd`
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      //console.log(data.city.name);
      var cityName = data.name;
      var kalvinTemp = data.main.temp_max;
      var displayDegrees = getDisplayDegrees(kalvinTemp);
      updateUIElements(cityName, displayDegrees);
    });
  });
};

getWeatherData();
