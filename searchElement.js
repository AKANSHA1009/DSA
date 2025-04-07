// Function to search for an element and return its index
function searchElement(arr, target) {
    // Loop through the array to find the element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Return the index if the element is found
        }
    }
    
    // If the element is not found, return a message
    return "Element not found";
}

// Example usage:
let inputArray = [10, 20, 30, 40, 50];
let targetElement = 30;

let result = searchElement(inputArray, targetElement);

if (result === "Element not found") {
    console.log(result);  // Output: "Element not found"
} else {
    console.log("Element found at index: " + result);  // Output: "Element found at index: 2"
}
