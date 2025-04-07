// Brute Force Method to find the second largest element
function findSecondLargest(arr) {
    // Sort the array in descending order
    let sortedArr = arr.sort((a, b) => b - a);
    
    // The second largest element is now at index 1
    if (arr.length < 2) {
        return "Array must contain at least two elements";
    }
    
    return sortedArr[1];  // Return the second element after sorting
}

// Example usage:
let inputArray = [12, 35, 1, 10, 34, 1];
let result = findSecondLargest(inputArray);
console.log("Second Largest Element: " + result);  // Output: 34






// // Optimal Approach to find the second largest element in a single pass
// function findSecondLargestOptimal(arr) {
//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     if (arr.length < 2) {
//         return "Array must contain at least two elements";
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;  // Update second largest
//             firstLargest = arr[i];         // Update first largest
//         } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//             secondLargest = arr[i];        // Update second largest
//         }
//     }

//     return secondLargest === -Infinity ? "No second largest element" : secondLargest;
// }

// // Example usage:
// let inputArray = [12, 35, 1, 10, 34, 1];
// let result = findSecondLargestOptimal(inputArray);
// console.log("Second Largest Element: " + result);  // Output: 34
