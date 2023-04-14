const convertToCelsius = function(fahrenheitNum) {
  result =  ((fahrenheitNum - 32) * (5/9));
  roundedResult = Number(result.toFixed(1));
    return roundedResult;
};

const convertToFahrenheit = function(celsiusNum) {
  result = (celsiusNum * (9/5) + 32);
  roundedResult = Number(result.toFixed(1));
    return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
