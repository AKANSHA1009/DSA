"use strict";

// Function to reverse words in a sentence
function reverseWords(sentence) {
  // Split the sentence into an array of words
  var words = sentence.split(' '); // Reverse the array of words

  var reversedWords = words.reverse(); // Join the reversed words back into a sentence

  var reversedSentence = reversedWords.join(' ');
  return reversedSentence;
} // Example usage:


var inputSentence = "Hello World from JavaScript";
var result = reverseWords(inputSentence);
console.log(result); // Output: "JavaScript from World Hello"
// // Optimal method to reverse words in a sentence
// function reverseWords(sentence) {
//     // Convert the sentence to an array of characters
//     let sentenceArray = sentence.split('');
//     // Step 1: Reverse the entire sentence
//     reverseArray(sentenceArray, 0, sentenceArray.length - 1);
//     // Step 2: Reverse each word in the sentence
//     let start = 0;
//     for (let i = 0; i <= sentenceArray.length; i++) {
//         if (sentenceArray[i] === ' ' || i === sentenceArray.length) {
//             reverseArray(sentenceArray, start, i - 1);
//             start = i + 1;
//         }
//     }
//     // Join the array back into a string
//     return sentenceArray.join('');
// }
// // Helper function to reverse a part of the array
// function reverseArray(array, start, end) {
//     while (start < end) {
//         // Swap elements
//         let temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;
//         start++;
//         end--;
//     }
// }
// // Example usage:
// let inputSentence = "Hello World from JavaScript";
// let result = reverseWords(inputSentence);
// console.log(result);  // Output: "JavaScript from World Hello"