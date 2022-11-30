var currentLocalEl = document.querySelector("#current-location-container");
var currentTempEl = document.querySelector("#current-temp-container");

var weatherData = function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?zip=55016,us&appid=0251118249ac618dd0a66cb0a818b7fd"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      //console.log(data.city.name);
      var cityName = data.city.name;
      var kalvinTemp = data.list[0].main.temp_max;
      var kavinToFahrenheitConversion = (kalvinTemp - 273.15) * 1.8 + 32;
      var displaydegress = kavinToFahrenheitConversion.toFixed(1);

      currentLocalEl.textContent = "";
      currentLocalEl.textContent =
        "I'm currently located in " +
        cityName +
        " and the current temp here is " +
        displaydegress +
        " degrees F.";
    });
  });
};

weatherData();
