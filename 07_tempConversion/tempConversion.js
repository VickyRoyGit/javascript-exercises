const convertToCelsius = function(numF) {
  return parseFloat(((numF-32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(numC) {
  return parseFloat(((numC*(9/5))+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
