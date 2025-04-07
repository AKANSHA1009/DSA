// Brute force method to count occurrences of each character
function countOccurrences(str) {
    let result = {};  // Object to store character frequencies

    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // Check if the character has already been counted
        if (!result[char]) {
            let count = 0;
            
            // Count occurrences of the character by looping through the string
            for (let j = 0; j < str.length; j++) {
                if (str[j] === char) {
                    count++;
                }
            }
            result[char] = count;  // Store the count in the result object
        }
    }
    
    return result;  // Return the result with character counts
}

// Example usage:
let inputString = "hello world";
let result = countOccurrences(inputString);
console.log(result);  
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }





// // Optimal method to count occurrences of each character
// function countOccurrences(str) {
//     let countMap = {};  // Object to store character frequencies

//     // Loop through the string and count each character
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         // Increment the count for the character, or initialize to 1 if not found
//         countMap[char] = (countMap[char] || 0) + 1;
//     }

//     return countMap;  // Return the frequency map
// }

// // Example usage:
// let inputString = "hello world";
// let result = countOccurrences(inputString);
// console.log(result);  
// // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
