"use strict";

function findAllSubstrings(str) {
  var substrings = []; // Outer loop: Loop through each character as the starting point of substring

  for (var start = 0; start < str.length; start++) {
    // Inner loop: Loop through the string starting from the 'start' index
    for (var end = start + 1; end <= str.length; end++) {
      // Extract the substring from 'start' to 'end'
      substrings.push(str.slice(start, end));
    }
  }

  return substrings;
} // Example usage:


console.log(findAllSubstrings("abc"));