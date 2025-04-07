// Brute force method to remove duplicates from a string
function removeDuplicates(str) {
    let result = '';  // Initialize an empty result string

    // Iterate over the string
    for (let i = 0; i < str.length; i++) {
        // If the character is not already in the result string, add it
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }

    return result;
}

// Example usage:
let inputString = "aabccde";
let result = removeDuplicates(inputString);
console.log(result);  // Output: "abcde"




// // Optimal method to remove duplicates from a string using Set
// function removeDuplicates(str) {
//     return [...new Set(str)].join('');
// }

// // Example usage:
// let inputString = "aabccde";
// let result = removeDuplicates(inputString);
// console.log(result);  // Output: "abcde"
