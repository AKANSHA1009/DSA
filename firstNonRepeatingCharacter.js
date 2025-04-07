// Brute force method to find the first non-repeating character
function firstNonRepeatingCharacter(str) {
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Check if the character appears only once in the string
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char; // Return the first non-repeating character
        }
    }
    return null; // If no non-repeating character is found, return null
}

// Example usage:
let inputString = "swiss";
let result = firstNonRepeatingCharacter(inputString);
console.log(result);  // Output: "w"





// // Optimal method to find the first non-repeating character using a hash map (object)
// function firstNonRepeatingCharacter(str) {
//     let frequencyMap = {};

//     // Step 1: Build the frequency map
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         frequencyMap[char] = (frequencyMap[char] || 0) + 1;
//     }

//     // Step 2: Find the first character with frequency 1
//     for (let i = 0; i < str.length; i++) {
//         if (frequencyMap[str[i]] === 1) {
//             return str[i];
//         }
//     }

//     return null; // If no non-repeating character is found, return null
// }

// // Example usage:
// let inputString = "swiss";
// let result = firstNonRepeatingCharacter(inputString);
// console.log(result);  // Output: "w"
