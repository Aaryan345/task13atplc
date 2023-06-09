function roundToDigits(number, digits) {
  var factor = Math.pow(10, digits);
  return Math.round(number * factor) / factor;
}

// Example usage
var myNumber = 3.14159;
var roundedNumber = roundToDigits(myNumber, 2);
console.log("Rounded number:", roundedNumber);
