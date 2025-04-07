"use strict";

function toTitleCase(str) {
  // Split the string into words, apply the transformation to each word, and then join them back
  return str.split(' ') // Split the string into words
  .map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  } // Capitalize first letter, lowercase the rest
  ).join(' '); // Join the array back into a string with spaces
} // Example usage:


console.log(toTitleCase("hello world! this is a test.")); // Output: "Hello World! This Is A Test."

console.log(toTitleCase("jaVaScript is awesome")); // Output: "Javascript Is Awesome"

console.log(toTitleCase("a quick brown fox jumped over")); // Output: "A Quick Brown Fox Jumped Over"