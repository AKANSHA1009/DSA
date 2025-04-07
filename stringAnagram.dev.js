"use strict";

function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase(); // If the lengths are not equal, they cannot be anagrams

  if (str1.length !== str2.length) {
    return false;
  } // Sort the characters in both strings and compare them


  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
} // Example usage:


var str1 = "listen";
var str2 = "silent";
console.log(areAnagrams(str1, str2)); // Output: true

var str3 = "hello";
var str4 = "world";
console.log(areAnagrams(str3, str4)); // Output: false