function checkEquality(a, b) {
  if (a === b) {
    console.log("Value and data type are the same.");
  } else {
    console.log("Value and/or data type are different.");
  }
}

// Example usage
var variable1 = 5;
var variable2 = "5";
checkEquality(variable1, variable2);
