var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humudityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humudityData + "%.");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    var humidity = currentWeatherObject.getWeather(city, displayHumidity);
  });
});
