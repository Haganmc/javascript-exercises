const convertToCelsius = function(tempInFahrenheit) {
  fahrenheit = Math.round((5/9 * (tempInFahrenheit - 32))*10)/10;
  return fahrenheit;
};

const convertToFahrenheit = function(tempInCelcius) {
  celcius = Math.round(((tempInCelcius * 9/5) + 32)*10)/10;
  return celcius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
