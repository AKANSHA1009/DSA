"use strict";

function isOnlyDigitsBrute(str) {
  if (str.length === 0) return false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] < '0' || str[i] > '9') {
      return false;
    }
  }

  return true;
}

console.log(isOnlyDigitsBrute("987654")); // true

console.log(isOnlyDigitsBrute("98a654")); // false
// 2nd Approach
//   function isOnlyDigits(str) {
//     return /^\d+$/.test(str);
//   }
//   console.log(isOnlyDigits("123456"));  // true
//   console.log(isOnlyDigits("123a56"));  // false
//   console.log(isOnlyDigits(""));        // false (empty string is not valid)