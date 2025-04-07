// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Normalize the string (optional step to ignore spaces and case)
    let normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    let reversedStr = normalizedStr.split('').reverse().join('');

    // Compare the original string with the reversed string
    return normalizedStr === reversedStr;
}

// Example usage:
let inputString = "A man, a plan, a canal, Panama";
let result = isPalindrome(inputString);
console.log(result);  // Output: true




// // Brute force method to check if a string is a palindrome (without Math.floor)
// function isPalindrome(str) {
//     // Loop through half of the string
//     for (let i = 0; i < str.length / 2; i++) {
//         // Compare characters from both ends
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false; // Return false if any characters don't match
//         }
//     }
//     return true; // Return true if all characters match
// }

// // Example usage:
// let inputString = "racecar";
// let result = isPalindrome(inputString);
// console.log(result);  // Output: true

// let inputString2 = "hello";
// let result2 = isPalindrome(inputString2);
// console.log(result2);  // Output: false
