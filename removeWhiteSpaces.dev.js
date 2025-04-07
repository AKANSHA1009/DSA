"use strict";

function removeWhiteSpaces(str) {
  // Use replace() with a regular expression to remove all whitespaces
  return str.replace(/\s+/g, '');
} // Example usage:


console.log(removeWhiteSpaces("Hello World! This is a test.")); // Output: "HelloWorld!Thisisatest."

console.log(removeWhiteSpaces("   Spaces   in   between   ")); // Output: "Spacesinbetween"

console.log(removeWhiteSpaces("NoSpacesHere")); // Output: "NoSpacesHere"

console.log(removeWhiteSpaces("   ")); // Output: ""
// Regular Expression \s+:
// \s matches any whitespace character, including space, tab, or newline.
// + means "one or more" of the preceding character, so \s+ matches one or more consecutive whitespace characters.
// Global Flag (g):
// The g flag in the regular expression makes sure that the replacement happens for all occurrences of whitespace in the string, not just the first occurrence.
// The replace() Method:
// The replace() method is used to search for all matches of the regular expression and replace them with the empty string "", effectively removing all whitespaces from the string.
// Time Complexity:
// Time Complexity: O(n), where n is the length of the string. The replace() method iterates through the string to find and replace whitespace characters.
// Space Complexity: O(n), since a new string is created after removing the whitespaces.