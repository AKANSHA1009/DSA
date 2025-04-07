// Function to rotate the array to the right by 'k' steps
function rotateArray(arr, k) {
    // Handle edge case: if the array is empty or no rotation is needed
    if (arr.length === 0 || k <= 0) {
        return arr;
    }

    // Normalize the number of rotations (in case k is larger than the array length)
    k = k % arr.length;

    // Slice the array and rotate
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, arr.length - k));

    return rotatedArray;
}

// Example usage:
let inputArray = [1, 2, 3, 4, 5];
let rotateSteps = 2;

let result = rotateArray(inputArray, rotateSteps);
console.log("Rotated Array: " + result);  // Output: [4, 5, 1, 2, 3]





// // Brute Force Approach to rotate the array to the right by 'k' steps
// function rotateArrayBruteForce(arr, k) {
//     let n = arr.length;
    
//     // Handle edge case: if the array is empty or k is 0
//     if (n === 0 || k <= 0) {
//         return arr;
//     }

//     // Normalize the number of rotations (in case k is larger than the array length)
//     k = k % n;

//     // Perform the rotation 'k' times
//     for (let i = 0; i < k; i++) {
//         let lastElement = arr[n - 1];  // Get the last element
        
//         // Shift all elements to the right by one position
//         for (let j = n - 1; j > 0; j--) {
//             arr[j] = arr[j - 1];  // Move element at index j-1 to index j
//         }

//         // Place the last element at the front
//         arr[0] = lastElement;
//     }

//     return arr;
// }

// // Example usage:
// let inputArray = [1, 2, 3, 4, 5];
// let rotateSteps = 2;

// let result = rotateArrayBruteForce(inputArray, rotateSteps);
// console.log("Rotated Array: " + result);  // Output: [4, 5, 1, 2, 3]
