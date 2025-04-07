// Brute force method to reverse a string
function reverseString(str) {
    let reversedString = '';

    // Loop through the string starting from the last character
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];  // Append each character to the result
    }

    return reversedString;
}

// Example usage:
let inputString = "hello";
let reversedString = reverseString(inputString);
console.log(reversedString);  // Output: "olleh"







// // Function to reverse a string
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // Example usage:
// let inputString = "hello";
// let reversedString = reverseString(inputString);
// console.log(reversedString);  // Output: "olleh"
