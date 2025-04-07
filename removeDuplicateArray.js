// Brute force method to remove duplicates from an array
function removeDuplicates(arr) {
    let result = [];

    // Iterate over the array and add elements to the result array if not already present
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {  // If the element is not in the result array
            result.push(arr[i]);
        }
    }

    return result;
}

// Example usage:
let inputArray = [1, 2, 2, 3, 4, 4];
let result = removeDuplicates(inputArray);
console.log(result);  // Output: [1, 2, 3, 4]





// // Optimal method to remove duplicates using a Set
// function removeDuplicates(arr) {
//     return [...new Set(arr)];  // Convert the Set back into an array
// }

// // // Example usage:
// // let inputArray = [1, 2, 2, 3, 4, 4];
// // let result = removeDuplicates(inputArray);
// // console.log(result);  // Output: [1, 2, 3, 4]
