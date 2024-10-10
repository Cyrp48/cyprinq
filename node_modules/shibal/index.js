// index.js
const { formatString, combineStrings, checkEmail } = require('./stringhlp');

const string1 = "   Hello ";
const string2 = "World!   ";
const email = "example@test.com";

console.log("Formatted String:", formatString(string1)); // Output: "HELLO"
console.log("Combined Strings:", combineStrings(string1, string2)); // Output: "HelloWorld!"
console.log(checkEmail(email)); // Output: "example@test.com is a valid email."
console.log(checkEmail("invalid-email")); // Output: "invalid-email is not a valid email."
