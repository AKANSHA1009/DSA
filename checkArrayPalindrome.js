// Brute Force approach to check if an array is a palindrome
function isPalindromeBruteForce(arr) {
    // Reverse the array using the reverse() method
    let reversedArray = arr.slice().reverse();  // Use slice() to avoid modifying the original array
    
    // Compare the original array with the reversed array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArray[i]) {
            return false;  // If any element doesn't match, return false
        }
    }
    
    return true;  // If all elements match, return true
}

// Example usage:
let inputArray = [1, 2, 3, 2, 1];
let result = isPalindromeBruteForce(inputArray);
console.log(result);  // Output: true






// // Brute Force approach to check if an array is a palindrome using a while loop
// function isPalindromeWhileLoop(arr) {
//     let left = 0;  // Pointer at the start
//     let right = arr.length - 1;  // Pointer at the end
    
//     // Loop until the two pointers meet in the middle
//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             return false;  // If elements don't match, it's not a palindrome
//         }
//         left++;   // Move left pointer forward
//         right--;  // Move right pointer backward
//     }
    
//     return true;  // If all elements match, return true
// }

// // Example usage:
// let inputArray = [1, 2, 3, 2, 1];
// let result = isPalindromeWhileLoop(inputArray);
// console.log(result);  // Output: true
