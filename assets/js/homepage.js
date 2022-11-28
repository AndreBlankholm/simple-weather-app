


var weatherData = function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?zip=55016,us&appid=0251118249ac618dd0a66cb0a818b7fd"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      //displayWeather(data, cod);
    });
  });

  console.log("outside");
};

var displayWeather = function(city, name) {
  console.log(city);
  console.log(name);
  
};


weatherData();
