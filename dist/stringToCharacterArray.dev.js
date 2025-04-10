"use strict";

//Method 1. using split
function stringToCharArray(str) {
  return str.split('');
}

var input = "hello";
console.log(stringToCharArray(input)); // Output: [ 'h', 'e', 'l', 'l', 'o' ]
//Method 2: Using Spread Operator [...]
// function stringToCharArray(str) {
//     return [...str];
//   }
//   console.log(stringToCharArray("world")); // Output: [ 'w', 'o', 'r', 'l', 'd' ]
//brute force
// function stringToCharArray(str) {
//     const charArray = [];
//     for (let i = 0; i < str.length; i++) {
//       charArray.push(str[i]);
//     }
//     return charArray;
//   }
//   console.log(stringToCharArray("bruteforce")); 
// Output: [ 'b', 'r', 'u', 't', 'e', 'f', 'o', 'r', 'c', 'e' ]