"use strict";

// Brute Force approach to count the frequency of each element
function countFrequencyBruteForce(arr) {
  var counted = []; // Array to keep track of the elements we've already counted
  // Loop through each element of the array

  for (var i = 0; i < arr.length; i++) {
    var currentElement = arr[i]; // If the element is not already counted, count its frequency

    if (!counted.includes(currentElement)) {
      var count = 0; // Count occurrences of the current element in the array

      for (var j = 0; j < arr.length; j++) {
        if (arr[j] === currentElement) {
          count++;
        }
      } // Display the frequency of the current element


      console.log("".concat(currentElement, ": ").concat(count)); // Add the current element to the counted array

      counted.push(currentElement);
    }
  }
} // Example usage:


var inputArray = [1, 2, 2, 3, 4, 4, 4];
countFrequencyBruteForce(inputArray); // // Function to count the frequency of each element in the array
// function countFrequency(arr) {
//     let frequencyMap = {};  // Object to store the frequency of each element
//     // Loop through the array and count the frequency of each element
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (frequencyMap[element]) {
//             frequencyMap[element]++;  // Increment the count if element is already in the map
//         } else {
//             frequencyMap[element] = 1; // Initialize count to 1 if element is not in the map
//         }
//     }
//     // Display the frequency of each element
//     for (let key in frequencyMap) {
//         console.log(`${key}: ${frequencyMap[key]}`);
//     }
// }
// // Example usage:
// let inputArray = [1, 2, 2, 3, 4, 4, 4];
// countFrequency(inputArray);