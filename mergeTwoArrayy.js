// Brute Force method to merge two arrays
function mergeArraysBruteForce(arr1, arr2) {
    let mergedArray = [];
    
    // Loop through the first array and push each element into mergedArray
    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }

    // Loop through the second array and push each element into mergedArray
    for (let j = 0; j < arr2.length; j++) {
        mergedArray.push(arr2[j]);
    }

    return mergedArray;
}

// Example usage:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = mergeArraysBruteForce(array1, array2);
console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]






// // Function to merge two arrays using concat()
// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// // Example usage:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let mergedArray = mergeArrays(array1, array2);
// console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]




// // Function to merge two arrays using the spread operator
// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

// // Example usage:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let mergedArray = mergeArrays(array1, array2);
// console.log(mergedArray);  // Output: [1, 2, 3, 4, 5, 6]
