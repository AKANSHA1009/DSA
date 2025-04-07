// Function to count even and odd numbers in an array
function countEvenOdd(arr) {
    let evenCount = 0;  // Counter for even numbers
    let oddCount = 0;   // Counter for odd numbers

    // Loop through the array and check each number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;  // Increment even count if the number is even
        } else {
            oddCount++;   // Increment odd count if the number is odd
        }
    }

    return { evenCount, oddCount };
}

// Example usage:
let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = countEvenOdd(inputArray);

console.log("Even Count: " + result.evenCount); // Output: Even Count
console.log("Odd Count: " + result.oddCount);   // Output: Odd Count
