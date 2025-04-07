// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    // Remove non-alphabetical characters and convert to lowercase (optional)
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // If the strings have different lengths, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort both strings and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Return true if the sorted strings are equal, false otherwise
    return sortedStr1 === sortedStr2;
}

// Example usage:
let str1 = "Listen";
let str2 = "Silent";
let result = areAnagrams(str1, str2);
console.log(result);  // Output: true

let str3 = "Hello";
let str4 = "World";
let result2 = areAnagrams(str3, str4);
console.log(result2);  // Output: false
