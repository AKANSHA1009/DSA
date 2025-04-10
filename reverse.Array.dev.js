"use strict";

// Function to reverse an array in-place
function reverseArray(arr) {
  var left = 0; // Start pointer (from the beginning)

  var right = arr.length - 1; // End pointer (from the end)
  // Loop until the pointers meet

  while (left < right) {
    // Swap the elements at the left and right pointers
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp; // Move the pointers towards the center

    left++;
    right--;
  }

  return arr; // The array is reversed in place
} // Example usage:


var inputArray = [1, 2, 3, 4, 5];
console.log("Original Array: " + inputArray);
reverseArray(inputArray); // Reverse the array in-place

console.log("Reversed Array: " + inputArray);