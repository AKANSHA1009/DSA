"use strict";

// Brute Force approach to find maximum and minimum
function findMaxMinBruteForce(arr) {
  var max = arr[0];
  var min = arr[0]; // Finding the maximum value

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  } // Finding the minimum value


  for (var _i = 0; _i < arr.length; _i++) {
    if (arr[_i] < min) {
      min = arr[_i];
    }
  }

  return {
    max: max,
    min: min
  };
} // Example usage


var inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
var resultBruteForce = findMaxMinBruteForce(inputArray);
console.log("Maximum Value (Brute Force): " + resultBruteForce.max); // Output: Maximum Value

console.log("Minimum Value (Brute Force): " + resultBruteForce.min); // Output: Minimum Value
// // Optimal approach to find maximum and minimum in a single loop
// function findMaxMinOptimal(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     // Loop through the array once to find both max and min
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return { max, min };
// }
// // Example usage
// let inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// let resultOptimal = findMaxMinOptimal(inputArray);
// console.log("Maximum Value (Optimal): " + resultOptimal.max); // Output: Maximum Value
// console.log("Minimum Value (Optimal): " + resultOptimal.min); // Output: Minimum Value