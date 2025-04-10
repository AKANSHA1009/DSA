"use strict";

// Function to calculate the sum of array elements
function calculateSum(arr) {
  var sum = 0; // Loop through each element in the array and add it to the sum

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
} // Example usage:


var inputArray = [1, 2, 3, 4, 5]; // You can change this array as needed

var totalSum = calculateSum(inputArray);
console.log("The sum of all elements in the array is: " + totalSum); // // Optimal approach using reduce
// function calculateSum(arr) {
//     return arr.reduce((sum, currentValue) => sum + currentValue, 0);
// }
// // Example usage:
// let inputArray = [1, 2, 3, 4, 5];  // You can change this array as needed
// let totalSum = calculateSum(inputArray);
// console.log("The sum of all elements in the array is: " + totalSum);