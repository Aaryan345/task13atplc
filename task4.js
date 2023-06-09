function getStringLengthInBytes(str) {
  var encoder = new TextEncoder();
  var bytes = encoder.encode(str);

  return bytes.length;
}

// Example usage
var myString = "Hello, world!";
var byteLength = getStringLengthInBytes(myString);
console.log("Length in bytes:", byteLength);
